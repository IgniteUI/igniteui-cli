---
title: Web Components Hierarchical Grid Remote Data Operations - Ignite UI for Web Components
_description: Start using Angular remote data operations like remote filtering, remote sorting, and remote scrolling to load data from a server with Ignite UI for Web Components.
_keywords: Remote Data, Paging, Web Components, Hierarchical Grid, IgcHierarchicalGrid, Ignite UI for Web Components, Infragistics
_license: commercial
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
mentionedTypes: ["GridBaseDirective"]
namespace: Infragistics.Controls
_tocName: Remote Data Operations
_premium: true
---

# Web Components Hierarchical Grid Remote Data Operations

By default, the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) uses its own logic for performing data operations.

You can perform these tasks remotely and feed the resulting data to the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) by taking advantage of certain inputs and events, which are exposed by the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html).

## Remote Paging

<!-- ComponentStart: HierarchicalGrid -->

<!-- WebComponents -->

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

<!-- end: WebComponents -->

<!-- ComponentEnd: HierarchicalGrid -->

After declaring the service, we need to create a component, which will be responsible for the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) construction and data subscription.

<!-- ComponentStart: HierarchicalGrid -->

<!-- WebComponents -->

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




<!-- end: WebComponents -->

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentEnd: HierarchicalGrid -->

## Known Issues and Limitations

- When the grid has no [`primaryKey`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridbasedirective.html#primaryKey) set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:

- Row Selection

- Row Expand/collapse

- Row Editing

- Row Pinning

## API References

- [`IgcPaginatorComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcpaginatorcomponent.html)
- [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
