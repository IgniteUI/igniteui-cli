---
title: Blazor Grid Lite Data Binding - Ignite UI for Blazor | MIT license
_description: Data binding for Grid Lite. Create apps with our open-source Blazor Grid Lite. It’s lightweight and packed with essential features. Try now.
_keywords: data binding, Blazor, {ComponentKeywords}, Ignite UI for Blazor, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
_tocName: Data Binding
---

# Blazor Grid Lite Data Binding

<!-- Blazor -->

The Grid Lite accepts a `List<T>` as its data source, where `T` is representing your model. Each grid row is the rendered representation of a data record in the array with row cells being controlled by the column configuration.

<!-- end: Blazor -->

When applying data transformations, such as sorting and filtering, the grid does not modify the original data reference. That is to say, data transformations will not be reflected in the original source. The grid does not track changes to the objects inside the data array, so direct modification of the data objects will not be reflected.

## Change the Data Source at Runtime

The component supports changing its data source at runtime. If the new source has a different "shape" than the previous one make sure to update your column configuration as well.

```razor
<IgbGridLite Data="data">
    <!-- Update column configuration, add or remove columns as needed to represent the new data. -->
    <IgbGridLiteColumn Field="Id" />
</IgbGridLite>

@code {
    this.data = new List<T>
    {
    };
}
```

<!-- Blazor -->

If the grid has `AutoGenerate` enabled, it will "*infer*" the new column configuration automatically when the data changes.

<!-- end: Blazor -->

<!-- Blazor -->

```razor
<IgbGridLite Data="data" AutoGenerate="true" />

@code {
    // After the new binding the grid will infer the column collection from the bound data.
    this.data = new List<T>();
}
```

<!-- end: Blazor -->

<!-- Blazor -->

> \[!NOTE]
> The sort/filter states of the Grid Lite are kept when changing the data source in this manner.
> Usually you will want to reset them by calling either `ClearSort()` and/or `ClearFilter()`.

<!-- end: Blazor -->

In the sample below, the grid has column auto-generation enabled. When you click on the switch data button,
the column collection is reset, and a new data source is bound to the grid.

```razor
@page "/"
@using Microsoft.AspNetCore.Components
@using Microsoft.AspNetCore.Components.Web
@using IgniteUI.Blazor.Controls

<div class="container">

    <button class="btn btn-primary" @onclick="SwitchData">Switch Data: @(showingProducts ? "Show Users" : "Show Products")</button>

    <IgbGridLite @ref="grid" Data="data" AutoGenerate="true" Columns="columns" class="grid-lite-sample" />
</div>

@code {
    private IgbGridLite<ProductInfo> productGrid;
    private IgbGridLite<object> grid;
    private List<User> users;
    private List<ProductInfo> products;
    private List<object> data;
    private List<IgbColumnConfiguration> columns = new List<IgbColumnConfiguration>();
    private bool showingProducts = true;

    protected override void OnInitialized()
    {
        products = MockDataGenerator.CreateProducts(50);
        users = MockDataGenerator.CreateUsers(50);
        data = products.ToList<object>();

    }

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender)
        {
            grid.Data = data;
        }

        base.OnAfterRender(firstRender);
    }

    private async void SwitchData()
    {
        showingProducts = !showingProducts;
        if (showingProducts)
        {
            this.columns = new List<IgbColumnConfiguration>();
            this.data = products.ToList<object>();
        }
        else
        {
            this.columns = new List<IgbColumnConfiguration>();
            this.data = users.ToList<object>();
        }
    }
}
```


<!-- TODO ## API References

- `{ComponentName}`
- `Column`

-->

## Additional Resources

- [Column Configuration](column-configuration.md)
- [Sorting](sorting.md)
- [Filtering](filtering.md)
- [Theming & Styling](theming.md)

Our community is active and always welcoming to new ideas.

- [Grid Lite **GitHub**](https://github.com/IgniteUI/IgniteUI.Grid.OSS)
