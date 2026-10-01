---
title: "Blazor Grid Lite Data Binding - Ignite UI for Blazor | MIT license"
description: Data binding for Grid Lite. Create apps with our open-source Blazor Grid Lite. It’s lightweight and packed with essential features. Try now.
keywords: data binding, Blazor, , Ignite UI for Blazor, Infragistics
mentionedTypes: []
namespace: Infragistics.Controls
license: MIT
llms:
  description: "The Grid Lite accepts an array of plain objects as a data source."
_tocName: Data Binding
---
# Blazor Grid Lite Data Binding

The Grid Lite accepts a `List<T>` as its data source, where `T` is representing your model. Each grid row is the rendered representation of a data record in the array with row cells being controlled by the column configuration.

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

If the grid has `AutoGenerate` enabled, it will "_infer_" the new column configuration automatically when the data changes.

```razor
<IgbGridLite Data="data" AutoGenerate="true" />

@code {
    // After the new binding the grid will infer the column collection from the bound data.
    this.data = new List<T>();
}
```

**Note:** 
The sort/filter states of the Grid Lite are kept when changing the data source in this manner.

Usually you will want to reset them by calling either `ClearSort()` and/or `ClearFilter()`.

In the sample below, the grid has column auto-generation enabled. When you click on the switch data button,
the column collection is reset, and a new data source is bound to the grid.

```razor
@page "/"
@using Microsoft.AspNetCore.Components
@using Microsoft.AspNetCore.Components.Web
@using IgniteUI.Blazor.Controls

<div class="container">

    <button class="btn btn-primary" @onclick="SwitchData">Switch Data: @(showingProducts ? "Show Users" : "Show Products")</button>

    <IgbGridLite Data="data" AutoGenerate="true" class="grid-lite-sample" />
</div>

@code {
    private List<User> users;
    private List<ProductInfo> products;
    private List<object> data;
    private bool showingProducts = true;

    protected override void OnInitialized()
    {
        products = MockDataGenerator.CreateProducts(50);
        users = MockDataGenerator.CreateUsers(50);
        data = products.ToList<object>();

    }

    private async void SwitchData()
    {
        showingProducts = !showingProducts;
        if (showingProducts)
        {
            this.data = products.ToList<object>();
        }
        else
        {
            this.data = users.ToList<object>();
        }
    }
}
```

## API References

[`IgbGridLite<TItem>`](mcp:get_api_reference?platform=blazor&component=IgbGridLite%3CTItem%3E)<br />
[`IgbGridLiteColumn`](mcp:get_api_reference?platform=blazor&component=IgbGridLiteColumn)<br />

## Additional Resources

- [Column Configuration](./column-configuration.md)
- [Sorting](./sorting.md)
- [Filtering](./filtering.md)
- [Theming & Styling](./theming.md)

Our community is active and always welcoming to new ideas.

- [Grid Lite **GitHub**](https://github.com/IgniteUI/IgniteUI.Grid.OSS)
