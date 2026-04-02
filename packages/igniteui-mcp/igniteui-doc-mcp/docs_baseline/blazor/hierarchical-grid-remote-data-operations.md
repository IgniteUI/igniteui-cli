---
title: Blazor Hierarchical Grid Remote Data Operations - Ignite UI for Blazor
_description: Start using Angular remote data operations like remote filtering, remote sorting, and remote scrolling to load data from a server with Ignite UI for Blazor.
_keywords: Remote Data, Paging, Blazor, Hierarchical Grid, IgbHierarchicalGrid, Ignite UI for Blazor, Infragistics
_license: commercial
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
mentionedTypes: ["GridBaseDirective"]
namespace: Infragistics.Controls
_tocName: Remote Data Operations
_premium: true
---

# Blazor Hierarchical Grid Remote Data Operations

By default, the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) uses its own logic for performing data operations.

You can perform these tasks remotely and feed the resulting data to the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) by taking advantage of certain inputs and events, which are exposed by the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html).

## Remote Paging

<!-- ComponentStart: HierarchicalGrid -->

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

<!-- ComponentEnd: HierarchicalGrid -->

After declaring the service, we need to create a component, which will be responsible for the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) construction and data subscription.

<!-- ComponentStart: HierarchicalGrid -->

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
@inject HGridRemotePagingService RemoteService

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid @ref="grid1" AutoGenerate="false" Moving="true" PagingMode="GridPagingMode.Remote" PrimaryKey="ProductID">
            <IgbPaginator @ref="pager" PagingDone="OnPagingDone" PerPageChange="OnPerPageChange" TotalRecords="totalRecordsCount" PerPage="15"></IgbPaginator>
            <IgbColumn Name="ProductID" Field="ProductID" Header="Product ID" Hidden="true"></IgbColumn>
            <IgbColumn Name="ProductName" Field="ProductName" Header="Product Name"></IgbColumn>
            <IgbColumn Name="QuantityPerUnit" Field="QuantityPerUnit" Header="Quantity Per Unit"></IgbColumn>
            <IgbColumn Name="UnitPrice" Field="UnitPrice" Header="Unit Price"></IgbColumn>
            <IgbColumn Name="UnitsInStock" Field="UnitsInStock" Header="Units In Stock"></IgbColumn>
            <IgbColumn Name="UnitsOnOrder" Field="UnitsOnOrder" Header="Units On Order"></IgbColumn>
            <IgbColumn Name="Discontinued" Field="Discontinued" Header="Discontinued"></IgbColumn>
            <IgbRowIsland ChildDataKey="Order_Details" AutoGenerate="false" PrimaryKey="OrderID">
                <IgbColumn Name="OrderID" Field="OrderID" Header="Order ID"></IgbColumn>
                <IgbColumn Name="UnitPrice" Field="UnitPrice" Header="Unit Price"></IgbColumn>
                <IgbColumn Name="Quantity" Field="Quantity" Header="Quantity"></IgbColumn>
                <IgbColumn Name="Discount" Field="Discount" Header="Discount"></IgbColumn>
            </IgbRowIsland>
        </IgbHierarchicalGrid>
    </div>
</div>

@if (!string.IsNullOrEmpty(errorMessage))
{
    <div class="error-message">
        <p>@errorMessage</p>
    </div>
}

@code {
    private HGridProductData[] data = Array.Empty<HGridProductData>();
    private IgbHierarchicalGrid grid1;
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
            data = Array.Empty<HGridProductData>();
            grid1.Data = data;
            grid1.IsLoading = false;
            StateHasChanged();
        }
        catch (Exception ex)
        {
            errorMessage = $"Error loading data: {ex.Message}";
            data = Array.Empty<HGridProductData>();
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
using System.Net.Http;
using System.Threading.Tasks;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Infragistics.Samples
{
    public class HGridRemotePagingService
    {
        private readonly HttpClient _httpClient;
        private const string ProductsUrl = "https://services.odata.org/V4/Northwind/Northwind.svc/Products";

        public HGridRemotePagingService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<HGridProductsWithPageResponse> GetDataWithPagingAsync(int pageIndex, int pageSize)
        {
            var skip = pageIndex * pageSize;
            var url = $"{ProductsUrl}?$count=true&$top={pageSize}&$skip={skip}&$expand=Order_Details&$orderby=ProductID";

            var response = await _httpClient.GetAsync(url);
            response.EnsureSuccessStatusCode();

            var content = await response.Content.ReadAsStringAsync();
            var odataResponse = JsonSerializer.Deserialize<HGridODataResponse>(content, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });

            return new HGridProductsWithPageResponse
            {
                Items = odataResponse.Value,
                TotalRecordsCount = odataResponse.ODataCount,
                PageSize = pageSize,
                PageNumber = pageIndex
            };
        }

        private class HGridODataResponse
        {
            [JsonPropertyName("@odata.count")]
            public int ODataCount { get; set; }

            public HGridProductData[] Value { get; set; }
        }
    }

    public class HGridProductsWithPageResponse
    {
        public HGridProductData[] Items { get; set; }
        public int TotalRecordsCount { get; set; }
        public int PageSize { get; set; }
        public int PageNumber { get; set; }
    }

    public class HGridProductData
    {
        public int ProductID { get; set; }
        public string ProductName { get; set; }
        public int? SupplierID { get; set; }
        public int? CategoryID { get; set; }
        public string QuantityPerUnit { get; set; }
        public decimal? UnitPrice { get; set; }
        public int? UnitsInStock { get; set; }
        public int? UnitsOnOrder { get; set; }
        public int? ReorderLevel { get; set; }
        public bool Discontinued { get; set; }
        public HGridOrderDetail[] Order_Details { get; set; }
    }

    public class HGridOrderDetail
    {
        public int OrderID { get; set; }
        public int ProductID { get; set; }
        public decimal UnitPrice { get; set; }
        public int Quantity { get; set; }
        public float Discount { get; set; }
    }
}
```


<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentEnd: HierarchicalGrid -->

## Known Issues and Limitations

- When the grid has no [`PrimaryKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_PrimaryKey) set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:

- Row Selection

- Row Expand/collapse

- Row Editing

- Row Pinning

## API References

- [`IgbPaginator`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPaginator.html)
- [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
