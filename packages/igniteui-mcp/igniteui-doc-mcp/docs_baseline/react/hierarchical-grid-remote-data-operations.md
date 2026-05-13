---
title: React Hierarchical Grid Remote Data Operations - Ignite UI for React
_description: Start using Angular remote data operations like remote filtering, remote sorting, and remote scrolling to load data from a server with Ignite UI for React.
_keywords: Remote Data, Paging, React, Hierarchical Grid, IgrHierarchicalGrid, Ignite UI for React, Infragistics
_license: commercial
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
mentionedTypes: ["GridBaseDirective"]
namespace: Infragistics.Controls
_tocName: Remote Data Operations
_premium: true
---

# React Hierarchical Grid Remote Data Operations

By default, the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) uses its own logic for performing data operations.

You can perform these tasks remotely and feed the resulting data to the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) by taking advantage of certain inputs and events, which are exposed by the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html).

## Remote Paging

<!-- ComponentStart: HierarchicalGrid -->

```tsx
const BASE_URL = `https://data-northwind.indigo.design/`;
const CUSTOMERS_URL = `${BASE_URL}Customers/GetCustomersWithPage`;

export class RemoteService {

    public static getCustomersDataWithPaging(pageIndex?: number, pageSize?: number) {
        return fetch(this.buildUrl(CUSTOMERS_URL, pageIndex, pageSize))
        .then((result) => result.json());
    }

    public static getHierarchyDataById(parentEntityName: string, parentId: string, childEntityName: string) {
        return fetch(`${BASE_URL}${parentEntityName}/${parentId}/${childEntityName}`)
        .then((result) => result.json());
    }

    private static buildUrl(baseUrl: string, pageIndex?: number, pageSize?: number) {
        let qS = "";
        if (baseUrl) {
                qS += `${baseUrl}`;
        }

        // Add pageIndex and size to the query string if they are defined
        if (pageIndex !== undefined) {
            qS += `?pageIndex=${pageIndex}`;
            if (pageSize !== undefined) {
                qS += `&size=${pageSize}`;
            }
        } else if (pageSize !== undefined) {
            qS += `?perPage=${pageSize}`;
        }

        return `${qS}`;
    }
}
```

<!-- ComponentEnd: HierarchicalGrid -->

After declaring the service, we need to create a component, which will be responsible for the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) construction and data subscription.

<!-- ComponentStart: HierarchicalGrid -->

```tsx
  <IgrHierarchicalGrid
          ref={hierarchicalGrid}
          data={data}
          pagingMode="remote"
          primaryKey="customerId"
          height="600px"
        >
          <IgrPaginator
            perPage={perPage}
            ref={paginator}
            onPageChange={onPageNumberChange}
            onPerPageChange={onPageSizeChange}
          ></IgrPaginator>
          ...
          <IgrRowIsland
            childDataKey="Orders"
            primaryKey="orderId"
            onGridCreated={onCustomersGridCreatedHandler}>
            ...

            <IgrRowIsland
              childDataKey="Details"
              primaryKey="productId"
              onGridCreated={onOrdersGridCreatedHandler}>
              ...
            </IgrRowIsland>
          </IgrRowIsland>
        </IgrHierarchicalGrid>
```

then set up the state:

```tsx
  const hierarchicalGrid = useRef<IgrHierarchicalGrid>(null);
  const paginator = useRef<IgrPaginator>(null);

  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(15);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadGridData(page, perPage);
  }, [page, perPage]);
```

next set up the method for loading the data:

```tsx
  function loadGridData(pageIndex?: number, pageSize?: number) {
    // Set loading state
    setIsLoading(true);

    // Fetch data
    RemoteService.getCustomersDataWithPaging(pageIndex, pageSize)
      .then((response: CustomersWithPageResponseModel) => {
        setData(response.items);
        // Stop loading when data is retrieved
        setIsLoading(false);
        paginator.current.totalRecords = response.totalRecordsCount;
      })
      .catch((error) => {
        console.error(error.message);
        setData([]);
        // Stop loading even if error occurs. Prevents endless loading
        setIsLoading(false);
      })
  }
```

<!-- ComponentEnd: HierarchicalGrid -->

and finally set up the behaviour for the RowIslands:

<!-- ComponentStart: HierarchicalGrid -->

```tsx
  function gridCreated(event: IgrGridCreatedEventArgs, parentKey: string) {
    const context = event.detail;
    context.grid.isLoading = true;

    const parentId: string = context.parentID;
    const childDataKey: string = context.owner.childDataKey;

    RemoteService.getHierarchyDataById(parentKey, parentId, childDataKey)
      .then((data: any) => {
        context.grid.data = data;
        context.grid.isLoading = false;
        context.grid.markForCheck();
      })
      .catch((error) => {
        console.error(error.message);
        context.grid.data = [];
        context.grid.isLoading = false;
        context.grid.markForCheck();
      });
  }

  const onCustomersGridCreatedHandler = (e: IgrGridCreatedEventArgs) => {
    gridCreated(e, "Customers")
  };

  const onOrdersGridCreatedHandler = (e: IgrGridCreatedEventArgs) => {
    gridCreated(e, "Orders")
  };
```

For further reference please check the full sample bellow:

### Grid Remote Paging Demo

```typescript
export interface CustomersWithPageResponseModel {
    items: any[];
    totalRecordsCount: number;
    pageSize: number;
    pageNumber: number;
    totalPages: number;
}
```
```typescript
const BASE_URL = `https://data-northwind.indigo.design/`;
const CUSTOMERS_URL = `${BASE_URL}Customers/GetCustomersWithPage`;

export class RemoteService {

    public static getCustomersDataWithPaging(pageIndex?: number, pageSize?: number) {
        return fetch(this.buildUrl(CUSTOMERS_URL, pageIndex, pageSize))
        .then((result) => result.json());
    }

    public static getHierarchyDataById(parentEntityName: string, parentId: string, childEntityName: string) {
        return fetch(`${BASE_URL}${parentEntityName}/${parentId}/${childEntityName}`)
        .then((result) => result.json());
    }

    private static buildUrl(baseUrl: string, pageIndex?: number, pageSize?: number) {
        let qS = "";
        if (baseUrl) {
                qS += `${baseUrl}`;
        }

        // Add pageIndex and size to the query string if they are defined
        if (pageIndex !== undefined) {
            qS += `?pageIndex=${pageIndex}`;
            if (pageSize !== undefined) {
                qS += `&size=${pageSize}`;
            }
        } else if (pageSize !== undefined) {
            qS += `?perPage=${pageSize}`;
        }

        return `${qS}`;
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  IgrColumn,
  IgrGridCreatedEventArgs,
  IgrHierarchicalGrid,
  IgrPaginator,
  IgrRowIsland,
} from "igniteui-react-grids";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import { RemoteService } from "./RemoteService";
import { IgrNumberEventArgs } from "igniteui-react";
import { CustomersWithPageResponseModel } from "./CustomersWithPageResponseModel";

export default function App() {
  const hierarchicalGrid = useRef<IgrHierarchicalGrid>(null);
  const paginator = useRef<IgrPaginator>(null);

  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(15);

  useEffect(() => {
    loadGridData(page, perPage);
  }, [page, perPage]);

  function loadGridData(pageIndex?: number, pageSize?: number) {
    // Set loading state
    hierarchicalGrid.current.isLoading = true;

    // Fetch data
    RemoteService.getCustomersDataWithPaging(pageIndex, pageSize)
      .then((response: CustomersWithPageResponseModel) => {
        setData(response.items);
        // Stop loading when data is retrieved
        hierarchicalGrid.current.isLoading = false;

        paginator.current.totalRecords = response.totalRecordsCount;
      })
      .catch((error) => {
        console.error(error.message);
        setData([]);
        // Stop loading even if error occurs. Prevents endless loading
        hierarchicalGrid.current.isLoading = false;
      });
  }

  function gridCreated(event: IgrGridCreatedEventArgs, parentKey: string) {
    const context = event.detail;
    context.grid.isLoading = true;

    const parentId: string = context.parentID;
    const childDataKey: string = context.owner.childDataKey;

    RemoteService.getHierarchyDataById(parentKey, parentId, childDataKey)
      .then((data: any) => {
        context.grid.data = data;
        context.grid.isLoading = false;
        context.grid.markForCheck();
      })
      .catch((error) => {
        console.error(error.message);
        context.grid.data = [];
        context.grid.isLoading = false;
        context.grid.markForCheck();
      });
  }

  function onPageNumberChange(args: IgrNumberEventArgs) {
    setPage(args.detail);
  }

  function onPageSizeChange(args: IgrNumberEventArgs) {
    setPerPage(args.detail);
  }

  const onCustomersGridCreatedHandler = (e: IgrGridCreatedEventArgs) => {
    gridCreated(e, "Customers")
  };

  const onOrdersGridCreatedHandler = (e: IgrGridCreatedEventArgs) => {
    gridCreated(e, "Orders")
  };

  return (
    <div className="sample ig-typography">
      <IgrHierarchicalGrid
        ref={hierarchicalGrid}
        data={data}
        pagingMode="remote"
        primaryKey="customerId"
        height="100%"
      >
        <IgrPaginator
          perPage={perPage}
          ref={paginator}
          onPageChange={onPageNumberChange}
          onPerPageChange={onPageSizeChange}
        ></IgrPaginator>
        <IgrColumn field="customerId" hidden={true}></IgrColumn>
        <IgrColumn field="companyName" header="Company Name"></IgrColumn>
        <IgrColumn field="contactName" header="Contact Name"></IgrColumn>
        <IgrColumn field="contactTitle" header="Contact Title"></IgrColumn>
        <IgrColumn field="address.country" header="Country"></IgrColumn>
        <IgrColumn field="address.phone" header="Phone"></IgrColumn>

        <IgrRowIsland
          childDataKey="Orders"
          primaryKey="orderId"
          onGridCreated={onCustomersGridCreatedHandler}
          height="100%"
        >
          <IgrColumn field="orderId" hidden={true}></IgrColumn>
          <IgrColumn
            field="shipAddress.country"
            header="Ship Country"
          ></IgrColumn>
          <IgrColumn field="shipAddress.city" header="Ship City"></IgrColumn>
          <IgrColumn
            field="shipAddress.street"
            header="Ship Address"
          ></IgrColumn>
          <IgrColumn
            field="orderDate"
            header="Order Date"
            dataType="date"
          ></IgrColumn>

          <IgrRowIsland
            childDataKey="Details"
            primaryKey="productId"
            onGridCreated={onOrdersGridCreatedHandler}
            height="100%"
          >
            <IgrColumn field="productId" hidden={true}></IgrColumn>
            <IgrColumn field="quantity" header="Quantity"></IgrColumn>
            <IgrColumn field="unitPrice" header="Unit Price"></IgrColumn>
            <IgrColumn field="discount" header="Discount"></IgrColumn>
          </IgrRowIsland>
        </IgrRowIsland>
      </IgrHierarchicalGrid>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentEnd: HierarchicalGrid -->

## Known Issues and Limitations

- When the grid has no [`primaryKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#primaryKey) set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:

- Row Selection

- Row Expand/collapse

- Row Editing

- Row Pinning

## API References

- [`IgrPaginator`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpaginator.html)
- [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
