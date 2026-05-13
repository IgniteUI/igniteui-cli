---
title: React Hierarchical Grid Virtualization and Performance - Ignite UI for React
_description: The Ignite UI for React Virtualization is the core mechanic behind the speed & performance of the grid when handling large data sets. Try for free!
_keywords: React Hierarchical Grid, Hierarchical Grid performance, data table virtualization, Ignite UI for React
_license: commercial
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/virtualization
_tocName: Virtualization and performance
_premium: true
---

# React Hierarchical Grid Virtualization and Performance

In Ignite UI for React, the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) control virtualizes its content both vertically and horizontally.

<!-- ComponentStart: Grid, HierarchicalGrid -->

## React Hierarchical Grid Virtualization and Performance Example

```typescript
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
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { IgrGridCreatedEventArgs } from "igniteui-react-grids";
import { IgrHierarchicalGrid, IgrColumn, IgrRowIsland } from "igniteui-react-grids";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import { getData } from "./RemoteService";

export default function App() {
  const hierarchicalGrid = useRef<IgrHierarchicalGrid>(null);

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

  function gridCreated(
    event: IgrGridCreatedEventArgs,
    _parentKey: string
  ) {
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

  return (
    <div className="container sample ig-typography">
      <div className="container fill">

        <IgrHierarchicalGrid
          ref={hierarchicalGrid}
          primaryKey="customerId"
          height="600px"
        >
          <IgrColumn field="customerId" hidden={true}></IgrColumn>
          <IgrColumn field="companyName" header="Company Name"></IgrColumn>
          <IgrColumn field="contactName" header="Contact Name"></IgrColumn>
          <IgrColumn field="contactTitle" header="Contact Title"></IgrColumn>
          <IgrColumn field="address.country" header="Country"></IgrColumn>
          <IgrColumn field="address.phone" header="Phone"></IgrColumn>

          <IgrRowIsland
            childDataKey="Orders"
            primaryKey="orderId"
            onGridCreated={(e: IgrGridCreatedEventArgs) => gridCreated(e, "Customers")}
          >
            <IgrColumn field="orderId" hidden={true}></IgrColumn>
            <IgrColumn field="shipAddress.country" header="Ship Country"></IgrColumn>
            <IgrColumn field="shipAddress.city" header="Ship City"></IgrColumn>
            <IgrColumn field="shipAddress.street" header="Ship Address"></IgrColumn>
            <IgrColumn field="orderDate" header="Order Date" dataType="date"></IgrColumn>

            <IgrRowIsland
              childDataKey="Details"
              primaryKey="productId"
              onGridCreated={(e: IgrGridCreatedEventArgs) => gridCreated(e, "Orders")}
            >
              <IgrColumn field="productId" hidden={true}></IgrColumn>
              <IgrColumn field="quantity" header="Quantity"></IgrColumn>
              <IgrColumn field="unitPrice" header="Unit Price"></IgrColumn>
              <IgrColumn field="discount" header="Discount"></IgrColumn>
            </IgrRowIsland>
          </IgrRowIsland>
        </IgrHierarchicalGrid>

      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

<!-- ComponentEnd: Grid, HierarchicalGrid -->

## Enabling Virtualization

The [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) now optimizes DOM rendering and memory consumption by rendering only what is currently visible in the view port and swapping the displayed data while the user scrolls the data horizontally/vertically. The [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)'s [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) and [`height`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#height) defaults to `100%` which will enable virtualization if the content displayed cannot fit inside the available space and scrollbars are required either vertically or horizontally.

However, it is also possible to explicitly set the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)'s [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) and/or [`height`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#height) to `null` which means that the related dimension will be determined by the total size of the items inside. No scrollbar will then be shown and all items will be rendered along the respective dimension (columns if [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) is `null` and rows if [`height`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#height) is `null`).

The size of the data chunks is determined by:

- The row height for the vertical (row) virtualization. This is determined by the [`rowHeight`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowHeight) option and is 50(px) by default.
- The individual column widths in pixels for the horizontal (column) virtualization. They can be determined by either setting explicit width for each column component or setting the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)'s [`columnWidth`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#columnWidth) option, which will be applied to all columns that don't have explicit width set.

In most cases, letting the grid apply its default behavior by leaving dimensions unset will produce the desired layout. For column widths it is determined by the column count, the columns with set width, and the calculated width of the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)'s container. The grid will try to fit all columns inside the available space as long as the width it attempts to assign is not under 136(px). In such cases, columns with unassigned width will receive the minimum width of 136(px) and a horizontal scrollbar will be shown. The grid will be horizontally virtualized.

Explicitly setting column widths in percentages (%) will, in most cases, create a grid that is not virtualized horizontally as it will not have a horizontal scrollbar.

## Virtualization Limitations

On Mac OS horizontal scrollbar is not visible when "Show scrollbars only when scrolling" system option is set to true (which is the default value). This is because the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)’s row container has an overflow set to hidden. Change the option to "Always" and the scrollbar will appear.

## FAQ

### Why is having dimensions in the Hierarchical Grid is necessary for virtualization to work?

Without information about the sizes of the container and the items before rendering them setting the width or height of a scrollbar or determining which of the items should be in the view when you scroll to a random location in the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) is erroneous. Any assumptions on what the actual dimensions might be could lead to unnatural behavior of the scrollbar and ultimately suboptimal experience for the end-user. This is why setting the related dimensions is enforced in order for virtualization to take effect.

## API References

- [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)
- [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html)

## Additional Resources

- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
