---
title: React Grid Remote Data Operations - Ignite UI for React
_description: Start using Angular remote data operations like remote filtering, remote sorting, and remote scrolling to load data from a server with Ignite UI for React.
_keywords: Remote Data, Paging, React, Grid, IgrGrid, Ignite UI for React, Infragistics
_license: commercial
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
mentionedTypes: ["GridBaseDirective"]
namespace: Infragistics.Controls
_tocName: Remote Data Operations
_premium: true
---

# React Grid Remote Data Operations

By default, the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) uses its own logic for performing data operations.

You can perform these tasks remotely and feed the resulting data to the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) by taking advantage of certain inputs and events, which are exposed by the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html).

## Infinite Scroll

A popular design for scenarios requiring fetching data by chunks from an end-point is the so-called infinite scroll. For data grids, it is characterized by continuous increase of the loaded data triggered by the end-user scrolling all the way to the bottom. The next paragraphs explain how you can use the available API to easily achieve infinite scrolling in [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html).

To implement infinite scroll, you have to fetch the data in chunks. The data that is already fetched should be stored locally and you have to determine the length of a chunk and how many chunks there are. You also have to keep a track of the last visible data row index in the grid. In this way, using the `StartIndex` and `ChunkSize` properties, you can determine if the user scrolls up and you have to show them already fetched data or scrolls down and you have to fetch more data from the end-point.

The first thing to do is fetch the first chunk of the data. Setting the [`totalItemCount`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html#totalItemCount) property is important, as it allows the grid to size its scrollbar correctly.

Additionally, you have to subscribe to the `DataPreLoad` output, so that you can provide the data needed by the grid when it tries to display a different chunk, rather than the currently loaded one. In the event handler, you have to determine whether to fetch new data or return data, that's already cached locally.

### Infinite Scroll Demo

```typescript
const DATA_URL: string =
  "https://services.odata.org/V4/Northwind/Northwind.svc/Products";

const cachedData = <any>[];
let prevRequestChunk: number = 0;

export async function loadDataForPage(
  page: number,
  pageSize: number,
  callback?: (args: any) => void
) : Promise<void>{
  const url = buildDataUrl(page, pageSize);
  const response = await fetch(url);
  const data = await response.json();
  const startIndex = (page - 1) * pageSize;
  updateData(data, startIndex);
  callback({data});
}

export function getCachedData(virtualizationArgs: {startIndex: number, chunkSize: number}) {
    const virtArgsEndIndex = virtualizationArgs.startIndex + virtualizationArgs.chunkSize;
        let data = [];
        if (virtArgsEndIndex > cachedData.length) {
            data = cachedData.slice(cachedData.length - prevRequestChunk + 1);
        } else {
            data = cachedData.slice(virtualizationArgs.startIndex, virtArgsEndIndex);
            prevRequestChunk = virtualizationArgs.chunkSize;
        }
        return data;
}

function buildDataUrl(page: number, pageSize: number): string {
  let baseQueryString = `${DATA_URL}?$count=true&`;
  const skip = (page - 1) * pageSize;
  const pageQuery = `$skip=${skip}&$top=${pageSize}`;
  baseQueryString += pageQuery;
  return baseQueryString;
}

function updateData(data: any, startIndex: number) {
    for(let i=0; i< data.value.length; i++) {
        cachedData[i+startIndex] = data.value[i];
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.contextmenu {
    position: absolute;
    width: 180px;
    background: white;
    display: flex;
    cursor: context-menu;
    flex-direction: column;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
    z-index: 9999;
    font-size: 0.75rem;
    font-weight: 650;
}

.item {
    padding: 10px;
    display: flex;
}

.item:hover {
    background:rgb(204, 203, 203);
}

.icon {
    vertical-align: middle;
    margin-bottom: 5px;
    margin-right: 5px;
}

.selected-data-area{
    overflow-y: auto;
    width: 50%;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
    margin-left: 10px;
}

.wrapper{
    margin: 10px;
    display: flex;
    justify-content: space-evenly;
}
```
```tsx
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrColumn, IgrForOfStateEventArgs, IgrGrid } from 'igniteui-react-grids';
import { getCachedData, loadDataForPage } from './NwindService';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';


export default function App() {
    let pageSize = 10;
    let page = 1;
    let totalPageCount = 0;
    let totalItems = 0;
    const gridRef = useRef<IgrGrid>(null);
  
    useEffect(() => {
      gridRef.current.isLoading = true;
      const dataViewSize = 9.6;
      pageSize = Math.floor(dataViewSize * 1.5);
  
      loadDataForPage(page, pageSize, (request) => {
        if (request.data) {
          gridRef.current.data = getCachedData({ startIndex: 0, chunkSize: 10 });
          gridRef.current.totalItemCount = page * pageSize;
          totalItems = request.data["@odata.count"];
          totalPageCount = Math.ceil(totalItems / pageSize);
          gridRef.current.isLoading = false;
        }
      });
    }, []);
  
    function handlePreLoad(e: IgrForOfStateEventArgs) {
      const isLastChunk =
        gridRef.current.totalItemCount ===
        e.detail.startIndex + e.detail.chunkSize;
      if (isLastChunk) {
        if (totalPageCount === page) {
          gridRef.current.data = getCachedData({
            startIndex: e.detail.startIndex,
            chunkSize: e.detail.chunkSize,
          });
          return;
        }
        page++;
        gridRef.current.isLoading = true;
        loadDataForPage(page, pageSize, (request) => {
          if (request.data) {
            gridRef.current.totalItemCount = Math.min(
              page * pageSize,
              totalItems
            );
            gridRef.current.data = getCachedData({
              startIndex: e.detail.startIndex,
              chunkSize: e.detail.chunkSize,
            });
            gridRef.current.isLoading = false;
          }
        });
      } else {
        gridRef.current.data = getCachedData({
          startIndex: e.detail.startIndex,
          chunkSize: e.detail.chunkSize,
        });
      }
    }
  
    return (
      <>
        <div className="container sample">
          <div className="container fill">
            <IgrGrid
              primaryKey="ProductID"
              autoGenerate={false}
              onDataPreLoad={handlePreLoad}
              ref={gridRef}
              height="480px"
              width="100%"
            >
              <IgrColumn
                field="ProductID"
                header="Product ID"
                sortable={true}
                editable={true}
              ></IgrColumn>
              <IgrColumn field="ProductName" header="Product Name"></IgrColumn>
              <IgrColumn
                field="UnitsInStock"
                header="Units In Stock"
                dataType="number"
              ></IgrColumn>
              <IgrColumn
                field="UnitPrice"
                header="Units Price"
                dataType="number"
              ></IgrColumn>
              <IgrColumn field="QuantityPerUnit"></IgrColumn>
              <IgrColumn
                field="ReorderLevel"
                data-type="number"
                header-classes="headerAlignSyle"
              ></IgrColumn>
            </IgrGrid>
          </div>
        </div>
      </>
    );
  }

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
```


## Remote Paging

<!-- ComponentStart: Grid -->

The paging feature can operate with remote data. In order to demonstrate this let's first declare our service that will be responsible for data fetching. We will need the count of all data items in order to calculate the page count. This logic will be added to our service.

```tsx
const CUSTOMERS_URL = `https://data-northwind.indigo.design/Customers/GetCustomersWithPage`;

export class RemoteService {

    public static getDataWithPaging(pageIndex?: number, pageSize?: number) {
        return fetch(this.buildUrl(CUSTOMERS_URL, pageIndex, pageSize))
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

<!-- ComponentEnd: Grid -->

After declaring the service, we need to create a component, which will be responsible for the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) construction and data subscription.

<!-- ComponentStart: Grid -->

```tsx
     <IgrGrid
          ref={grid}
          data={data}
          pagingMode="remote"
          primaryKey="customerId"
          height="600px"
          isLoading={isLoading}
        >
        <IgrPaginator
          perPage={perPage}
          ref={paginator}
          onPageChange={onPageNumberChange}
          onPerPageChange={onPageSizeChange}>
        </IgrPaginator>
          <IgrColumn field="customerId" hidden={true}></IgrColumn>
          <IgrColumn field="companyName" header="Company Name"></IgrColumn>
          <IgrColumn field="contactName" header="Contact Name"></IgrColumn>
          <IgrColumn field="contactTitle" header="Contact Title"></IgrColumn>
          <IgrColumn field="address.country" header="Country"></IgrColumn>
          <IgrColumn field="address.phone" header="Phone"></IgrColumn>
        </IgrGrid>
```

then set up the state:

```tsx
  const grid = useRef<IgrGrid>(null);
  const paginator = useRef<IgrPaginator>(null);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(15);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadGridData(page, perPage);
  }, [page, perPage]);
```

and finally set up the method for loading the data:

```tsx
  function loadGridData(pageIndex?: number, pageSize?: number) {
    // Set loading state
    setIsLoading(true);

    // Fetch data
    RemoteService.getDataWithPaging(pageIndex, pageSize)
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
const CUSTOMERS_URL = `https://data-northwind.indigo.design/Customers/GetCustomersWithPage`;

export class RemoteService {

    public static getDataWithPaging(pageIndex?: number, pageSize?: number) {
        return fetch(this.buildUrl(CUSTOMERS_URL, pageIndex, pageSize))
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
import { IgrGrid, IgrPaginator } from "igniteui-react-grids";
import { IgrColumn } from "igniteui-react-grids";
import "igniteui-react-grids/grids/combined";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import { RemoteService } from "./RemotePagingService";
import { CustomersWithPageResponseModel } from "./CustomersWithPageResponseModel";
import { IgrNumberEventArgs } from "igniteui-react";

export default function App() {
  const grid = useRef<IgrGrid>(null);
  const paginator = useRef<IgrPaginator>(null);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(15);

  useEffect(() => {
    loadGridData(page, perPage);
  }, [page, perPage]);

  function loadGridData(pageIndex?: number, pageSize?: number) {
    grid.current.isLoading = true;

    RemoteService.getDataWithPaging(pageIndex, pageSize)
      .then((response: CustomersWithPageResponseModel) => {
        setData(response.items);
        grid.current.isLoading = false;
        paginator.current.totalRecords = response.totalRecordsCount;
      })
      .catch((error) => {
        console.error(error.message);
        setData([]);
        grid.current.isLoading = false;
      });
  }

  function onPageNumberChange(args: IgrNumberEventArgs) {
    setPage(args.detail);
  }

  function onPageSizeChange(args: IgrNumberEventArgs) {
    setPerPage(args.detail);
  }

  return (
    <div className="container sample ig-typography">
      <div className="container fill">
        <IgrGrid
          ref={grid}
          data={data}
          pagingMode={"remote"}
          primaryKey="customerId"
          height="600px"
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
        </IgrGrid>
      </div>
    </div>
  );
}

// Render the component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```


<!-- ComponentEnd: Grid -->

and finally set up the behaviour for the RowIslands:

<!-- ComponentEnd: HierarchicalGrid -->

## Known Issues and Limitations

- When the grid has no [`primaryKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#primaryKey) set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:

- Row Selection

- Row Expand/collapse

- Row Editing

- Row Pinning

## API References

- [`IgrPaginator`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrpaginator.html)
- [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)

## Additional Resources

<!-- ComponentStart: Grid -->

- [Paging](paging.md)
- [Virtualization and Performance](virtualization.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
