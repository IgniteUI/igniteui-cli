---
title: Blazor Grid Lite Cell Template | Ignite UI for Blazor | MIT license
_description: Grid Lite column configuration and column properties. Try our open-source Blazor Grid Lite - lightweight and packed with essential features.
_keywords: column configuration, Blazor, {ComponentKeywords}, Ignite UI for Blazor, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
_tocName: Column Configuration
---

# Column Configuration

<!-- Blazor -->

Columns are defined declaratively using `<GridLiteColumn>` child elements within the grid. The `Field` property is the only required for a column, as it serves as the column identifier. It is also the property that is used to map and render the relevant data in the grid rows.

```razor
<IgbGridLite Data="@products">
    <IgbGridLiteColumn 
        Field="Name"
        Header="Product Name"
        DataType="GridLiteColumnDataType.String" />
    <!-- Additional columns follow -->
</IgbGridLite>
```

## Configuration Based on the Data Source

The grid supports inferring the column configuration based on the provided data source when `AutoGenerate` is set to true. It tries to infer the appropriate `Field` and `DataType` properties based on records in the data.

```razor
<IgbGridLite AutoGenerate=true Data="@products"/>
@code {
    private List<ProductInfo> products;

    protected override void OnInitialized()
    {
        products = new List<ProductInfo>
        {
            new ProductInfo { Id = "1", Name = "example", Price = 10 },
        };
    }

    public class ProductInfo
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
    }
}
```

The previous snippet will result in the grid automatically creating columns equivalent to:

```razor
<IgbGridLite Data="@products">
    <IgbGridLiteColumn Field="Id" DataType="GridLiteColumnDataType.String" />
    <IgbGridLiteColumn Field="Name" DataType="GridLiteColumnDataType.String" />
    <IgbGridLiteColumn Field="Price" DataType="GridLiteColumnDataType.Number" />
</IgbGridLite>
```

Useful for a quick render of some data without any additional customizations.

## Additional Column Configuration

The column exposes several more properties for customization:

### Column Width

By default, the columns have a width of **minmax(136px, 1fr)** which translates to a minimum width of 136px and maximum of
1 part of the available space in the Grid Lite. This way the columns are fluid and responsive accommodating for changes
in the grid width.

<!-- Blazor -->

To change the width of column, use the `Width` parameter of the `GridLiteColumn` component.

```razor
<IgbGridLiteColumn Field="Price" Width="250px" />
```

<!-- end: Blazor -->

The property accepts <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#numbers_lengths_and_percentages" target="_blank">valid CSS length units</a>.

### Hiding columns

<!-- Blazor -->

Columns can be hidden/shown by setting the `Hidden` parameter on the `GridLiteColumn` component.

```razor
<IgbGridLiteColumn Field="Price" Hidden="true" />
```

<!-- end: Blazor -->

### Column resize

<!-- Blazor -->

Each column of the Grid Lite can be configured to be resizable by setting the `Resizable` parameter on the `GridLiteColumn` component.

```razor
<IgbGridLiteColumn Field="Price" Resizable="true" />
```

<!-- end: Blazor -->

If a column is set to be resizable, you can drag the right size of the column header to either increase/decrease  the column width. Double-clicking on the resize area will trigger auto-sizing of the column where it will try set its width according to the largest content of its cells/header.

> \[!NOTE]
> Columns with "fluid" widths (fr, %, etc.) can behave erratically when resizing in the grid is performed as they try to accommodate for the new dimensions. Depending on the application scenario, it may be better to use "hard" units so users don't experience layout shifts.

In the sample below you can try out the different column properties and how they reflect in the rendered grid.

```razor
@page "/"
@using Microsoft.AspNetCore.Components
@using Microsoft.AspNetCore.Components.Web
@using IgniteUI.Blazor.Controls


<div class="container">

    <button class="btn btn-primary" @onclick="ToggleColumn">Toggle Rating Column</button>


        <IgbGridLite @ref="grid"
                     TItem="ProductInfo" 
                     Data="@products" 
                     Columns="@columns"
                     class="grid-lite-sample" />

</div>

@code {
    private IgbGridLite<ProductInfo> grid;
    private List<ProductInfo> products;
    private List<IgbColumnConfiguration> columns;
    private bool showRating = true;

    protected override void OnInitialized()
    {
        products = MockDataGenerator.CreateProducts(50);
        UpdateColumns();
    }

    private void UpdateColumns()
    {
        columns = new List<IgbColumnConfiguration>
        {
            new IgbColumnConfiguration
            },
            new IgbColumnConfiguration
            {
                Key = nameof(ProductInfo.Price),
                HeaderText = "Price",
                Type = GridLiteColumnDataType.Number,
                Width = "150px",
                Resizable = true
            },
            new IgbColumnConfiguration
            {
                Key = nameof(ProductInfo.Sold),
                HeaderText = "Units sold",
                Type = GridLiteColumnDataType.Number,
                Width = "150px",
                Resizable = true
            },
            new IgbColumnConfiguration
            {
                Key = nameof(ProductInfo.Total),
                HeaderText = "Total sold",
                Type = GridLiteColumnDataType.Number,
                Width = "150px",
                Resizable = true
            }
        };

        if (showRating)
        {
            columns.Add(new IgbColumnConfiguration
            {
                Key = nameof(ProductInfo.Rating),
                HeaderText = "Customer rating",
                Type = GridLiteColumnDataType.Number,
                Width = "180px",
                Resizable = true
            });
        }
    }

    private async Task ToggleColumn()
    {
        showRating = !showRating;
        UpdateColumns();
        if (grid != null)
        {
            await grid.UpdateColumnsAsync(columns);
        }
    }
}
```


<!-- TODO ## API References

- `{ComponentName}`
- `Column`

-->

## Additional Resources

- [Data Binding](binding.md)
- [Sorting](sorting.md)
- [Filtering](filtering.md)
- [Theming & Styling](theming.md)

Our community is active and always welcoming to new ideas.

- [Grid Lite **GitHub**](https://github.com/IgniteUI/IgniteUI.Grid.OSS)
