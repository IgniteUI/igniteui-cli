---
title: "Blazor Grid Lite Theming | Ignite UI for Blazor | MIT license"
description: Styling the Grid Lite in Ignite UI for Blazor happens easily and quickly. See demos and examples! Try our open-source components and build your next app.
keywords: styling, theming, Blazor, , Ignite UI for Blazor, Infragistics
mentionedTypes: []
namespace: Infragistics.Controls
license: MIT
llms:
  description: "The Grid Lite comes with four distinct themes - Bootstrap, Material, Fluent and Indigo."
_tocName: Theming
---
# Styles and Themes

The Grid Lite comes with four distinct themes - Bootstrap, Material, Fluent and Indigo. The grid and its UI components have the themes baked in, but the component requires a global stylesheet for palettes, typography and other global configurations to work.

## Loading a Base Themes

If the app also uses the `IgniteUI.Blazor.Lite` or `IgniteUI.Blazor` package, keep that package's [theme stylesheet](../themes/overview.md). It styles the grid too, so the app doesn't need the stylesheets below.

An app that uses only the Grid Lite links one of the themes the `IgniteUI.Blazor.GridLite` package ships, in the host page: **Components/App.razor** in a Blazor Web App, or **wwwroot/index.html** in a standalone Blazor WebAssembly app.

```html
<link href="_content/IgniteUI.Blazor.GridLite/themes/light/bootstrap.css" rel="stylesheet" />
```

| Theme     | Variant | Path                                                       |
| --------- | ------- | ---------------------------------------------------------- |
| Bootstrap | Light   | _content/IgniteUI.Blazor.GridLite/themes/light/bootstrap.css |
| Bootstrap | Dark    | _content/IgniteUI.Blazor.GridLite/themes/dark/bootstrap.css  |
| Material  | Light   | _content/IgniteUI.Blazor.GridLite/themes/light/material.css  |
| Material  | Dark    | _content/IgniteUI.Blazor.GridLite/themes/dark/material.css   |
| Fluent    | Light   | _content/IgniteUI.Blazor.GridLite/themes/light/fluent.css    |
| Fluent    | Dark    | _content/IgniteUI.Blazor.GridLite/themes/dark/fluent.css     |
| Indigo    | Light   | _content/IgniteUI.Blazor.GridLite/themes/light/indigo.css    |
| Indigo    | Dark    | _content/IgniteUI.Blazor.GridLite/themes/dark/indigo.css     |

In the sample below, you can preview all the default base themes.

```razor
@page "/"
@using Microsoft.AspNetCore.Components
@using Microsoft.AspNetCore.Components.Web
@using IgniteUI.Blazor.Controls

<link href="@currentTheme" rel="stylesheet" />

<div class="container">

    <IgbSelect class="theme-selector" Label="Theme" @bind-Value="currentTheme">
        @foreach (var theme in themes)
        {
            <IgbSelectItem Value="@theme.Path">@theme.Name</IgbSelectItem>
        }
    </IgbSelect>

    @if (products != null)
    {
        <IgbGridLite TItem="ProductInfo" 
                     Data="@products"
                     class="grid-lite-sample">
            <IgbGridLiteColumn Field="@nameof(ProductInfo.Name)" Header="Product Name" DataType="GridLiteColumnDataType.String" Sortable />
            <IgbGridLiteColumn Field="@nameof(ProductInfo.Price)" Header="Price" DataType="GridLiteColumnDataType.Number" Width="150px" Sortable />
            <IgbGridLiteColumn Field="@nameof(ProductInfo.Sold)" Header="Units sold" DataType="GridLiteColumnDataType.Number" Width="150px" Sortable />
            <IgbGridLiteColumn Field="@nameof(ProductInfo.Total)" Header="Total sold" DataType="GridLiteColumnDataType.Number" Width="150px" Sortable />
            <IgbGridLiteColumn Field="@nameof(ProductInfo.Rating)" Header="Customer rating" DataType="GridLiteColumnDataType.Number" Width="180px" Sortable />
        </IgbGridLite>
    }
</div>

@code {
    private List<ProductInfo> products;
    private string currentTheme = "_content/IgniteUI.Blazor/themes/light/bootstrap.css";

    private readonly List<ThemeOption> themes = new()
    {
        new("Light Bootstrap", "_content/IgniteUI.Blazor/themes/light/bootstrap.css"),
        new("Light Material", "_content/IgniteUI.Blazor/themes/light/material.css"),
        new("Light Fluent", "_content/IgniteUI.Blazor/themes/light/fluent.css"),
        new("Light Indigo", "_content/IgniteUI.Blazor/themes/light/indigo.css"),
        new("Dark Bootstrap", "_content/IgniteUI.Blazor/themes/dark/bootstrap.css"),
        new("Dark Material", "_content/IgniteUI.Blazor/themes/dark/material.css"),
        new("Dark Fluent", "_content/IgniteUI.Blazor/themes/dark/fluent.css"),
        new("Dark Indigo", "_content/IgniteUI.Blazor/themes/dark/indigo.css"),
    };

    protected override void OnInitialized()
    {
        products = MockDataGenerator.CreateProducts(50);
    }

    private record ThemeOption(string Name, string Path);
}
```

## Creating Custom Themes

Aside from the default themes shipped with the Grid Lite package, you can further customize the look and feel of your data grid by using an alternate set of CSS custom properties.

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
<IgbGridLite class="grid-sample" />
```

Here is an example showcasing the custom theming from above.

```razor
@page "/"
@using Microsoft.AspNetCore.Components
@using Microsoft.AspNetCore.Components.Web
@using IgniteUI.Blazor.Controls

<div class="container">

    @if (products != null)
    {
        <IgbGridLite TItem="ProductInfo" 
                     Data="@products"
                     class="grid-lite-sample">
            <IgbGridLiteColumn Field="@nameof(ProductInfo.Name)" Header="Product Name" DataType="GridLiteColumnDataType.String" Sortable />
            <IgbGridLiteColumn Field="@nameof(ProductInfo.Price)" Header="Price" DataType="GridLiteColumnDataType.Number" Width="150px" Sortable />
            <IgbGridLiteColumn Field="@nameof(ProductInfo.Sold)" Header="Units sold" DataType="GridLiteColumnDataType.Number" Width="150px" Sortable />
            <IgbGridLiteColumn Field="@nameof(ProductInfo.Total)" Header="Total sold" DataType="GridLiteColumnDataType.Number" Width="150px" Sortable />
            <IgbGridLiteColumn Field="@nameof(ProductInfo.Rating)" Header="Customer rating" DataType="GridLiteColumnDataType.Number" Width="180px" Sortable />
        </IgbGridLite>
    }
</div>

@code {
    private List<ProductInfo> products;

    protected override void OnInitialized()
    {
        // Generate 50 products
        products = MockDataGenerator.CreateProducts(50);
    }
}
```

## API References

[`IgbGridLite<TItem>`](mcp:get_api_reference?platform=blazor&component=IgbGridLite%3CTItem%3E)<br />
[`IgbGridLiteColumn`](mcp:get_api_reference?platform=blazor&component=IgbGridLiteColumn)<br />

## Additional Resources

- [Column Configuration](./column-configuration.md)
- [Filtering](./filtering.md)
- [Sorting](./sorting.md)

Our community is active and always welcoming to new ideas.

- [Grid Lite **GitHub**](https://github.com/IgniteUI/IgniteUI.Blazor.GridLite)