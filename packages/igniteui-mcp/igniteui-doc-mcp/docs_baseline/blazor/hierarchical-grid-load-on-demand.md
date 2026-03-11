---
title: Blazor Hierarchical Grid | Fastest Blazor Hierarchical Table | Infragistics
_description: The Ignite UI for Blazor Hierarchical Grid provides the necessary tools to load data on demand for each child grid that is expanded. That way the volume of data would be greatly reduced and can be retrieved only when the user needs it.
_keywords: Blazor hierarchical grid, igniteui for Blazor, infragistics
_license: commercial
mentionedTypes: ["HierarchicalGrid", "RowIsland"]
namespace: Infragistics.Controls
_tocName: Load on Demand
_premium: true
---

# Hierarchical Grid Load On Demand

The Ignite UI for Blazor [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) allows fast rendering by requesting the minimum amount of data to be retrieved from the server so that the user can see the result in view and interact with the visible data as quickly as possible. Initially only the root grid’s data is retrieved and rendered, only after the user expands a row containing a child grid, he will receive the data for that particular child grid. This mechanism, also known as Load on Demand, can be easily configured to work with any remote data.

This topic demonstrates how to configure Load on Demand by creating a Remote Service Provider that communicates with an already available remote service. Here's the working demo and later we will go through it step by step and describe the process of creating it.

## Blazor Hierarchical Grid Load On Demand Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">

        <IgbHierarchicalGrid
            Id="hGrid"
            PrimaryKey="customerId"
            Height="600px"
            RenderedScript="OnGridRendered"
        >
            <IgbColumn Field="customerId" Hidden="true"></IgbColumn>
            <IgbColumn Field="companyName" Header="Company Name"></IgbColumn>
            <IgbColumn Field="contactName" Header="Contact Name"></IgbColumn>
            <IgbColumn Field="contactTitle" Header="Contact Title"></IgbColumn>
            <IgbColumn Field="address.country" Header="Country"></IgbColumn>
            <IgbColumn Field="address.phone" Header="Phone"></IgbColumn>

            <IgbRowIsland ChildDataKey="Orders" PrimaryKey="orderId" GridCreatedScript="OnGridCreated">
                <IgbColumn Field="orderId" Hidden="true"></IgbColumn>
                <IgbColumn Field="shipAddress.country" Header="Ship Country"></IgbColumn>
                <IgbColumn Field="shipAddress.city" Header="Ship City"></IgbColumn>
                <IgbColumn Field="shipAddress.street" Header="Ship Address"></IgbColumn>
                <IgbColumn Field="orderDate" Header="Order Date" DataType="GridColumnDataType.Date"></IgbColumn>

                <IgbRowIsland ChildDataKey="Details" PrimaryKey="productId" GridCreatedScript="OnGridCreated">
                    <IgbColumn Field="productId" Hidden="true"></IgbColumn>
                    <IgbColumn Field="quantity" Header="Quantity"></IgbColumn>
                    <IgbColumn Field="unitPrice" Header="Unit Price"></IgbColumn>
                    <IgbColumn Field="discount" Header="Discount"></IgbColumn>
                </IgbRowIsland>
            </IgbRowIsland>
        </IgbHierarchicalGrid>

    </div>
</div>

@code {

}
```
```csharp
using System;
using System.Collections.Generic;
public class SingersDataItem
{
    public double ID { get; set; }
    public string Artist { get; set; }
    public string Photo { get; set; }
    public double Debut { get; set; }
    public double GrammyNominations { get; set; }
    public double GrammyAwards { get; set; }
    public bool HasGrammyAward { get; set; }
    public List<SingersDataItem_ToursItem> Tours { get; set; }
    public List<SingersDataItem_AlbumsItem> Albums { get; set; }
}
public class SingersDataItem_ToursItem
{
    public string Tour { get; set; }
    public string StartedOn { get; set; }
    public string Location { get; set; }
    public string Headliner { get; set; }
    public string TouredBy { get; set; }
}
public class SingersDataItem_AlbumsItem
{
    public string Album { get; set; }
    public string LaunchDate { get; set; }
    public double BillboardReview { get; set; }
    public double USBillboard200 { get; set; }
    public string Artist { get; set; }
    public List<SingersDataItem_AlbumsItem_SongsItem> Songs { get; set; }
}
public class SingersDataItem_AlbumsItem_SongsItem
{
    public double Number { get; set; }
    public string Title { get; set; }
    public string Released { get; set; }
    public string Genre { get; set; }
    public string Album { get; set; }
}

public class SingersData
    : List<SingersDataItem>
{
    public SingersData()
    {
        this.Add(new SingersDataItem() { ID = 0, Artist = @"Naomí Yepes", Photo = @"https://dl.infragistics.com/x/img/people/names/naomi.png", Debut = 2011, GrammyNominations = 6, GrammyAwards = 0, HasGrammyAward = false, Tours = new List<SingersDataItem_ToursItem>()
        {
            new SingersDataItem_ToursItem() { Tour = @"Faithful Tour", StartedOn = @"Sep 12", Location = @"Worldwide", Headliner = @"NO", TouredBy = @"Naomí Yepes" },
            new SingersDataItem_ToursItem() { Tour = @"City Jam Sessions", StartedOn = @"Aug 13", Location = @"North America", Headliner = @"YES", TouredBy = @"Naomí Yepes" },
            new SingersDataItem_ToursItem() { Tour = @"Christmas NYC 2013", StartedOn = @"Dec 13", Location = @"United States", Headliner = @"NO", TouredBy = @"Naomí Yepes" },
            // ... 18 more items
        }
        , Albums = new List<SingersDataItem_AlbumsItem>()
        {
            new SingersDataItem_AlbumsItem() { Album = @"Emergency", LaunchDate = @"March 6, 2004", BillboardReview = 98, USBillboard200 = 69, Artist = @"Ahmad Nazeri", Songs = new List<SingersDataItem_AlbumsItem_SongsItem>()
            {
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 1, Title = @"Gentle Falling", Released = @"26 Apr 2019", Genre = @"Crunk reggaeton", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 2, Title = @"Calling in the Fire", Released = @"03 Sep 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 3, Title = @"Fire of Shadow", Released = @"05 Jan 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 4, Title = @"Dancing in the Dream", Released = @"15 Apr 2019", Genre = @"R&B", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 5, Title = @"Calling in the Shadow", Released = @"09 Oct 2019", Genre = @"R&B", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 6, Title = @"Falling in the Sky", Released = @"08 Mar 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 7, Title = @"Calling in the Storm", Released = @"05 Dec 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 8, Title = @"Falling in the River", Released = @"19 Aug 2019", Genre = @"Electro house Electropop", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 9, Title = @"Electric Fire", Released = @"30 Nov 2019", Genre = @"Crunk reggaeton", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 10, Title = @"Lonely River", Released = @"11 Nov 2019", Genre = @"Electro house Electropop", Album = @"Emergency" }}
             },
            new SingersDataItem_AlbumsItem() { Album = @"Bursting bubbles", LaunchDate = @"April 17, 2006", BillboardReview = 69, USBillboard200 = 39, Artist = @"Ahmad Nazeri", Songs = new List<SingersDataItem_AlbumsItem_SongsItem>()
            {
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 1, Title = @"Lonely Dream", Released = @"11 Dec 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 2, Title = @"Fire of River", Released = @"01 Aug 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 3, Title = @"Wicked Falling", Released = @"25 Jan 2019", Genre = @"*", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 4, Title = @"Crying in the Shadow", Released = @"04 Jan 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 5, Title = @"Wild Burning", Released = @"10 May 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 6, Title = @"Waiting in the Heart", Released = @"07 Aug 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 7, Title = @"Fire of Fire", Released = @"16 May 2019", Genre = @"Electro house Electropop", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 8, Title = @"Bright Heart", Released = @"14 Mar 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 9, Title = @"Lonely Fire", Released = @"15 Oct 2019", Genre = @"R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 10, Title = @"Sky of Dream", Released = @"20 Jun 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" }}
             }}
    }
}
```


## Remote Service Provider

First we will prepare our service provider so we will be ready to get the data we would need for the hierarchical grid.

### Getting basic data

<!-- Blazor -->

We will be communicating with our backend service over HTTP protocol using the [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch) global function the browsers provide. That way in order to get our data we will need this simple method in our service:

```razor
function getData(dataState) {
    return fetch(buildUrl(dataState))
        .then((result) => result.json());
}
```

As you can see `buildUrl()` will be the method that will generate our url based on the data that we have received. We return a Promise, since this is executed asynchronously. That way we can later subscribe to it, process it further in our application and pass it to our grid.

<!-- end: Blazor -->

### Building our request url

Next we will define how we should build our URL for the GET request. This is where we will be able to get the data for our main grid but also for any child grid inside it. We will use the `Customers` data from  this [topic](https://data-northwind.indigo.design/swagger/index.html) for our root level and use `Orders` and `Details` for the lower levels. The model will differ per application but we will use the following one:

<img class="responsive-img" src="../../../images/hgrid-database.jpg" alt="hgrid-database" />

What we first need is the `key` of our table to determine from where to get the data for the desired grid, the primary key of the parent row and its unique ID.

<!-- Blazor -->

We will define all this in the `dataState` object. An example:

```razor
const dataState: {
    key: string;
    parentID: any;
    parentKey: string;
    rootLevel: boolean;
} = {
    //...
};

function buildUrl(dataState) {
    let qS = "";
    if (dataState) {
        if (dataState.rootLevel) {
            qS += `${dataState.key}`;
        } else {
            qS += `${dataState.parentKey}/${dataState.parentID}/${dataState.key}`;
        }
    }
    return `${DATA_URL}${qS}`;
}
```

<!-- end: Blazor -->

### Result

<!-- Blazor -->

Finally, this is how our remote service would look like:

```razor
const DATA_URL = `https://data-northwind.indigo.design/`;

function getData(dataState) {
    return fetch(buildUrl(dataState))
        .then((result) => result.json());
}

function buildUrl(dataState) {
    let qS = "";
    if (dataState) {
        if (dataState.rootLevel) {
            qS += `${dataState.key}`;
        } else {
            qS += `${dataState.parentKey}/${dataState.parentID}/${dataState.key}`;
        }
    }
    return `${DATA_URL}${qS}`;
}
```

<!-- end: Blazor -->

## Hierarchical Grid Setup

Next we will setup our hierarchical grid and connect it to our remote service provider.

### Template defining

First we will define our hierarchical grid template with the levels of hierarchy that we expect to have. We know that our root grid [`PrimaryKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_PrimaryKey) for the customers is their `customerId`, for their orders on the first level - `orderId` and respectively for order details - `productId`. Knowing each database table and their keys allows us to define our initial template:

<!-- Blazor -->

```razor
<IgbHierarchicalGrid Id="hGrid" PrimaryKey="customerId" Height="600px">
    <IgbColumn Field="customerId" Hidden="true"></IgbColumn>
    <IgbColumn Field="companyName" Header="Company Name"></IgbColumn>
    <IgbColumn Field="contactName" Header="Contact Name"></IgbColumn>
    <IgbColumn Field="contactTitle" Header="Contact Title"></IgbColumn>
    <IgbColumn Field="address.country" Header="Country"></IgbColumn>
    <IgbColumn Field="address.phone" Header="Phone"></IgbColumn>
    <IgbRowIsland ChildDataKey="Orders" PrimaryKey="orderId">
        <IgbColumn Field="orderId" Hidden="true"></IgbColumn>
        <IgbColumn Field="shipAddress.country" Header="Ship Country"></IgbColumn>
        <IgbColumn Field="shipAddress.city" Header="Ship City"></IgbColumn>
        <IgbColumn Field="shipAddress.street" Header="Ship Address"></IgbColumn>
        <IgbColumn Field="orderDate" Header="Order Date" DataType="GridColumnDataType.Date"></IgbColumn>
        <IgbRowIsland ChildDataKey="Details" PrimaryKey="productId">
            <IgbColumn Field="productId" Hidden="true"></IgbColumn>
            <IgbColumn Field="quantity" Header="Quantity"></IgbColumn>
            <IgbColumn Field="unitPrice" Header="Unit Price"></IgbColumn>
            <IgbColumn Field="discount" Header="Discount"></IgbColumn>
        </IgbRowIsland>
    </IgbRowIsland>
</IgbHierarchicalGrid>
```

<!-- end: Blazor -->

There is one thing missing in our template though, and that is the data for our root level hierarchical grid, and eventually its children.

<!-- Blazor -->

We will easily set the data of the root grid after getting its data from the service in our code later, since we can use the `Id="hGrid"` reference.

<!-- end: Blazor -->

Setting the data for any child that has been expanded is a bit different. When a row is expanded for the first time, a new child [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) is rendered for it and we need to get the reference for the newly created grid to set its data. That is why each [`IgbRowIsland`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRowIsland.html) component provides the `GridCreated` event that is fired when a new child grid is created for that specific row island. We can use that to get the reference we need for the new grid, request its data from the service, and apply it.

We can use one method for all row islands since we built our service so that it needs only information if it is the root level, the key of the row island, the primary key of the parent row, and its unique identifier. All this information can be accessed either directly from the event arguments, or from the row island responsible for triggering the event.

<!-- Blazor -->

Let's name the method that we will use `OnGridCreated`.

<!-- end: Blazor -->

<!-- Blazor -->

Since the `GridCreated` event provides the `parentID` property, a reference to the row island as `owner` and the new child `grid` property, it will be passed as the first argument. We are only missing information about the parent row's `primaryKey`, but we can easily determine that based on the row island [`ChildDataKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRowIsland.html#IgniteUI_Blazor_Controls_IgbRowIsland_ChildDataKey).

<!-- end: Blazor -->

The template file, with these changes added, would look like this:

<!-- Blazor -->

```razor
<IgbHierarchicalGrid Id="hGrid" PrimaryKey="customerId" Height="600px">
    <IgbColumn Field="customerId" Hidden="true"></IgbColumn>
    <IgbColumn Field="companyName" Header="Company Name"></IgbColumn>
    <IgbColumn Field="contactName" Header="Contact Name"></IgbColumn>
    <IgbColumn Field="contactTitle" Header="Contact Title"></IgbColumn>
    <IgbColumn Field="address.country" Header="Country"></IgbColumn>
    <IgbColumn Field="address.phone" Header="Phone"></IgbColumn>
    <IgbRowIsland ChildDataKey="Orders" PrimaryKey="orderId" GridCreatedScript="OnGridCreated">
        <IgbColumn Field="orderId" Hidden="true"></IgbColumn>
        <IgbColumn Field="shipAddress.country" Header="Ship Country"></IgbColumn>
        <IgbColumn Field="shipAddress.city" Header="Ship City"></IgbColumn>
        <IgbColumn Field="shipAddress.street" Header="Ship Address"></IgbColumn>
        <IgbColumn Field="orderDate" Header="Order Date" DataType="GridColumnDataType.Date"></IgbColumn>
        <IgbRowIsland ChildDataKey="Details" PrimaryKey="productId" GridCreatedScript="OnGridCreated">
            <IgbColumn Field="productId" Hidden="true"></IgbColumn>
            <IgbColumn Field="quantity" Header="Quantity"></IgbColumn>
            <IgbColumn Field="unitPrice" Header="Unit Price"></IgbColumn>
            <IgbColumn Field="discount" Header="Discount"></IgbColumn>
        </IgbRowIsland>
    </IgbRowIsland>
</IgbHierarchicalGrid>
```

<!-- end: Blazor -->

### Connecting our service

One of our final steps now will be to connect our previously created service to our hierarchical grid.

<!-- Blazor -->

We will get a reference to our root grid to set its data. In order to make sure that our grid is rendered before we request its data from the service and assign it, we will use the `Rendered` event. As it doesn't have any parents we can only pass that `rootLevel` is **true**, and the key for it, to the `getData` of our service. Since it returns a Promise we will need to subscribe to it:

```razor
igRegisterScript("OnGridRendered", () => {
    const grid = document.getElementById("hGrid");

    getData({ parentID: null, rootLevel: true, key: "Customers" }).then(
        (data) => {
            grid.data = data;
            grid.markForCheck();
        });
}, false)
```

<!-- end: Blazor -->

<!-- Blazor -->

Next, we only need to create our `OnGridCreated` method that will request data for any new child grid created.

<!-- end: Blazor -->

It will be similar to getting the root level grid data, just this time we will need to pass more information, like `parentID` and `parentKey`. `rootLevel` will be **false** for any child:

<!-- Blazor -->

```razor
igRegisterScript("OnGridCreated", (args) => {
    const context = args.detail;
    const _parentKey = context.owner.childDataKey === "Orders" ? "Customers" : "Orders";
    const dataState = {
        key: context.owner.childDataKey,
        parentID: context.parentID,
        parentKey: _parentKey,
        rootLevel: false,
    };

    getData(dataState).then((data) => {
        context.grid.data = data;
        context.grid.markForCheck();
    });
}, false)
```

<!-- end: Blazor -->

With this, the setup of our application is almost done. This last step aims to improve the user experience by informing the user that the data is still loading so he doesn't have to look at an empty grid in the meantime. That's why the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) supports a loading indicator that can be displayed while the grid is empty. If new data is received, the loading indicator will hide and the data will be rendered.

### Setup of loading indication

The [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) can display a loading indicator by setting the [`IsLoading`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_IsLoading) property to **true** while there is no data. We need to set it initially for the root grid and also when creating new child grids, until their data is loaded. We could always set it to **true** in our template, but we want to hide it and display that the grid has no data if the service returns an empty array by setting it to **false**.

In this case the final version of our configuration would look like this:

<!-- Blazor -->

```razor
igRegisterScript("OnGridRendered", () => {
    const grid = document.getElementById("hGrid");

    grid.isLoading = true;

    getData({ parentID: null, rootLevel: true, key: "Customers" }).then(
        (data) => {
            grid.isLoading = false;
            grid.data = data;
            grid.markForCheck();
        });
}, false)

igRegisterScript("OnGridCreated", (args) => {
    const context = args.detail;
    const _parentKey = context.owner.childDataKey === "Orders" ? "Customers" : "Orders";
    const dataState = {
        key: context.owner.childDataKey,
        parentID: context.parentID,
        parentKey: _parentKey,
        rootLevel: false,
    };

    context.grid.isLoading = true;

    getData(dataState).then((data) => {
        context.grid.isLoading = false;
        context.grid.data = data;
        context.grid.markForCheck();
    });
}, false)
```

<!-- end: Blazor -->

## API References

- [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html)
- [`IgbRowIsland`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRowIsland.html)

## Additional Resources

- [Hierarchical Grid Component](overview.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
