---
title: Blazor Grid Lite Theming | Ignite UI for Blazor | MIT license
_description: Styling the Grid Lite in Ignite UI for Blazor happens easily and quickly. See demos and examples! Try our open-source components and build your next app.
_keywords: styling, theming, Blazor, {ComponentKeywords}, Ignite UI for Blazor, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
_tocName: Theming
---

# Styles and Themes

The Grid Lite comes with four distinct themes - Bootstrap, Material, Fluent and Indigo. The grid and its UI components have the themes baked in, but the component requires a global stylesheet for palettes, typography and other global configurations to work.

## Loading a Base Themes

Depending on your project type, setup and build configuration the method of how to include one of the files below will vary. If you are using a framework/build tool refer to its documentation on how to add external styles to your output bundle.

As a rule of thumb, you can always copy the `themes` folder to your assets directory and link the theme from there in your index.html.

| Theme     | Variant | Path                                                           |
| --------- | ------- | -------------------------------------------------------------- |
| Bootstrap | Light   | node_modules/igniteui-webcomponents/themes/light/bootstrap.css |
| Bootstrap | Dark    | node_modules/igniteui-webcomponents/themes/dark/bootstrap.css  |
| Material  | Light   | node_modules/igniteui-webcomponents/themes/light/material.css  |
| Material  | Dark    | node_modules/igniteui-webcomponents/themes/dark/material.css   |
| Fluent    | Light   | node_modules/igniteui-webcomponents/themes/light/fluent.css    |
| Fluent    | Dark    | node_modules/igniteui-webcomponents/themes/dark/fluent.css     |
| Indigo    | Light   | node_modules/igniteui-webcomponents/themes/light/indigo.css    |
| Indigo    | Dark    | node_modules/igniteui-webcomponents/themes/dark/indigo.css     |

In the sample below, you can preview all the default base themes.

```razor
@page "/"
@using Microsoft.AspNetCore.Components
@using Microsoft.AspNetCore.Components.Web
@using IgniteUI.Blazor.Controls

<link href="@currentTheme" rel="stylesheet" />

<div class="container">

    <div class="theme-selector">
        <label>Theme: </label>
        <select @onchange="ChangeTheme" class="theme-dropdown">
            <option value="_content/IgniteUI.Blazor.GridLite/css/themes/light/bootstrap.css">Light Bootstrap</option>
            <option value="_content/IgniteUI.Blazor.GridLite/css/themes/light/material.css">Light Material</option>
            <option value="_content/IgniteUI.Blazor.GridLite/css/themes/light/fluent.css">Light Fluent</option>
            <option value="_content/IgniteUI.Blazor.GridLite/css/themes/light/indigo.css">Light Indigo</option>
            <option value="_content/IgniteUI.Blazor.GridLite/css/themes/dark/bootstrap.css">Dark Bootstrap</option>
            <option value="_content/IgniteUI.Blazor.GridLite/css/themes/dark/material.css">Dark Material</option>
            <option value="_content/IgniteUI.Blazor.GridLite/css/themes/dark/fluent.css">Dark Fluent</option>
            <option value="_content/IgniteUI.Blazor.GridLite/css/themes/dark/indigo.css">Dark Indigo</option>
        </select>
    </div>

    @if (products != null && columns != null)
    {
        <IgbGridLite TItem="ProductInfo" 
                     Data="@products" 
                     Columns="@columns"
                     class="grid-lite-sample" />
    }
</div>

@code {
    private List<ProductInfo> products;
    private List<IgbColumnConfiguration> columns;
    private string currentTheme = "_content/IgniteUI.Blazor.GridLite/css/themes/light/bootstrap.css";

    protected override void OnInitialized()
    {
        products = MockDataGenerator.CreateProducts(50);

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
                Sort = true
            },
            new IgbColumnConfiguration
            {
                Key = nameof(ProductInfo.Sold),
                HeaderText = "Units sold",
                Type = GridLiteColumnDataType.Number,
                Width = "150px",
                Sort = true
            },
            new IgbColumnConfiguration
            {
                Key = nameof(ProductInfo.Total),
                HeaderText = "Total sold",
                Type = GridLiteColumnDataType.Number,
                Width = "150px",
                Sort = true
            },
            new IgbColumnConfiguration
            {
                Key = nameof(ProductInfo.Rating),
                HeaderText = "Customer rating",
                Type = GridLiteColumnDataType.Number,
                Width = "180px",
                Sort = true
            }
        };
    }

    private void ChangeTheme(ChangeEventArgs e)
    {
        currentTheme = e.Value?.ToString() ?? "light/bootstrap";
    }
}
```


## Creating Custom Themes

Aside from the default themes shipped with the Grid Lite package, you can further customize the look and feel of your data grid by using an alternate set of CSS custom properties.

Refer to the [theming topic](../grids/theming-grid.md) for more details.

```css
.grid-sample {
  --header-background: #494949;
  --header-text-color: #f2c43c;
  --cell-active-border-color: #f2c43c;
  --row-hover-background: #707070;
  --row-hover-text-color: #f2c43c;
}
```

```razor
 <IgbGridLite class="grid-lite-sample" />
```

Here is an example showcasing the custom theming from above.

```razor
@page "/"
@using Microsoft.AspNetCore.Components
@using Microsoft.AspNetCore.Components.Web
@using IgniteUI.Blazor.Controls

<div class="container">

    @if (products != null && columns != null)
    {
        <IgbGridLite TItem="ProductInfo" 
                     Data="@products" 
                     Columns="@columns"
                     class="grid-lite-sample" />
    }
</div>

@code {
    private List<ProductInfo> products;
    private List<IgbColumnConfiguration> columns;

    protected override void OnInitialized()
    {
        // Generate 50 products
        products = MockDataGenerator.CreateProducts(50);

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
                Sort = true
            },
            new IgbColumnConfiguration
            {
                Key = nameof(ProductInfo.Sold),
                HeaderText = "Units sold",
                Type = GridLiteColumnDataType.Number,
                Width = "150px",
                Sort = true
            },
            new IgbColumnConfiguration
            {
                Key = nameof(ProductInfo.Total),
                HeaderText = "Total sold",
                Type = GridLiteColumnDataType.Number,
                Width = "150px",
                Sort = true
            },
            new IgbColumnConfiguration
            {
                Key = nameof(ProductInfo.Rating),
                HeaderText = "Customer rating",
                Type = GridLiteColumnDataType.Number,
                Width = "180px",
                Sort = true
            }
        };
    }
}
```


<!-- TODO ## API References

- `{ComponentName}`
- `Column`
-->

## Additional Resources

- [Column Configuration](column-configuration.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)

Our community is active and always welcoming to new ideas.

- [Grid Lite **GitHub**](https://github.com/IgniteUI/IgniteUI.Grid.OSS)
