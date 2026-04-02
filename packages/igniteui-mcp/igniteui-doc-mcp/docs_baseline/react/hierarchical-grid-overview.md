---
title: React Hierarchical Grid | Fastest React Hierarchical Table | Infragistics
_description: The Ignite UI for React Hierarchical Grid is used to display and manipulate hierarchical with ease. Quickly bind your data with very little coding. Try it for FREE
_keywords: React hierarchical grid, igniteui for React, infragistics
_license: commercial
mentionedTypes: ["HierarchicalGridBaseDirective"]
namespace: Infragistics.Controls
_tocName: Hierarchical Grid
---

# Hierarchical Data Grid Overview and Configuration

The Ignite UI for React Hierarchical Data Grid is used to display and manipulate hierarchical tabular data. Quickly bind your data with very little code or use a variety of events to customize different behaviors. This component provides a rich set of features like data selection, excel style filtering, sorting, paging, templating, column moving, column pinning, export to Excel and CSV, and more. The Hierarchical Grid builds upon the Flat Grid Component and extends its functionality by allowing the users to expand or collapse the rows of the parent grid, revealing corresponding child grids, when more detailed information is needed.

## React Hierarchical Data Grid Example

In this React grid example you can see how users can visualize hierarchical sets of data and use cell templating to add other visual components.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import SingersData from './SingersData.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private hierarchicalGrid: IgrHierarchicalGrid
    private hierarchicalGridRef(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid = r;
        this.setState({});
    }
    private column: IgrColumn
    private rowIsland: IgrRowIsland

    constructor(props: any) {
        super(props);

        this.hierarchicalGridRef = this.hierarchicalGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.singersData}
                    primaryKey="ID">
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image"
                        minWidth="115px"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        dataType="number"
                        minWidth="88px"
                        maxWidth="230px"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate={false}>
                            <IgrColumn
                                field="Number"
                                header="No."
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Tour"
                            header="Tour"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Location"
                            header="Location"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner"
                            header="Headliner"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _singersData: any[] = SingersData;
    public get singersData(): any[] {
        return this._singersData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Getting Started with Ignite UI for React Hierarchical Grid

### Dependencies

To get started with the React hierarchical grid, first you need to install the `igniteui-react` and `igniteui-react-grids` packages.

```cmd
npm install --save igniteui-react
npm install --save igniteui-react-grids
```

The corresponding styles should also be referenced. You can choose light or dark option for one of the [themes](../../themes/overview.md) and based on your project configuration to import it:

```tsx
import 'igniteui-react-grids/grids/themes/light/bootstrap.css'
```

For more details on how to customize the appearance of the hierarchical grid, you may have a look at the [styling](overview.md#styling) section.

## Using the React Hierarchical Data Grid

### Data Binding

The **IgrHierarchicalGrid** derives from IgrGrid and shares most of its functionality. The main difference is that it allows multiple levels of hierarchy to be defined. They are configured through a separate tag within the definition of **IgrHierarchicalGrid**, called **IgrRowIsland**. The **IgrRowIsland** component defines the configuration for each child grid for the particular level. Multiple row islands per level are also supported.
The Hierarchical Grid supports two ways of binding to data:

### Using hierarchical data

If the application loads the whole hierarchical data as an array of objects referencing children arrays of objects, then the Hierarchical Grid can be configured to read it and bind to it automatically. Here is an example of a properly structured hierarchical data source:

```ts
export const singers = [{
    "Artist": "Naomí Yepes",
    "Photo": "assets/images/hgrid/naomi.png",
    "Debut": "2011",
    "Grammy Nominations": 6,
    "Grammy Awards": 0,
    "Tours": [{
        "Tour": "Faithful Tour",
        "Started on": "Sep-12",
        "Location": "Worldwide",
        "Headliner": "NO",
        "Toured by": "Naomí Yepes"
    }],
    "Albums": [{
        "Album": "Dream Driven",
        "Launch Date": new Date("August 25, 2014"),
        "Billboard Review": "81",
        "US Billboard 200": "1",
        "Artist": "Naomí Yepes",
        "Songs": [{
            "No.": "1",
            "Title": "Intro",
            "Released": "*",
            "Genre": "*",
            "Album": "Dream Driven"
        }]
    }]
}];
```

Each **IgrRowIsland** should specify the key of the property that holds the children data.

```tsx
<IgrHierarchicalGrid autoGenerate={true} data={singers}>
    <IgrRowIsland childDataKey="Albums" autoGenerate={true}>
        <IgrRowIsland childDataKey="Songs" autoGenerate={true}>
        </IgrRowIsland>
    </IgrRowIsland>
    <IgrRowIsland childDataKey="Tours" autoGenerate={true}>
    </IgrRowIsland>
</IgrHierarchicalGrid>
```

> [!NOTE]
> Note that instead of `data` the user configures only the `childDataKey` that the IgrHierarchicalGrid needs to read to set the data automatically.

### Using Load-On-Demand

Most applications are designed to load as little data as possible initially, which results in faster load times. In such cases IgrHierarchicalGrid may be configured to allow user-created services to feed it with data on demand.

```tsx
import { getData } from "./remoteService";

export default function Sample() {
  const hierarchicalGrid = useRef<IgrHierarchicalGrid>(null);

  const gridCreated = (event: IgrGridCreatedEventArgs, _parentKey: string) => {
    const context = event.detail;
    const rowIsland = context.owner;
    const dataState = {
      key: rowIsland.childDataKey,
      parentID: context.parentID,
      parentKey: _parentKey,
      rootLevel: false,
    };

    context.grid.isLoading = true;

    getData(dataState).then((data: any[]) => {
      context.grid.isLoading = false;
      context.grid.data = data;
      context.grid.markForCheck();
    });
  }

  useEffect(() => {
    hierarchicalGrid.current.isLoading = true;

    getData({ parentID: null, rootLevel: true, key: "Customers" }).then(
      (data: any) => {
        hierarchicalGrid.current.isLoading = false;
        hierarchicalGrid.current.data = data;
        hierarchicalGrid.current.markForCheck();
      }
    );
  }, []);

  return (
    <IgrHierarchicalGrid
        ref={hierarchicalGrid}
        primaryKey="customerId"
        autoGenerate={true}
        height="600px"
        width="100%">
            <IgrRowIsland
                childDataKey="Orders"
                primaryKey="orderId"
                autoGenerate={true}
                onGridCreated={(e: IgrGridCreatedEventArgs) => gridCreated(e, "Customers")}>
                    <IgrRowIsland
                        childDataKey="Details"
                        primaryKey="productId"
                        autoGenerate={true}
                        onGridCreated={(e: IgrGridCreatedEventArgs) => gridCreated(e, "Orders")}>
                    </IgrRowIsland>
            </IgrRowIsland>
    </IgrHierarchicalGrid>
  );
}
```

```ts
const URL = `https://data-northwind.indigo.design/`;

export async function getData(dataState: any): Promise<any> {
    const response = await fetch(buildUrl(dataState));
    const data = await response.json();
    return data;
}

function buildUrl(dataState: any) {
    let qS = "";
    if (dataState) {
        if (dataState.rootLevel) {
            qS += `${dataState.key}`;
        } else {
            qS += `${dataState.parentKey}/${dataState.parentID}/${dataState.key}`;
        }
    }
    return `${URL}${qS}`;
}
```

## Hide/Show row expand indicators

If you have a way to provide information whether a row has children prior to its expanding, you could use the [`hasChildrenKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgridbasedirective.html#hasChildrenKey) input property. This way you could provide a boolean property from the data objects which indicates whether an expansion indicator should be displayed.

```tsx
<IgrHierarchicalGrid data={data} primaryKey="ID" hasChildrenKey="hasChildren">
</IgrHierarchicalGrid>
```

Note that setting the [`hasChildrenKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgridbasedirective.html#hasChildrenKey) property is not required. In case you don't provide it, expansion indicators will be displayed for each row.

Additionally if you wish to show/hide the header expand/collapse all indicator you can use the [`showExpandAll`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgridbasedirective.html#showExpandAll) property.
This UI is disabled by default for performance reasons and it is not recommended to enable it in grids with large data or grids with load on demand.

## Features

The grid features could be enabled and configured through the IgrRowIsland markup - they get applied for every grid that is created for it. Changing options at runtime through the row island instance changes them for each of the grids it has spawned.

```tsx
<IgrHierarchicalGrid data={localData} autoGenerate={false}
    allowFiltering={true} height="600px" width="800px">
    <IgrColumn field="ID" pinned={true} filterable={true}></IgrColumn>
    <IgrColumnGroup header="Information">
        <IgrColumn field="ChildLevels"></IgrColumn>
        <IgrColumn field="ProductName" hasSummary={true}></IgrColumn>
    </IgrColumnGroup>
    <IgrRowIsland childDataKey="childData" autoGenerate={false} rowSelection="multiple">
        <IgrColumn field="ID" hasSummary={true} dataType="number"></IgrColumn>
        <IgrColumnGroup header="Information2">
            <IgrColumn field="ChildLevels"></IgrColumn>
            <IgrColumn field="ProductName"></IgrColumn>
        </IgrColumnGroup>
        <IgrPaginator perPage={5}></IgrPaginator>
    <IgrRowIsland>
    <IgrPaginator></IgrPaginator>
</IgrHierarchicalGrid>
```

The following grid features work on a per grid level, which means that each grid instance manages them independently of the rest of the grids:

- Sorting
- Filtering
- Paging
- Multi Column Headers
- Hiding
- Pinning
- Moving
- Summaries
- Search

The Selection and Navigation features work globally for the whole Hierarchical Grid

- Selection
    Selection does not allow selected cells to be present for two different child grids at once.
- Navigation
    When navigating <kbd>↑</kbd> + <kbd>↓</kbd>, if next/prev element is a child grid, navigation will continue in the related child grid, marking the related cell as selected and focused. If the child cell is outside the current visible view port it is scrolled into view so that selected cell is always visible.

## Collapse All Button

The Hierarchical Grid allows the users to conveniently collapse all its currently expanded rows by pressing the "Collapse All" button at its top left corner. Additionally, every child grid which contains other grids and is a Hierarchical Grid itself, also has such a button - this way the user is able to collapse only a given grid in the hierarchy:

<img class="responsive-img" src="../../../images/unfold_less_icon_screenshot.jpg" srcset="../../images/unfold_less_icon_screenshoto@2x.jpg 2x" alt="unfold_less_icon_screenshot" />

<!-- TODO: uncomment when sizing topic is ready -->

<!-- ## Sizing

See the [Hierarchical Grid Sizing](sizing.md) topic. -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md). In case you would like to change the header background and text color, you need to set a class for the grid first:

```tsx
<IgrHierarchicalGrid className="grid"></IgrHierarchicalGrid>
```

Then set the `--header-background` and `--header-text-color` CSS properties for that class:

```css
.grid {
    --header-background: #494949;
    --header-text-color: #FFF;
}
```

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

#hGrid {
    --ig-grid-cell-active-border-color: #ffcd0f;
    --ig-grid-cell-selected-background: #6f6f6f;
    --ig-grid-row-hover-background: #f8e495;
    --ig-grid-row-selected-background: #8d8d8d;
    --ig-grid-header-background: #494949;
    --ig-grid-header-text-color: #fff;
    --ig-grid-expand-icon-color: #ffcd0f;
    --ig-grid-expand-icon-hover-color: #e0b710;
    --ig-grid-resize-line-color: #ffcd0f;
    --ig-grid-row-highlight: #ffcd0f;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import SingersData from './SingersData.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private hGrid: IgrHierarchicalGrid
    private hGridRef(r: IgrHierarchicalGrid) {
        this.hGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.hGridRef = this.hGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.singersData}
                    primaryKey="ID"
                    ref={this.hGridRef}
                    id="hGrid">
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image"
                        minWidth="115px"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        dataType="number"
                        minWidth="88px"
                        maxWidth="230px"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="string"
                        resizable={true}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate={false}>
                            <IgrColumn
                                field="Number"
                                header="No."
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Tour"
                            header="Tour"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Location"
                            header="Location"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner"
                            header="Headliner"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _singersData: any[] = SingersData;
    public get singersData(): any[] {
        return this._singersData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Known Limitations

|Limitation|Description|
|--- |--- |
|Group By|Group By feature is not supported by the hierarchical grid.|

## API References

- [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)
- [`IgrRowIsland`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrrowisland.html)
- [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)
- [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html)
- `Cell`

<!-- TODO: uncomment when all of the topics are ready -->

<!-- ## Additional Resources

- [Grid Sizing](sizing.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md) -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
