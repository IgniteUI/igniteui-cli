---
title: Blazor Grid Remote Data Operations - Ignite UI for Blazor
_description: Start using Angular remote data operations like remote filtering, remote sorting, and remote scrolling to load data from a server with Ignite UI for Blazor.
_keywords: Remote Data, Paging, Blazor, Grid, IgbGrid, Ignite UI for Blazor, Infragistics
_license: commercial
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
mentionedTypes: ["GridBaseDirective"]
namespace: Infragistics.Controls
_tocName: Remote Data Operations
_premium: true
---

# Blazor Grid Remote Data Operations

By default, the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) uses its own logic for performing data operations.

You can perform these tasks remotely and feed the resulting data to the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) by taking advantage of certain inputs and events, which are exposed by the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html).

## Infinite Scroll

A popular design for scenarios requiring fetching data by chunks from an end-point is the so-called infinite scroll. For data grids, it is characterized by continuous increase of the loaded data triggered by the end-user scrolling all the way to the bottom. The next paragraphs explain how you can use the available API to easily achieve infinite scrolling in [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html).

To implement infinite scroll, you have to fetch the data in chunks. The data that is already fetched should be stored locally and you have to determine the length of a chunk and how many chunks there are. You also have to keep a track of the last visible data row index in the grid. In this way, using the `StartIndex` and `ChunkSize` properties, you can determine if the user scrolls up and you have to show them already fetched data or scrolls down and you have to fetch more data from the end-point.

The first thing to do is fetch the first chunk of the data. Setting the [`TotalItemCount`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html#IgniteUI_Blazor_Controls_IgbGrid_TotalItemCount) property is important, as it allows the grid to size its scrollbar correctly.

```razor
@code {
        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            if (firstRender)
            {
                var grid = this.grid;
                grid.IsLoading = true;
                double dataViewSize = 480.0 / 50.0;
                this.PageSize = Convert.ToInt32(Math.Floor(dataViewSize * 1.5));
                var data = await GetDataRemote(1, this.PageSize);
                this.CachedData = data;
                this.LocalData = this.CachedData;
                grid.TotalItemCount = (this.PageSize * this.Page) + 1;
                double pageCount = Math.Ceiling((double)this.TotalItems / (double)this.PageSize);
                this.TotalPageCount = (int)pageCount;
                grid.IsLoading = false;
                StateHasChanged();
            }

        }
}
```

Additionally, you have to subscribe to the `DataPreLoad` output, so that you can provide the data needed by the grid when it tries to display a different chunk, rather than the currently loaded one. In the event handler, you have to determine whether to fetch new data or return data, that's already cached locally.

```razor
<IgbGrid AutoGenerate="false"
         Height="480px"
         Name="grid"
         Id="grid"
         Data="LocalData"
         @ref="grid"
         DataPreLoad="OnDataPreLoad">
    <IgbColumn Name="ID"
               Field="ProductID"
               Header="ID">
    </IgbColumn>

    <IgbColumn Name="ProductName"
               Field="ProductName"
               Header="Product Name">
    </IgbColumn>

    <IgbColumn Name="QuantityPerUnit"
               Field="QuantityPerUnit"
               Header="Quantity Per Unit">
    </IgbColumn>

    <IgbColumn Name="UnitPrice"
               Field="UnitPrice"
               Header="Unit Price">
    </IgbColumn>

    <IgbColumn Name="OrderDate"
               Field="OrderDate"
               Header="Order Date">
    </IgbColumn>

    <IgbColumn Name="Discontinued"
               Field="Discontinued"
               Header="Discontinued">
    </IgbColumn>

</IgbGrid>
@code {
        private IgbGrid grid;
        public async void OnDataPreLoad(IgbForOfStateEventArgs e)
        {
            int chunkSize = (int)e.Detail.ChunkSize;
            int startIndex = (int)e.Detail.StartIndex;
            int totalCount = (int)this.grid.TotalItemCount;

            bool isLastChunk = totalCount == startIndex + chunkSize;
            // when last chunk reached load another page of data
            if (isLastChunk)
            {
                if (this.TotalPageCount == this.Page)
                {
                    this.LocalData = this.CachedData.Skip(startIndex).Take(chunkSize).ToList();
                    return;
                }

                // add next page of remote data to cache
                this.grid.IsLoading = true;
                this.Page++;
                var remoteData = await GetDataRemote(this.Page, this.PageSize);
                this.CachedData.AddRange(remoteData);

                var data = this.CachedData.Skip(startIndex).Take(chunkSize);
                this.LocalData = data.ToList();
                this.grid.IsLoading = false;
                this.grid.TotalItemCount = Math.Min(this.Page * this.PageSize, this.TotalItems);
            }
            else
            {
                var data = this.CachedData.Skip(startIndex).Take(chunkSize).ToList();
                this.LocalData = data;
            }
        }
}
```

### Infinite Scroll Demo

```razor
@using IgniteUI.Blazor.Controls
@using System.Net.Http

<div class="container vertical">
    <div class="container vertical fill">
        <IgbGrid AutoGenerate="false"
                 Height="480px"
                 Name="grid"
                 Id="grid"
                 Data="LocalData"
                 @ref="grid"
                 DataPreLoad="OnDataPreLoad">
            <IgbColumn Name="ID"
                       Field="ProductID"
                       Header="ID">
            </IgbColumn>

            <IgbColumn Name="ProductName"
                       Field="ProductName"
                       Header="Product Name">
            </IgbColumn>

            <IgbColumn Name="QuantityPerUnit"
                       Field="QuantityPerUnit"
                       Header="Quantity Per Unit">
            </IgbColumn>

            <IgbColumn Name="UnitPrice"
                       Field="UnitPrice"
                       Header="Unit Price">
            </IgbColumn>

            <IgbColumn Name="OrderDate"
                       Field="OrderDate"
                       Header="Order Date">
            </IgbColumn>

            <IgbColumn Name="Discontinued"
                       Field="Discontinued"
                       Header="Discontinued">
            </IgbColumn>

        </IgbGrid>
    </div>
</div>

@code {
    @code {
        protected readonly HttpClient Http = new HttpClient();
        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            if (firstRender)
            {
                var grid = this.grid;
                grid.IsLoading = true;
                double dataViewSize = 480.0 / 50.0;
                this.PageSize = Convert.ToInt32(Math.Floor(dataViewSize * 1.5));
                // additional delay for TotalItemCount setter.
                await Task.Delay(500);
                var data = await GetDataRemote(1, this.PageSize);


                this.CachedData = data;
                this.LocalData = this.CachedData;

                // for some reason if TotalItemCount is the same as the loaded records count it does not trigger loading events.
                // so setting it to number of records + 1
                grid.TotalItemCount = (this.PageSize * this.Page) + 1;
                double pageCount = Math.Ceiling((double)this.TotalItems / (double)this.PageSize);
                this.TotalPageCount = (int)pageCount;
                grid.IsLoading = false;
                StateHasChanged();
            }

        }

        public async Task<List<NwinCustomdDataItem>> GetDataRemote(int page, int pageSize)
        {
            var url = "https://services.odata.org/northwind/northwind.svc/Products";
            int skip = (page - 1) * pageSize;
            string query = String.Format("{0}?$format=json&$skip={1}&$top={2}", url, skip, pageSize);
            NwindModel res = await Http.GetFromJsonAsync<NwindModel>(query);
            this.TotalItems = res.Count;
            return res.Value;

        }

        public async void OnDataPreLoad(IgbForOfStateEventArgs e)
        {
            int chunkSize = (int)e.Detail.ChunkSize;
            int startIndex = (int)e.Detail.StartIndex;
            int totalCount = (int)this.grid.TotalItemCount;

            bool isLastChunk = totalCount == startIndex + chunkSize;
            // when last chunk reached load another page of data
            if (isLastChunk)
            {
                if (this.TotalPageCount == this.Page)
                {
                    this.LocalData = this.CachedData.Skip(startIndex).Take(chunkSize).ToList();
                    return;
                }

                // add next page of remote data to cache
                this.grid.IsLoading = true;
                this.Page++;
                var remoteData = await GetDataRemote(this.Page, this.PageSize);
                this.CachedData.AddRange(remoteData);

                var data = this.CachedData.Skip(startIndex).Take(chunkSize);
                this.LocalData = data.ToList();
                this.grid.IsLoading = false;
                this.grid.TotalItemCount = Math.Min(this.Page * this.PageSize, this.TotalItems);
            }
            else
            {
                var data = this.CachedData.Skip(startIndex).Take(chunkSize).ToList();
                this.LocalData = data;
            }
        }

        private IgbGrid grid;
        private int Page = 1;
        private int PageSize = 0;
        private int ChunkSize = 10;
        private int TotalPageCount = 0;
        private int TotalItems = 0;
        public List<NwinCustomdDataItem> CachedData = new List<NwinCustomdDataItem>();

        public List<NwinCustomdDataItem> LocalData = new List<NwinCustomdDataItem>();

    }

}
```
```csharp
using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

public class NwinCustomdDataItem
{
    public double ProductID { get; set; }
    public string ProductName { get; set; }
    public double SupplierID { get; set; }
    public double CategoryID { get; set; }
    public string QuantityPerUnit { get; set; }
    public double UnitPrice { get; set; }
    public double UnitsInStock { get; set; }
    public double UnitsOnOrder { get; set; }
    public double ReorderLevel { get; set; }
    public bool Discontinued { get; set; }
    public string OrderDate { get; set; }
    public double Rating { get; set; }
    public List<NwinCustomdDataItem_LocationsItem> Locations { get; set; }
}

public class NwinCustomdDataItem_LocationsItem
{
    public string Shop { get; set; }
    public string LastInventory { get; set; }
}

public class NwindModel
{
    [JsonPropertyName("@odata.count")]
    public int Count { get; set; } = 77;

    [JsonPropertyName("value")]
    public List<NwinCustomdDataItem> Value { get; set; }
}
```


## Remote Paging

<!-- ComponentStart: Grid -->

The paging feature can operate with remote data. In order to demonstrate this let's first declare our service that will be responsible for data fetching. We will need the count of all data items in order to calculate the page count. This logic will be added to our service.

As Blazor Server is already a remote instance, unlike the demos in the other platforms we do not need to set another remote instance for the data, as the data is already remote. In order to do remote paging, we just need to set a couple of methods ins the data class

```razor
        public Task<List<NwindDataItem>> GetData(int index, int perPage)
        {
            var itemsToReturn = items.Skip(index).Take(perPage).ToList();
            return Task.FromResult(itemsToReturn);
        }

        public Task<int> GetDataLength()
        {
            return Task.FromResult(items.Count);
        }
```

<!-- ComponentEnd: Grid -->

After declaring the service, we need to create a component, which will be responsible for the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) construction and data subscription.

<!-- ComponentStart: Grid -->

First we should load some data to the grid. It is best to do after the grid has been rendered to avoid any timing issues.

```razor
    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await Paginate(0, PerPage);
            totalRecordsCount = await NwindDataService.GetDataLength();
            StateHasChanged();
        }
    }
```

After that we just need to bind the paging events to our custom methods, and remote paging is set:

```razor
<IgbPaginator @ref="pager" PageChange="OnPageChange" PerPageChange="OnPerPageChange" TotalRecords="totalRecordsCount"></IgbPaginator>

....

@code {
        private async void OnPerPageChange(IgbNumberEventArgs e)
    {
        PerPage = e.Detail;
        await Paginate(0, e.Detail);
    }

    private async void OnPageChange(IgbNumberEventArgs e)
    {
        await Paginate(e.Detail, PerPage);
    }
    ...
        private async Task Paginate(double page, double perPage)
    {
        this.page = page;
        double skip = this.page * PerPage;
        double top = PerPage;

        try
        {
            data = await NwindDataService.GetData(Convert.ToInt32(skip), Convert.ToInt32(perPage));
            isLoading = false;
            UpdateUI();
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine($"Error fetching data: {ex.Message}");
        }
    }
}
```

For further reference please check the full demo bellow:

### Grid Remote Paging Demo

```razor
@using IgniteUI.Blazor.Controls
@inject RemotePagingService RemoteService

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid @ref="grid1" AutoGenerate="false" Moving="true" PagingMode="GridPagingMode.Remote" PrimaryKey="CustomerId">
            <IgbPaginator @ref="pager" PagingDone="OnPagingDone" PerPageChange="OnPerPageChange" TotalRecords="totalRecordsCount" PerPage="15"></IgbPaginator>
            <IgbColumn Name="CustomerId" Field="CustomerId" Header="Customer ID" Hidden="true"></IgbColumn>
            <IgbColumn Name="CompanyName" Field="CompanyName" Header="Company Name"></IgbColumn>
            <IgbColumn Name="ContactName" Field="ContactName" Header="Contact Name"></IgbColumn>
            <IgbColumn Name="ContactTitle" Field="ContactTitle" Header="Contact Title"></IgbColumn>
            <IgbColumn Name="Country" Field="Address.Country" Header="Country"></IgbColumn>
            <IgbColumn Name="Phone" Field="Address.Phone" Header="Phone"></IgbColumn>
        </IgbGrid>
    </div>
</div>

@if (!string.IsNullOrEmpty(errorMessage))
{
    <div class="error-message">
        <p>@errorMessage</p>
    </div>
}

@code {
    private CustomerData[] data = Array.Empty<CustomerData>();
    private IgbGrid grid1;
    private int totalRecordsCount;
    private int page = 0;
    private int perPage = 15;
    private IgbPaginator pager;
    private string errorMessage = string.Empty;

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await LoadGridData(page, perPage);
        }
    }

    private async Task LoadGridData(int pageIndex, int pageSize)
    {
        try
        {
            grid1.IsLoading = true;
            errorMessage = string.Empty;
            
            var response = await RemoteService.GetDataWithPagingAsync(pageIndex, pageSize);
            data = response.Items;
            grid1.Data = data;
            totalRecordsCount = response.TotalRecordsCount;
            
            grid1.IsLoading = false;
            StateHasChanged();
        }
        catch (HttpRequestException)
        {
            errorMessage = "Network error. Please check your connection.";
            data = Array.Empty<CustomerData>();
            grid1.Data = data;
            grid1.IsLoading = false;
            StateHasChanged();
        }
        catch (Exception ex)
        {
            errorMessage = $"Error loading data: {ex.Message}";
            data = Array.Empty<CustomerData>();
            grid1.Data = data;
            grid1.IsLoading = false;
            StateHasChanged();
        }
    }

    private async Task OnPerPageChange(IgbNumberEventArgs e)
    {
        perPage = (int)e.Detail;
        await LoadGridData(0, perPage);
    }

    private async Task OnPagingDone(IgbPageEventArgs e)
    {
        page = (int)e.Detail.Current;
        await LoadGridData(page, perPage);
    }
}
```
```csharp
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;

namespace Infragistics.Samples
{
    public class FGridDataItem
    {
        public double ProductID { get; set; }
        public string ProductName { get; set; }
        public double SupplierID { get; set; }
        public double CategoryID { get; set; }
        public string QuantityPerUnit { get; set; }
        public double UnitPrice { get; set; }
        public double UnitsInStock { get; set; }
        public double UnitsOnOrder { get; set; }
        public double ReorderLevel { get; set; }
        public bool Discontinued { get; set; }
        public string OrderDate { get; set; }
        public double Rating { get; set; }
        public List<FGridDataItem_LocationsItem> Locations { get; set; }
    }
    public class FGridDataItem_LocationsItem
    {
        public string Shop { get; set; }
        public string LastInventory { get; set; }
    }

    public class FlatGridData
        : List<FGridDataItem>
    {

        public List<FGridDataItem> items;

        public FlatGridData()
        {
            items = GenerateSampleData();
        }
        private List<FGridDataItem> GenerateSampleData()
        {
            var sampleData = new List<FGridDataItem>();

            sampleData.Add(new FGridDataItem()
            {
                ProductID = 1,
                ProductName = @"Chai",
                SupplierID = 1,
                CategoryID = 1,
                QuantityPerUnit = @"10 boxes x 20 bags",
                UnitPrice = 18,
                UnitsInStock = 39,
                UnitsOnOrder = 30,
                ReorderLevel = 10,
                Discontinued = false,
                OrderDate = @"2012-02-12",
                Rating = 5,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Farmer Market",
                    LastInventory = @"2018-04-04"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 2,
                ProductName = @"Chang",
                SupplierID = 1,
                CategoryID = 1,
                QuantityPerUnit = @"24 - 12 oz bottles",
                UnitPrice = 19,
                UnitsInStock = 17,
                UnitsOnOrder = 40,
                ReorderLevel = 25,
                Discontinued = true,
                OrderDate = @"2003-03-17",
                Rating = 5,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Street Market",
                    LastInventory = @"2018-12-12"
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"24/7 Market",
                    LastInventory = @"2018-11-11"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 4,
                ProductName = @"Chef Antons Cajun Seasoning",
                SupplierID = 2,
                CategoryID = 2,
                QuantityPerUnit = @"48 - 6 oz jars",
                UnitPrice = 22,
                UnitsInStock = 53,
                UnitsOnOrder = 30,
                ReorderLevel = 0,
                Discontinued = false,
                OrderDate = @"2016-03-17",
                Rating = 3,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Farmer Market",
                    LastInventory = @"2018-04-04"
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Street Market",
                    LastInventory = @"2018-12-12"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 5,
                ProductName = @"Chef Antons Gumbo Mix",
                SupplierID = 2,
                CategoryID = 2,
                QuantityPerUnit = @"36 boxes",
                UnitPrice = 21.35,
                UnitsInStock = 0,
                UnitsOnOrder = 30,
                ReorderLevel = 0,
                Discontinued = true,
                OrderDate = @"2011-11-11",
                Rating = 5,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Farmer Market",
                    LastInventory = @"2018-04-04"
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Street Market",
                    LastInventory = @"2018-12-12"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 8,
                ProductName = @"Northwoods Cranberry Sauce",
                SupplierID = 3,
                CategoryID = 2,
                QuantityPerUnit = @"12 - 12 oz jars",
                UnitPrice = 40,
                UnitsInStock = 6,
                UnitsOnOrder = 30,
                ReorderLevel = 0,
                Discontinued = false,
                OrderDate = @"2018-01-17",
                Rating = 4,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Farmer Market",
                    LastInventory = @"2018-04-04"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 9,
                ProductName = @"Mishi Kobe Niku",
                SupplierID = 4,
                CategoryID = 6,
                QuantityPerUnit = @"18 - 500 g pkgs.",
                UnitPrice = 97,
                UnitsInStock = 29,
                UnitsOnOrder = 30,
                ReorderLevel = 0,
                Discontinued = true,
                OrderDate = @"2010-02-17",
                Rating = 4,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Farmer Market",
                    LastInventory = @"2018-04-04"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 12,
                ProductName = @"Queso Manchego La Pastora",
                SupplierID = 5,
                CategoryID = 4,
                QuantityPerUnit = @"10 - 500 g pkgs.",
                UnitPrice = 38,
                UnitsInStock = 86,
                UnitsOnOrder = 30,
                ReorderLevel = 0,
                Discontinued = false,
                OrderDate = @"2015-11-17",
                Rating = 3,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Street Market",
                    LastInventory = @"2018-12-12"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 15,
                ProductName = @"Genen Shouyu",
                SupplierID = 6,
                CategoryID = 2,
                QuantityPerUnit = @"24 - 250 ml bottles",
                UnitPrice = 15.5,
                UnitsInStock = 39,
                UnitsOnOrder = 30,
                ReorderLevel = 5,
                Discontinued = false,
                OrderDate = @"2014-03-17",
                Rating = 4,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Wall Market",
                    LastInventory = @"2018-12-06"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 16,
                ProductName = @"Pavlova",
                SupplierID = 7,
                CategoryID = 3,
                QuantityPerUnit = @"32 - 500 g boxes",
                UnitPrice = 17.45,
                UnitsInStock = 29,
                UnitsOnOrder = 30,
                ReorderLevel = 10,
                Discontinued = false,
                OrderDate = @"2018-03-28",
                Rating = 2,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Street Market",
                    LastInventory = @"2018-12-12"
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"24/7 Market",
                    LastInventory = @"2018-11-11"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 17,
                ProductName = @"Alice Mutton",
                SupplierID = 7,
                CategoryID = 6,
                QuantityPerUnit = @"20 - 1 kg tins",
                UnitPrice = 39,
                UnitsInStock = 0,
                UnitsOnOrder = 30,
                ReorderLevel = 0,
                Discontinued = true,
                OrderDate = @"2015-08-17",
                Rating = 2,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Super Market",
                    LastInventory = @"2018-09-09"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 19,
                ProductName = @"Teatime Chocolate Biscuits",
                SupplierID = 8,
                CategoryID = 3,
                QuantityPerUnit = @"",
                UnitPrice = 9.2,
                UnitsInStock = 25,
                UnitsOnOrder = 30,
                ReorderLevel = 5,
                Discontinued = false,
                OrderDate = @"2001-03-17",
                Rating = 2,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Farmer Market",
                    LastInventory = @"2018-04-04"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 2,
                ProductName = @"Chang",
                SupplierID = 1,
                CategoryID = 1,
                QuantityPerUnit = @"24 - 12 oz bottles",
                UnitPrice = 19,
                UnitsInStock = 17,
                UnitsOnOrder = 40,
                ReorderLevel = 25,
                Discontinued = true,
                OrderDate = @"2003-03-17",
                Rating = 5,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Street Market",
                    LastInventory = @"2018-12-12"
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"24/7 Market",
                    LastInventory = @"2018-11-11"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 4,
                ProductName = @"Chef Antons Cajun Seasoning",
                SupplierID = 2,
                CategoryID = 2,
                QuantityPerUnit = @"48 - 6 oz jars",
                UnitPrice = 22,
                UnitsInStock = 53,
                UnitsOnOrder = 30,
                ReorderLevel = 0,
                Discontinued = false,
                OrderDate = @"2016-03-17",
                Rating = 3,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Farmer Market",
                    LastInventory = @"2018-04-04"
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Street Market",
                    LastInventory = @"2018-12-12"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 5,
                ProductName = @"Chef Antons Gumbo Mix",
                SupplierID = 2,
                CategoryID = 2,
                QuantityPerUnit = @"36 boxes",
                UnitPrice = 21.35,
                UnitsInStock = 0,
                UnitsOnOrder = 30,
                ReorderLevel = 0,
                Discontinued = true,
                OrderDate = @"2011-11-11",
                Rating = 5,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Farmer Market",
                    LastInventory = @"2018-04-04"
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Street Market",
                    LastInventory = @"2018-12-12"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 8,
                ProductName = @"Northwoods Cranberry Sauce",
                SupplierID = 3,
                CategoryID = 2,
                QuantityPerUnit = @"12 - 12 oz jars",
                UnitPrice = 40,
                UnitsInStock = 6,
                UnitsOnOrder = 30,
                ReorderLevel = 0,
                Discontinued = false,
                OrderDate = @"2018-01-17",
                Rating = 4,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Farmer Market",
                    LastInventory = @"2018-04-04"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 9,
                ProductName = @"Mishi Kobe Niku",
                SupplierID = 4,
                CategoryID = 6,
                QuantityPerUnit = @"18 - 500 g pkgs.",
                UnitPrice = 97,
                UnitsInStock = 29,
                UnitsOnOrder = 30,
                ReorderLevel = 0,
                Discontinued = true,
                OrderDate = @"2010-02-17",
                Rating = 4,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Farmer Market",
                    LastInventory = @"2018-04-04"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 12,
                ProductName = @"Queso Manchego La Pastora",
                SupplierID = 5,
                CategoryID = 4,
                QuantityPerUnit = @"10 - 500 g pkgs.",
                UnitPrice = 38,
                UnitsInStock = 86,
                UnitsOnOrder = 30,
                ReorderLevel = 0,
                Discontinued = false,
                OrderDate = @"2015-11-17",
                Rating = 3,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Street Market",
                    LastInventory = @"2018-12-12"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 15,
                ProductName = @"Genen Shouyu",
                SupplierID = 6,
                CategoryID = 2,
                QuantityPerUnit = @"24 - 250 ml bottles",
                UnitPrice = 15.5,
                UnitsInStock = 39,
                UnitsOnOrder = 30,
                ReorderLevel = 5,
                Discontinued = false,
                OrderDate = @"2014-03-17",
                Rating = 4,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Wall Market",
                    LastInventory = @"2018-12-06"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 16,
                ProductName = @"Pavlova",
                SupplierID = 7,
                CategoryID = 3,
                QuantityPerUnit = @"32 - 500 g boxes",
                UnitPrice = 17.45,
                UnitsInStock = 29,
                UnitsOnOrder = 30,
                ReorderLevel = 10,
                Discontinued = false,
                OrderDate = @"2018-03-28",
                Rating = 2,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Street Market",
                    LastInventory = @"2018-12-12"
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"24/7 Market",
                    LastInventory = @"2018-11-11"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 17,
                ProductName = @"Alice Mutton",
                SupplierID = 7,
                CategoryID = 6,
                QuantityPerUnit = @"20 - 1 kg tins",
                UnitPrice = 39,
                UnitsInStock = 0,
                UnitsOnOrder = 30,
                ReorderLevel = 0,
                Discontinued = true,
                OrderDate = @"2015-08-17",
                Rating = 2,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Super Market",
                    LastInventory = @"2018-09-09"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 19,
                ProductName = @"Teatime Chocolate Biscuits",
                SupplierID = 8,
                CategoryID = 3,
                QuantityPerUnit = @"",
                UnitPrice = 9.2,
                UnitsInStock = 25,
                UnitsOnOrder = 30,
                ReorderLevel = 5,
                Discontinued = false,
                OrderDate = @"2001-03-17",
                Rating = 2,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Farmer Market",
                    LastInventory = @"2018-04-04"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 2,
                ProductName = @"Chang",
                SupplierID = 1,
                CategoryID = 1,
                QuantityPerUnit = @"24 - 12 oz bottles",
                UnitPrice = 19,
                UnitsInStock = 17,
                UnitsOnOrder = 40,
                ReorderLevel = 25,
                Discontinued = true,
                OrderDate = @"2003-03-17",
                Rating = 5,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Street Market",
                    LastInventory = @"2018-12-12"
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"24/7 Market",
                    LastInventory = @"2018-11-11"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 4,
                ProductName = @"Chef Antons Cajun Seasoning",
                SupplierID = 2,
                CategoryID = 2,
                QuantityPerUnit = @"48 - 6 oz jars",
                UnitPrice = 22,
                UnitsInStock = 53,
                UnitsOnOrder = 30,
                ReorderLevel = 0,
                Discontinued = false,
                OrderDate = @"2016-03-17",
                Rating = 3,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Farmer Market",
                    LastInventory = @"2018-04-04"
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Street Market",
                    LastInventory = @"2018-12-12"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 5,
                ProductName = @"Chef Antons Gumbo Mix",
                SupplierID = 2,
                CategoryID = 2,
                QuantityPerUnit = @"36 boxes",
                UnitPrice = 21.35,
                UnitsInStock = 0,
                UnitsOnOrder = 30,
                ReorderLevel = 0,
                Discontinued = true,
                OrderDate = @"2011-11-11",
                Rating = 5,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Farmer Market",
                    LastInventory = @"2018-04-04"
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Street Market",
                    LastInventory = @"2018-12-12"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 8,
                ProductName = @"Northwoods Cranberry Sauce",
                SupplierID = 3,
                CategoryID = 2,
                QuantityPerUnit = @"12 - 12 oz jars",
                UnitPrice = 40,
                UnitsInStock = 6,
                UnitsOnOrder = 30,
                ReorderLevel = 0,
                Discontinued = false,
                OrderDate = @"2018-01-17",
                Rating = 4,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Farmer Market",
                    LastInventory = @"2018-04-04"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 9,
                ProductName = @"Mishi Kobe Niku",
                SupplierID = 4,
                CategoryID = 6,
                QuantityPerUnit = @"18 - 500 g pkgs.",
                UnitPrice = 97,
                UnitsInStock = 29,
                UnitsOnOrder = 30,
                ReorderLevel = 0,
                Discontinued = true,
                OrderDate = @"2010-02-17",
                Rating = 4,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Farmer Market",
                    LastInventory = @"2018-04-04"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 12,
                ProductName = @"Queso Manchego La Pastora",
                SupplierID = 5,
                CategoryID = 4,
                QuantityPerUnit = @"10 - 500 g pkgs.",
                UnitPrice = 38,
                UnitsInStock = 86,
                UnitsOnOrder = 30,
                ReorderLevel = 0,
                Discontinued = false,
                OrderDate = @"2015-11-17",
                Rating = 3,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Street Market",
                    LastInventory = @"2018-12-12"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 15,
                ProductName = @"Genen Shouyu",
                SupplierID = 6,
                CategoryID = 2,
                QuantityPerUnit = @"24 - 250 ml bottles",
                UnitPrice = 15.5,
                UnitsInStock = 39,
                UnitsOnOrder = 30,
                ReorderLevel = 5,
                Discontinued = false,
                OrderDate = @"2014-03-17",
                Rating = 4,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Wall Market",
                    LastInventory = @"2018-12-06"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 16,
                ProductName = @"Pavlova",
                SupplierID = 7,
                CategoryID = 3,
                QuantityPerUnit = @"32 - 500 g boxes",
                UnitPrice = 17.45,
                UnitsInStock = 29,
                UnitsOnOrder = 30,
                ReorderLevel = 10,
                Discontinued = false,
                OrderDate = @"2018-03-28",
                Rating = 2,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Street Market",
                    LastInventory = @"2018-12-12"
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"24/7 Market",
                    LastInventory = @"2018-11-11"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 17,
                ProductName = @"Alice Mutton",
                SupplierID = 7,
                CategoryID = 6,
                QuantityPerUnit = @"20 - 1 kg tins",
                UnitPrice = 39,
                UnitsInStock = 0,
                UnitsOnOrder = 30,
                ReorderLevel = 0,
                Discontinued = true,
                OrderDate = @"2015-08-17",
                Rating = 2,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Super Market",
                    LastInventory = @"2018-09-09"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 19,
                ProductName = @"Teatime Chocolate Biscuits",
                SupplierID = 8,
                CategoryID = 3,
                QuantityPerUnit = @"",
                UnitPrice = 9.2,
                UnitsInStock = 25,
                UnitsOnOrder = 30,
                ReorderLevel = 5,
                Discontinued = false,
                OrderDate = @"2001-03-17",
                Rating = 2,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Farmer Market",
                    LastInventory = @"2018-04-04"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 2,
                ProductName = @"Chang",
                SupplierID = 1,
                CategoryID = 1,
                QuantityPerUnit = @"24 - 12 oz bottles",
                UnitPrice = 19,
                UnitsInStock = 17,
                UnitsOnOrder = 40,
                ReorderLevel = 25,
                Discontinued = true,
                OrderDate = @"2003-03-17",
                Rating = 5,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Street Market",
                    LastInventory = @"2018-12-12"
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"24/7 Market",
                    LastInventory = @"2018-11-11"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 4,
                ProductName = @"Chef Antons Cajun Seasoning",
                SupplierID = 2,
                CategoryID = 2,
                QuantityPerUnit = @"48 - 6 oz jars",
                UnitPrice = 22,
                UnitsInStock = 53,
                UnitsOnOrder = 30,
                ReorderLevel = 0,
                Discontinued = false,
                OrderDate = @"2016-03-17",
                Rating = 3,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Farmer Market",
                    LastInventory = @"2018-04-04"
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Street Market",
                    LastInventory = @"2018-12-12"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 5,
                ProductName = @"Chef Antons Gumbo Mix",
                SupplierID = 2,
                CategoryID = 2,
                QuantityPerUnit = @"36 boxes",
                UnitPrice = 21.35,
                UnitsInStock = 0,
                UnitsOnOrder = 30,
                ReorderLevel = 0,
                Discontinued = true,
                OrderDate = @"2011-11-11",
                Rating = 5,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Farmer Market",
                    LastInventory = @"2018-04-04"
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Street Market",
                    LastInventory = @"2018-12-12"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 8,
                ProductName = @"Northwoods Cranberry Sauce",
                SupplierID = 3,
                CategoryID = 2,
                QuantityPerUnit = @"12 - 12 oz jars",
                UnitPrice = 40,
                UnitsInStock = 6,
                UnitsOnOrder = 30,
                ReorderLevel = 0,
                Discontinued = false,
                OrderDate = @"2018-01-17",
                Rating = 4,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Farmer Market",
                    LastInventory = @"2018-04-04"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 9,
                ProductName = @"Mishi Kobe Niku",
                SupplierID = 4,
                CategoryID = 6,
                QuantityPerUnit = @"18 - 500 g pkgs.",
                UnitPrice = 97,
                UnitsInStock = 29,
                UnitsOnOrder = 30,
                ReorderLevel = 0,
                Discontinued = true,
                OrderDate = @"2010-02-17",
                Rating = 4,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Farmer Market",
                    LastInventory = @"2018-04-04"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 12,
                ProductName = @"Queso Manchego La Pastora",
                SupplierID = 5,
                CategoryID = 4,
                QuantityPerUnit = @"10 - 500 g pkgs.",
                UnitPrice = 38,
                UnitsInStock = 86,
                UnitsOnOrder = 30,
                ReorderLevel = 0,
                Discontinued = false,
                OrderDate = @"2015-11-17",
                Rating = 3,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Street Market",
                    LastInventory = @"2018-12-12"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 15,
                ProductName = @"Genen Shouyu",
                SupplierID = 6,
                CategoryID = 2,
                QuantityPerUnit = @"24 - 250 ml bottles",
                UnitPrice = 15.5,
                UnitsInStock = 39,
                UnitsOnOrder = 30,
                ReorderLevel = 5,
                Discontinued = false,
                OrderDate = @"2014-03-17",
                Rating = 4,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Wall Market",
                    LastInventory = @"2018-12-06"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 16,
                ProductName = @"Pavlova",
                SupplierID = 7,
                CategoryID = 3,
                QuantityPerUnit = @"32 - 500 g boxes",
                UnitPrice = 17.45,
                UnitsInStock = 29,
                UnitsOnOrder = 30,
                ReorderLevel = 10,
                Discontinued = false,
                OrderDate = @"2018-03-28",
                Rating = 2,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Street Market",
                    LastInventory = @"2018-12-12"
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"24/7 Market",
                    LastInventory = @"2018-11-11"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 17,
                ProductName = @"Alice Mutton",
                SupplierID = 7,
                CategoryID = 6,
                QuantityPerUnit = @"20 - 1 kg tins",
                UnitPrice = 39,
                UnitsInStock = 0,
                UnitsOnOrder = 30,
                ReorderLevel = 0,
                Discontinued = true,
                OrderDate = @"2015-08-17",
                Rating = 2,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
                },
                new FGridDataItem_LocationsItem()
                {
                    Shop = @"Super Market",
                    LastInventory = @"2018-09-09"
                }}

            });
            sampleData.Add(new FGridDataItem()
            {
                ProductID = 19,
                ProductName = @"Teatime Chocolate Biscuits",
                SupplierID = 8,
                CategoryID = 3,
                QuantityPerUnit = @"",
                UnitPrice = 9.2,
                UnitsInStock = 25,
                UnitsOnOrder = 30,
                ReorderLevel = 5,
                Discontinued = false,
                OrderDate = @"2001-03-17",
                Rating = 2,
                Locations = new List<FGridDataItem_LocationsItem>()
            {
                new FGridDataItem_LocationsItem()
                new FGridDataItem_LocationsItem()
        }
        public Task<List<FGridDataItem>> GetData(int index, int perPage)
        {
            var itemsToReturn = items.Skip(index).Take(perPage).ToList();
            return Task.FromResult(itemsToReturn);
        }

        public Task<int> GetDataLength()
        {
            return Task.FromResult(items.Count);
        }
    }
}
```
```csharp
using System.Net.Http;
using System.Threading.Tasks;
using System.Text.Json;

namespace Infragistics.Samples
{
    public class RemotePagingService
    {
        private readonly HttpClient _httpClient;
        private const string CustomersUrl = "https://data-northwind.indigo.design/Customers/GetCustomersWithPage";

        public RemotePagingService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<CustomersWithPageResponse> GetDataWithPagingAsync(int pageIndex, int pageSize)
        {
            var url = BuildUrl(CustomersUrl, pageIndex, pageSize);
            var response = await _httpClient.GetAsync(url);
            response.EnsureSuccessStatusCode();
            
            var content = await response.Content.ReadAsStringAsync();
            return JsonSerializer.Deserialize<CustomersWithPageResponse>(content, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });
        }

        private string BuildUrl(string baseUrl, int pageIndex, int pageSize)
        {
            return $"{baseUrl}?pageIndex={pageIndex}&size={pageSize}";
        }
    }

    public class CustomersWithPageResponse
    {
        public CustomerData[] Items { get; set; }
        public int TotalRecordsCount { get; set; }
        public int PageSize { get; set; }
        public int PageNumber { get; set; }
        public int TotalPages { get; set; }
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
        public string Street { get; set; }
        public string City { get; set; }
        public string Region { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public string Phone { get; set; }
    }
}
```


<!-- ComponentEnd: Grid -->

<!-- ComponentEnd: HierarchicalGrid -->

## Known Issues and Limitations

- When the grid has no [`PrimaryKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_PrimaryKey) set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:

- Row Selection

- Row Expand/collapse

- Row Editing

- Row Pinning

## API References

- [`IgbPaginator`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPaginator.html)
- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)

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

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
