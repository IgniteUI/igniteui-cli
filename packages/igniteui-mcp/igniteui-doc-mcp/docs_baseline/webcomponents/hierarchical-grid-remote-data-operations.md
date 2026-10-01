---
title: "Web Components Hierarchical Grid Remote Data Operations - Ignite UI for Web Components"
description: Start using Angular remote data operations like remote filtering, remote sorting, and remote scrolling to load data from a server with Ignite UI for Web Components.
keywords: Remote Data, Paging, Web Components, Hierarchical Grid, IgcHierarchicalGrid, Ignite UI for Web Components, Infragistics
license: commercial
llms:
  description: "The Ignite UI for Web Components Remote Data Operations feature in Web Components Hierarchical Grid supports operations such as remote virtualization, remote sorting, remote filtering and others."
_componentKey: HierarchicalGrid
_tocName: Remote Data Operations
_premium: true
---
# Web Components Hierarchical Grid Remote Data Operations

By default, the [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) uses its own logic for performing data operations.

You can perform these tasks remotely and feed the resulting data to the [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) by taking advantage of certain inputs and events, which are exposed by the [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent).

## Infinite Scroll

 A popular design for scenarios requiring fetching data by chunks from an end-point is the so-called infinite scroll. For data grids, it is characterized by continuous increase of the loaded data triggered by the end-user scrolling all the way to the bottom. The next paragraphs explain how you can use the available API to easily achieve infinite scrolling in [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent).

To implement infinite scroll, you have to fetch the data in chunks. The data that is already fetched should be stored locally and you have to determine the length of a chunk and how many chunks there are. You also have to keep a track of the last visible data row index in the grid. In this way, using the [`IgcForOfState.chunkSize`](mcp:get_api_reference?platform=webcomponents&component=IgcForOfState&member=chunkSize) and [`IgcForOfState.chunkSize`](mcp:get_api_reference?platform=webcomponents&component=IgcForOfState&member=chunkSize) properties, you can determine if the user scrolls up and you have to show them already fetched data or scrolls down and you have to fetch more data from the end-point.

The first thing to do is fetch the first chunk of the data. Setting the [`IgcHierarchicalGrid.totalItemCount`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=totalItemCount) property is important, as it allows the grid to size its scrollbar correctly.

Additionally, you have to subscribe to the [`IgcHierarchicalGrid.dataPreLoad`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=dataPreLoad) output, so that you can provide the data needed by the grid when it tries to display a different chunk, rather than the currently loaded one. In the event handler, you have to determine whether to fetch new data or return data, that's already cached locally.

### Infinite Scroll Demo



## Remote Paging

```ts
export class RemotePagingService {
    public static BASE_URL = 'https://data-northwind.indigo.design/';
    public static CUSTOMERS_URL = `${RemotePagingService.BASE_URL}Customers/GetCustomersWithPage`;

    constructor() {}

    public static getDataWithPaging(pageIndex?: number, pageSize?: number) {
        return fetch(RemotePagingService.buildUrl(RemotePagingService.CUSTOMERS_URL, pageIndex, pageSize))
        .then((result) => result.json())
        .catch((error) => console.error(error.message));
    }

    public static getHierarchyDataById(parentEntityName: string, parentId: string, childEntityName: string) {
        return fetch(`${RemotePagingService.BASE_URL}${parentEntityName}/${parentId}/${childEntityName}`)
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

After declaring the service, we need to create a component, which will be responsible for the [`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent) construction and data subscription.

First we need to bind to the relevant events so when we change pages and the amount of records shown per page, the remote service will fetch the correct amount of data

```ts
    constructor() {
        this.hierarchicalGrid = document.getElementById("hGrid") as IgcHierarchicalGridComponent;
        this.pager = document.getElementById('paginator') as IgcPaginatorComponent;
        const ordersRowIsland = document.getElementById("ordersRowIsland") as IgcRowIslandComponent;
        const orderDetailsRowIsland = document.getElementById("orderDetailsRowIsland") as IgcRowIslandComponent;

        ordersRowIsland.paginatorTemplate = this.webHierarchicalGridPaginatorTemplate;
        orderDetailsRowIsland.paginatorTemplate = this.webHierarchicalGridPaginatorTemplate;

        this._bind = () => {
            window.addEventListener("load", () => {
                this.pager.perPage = this._perPage;
                this.loadCustomersData(this.page,this.perPage);
            });

            this.pager.addEventListener("perPageChange", ((args: CustomEvent<any>) => {
              this.perPage = args.detail;
              this.loadCustomersData(this.page, this.perPage);
            }) as EventListener);

            this.pager.addEventListener("pageChange", ((args: CustomEvent<any>) => {
              this.page = args.detail;
              this.loadCustomersData(this.page, this.perPage);
            }) as EventListener);

            ordersRowIsland.addEventListener("gridCreated", (event: any) => {
                this.gridCreated(event, "Customers");
            });

            orderDetailsRowIsland.addEventListener("gridCreated", (event: any) => {
                this.gridCreated(event, "Orders");
            });
        }

        this._bind();
    }
```

We also need to set the method for loading data and update the UI accordingly:

```ts
  private updateUI(): void {
        if (this.hierarchicalGrid && this.data) { // Check if grid and data are available
            this.hierarchicalGrid.data = this.data;
        }
    }

    private loadCustomersData(pageIndex?: number, pageSize?: number): void {
        this.hierarchicalGrid.isLoading = true;

        RemotePagingService.getDataWithPaging(pageIndex,pageSize)
        .then((response: CustomersWithPageResponseModel) => {
          this.totalRecordsCount = response.totalRecordsCount;
          this.pager.perPage = pageSize;
          this.pager.totalRecords = this.totalRecordsCount;
          this.page = response.pageNumber;
          this.data = response.items;
          this.hierarchicalGrid.isLoading = false;
          this.updateUI(); // Update the UI after receiving data
        })
        .catch((error) => {
          console.error(error.message);
          this.hierarchicalGrid.data = [];
          this.hierarchicalGrid.isLoading = false;
          this.updateUI();
        })
      }
```

And finally we need to handle the behaviour behind the actual hierarchy levels of the Hierarchical Gird

```ts
    public gridCreated(event: CustomEvent<IgcGridCreatedEventArgs>, parentKey: string) {
        const context = event.detail;
        const parentId: string = context.parentID;
        const childDataKey: string = context.owner.childDataKey;

        context.grid.isLoading = true;
        RemotePagingService.getHierarchyDataById(parentKey, parentId, childDataKey)
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

    public webHierarchicalGridPaginatorTemplate = () => {
       return html `
        <igc-paginator
            id="islandPaginator">
        </igc-paginator>`
    }
```

For further reference, please check the demo bellow:

### Grid Remote Paging Demo



## Known Issues and Limitations

- When the grid has no [`IgcHierarchicalGrid.primaryKey`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent&member=primaryKey) set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:

- Row Selection
- Row Expand/collapse
- Row Editing
- Row Pinning

## API References
[`IgcHierarchicalGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcHierarchicalGridComponent)
[`IgcPaginator`](mcp:get_api_reference?platform=webcomponents&component=IgcPaginatorComponent)
## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
