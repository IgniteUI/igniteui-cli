---
title: "React Hierarchical Grid Remote Data Operations - Ignite UI for React"
description: Start using Angular remote data operations like remote filtering, remote sorting, and remote scrolling to load data from a server with Ignite UI for React.
keywords: Remote Data, Paging, React, Hierarchical Grid, IgrHierarchicalGrid, Ignite UI for React, Infragistics
license: commercial
llms:
  description: "The Ignite UI for React Remote Data Operations feature in React Hierarchical Grid supports operations such as remote virtualization, remote sorting, remote filtering and others."
_componentKey: HierarchicalGrid
_tocName: Remote Data Operations
_premium: true
---
# React Hierarchical Grid Remote Data Operations

By default, the [`IgrHierarchicalGrid`](mcp:get_api_reference?platform=react&component=IgrHierarchicalGrid) uses its own logic for performing data operations.

You can perform these tasks remotely and feed the resulting data to the [`IgrHierarchicalGrid`](mcp:get_api_reference?platform=react&component=IgrHierarchicalGrid) by taking advantage of certain inputs and events, which are exposed by the [`IgrHierarchicalGrid`](mcp:get_api_reference?platform=react&component=IgrHierarchicalGrid).

## Infinite Scroll

 A popular design for scenarios requiring fetching data by chunks from an end-point is the so-called infinite scroll. For data grids, it is characterized by continuous increase of the loaded data triggered by the end-user scrolling all the way to the bottom. The next paragraphs explain how you can use the available API to easily achieve infinite scrolling in [`IgrHierarchicalGrid`](mcp:get_api_reference?platform=react&component=IgrHierarchicalGrid).

To implement infinite scroll, you have to fetch the data in chunks. The data that is already fetched should be stored locally and you have to determine the length of a chunk and how many chunks there are. You also have to keep a track of the last visible data row index in the grid. In this way, using the [`IgrForOfState.chunkSize`](mcp:get_api_reference?platform=react&component=IgrForOfState&member=chunkSize) and [`IgrForOfState.chunkSize`](mcp:get_api_reference?platform=react&component=IgrForOfState&member=chunkSize) properties, you can determine if the user scrolls up and you have to show them already fetched data or scrolls down and you have to fetch more data from the end-point.

The first thing to do is fetch the first chunk of the data. Setting the [`IgrHierarchicalGrid.totalItemCount`](mcp:get_api_reference?platform=react&component=IgrHierarchicalGrid&member=totalItemCount) property is important, as it allows the grid to size its scrollbar correctly.

Additionally, you have to subscribe to the [`IgrHierarchicalGrid.dataPreLoad`](mcp:get_api_reference?platform=react&component=IgrHierarchicalGrid&member=dataPreLoad) output, so that you can provide the data needed by the grid when it tries to display a different chunk, rather than the currently loaded one. In the event handler, you have to determine whether to fetch new data or return data, that's already cached locally.

### Infinite Scroll Demo



## Remote Paging

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

After declaring the service, we need to create a component, which will be responsible for the [`IgrHierarchicalGrid`](mcp:get_api_reference?platform=react&component=IgrHierarchicalGrid) construction and data subscription.

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

and finally set up the behaviour for the RowIslands:

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

## Known Issues and Limitations

- When the grid has no [`IgrHierarchicalGrid.primaryKey`](mcp:get_api_reference?platform=react&component=IgrHierarchicalGrid&member=primaryKey) set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:

- Row Selection
- Row Expand/collapse
- Row Editing
- Row Pinning

## API References
[`IgrHierarchicalGrid`](mcp:get_api_reference?platform=react&component=IgrHierarchicalGrid)
[`IgrPaginator`](mcp:get_api_reference?platform=react&component=IgrPaginator)
## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
