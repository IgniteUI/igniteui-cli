---
title: React Hierarchical Grid | Fastest React Hierarchical Table | Infragistics
_description: The Ignite UI for React Hierarchical Grid provides the necessary tools to load data on demand for each child grid that is expanded. That way the volume of data would be greatly reduced and can be retrieved only when the user needs it.
_keywords: React hierarchical grid, igniteui for React, infragistics
_license: commercial
mentionedTypes: ["HierarchicalGrid", "RowIsland"]
namespace: Infragistics.Controls
_tocName: Load on Demand
_premium: true
---

# Hierarchical Grid Load On Demand

The Ignite UI for React [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) allows fast rendering by requesting the minimum amount of data to be retrieved from the server so that the user can see the result in view and interact with the visible data as quickly as possible. Initially only the root grid’s data is retrieved and rendered, only after the user expands a row containing a child grid, he will receive the data for that particular child grid. This mechanism, also known as Load on Demand, can be easily configured to work with any remote data.

This topic demonstrates how to configure Load on Demand by creating a Remote Service Provider that communicates with an already available remote service. Here's the working demo and later we will go through it step by step and describe the process of creating it.

## React Hierarchical Grid Load On Demand Example

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

## Remote Service Provider

First we will prepare our service provider so we will be ready to get the data we would need for the hierarchical grid.

### Getting basic data

We will be communicating with our backend service over HTTP protocol using the [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch) global function the browsers provide. That way in order to get our data we will need this simple method in our service:

```ts
export async function getData(dataState: any): Promise<any> {
    const response = await fetch(buildUrl(dataState));
    const data = await response.json();
    return data;
}
```

As you can see `buildUrl()` will be the method that will generate our url based on the data that we have received. We return a Promise, since this is executed asynchronously. That way we can later subscribe to it, process it further in our application and pass it to our grid.

### Building our request url

Next we will define how we should build our URL for the GET request. This is where we will be able to get the data for our main grid but also for any child grid inside it. We will use the `Customers` data from  this [topic](https://data-northwind.indigo.design/swagger/index.html) for our root level and use `Orders` and `Details` for the lower levels. The model will differ per application but we will use the following one:

<img class="responsive-img" src="../../../images/hgrid-database.jpg" alt="hgrid-database" />

What we first need is the `key` of our table to determine from where to get the data for the desired grid, the primary key of the parent row and its unique ID.

We will define all this in the `dataState` object. An example:

```ts
const dataState: {
    key: string;
    parentID: any;
    parentKey: string;
    rootLevel: boolean;
} = {
    //...
};

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

### Result

Finally, this is how our remote service would look like:

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

## Hierarchical Grid Setup

Next we will setup our hierarchical grid and connect it to our remote service provider.

### Template defining

First we will define our hierarchical grid template with the levels of hierarchy that we expect to have. We know that our root grid [`primaryKey`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#primaryKey) for the customers is their `customerId`, for their orders on the first level - `orderId` and respectively for order details - `productId`. Knowing each database table and their keys allows us to define our initial template:

```tsx
<IgrHierarchicalGrid ref={hierarchicalGrid} primaryKey="customerId" height="600px">
    <IgrColumn field="customerId" hidden={true}></IgrColumn>
    <IgrColumn field="companyName" header="Company Name"></IgrColumn>
    <IgrColumn field="contactName" header="Contact Name"></IgrColumn>
    <IgrColumn field="contactTitle" header="Contact Title"></IgrColumn>
    <IgrColumn field="address.country" header="Country"></IgrColumn>
    <IgrColumn field="address.phone" header="Phone"></IgrColumn>
    <IgrRowIsland childDataKey="Orders" primaryKey="orderId">
        <IgrColumn field="orderId" hidden={true}></IgrColumn>
        <IgrColumn field="shipAddress.country" header="Ship Country"></IgrColumn>
        <IgrColumn field="shipAddress.city" header="Ship City"></IgrColumn>
        <IgrColumn field="shipAddress.street" header="Ship Address"></IgrColumn>
        <IgrColumn field="orderDate" header="Order Date" dataType="date"></IgrColumn>
        <IgrRowIsland childDataKey="Details" primaryKey="productId">
            <IgrColumn field="productId" hidden={true}></IgrColumn>
            <IgrColumn field="quantity" header="Quantity"></IgrColumn>
            <IgrColumn field="unitPrice" header="Unit Price"></IgrColumn>
            <IgrColumn field="discount" header="Discount"></IgrColumn>
        </IgrRowIsland>
    </IgrRowIsland>
</IgrHierarchicalGrid>
```

There is one thing missing in our template though, and that is the data for our root level hierarchical grid, and eventually its children.

We will easily set the data of the root grid after getting its data from the service in our code later, since we can use the `ref={hierarchicalGrid}` reference.

Setting the data for any child that has been expanded is a bit different. When a row is expanded for the first time, a new child [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) is rendered for it and we need to get the reference for the newly created grid to set its data. That is why each [`IgrRowIsland`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrrowisland.html) component provides the `GridCreated` event that is fired when a new child grid is created for that specific row island. We can use that to get the reference we need for the new grid, request its data from the service, and apply it.

We can use one method for all row islands since we built our service so that it needs only information if it is the root level, the key of the row island, the primary key of the parent row, and its unique identifier. All this information can be accessed either directly from the event arguments, or from the row island responsible for triggering the event.

Let's name the method that we will use `gridCreated`.

Since the `GridCreated` event provides a reference to the row island, the `parentID` property, and the new child `grid` property, this will be passed as the first and second arguments. We are only missing information about the parent row's `primaryKey`, but we can easily pass that as a third argument, depending on which row island we bind.

The template file, with these changes added, would look like this:

```tsx
<IgrHierarchicalGrid ref={hierarchicalGrid} primaryKey="customerId" height="600px">
    <IgrColumn field="customerId" hidden={true}></IgrColumn>
    <IgrColumn field="companyName" header="Company Name"></IgrColumn>
    <IgrColumn field="contactName" header="Contact Name"></IgrColumn>
    <IgrColumn field="contactTitle" header="Contact Title"></IgrColumn>
    <IgrColumn field="address.country" header="Country"></IgrColumn>
    <IgrColumn field="address.phone" header="Phone"></IgrColumn>
    <IgrRowIsland childDataKey="Orders" primaryKey="orderId" onGridCreated={(e: IgrGridCreatedEventArgs) => gridCreated(e, "Customers")}>
        <IgrColumn field="orderId" hidden={true}></IgrColumn>
        <IgrColumn field="shipAddress.country" header="Ship Country"></IgrColumn>
        <IgrColumn field="shipAddress.city" header="Ship City"></IgrColumn>
        <IgrColumn field="shipAddress.street" header="Ship Address"></IgrColumn>
        <IgrColumn field="orderDate" header="Order Date" dataType="date"></IgrColumn>
        <IgrRowIsland childDataKey="Details" primaryKey="productId" onGridCreated={(e: IgrGridCreatedEventArgs) => gridCreated(e, "Orders")}>
            <IgrColumn field="productId" hidden={true}></IgrColumn>
            <IgrColumn field="quantity" header="Quantity"></IgrColumn>
            <IgrColumn field="unitPrice" header="Unit Price"></IgrColumn>
            <IgrColumn field="discount" header="Discount"></IgrColumn>
        </IgrRowIsland>
    </IgrRowIsland>
</IgrHierarchicalGrid>
```

### Connecting our service

One of our final steps now will be to connect our previously created service to our hierarchical grid.

We will get a reference to our root grid via the `useRef` React hook to set its data:

```tsx
const hierarchicalGrid = useRef<IgrHierarchicalGrid>(null);
```

In order to make sure that our grid is rendered before we request its data from the service and assign it, we will use the `useEffect` React hook. As it doesn't have any parents we can only pass that `rootLevel` is **true**, and the key for it, to the `getData` of our service. Since it returns a Promise we will need to subscribe to it:

```tsx
useEffect(() => {
    getData({ parentID: null, rootLevel: true, key: "Customers" }).then(
      (data: any) => {
        hierarchicalGrid.current.data = data;
        hierarchicalGrid.current.markForCheck();
      }
    );
}, []);
```

Next, we only need to create our `gridCreated` method that will request data for any new child grid created.

It will be similar to getting the root level grid data, just this time we will need to pass more information, like `parentID` and `parentKey`. `rootLevel` will be **false** for any child:

```tsx
function gridCreated(event: IgrGridCreatedEventArgs, _parentKey: string) {
    const context = event.detail;
    const rowIsland = context.owner;
    const dataState = {
        key: rowIsland.childDataKey,
        parentID: context.parentID,
        parentKey: _parentKey,
        rootLevel: false,
    };

    getData(dataState).then((data: any[]) => {
        context.grid.data = data;
        context.grid.markForCheck();
    });
}
```

With this, the setup of our application is almost done. This last step aims to improve the user experience by informing the user that the data is still loading so he doesn't have to look at an empty grid in the meantime. That's why the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) supports a loading indicator that can be displayed while the grid is empty. If new data is received, the loading indicator will hide and the data will be rendered.

### Setup of loading indication

The [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) can display a loading indicator by setting the [`isLoading`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#isLoading) property to **true** while there is no data. We need to set it initially for the root grid and also when creating new child grids, until their data is loaded. We could always set it to **true** in our template, but we want to hide it and display that the grid has no data if the service returns an empty array by setting it to **false**.

In this case the final version of our configuration would look like this:

```tsx
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

function gridCreated(event: IgrGridCreatedEventArgs, _parentKey: string) {
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
```

## API References

- [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)
- [`IgrRowIsland`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrrowisland.html)

## Additional Resources

- [Hierarchical Grid Component](overview.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
