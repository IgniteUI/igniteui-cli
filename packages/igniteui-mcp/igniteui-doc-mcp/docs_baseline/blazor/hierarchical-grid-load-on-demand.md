---
title: "Blazor Hierarchical Grid | Fastest Blazor Hierarchical Table | Infragistics"
description: The Ignite UI for Blazor Hierarchical Grid provides the necessary tools to load data on demand for each child grid that is expanded. That way the volume of data would be greatly reduced and can be retrieved only when the user needs it.
keywords: "Blazor hierarchical grid, igniteui for Blazor, infragistics"
license: commercial
mentionedTypes: ["HierarchicalGrid", "RowIsland"]
namespace: Infragistics.Controls
llms:
  description: "The Ignite UI for Blazor HierarchicalGrid allows fast rendering by requesting the minimum amount of data to be retrieved from the server so that the user can see the result in view and interact with the visible data as quickly as possible."
_tocName: Load on Demand
_premium: true
---
# Hierarchical Grid Load On Demand

The Ignite UI for Blazor [`IgbHierarchicalGrid`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid) allows fast rendering by requesting the minimum amount of data to be retrieved from the server so that the user can see the result in view and interact with the visible data as quickly as possible. Initially only the root grid’s data is retrieved and rendered, only after the user expands a row containing a child grid, he will receive the data for that particular child grid. This mechanism, also known as Load on Demand, can be easily configured to work with any remote data.

This topic demonstrates how to configure Load on Demand by creating a Remote Service Provider that communicates with an already available remote service. Here's the working demo and later we will go through it step by step and describe the process of creating it.

## Blazor Hierarchical Grid Load On Demand Example

```razor
@using IgniteUI.Blazor.Controls
@using Microsoft.Extensions.Logging
@using System.Text.Json
@implements IAsyncDisposable
@inject HierarchicalDataService DataService
@inject ILogger<App> Logger
@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">

        <IgbHierarchicalGrid
            @ref="grid"
            Id="hGrid"
            PrimaryKey="CustomerId"
            Height="600px"
            AutoGenerate="false"
        >
            <IgbColumn Field="CustomerId" Hidden="true"></IgbColumn>
            <IgbColumn Field="CompanyName" Header="Company Name"></IgbColumn>
            <IgbColumn Field="ContactName" Header="Contact Name"></IgbColumn>
            <IgbColumn Field="ContactTitle" Header="Contact Title"></IgbColumn>
            <IgbColumn Field="Address.Country" Header="Country"></IgbColumn>
            <IgbColumn Field="Address.Phone" Header="Phone"></IgbColumn>

            <IgbRowIsland ChildDataKey="Orders" PrimaryKey="OrderId" AutoGenerate="false" GridCreatedScript="OnGridCreated">
                <IgbColumn Field="OrderId" Hidden="true"></IgbColumn>
                <IgbColumn Field="ShipAddress.Country" Header="Ship Country"></IgbColumn>
                <IgbColumn Field="ShipAddress.City" Header="Ship City"></IgbColumn>
                <IgbColumn Field="ShipAddress.Street" Header="Ship Address"></IgbColumn>
                <IgbColumn Field="OrderDate" Header="Order Date" DataType="GridColumnDataType.Date"></IgbColumn>

                <IgbRowIsland ChildDataKey="Details" PrimaryKey="ProductId" AutoGenerate="false" GridCreatedScript="OnGridCreated">
                    <IgbColumn Field="ProductId" Hidden="true"></IgbColumn>
                    <IgbColumn Field="Quantity" Header="Quantity"></IgbColumn>
                    <IgbColumn Field="UnitPrice" Header="Unit Price"></IgbColumn>
                    <IgbColumn Field="Discount" Header="Discount"></IgbColumn>
                </IgbRowIsland>
            </IgbRowIsland>
        </IgbHierarchicalGrid>

    </div>
</div>

@if (!string.IsNullOrEmpty(errorMessage))
{
    <div class="error-message" role="alert">
        <p>@errorMessage</p>
    </div>
}

@code {
    private IgbHierarchicalGrid grid;
    private string errorMessage = string.Empty;
    private DotNetObjectReference<App> serviceReference;

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await grid.EnsureReady();
            serviceReference = DotNetObjectReference.Create(this);
            await JS.InvokeVoidAsync("hierarchicalGridMock.initialize", serviceReference);
            await LoadGridData();
        }
    }

    [JSInvokable]
    public async Task<JsonElement> GetChildData(string key, string parentId)
    {
        try
        {
            if (!string.IsNullOrEmpty(errorMessage))
            {
                errorMessage = string.Empty;
                await InvokeAsync(StateHasChanged);
            }
            var data = await DataService.GetDataAsync(key, parentId);
            // Preserve the CLR field names used by the child-grid columns.
            return JsonSerializer.SerializeToElement(data);
        }
        catch (Exception ex)
        {
            Logger.LogError(ex, "Error loading {Collection} for parent {ParentId}", key, parentId);
            errorMessage = $"Error loading data: {ex.Message}";
            await InvokeAsync(StateHasChanged);
            throw;
        }
    }

    private async Task LoadGridData()
    {
        try
        {
            grid.IsLoading = true;
            errorMessage = string.Empty;
            grid.Data = await DataService.GetDataAsync("Customers", null);
        }
        catch (Exception ex)
        {
            Logger.LogError(ex, "Error loading customers");
            errorMessage = $"Error loading data: {ex.Message}";
            grid.Data = Array.Empty<object>();
        }
        finally
        {
            grid.IsLoading = false;
            StateHasChanged();
        }
    }

    public async ValueTask DisposeAsync()
    {
        try
        {
            await JS.InvokeVoidAsync("hierarchicalGridMock.dispose");
        }
        finally
        {
            serviceReference?.Dispose();
        }
    }
}
```
```csharp
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Infragistics.Samples
{
    /// <summary>
    /// Simulates lazy remote loading with a one-second delay and local data for
    /// Northwind-style customers, 20 orders per customer, and 8 details per order.
    /// </summary>
    public class HierarchicalDataService
    {
        private static readonly CustomerData[] Customers = CreateCustomers();

        private static readonly (int ProductId, decimal UnitPrice)[] Products =
        {
            (1, 18m), (2, 19m), (3, 10m), (4, 22m),
            (5, 21.35m), (6, 25m), (7, 30m), (8, 40m),
            (9, 97m), (10, 31m), (11, 21m), (12, 38m),
            (13, 6m), (14, 23.25m), (15, 15.5m), (16, 17.45m)
        };

        private static readonly OrderData[] Orders = Customers.SelectMany((customer, customerIndex) =>
            Enumerable.Range(1, 20).Select(index => new OrderData
            {
                OrderId = 10247 + customerIndex * 20 + index,
                CustomerId = customer.CustomerId,
                ShipAddress = customer.Address,
                OrderDate = new DateTime(2025, 1, 1).AddDays(customerIndex * 3 + index * 11 + index % 4)
            })).ToArray();

        private static readonly OrderDetailData[] Details = Orders.SelectMany(order =>
            Enumerable.Range(1, 8).Select(index => new OrderDetailData
            {
                OrderId = order.OrderId,
                ProductId = Products[(order.OrderId + index) % Products.Length].ProductId,
                Quantity = 5 * (1 + (order.OrderId + index * 3) % 12),
                UnitPrice = Products[(order.OrderId + index) % Products.Length].UnitPrice,
                Discount = (order.OrderId + index) % 5 == 0 ? 0.15m
                    : (order.OrderId + index) % 3 == 0 ? 0.05m : 0m
            })).ToArray();

        public async Task<object[]> GetDataAsync(string key, object parentId)
        {
            await Task.Delay(TimeSpan.FromSeconds(1));

            return key switch
            {
                "Customers" => Customers,
                "Orders" => Orders.Where(order => order.CustomerId == Convert.ToString(parentId)).ToArray(),
                "Details" => Details.Where(detail => detail.OrderId == Convert.ToInt32(parentId)).ToArray(),
                _ => throw new ArgumentException($"Unknown data collection: {key}", nameof(key))
            };
        }

        private static CustomerData[] CreateCustomers()
        {
            return new[]
            {
                CreateCustomer("ALFKI", "Alfreds Futterkiste", "Maria Anders", "Sales Representative", "Obere Str. 57", "Berlin", "Germany", "030-0074321"),
                CreateCustomer("ANATR", "Ana Trujillo Emparedados y helados", "Ana Trujillo", "Owner", "Avda. de la Constitucion 2222", "Mexico D.F.", "Mexico", "(5) 555-4729"),
                CreateCustomer("ANTON", "Antonio Moreno Taqueria", "Antonio Moreno", "Owner", "Mataderos 2312", "Mexico D.F.", "Mexico", "(5) 555-3932"),
                CreateCustomer("AROUT", "Around the Horn", "Thomas Hardy", "Sales Representative", "120 Hanover Sq.", "London", "UK", "(171) 555-7788"),
                CreateCustomer("BERGS", "Berglunds snabbkop", "Christina Berglund", "Order Administrator", "Berguvsvagen 8", "Lulea", "Sweden", "0921-12 34 65"),
                CreateCustomer("BLAUS", "Blauer See Delikatessen", "Hanna Moos", "Sales Representative", "Forsterstr. 57", "Mannheim", "Germany", "0621-08460"),
                CreateCustomer("BLONP", "Blondesddsl pere et fils", "Frederique Citeaux", "Marketing Manager", "24, place Kleber", "Strasbourg", "France", "88.60.15.31"),
                CreateCustomer("BOLID", "Bolido Comidas preparadas", "Martin Sommer", "Owner", "C/ Araquil, 67", "Madrid", "Spain", "(91) 555 22 82"),
                CreateCustomer("BONAP", "Bon app'", "Laurence Lebihan", "Owner", "12, rue des Bouchers", "Marseille", "France", "91.24.45.40"),
                CreateCustomer("BOTTM", "Bottom-Dollar Markets", "Elizabeth Lincoln", "Accounting Manager", "23 Tsawassen Blvd.", "Tsawassen", "Canada", "(604) 555-4729"),
                CreateCustomer("BSBEV", "B's Beverages", "Victoria Ashworth", "Sales Representative", "Fauntleroy Circus", "London", "UK", "(171) 555-1212"),
                CreateCustomer("CACTU", "Cactus Comidas para llevar", "Patricio Simpson", "Sales Agent", "Cerrito 333", "Buenos Aires", "Argentina", "(1) 135-5555"),
                CreateCustomer("CENTC", "Centro comercial Moctezuma", "Francisco Chang", "Marketing Manager", "Sierras de Granada 9993", "Mexico D.F.", "Mexico", "(5) 555-3392"),
                CreateCustomer("CHOPS", "Chop-suey Chinese", "Yang Wang", "Owner", "Hauptstr. 29", "Bern", "Switzerland", "0452-076545"),
                CreateCustomer("COMMI", "Comercio Mineiro", "Pedro Afonso", "Sales Associate", "Av. dos Lusiadas, 23", "Sao Paulo", "Brazil", "(11) 555-7647"),
                CreateCustomer("CONSH", "Consolidated Holdings", "Elizabeth Brown", "Sales Representative", "Berkeley Gardens 12 Brewery", "London", "UK", "(171) 555-2282"),
                CreateCustomer("DRACD", "Drachenblut Delikatessen", "Sven Ottlieb", "Order Administrator", "Walserweg 21", "Aachen", "Germany", "0241-039123"),
                CreateCustomer("DUMON", "Du monde entier", "Janine Labrune", "Owner", "67, rue des Cinquante Otages", "Nantes", "France", "40.67.88.88"),
                CreateCustomer("EASTC", "Eastern Connection", "Ann Devon", "Sales Agent", "35 King George", "London", "UK", "(171) 555-0297"),
                CreateCustomer("ERNSH", "Ernst Handel", "Roland Mendel", "Sales Manager", "Kirchgasse 6", "Graz", "Austria", "7675-3425"),
                CreateCustomer("FAMIA", "Familia Arquibaldo", "Aria Cruz", "Marketing Assistant", "Rua Oros, 92", "Sao Paulo", "Brazil", "(11) 555-9857"),
                CreateCustomer("FISSA", "FISSA Fabrica Inter. Salchichas S.A.", "Diego Roel", "Accounting Manager", "C/ Moralzarzal, 86", "Madrid", "Spain", "(91) 555 94 44"),
                CreateCustomer("FOLIG", "Folies gourmandes", "Martine Rance", "Assistant Sales Agent", "184, chaussee de Tournai", "Lille", "France", "20.16.10.16"),
                CreateCustomer("FOLKO", "Folk och fa HB", "Maria Larsson", "Owner", "Akergatan 24", "Bracke", "Sweden", "0695-34 67 21"),
                CreateCustomer("FRANK", "Frankenversand", "Peter Franken", "Marketing Manager", "Berliner Platz 43", "Munchen", "Germany", "089-0877310"),
                CreateCustomer("FRANR", "France restauration", "Carine Schmitt", "Marketing Manager", "54, rue Royale", "Nantes", "France", "40.32.21.21"),
                CreateCustomer("FRANS", "Franchi S.p.A.", "Paolo Accorti", "Sales Representative", "Via Monte Bianco 34", "Torino", "Italy", "011-4988260")
            };
        }

        private static CustomerData CreateCustomer(string customerId, string companyName,
            string contactName, string contactTitle, string street, string city, string country, string phone)
        {
            return new CustomerData
            {
                CustomerId = customerId,
                CompanyName = companyName,
                ContactName = contactName,
                ContactTitle = contactTitle,
                Address = new CustomerAddress
                {
                    Street = street,
                    City = city,
                    Country = country,
                    Phone = phone
                }
            };
        }
        public class CustomerData
        {
            public string CustomerId { get; set; }
            public string CompanyName { get; set; }
            public string ContactName { get; set; }
            public string ContactTitle { get; set; }
            public CustomerAddress Address { get; set; }
        }

        public class CustomerAddress
        {
            public string Country { get; set; }
            public string City { get; set; }
            public string Street { get; set; }
            public string Phone { get; set; }
        }

        public class OrderData
        {
            public int OrderId { get; set; }
            public string CustomerId { get; set; }
            public CustomerAddress ShipAddress { get; set; }
            public DateTime OrderDate { get; set; }
        }

        public class OrderDetailData
        {
            public int OrderId { get; set; }
            public int ProductId { get; set; }
            public int Quantity { get; set; }
            public decimal UnitPrice { get; set; }
            public decimal Discount { get; set; }
        }
    }
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

We will be communicating with our backend service over HTTP protocol using the [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch) global function the browsers provide. That way in order to get our data we will need this simple method in our service:

```javascript
function getData(dataState) {
    return fetch(buildUrl(dataState))
        .then((result) => result.json());
}
```

As you can see `buildUrl()` will be the method that will generate our url based on the data that we have received. We return a Promise, since this is executed asynchronously. That way we can later subscribe to it, process it further in our application and pass it to our grid.

### Building our request url

Next we will define how we should build our URL for the GET request. This is where we will be able to get the data for our main grid but also for any child grid inside it. We will use the `Customers` data from  this [topic](https://data-northwind.indigo.design/swagger/index.html) for our root level and use `Orders` and `Details` for the lower levels. The model will differ per application but we will use the following one:

What we first need is the `key` of our table to determine from where to get the data for the desired grid, the primary key of the parent row and its unique ID.

We will define all this in the `dataState` object. An example:

```javascript
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

### Result

Finally, this is how our remote service would look like:

```javascript
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

## Hierarchical Grid Setup

Next we will setup our hierarchical grid and connect it to our remote service provider.

### Template defining

First we will define our hierarchical grid template with the levels of hierarchy that we expect to have. We know that our root grid [`PrimaryKey`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid&member=primaryKey) for the customers is their `customerId`, for their orders on the first level - `orderId` and respectively for order details - `productId`. Knowing each database table and their keys allows us to define our initial template:

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

There is one thing missing in our template though, and that is the data for our root level hierarchical grid, and eventually its children.

We will easily set the data of the root grid after getting its data from the service in our code later, since we can use the `Id="hGrid"` reference.

Setting the data for any child that has been expanded is a bit different. When a row is expanded for the first time, a new child [`IgbHierarchicalGrid`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid) is rendered for it and we need to get the reference for the newly created grid to set its data. That is why each [`IgbRowIsland`](mcp:get_api_reference?platform=blazor&component=IgbRowIsland) component provides the `GridCreated` event that is fired when a new child grid is created for that specific row island. We can use that to get the reference we need for the new grid, request its data from the service, and apply it.

We can use one method for all row islands since we built our service so that it needs only information if it is the root level, the key of the row island, the primary key of the parent row, and its unique identifier. All this information can be accessed either directly from the event arguments, or from the row island responsible for triggering the event.

Let's name the method that we will use `OnGridCreated`.

Since the `GridCreated` event provides the `parentID` property, a reference to the row island as `owner` and the new child `grid` property, it will be passed as the first argument. We are only missing information about the parent row's `primaryKey`, but we can easily determine that based on the row island [`ChildDataKey`](mcp:get_api_reference?platform=blazor&component=IgbRowIsland&member=childDataKey).

The template file, with these changes added, would look like this:

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

### Connecting our service

One of our final steps now will be to connect our previously created service to our hierarchical grid.

We will get a reference to our root grid to set its data. In order to make sure that our grid is rendered before we request its data from the service and assign it, we will use the `Rendered` event. As it doesn't have any parents we can only pass that `rootLevel` is **true**, and the key for it, to the `getData` of our service. Since it returns a Promise we will need to subscribe to it:

```javascript
igRegisterScript("OnGridRendered", () => {
    const grid = document.getElementById("hGrid");

    getData({ parentID: null, rootLevel: true, key: "Customers" }).then(
        (data) => {
            grid.data = data;
            grid.markForCheck();
        });
}, false)
```

Next, we only need to create our `OnGridCreated` method that will request data for any new child grid created.

It will be similar to getting the root level grid data, just this time we will need to pass more information, like `parentID` and `parentKey`. `rootLevel` will be **false** for any child:

```javascript
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

With this, the setup of our application is almost done. This last step aims to improve the user experience by informing the user that the data is still loading so he doesn't have to look at an empty grid in the meantime. That's why the [`IgbHierarchicalGrid`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid) supports a loading indicator that can be displayed while the grid is empty. If new data is received, the loading indicator will hide and the data will be rendered.

### Setup of loading indication

The [`IgbHierarchicalGrid`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid) can display a loading indicator by setting the [`IsLoading`](mcp:get_api_reference?platform=blazor&component=IgbGridBaseDirective&member=isLoading) property to **true** while there is no data. We need to set it initially for the root grid and also when creating new child grids, until their data is loaded. We could always set it to **true** in our template, but we want to hide it and display that the grid has no data if the service returns an empty array by setting it to **false**.

In this case the final version of our configuration would look like this:

```javascript
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

## API References
[`IgbHierarchicalGrid`](mcp:get_api_reference?platform=blazor&component=IgbHierarchicalGrid)
[`IgbRowIsland`](mcp:get_api_reference?platform=blazor&component=IgbRowIsland)
## Additional Resources

- [Hierarchical Grid Component](./overview.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
