---
title: Web Components Grid Remote Data Operations - Ignite UI for Web Components
_description: Start using Angular remote data operations like remote filtering, remote sorting, and remote scrolling to load data from a server with Ignite UI for Web Components.
_keywords: Remote Data, Paging, Web Components, Grid, IgcGrid, Ignite UI for Web Components, Infragistics
_license: commercial
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
mentionedTypes: ["GridBaseDirective"]
namespace: Infragistics.Controls
_tocName: Remote Data Operations
_premium: true
---

# Web Components Grid Remote Data Operations

By default, the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) uses its own logic for performing data operations.

You can perform these tasks remotely and feed the resulting data to the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) by taking advantage of certain inputs and events, which are exposed by the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html).

## Infinite Scroll

A popular design for scenarios requiring fetching data by chunks from an end-point is the so-called infinite scroll. For data grids, it is characterized by continuous increase of the loaded data triggered by the end-user scrolling all the way to the bottom. The next paragraphs explain how you can use the available API to easily achieve infinite scrolling in [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html).

To implement infinite scroll, you have to fetch the data in chunks. The data that is already fetched should be stored locally and you have to determine the length of a chunk and how many chunks there are. You also have to keep a track of the last visible data row index in the grid. In this way, using the `StartIndex` and `ChunkSize` properties, you can determine if the user scrolls up and you have to show them already fetched data or scrolls down and you have to fetch more data from the end-point.

The first thing to do is fetch the first chunk of the data. Setting the [`totalItemCount`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html#totalItemCount) property is important, as it allows the grid to size its scrollbar correctly.

Additionally, you have to subscribe to the `DataPreLoad` output, so that you can provide the data needed by the grid when it tries to display a different chunk, rather than the currently loaded one. In the event handler, you have to determine whether to fetch new data or return data, that's already cached locally.

### Infinite Scroll Demo

```typescript
export class NwindDataItem {
    public constructor(init: Partial<NwindDataItem>) {
        Object.assign(this, init);
    }

    public ProductID: number;
    public ProductName: string;
    public SupplierID: number;
    public CategoryID: number;
    public QuantityPerUnit: string;
    public UnitPrice: number;
    public UnitsInStock: number;
    public UnitsOnOrder: number;
    public ReorderLevel: number;
    public Discontinued: boolean;
    public OrderDate: string;
    public Rating: number;
    public Locations: NwindDataItem_LocationsItem[];

}
export class NwindDataItem_LocationsItem {
    public constructor(init: Partial<NwindDataItem_LocationsItem>) {
        Object.assign(this, init);
    }

    public Shop: string;
    public LastInventory: string;

}
export class NwindData extends Array<NwindDataItem> {
    public constructor() {
        super();
        this.push(new NwindDataItem({ "ProductID": 1, "ProductName": "Chai", "SupplierID": 1, "CategoryID": 1, "QuantityPerUnit": "10 boxes x 20 bags", "UnitPrice": 18.0000, "UnitsInStock": 39, "UnitsOnOrder": 0, "ReorderLevel": 10, "Discontinued": false }));
        this.push(new NwindDataItem({ "ProductID": 2, "ProductName": "Chang", "SupplierID": 1, "CategoryID": 1, "QuantityPerUnit": "24 - 12 oz bottles", "UnitPrice": 19.0000, "UnitsInStock": 17, "UnitsOnOrder": 40, "ReorderLevel": 25, "Discontinued": false }));
        this.push(new NwindDataItem({ "ProductID": 3, "ProductName": "Aniseed Syrup", "SupplierID": 1, "CategoryID": 2, "QuantityPerUnit": "12 - 550 ml bottles", "UnitPrice": 10.0000, "UnitsInStock": 13, "UnitsOnOrder": 70, "ReorderLevel": 25, "Discontinued": false }));
        // ... 74 more items
    }
}
```
```typescript
import { IgcForOfState } from "igniteui-webcomponents-grids/grids";
import { NwindData, NwindDataItem } from "./NwindData";
import { BehaviorSubject, Observable } from 'rxjs';

const DATA_URL: string = 'https://services.odata.org/V4/Northwind/Northwind.svc/Products';

export class RemoteNwindService {
    // public remoteData: NwindDataItem[];

    // constructor() {
    //     this.remoteData = new NwindData();
    // }

    // public getData(index?: number, perPage?: number): Promise<NwindDataItem[]> {
    //     const data = this.remoteData.slice(index * perPage, index * perPage + perPage);
    //     return new Promise((resolve, reject) => {
    //         setTimeout(resolve, 500, data);
    //     });
    // }

    // public getDataLength(): Promise<number> {
    //     return Promise.resolve(this.remoteData.length);
    // }`


    public data: Observable<any[]>;
    private _data: BehaviorSubject<any[]>;
    private _cachedData = <any>[];
    private _prevRequestChunk: number;

    constructor() {
        this._data = new BehaviorSubject([]);
        this.data = this._data.asObservable();
    }

    public get cachedData() {
        return this._cachedData;
    }

    public async loadDataForPage(page: number, pageSize: number, callback?: (arg: any) => void) {
        const url = this._buildDataUrl(page, pageSize)
        const response = await fetch(url);
        const data = await response.json();
        const startIndex = (page - 1) * pageSize;
        this._updateData(data, startIndex);
        this._data.next(data);
        callback({ data });
    }

    public getCachedData(virtualizationArgs: IgcForOfState) {
        const virtArgsEndIndex = virtualizationArgs.startIndex + virtualizationArgs.chunkSize;
        let data = [];
        if (virtArgsEndIndex > this._cachedData.length) {
            data = this._cachedData.slice(this._cachedData.length - this._prevRequestChunk + 1);
        } else {
            data = this._cachedData.slice(virtualizationArgs.startIndex, virtArgsEndIndex);
            this._prevRequestChunk = virtualizationArgs.chunkSize;
        }
        return data;
    }

    private _updateData(data: any, startIndex: number) {
        for (let i = 0; i < data.value.length; i++) {
            this._cachedData[i + startIndex] = data.value[i];
        }
    }

    private _buildDataUrl(page: number, pageSize: number): string {
        let baseQueryString = `${DATA_URL}?$count=true&`;
        const skip = (page - 1) * pageSize;
        const pageQuery = `$skip=${skip}&$top=${pageSize}`;
        baseQueryString += pageQuery;
        return baseQueryString;
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Remote Paging

<!-- ComponentStart: Grid -->

The paging feature can operate with remote data. In order to demonstrate this let's first declare our service that will be responsible for data fetching. We will need the count of all data items in order to calculate the page count. This logic will be added to our service.

```ts
export class RemotePagingService {
    public static CUSTOMERS_URL = `https://data-northwind.indigo.design/Customers/GetCustomersWithPage`;
    constructor() {}

    public static getDataWithPaging(pageIndex?: number, pageSize?: number) {
        return fetch(RemotePagingService.buildUrl(RemotePagingService.CUSTOMERS_URL, pageIndex, pageSize))
        .then((result) => result.json())
        .catch((error) => console.error(error.message));
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

After declaring the service, we need to create a component, which will be responsible for the [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) construction and data subscription.

<!-- ComponentStart: Grid -->

First we need to bind to the relevant events so when we change pages and the amount of records shown per page, the remote service will fetch the correct amount of data

```ts
  constructor() {
      this.grid = document.getElementById('grid') as IgcGridComponent;
      this.pager = document.getElementById('paginator') as IgcPaginatorComponent;

      this._bind = () => {
        window.addEventListener("load", () => {
          this.loadData(this.page,this.perPage);
        });

        this.pager.addEventListener("perPageChange", ((args: CustomEvent<any>) => {
          this.perPage = args.detail;
          this.loadData(this.page, this.perPage);
        }) as EventListener);

        this.pager.addEventListener("pageChange", ((args: CustomEvent<any>) => {
          this.page = args.detail;
          this.loadData(this.page, this.perPage);
        }) as EventListener);
      }

      this._bind();
  }
```

We also need to set the method for loading data and update the UI accordingly:

```ts
  private loadData(pageIndex?: number, pageSize?: number): void {
    this.grid.isLoading = true;

    RemotePagingService.getDataWithPaging(pageIndex,pageSize)
    .then((response: CustomersWithPageResponseModel) => {
      this.totalRecordsCount = response.totalRecordsCount;
      this.pager.perPage = pageSize;
      this.pager.totalRecords = this.totalRecordsCount;
      this.page = response.pageNumber;
      this.data = response.items;
      this.grid.isLoading = false;
      this.updateUI(); // Update the UI after receiving data
    })
    .catch((error) => {
      console.error(error.message);
      // Stop loading even if error occurs. Prevents endless loading
      this.grid.isLoading = false;
      this.updateUI();
    })
  }

    private updateUI(): void {
    if (this.grid && this.data) { // Check if grid and data are available
        this.grid.data = this.data;
    }
  }
```

For further reference, please check the demo bellow:

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
export class RemotePagingService {
    public static CUSTOMERS_URL = `https://data-northwind.indigo.design/Customers/GetCustomersWithPage`;
    constructor() {}

    public static getDataWithPaging(pageIndex?: number, pageSize?: number) {
        return fetch(RemotePagingService.buildUrl(RemotePagingService.CUSTOMERS_URL, pageIndex, pageSize))
        .then((result) => result.json())
        .catch((error) => console.error(error.message));
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


<!-- ComponentEnd: Grid -->

<!-- ComponentEnd: HierarchicalGrid -->

## Known Issues and Limitations

- When the grid has no [`primaryKey`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#primaryKey) set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:

- Row Selection

- Row Expand/collapse

- Row Editing

- Row Pinning

## API References

- [`IgcPaginatorComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpaginatorcomponent.html)
- [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html)

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

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
