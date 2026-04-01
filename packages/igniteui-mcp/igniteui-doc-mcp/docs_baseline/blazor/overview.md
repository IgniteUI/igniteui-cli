---
title: Free Blazor Data Grid Lite (Open Source) - Ignite UI Grid Lite | MIT license
_description: Create apps with our open-source Grid Lite. It’s lightweight and packed with essential features - filtering, hiding, sorting, and more. Try now.
_keywords: overview, Blazor, {ComponentKeywords}, Ignite UI for Blazor, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
_tocName: Grid Lite
---

# Free & Open-Source Blazor Data Grid (Grid Lite)

The Ignite UI for Blazor Grid Lite is a lightweight, high-performance Blazor data grid that’s free to use, open-source, and built for modern Blazor applications.

<!-- React, Blazor -->

This free Blazor data grid is open-source JavaScript data grid built as a Web Component, which means you can use it dependency-free with or without a web framework. It delivers essential data-display functionality with minimal overhead and the performance users expect. The Blazor Grid Lite is designed for developers who need fast and lightweight data presentation.

<!-- end: React, Blazor -->

## What You Get with our Free Blazor Data Grid

Our free, open-source Blazor Grid Lite comes with the following column-based features: sorting, filtering, hiding, resizing and a variety of pre-defined data types. Blazing-fast performance is delivered with the use of row virtualization. In addition, the component supports keyboard navigation and theming through the [Ignite UI Theming Framework](../themes/overview.md).

<!-- Blazor -->

### Install IgniteUI.Blazor.GridLite

In Visual Studio, open the NuGet package manager by selecting **Tools** → **NuGet Package Manager** → **Manage NuGet Packages for Solution**. Search for and install the **IgniteUI.Blazor.GridLite** NuGet package.

Or install via the Package Manager Console:

```cmd
Install-Package IgniteUI.Blazor.GridLite
```

Or via .NET CLI:

```cmd
dotnet add package IgniteUI.Blazor.GridLite
```

### Using Grid Lite

1 - Add the **IgniteUI.Blazor.Controls** namespace in the **\_Imports.razor** file:

```razor
@using IgniteUI.Blazor.Controls
```

2 - Add the Style Sheet in the appropriate location based on your project type:

```razor
<head>
       <link href="_content/IgniteUI.Blazor.GridLite/css/themes/light/bootstrap.css" rel="stylesheet" />
</head>
```

3 - Add the Grid Lite component to your razor page:

```razor
<IgbGridLite Data="data" AutoGenerateColumns="true">
</IgbGridLite>

@code {
    private object[] data = new object[]
    {
        new { Name = "John", Age = 30, City = "New York" },
        new { Name = "Jane", Age = 25, City = "Los Angeles" },
        new { Name = "Bob", Age = 35, City = "Chicago" }
    };
}
```

<!-- end: Blazor -->

## Grid Lite in Action

```razor
@page "/"
@using Microsoft.AspNetCore.Components
@using Microsoft.AspNetCore.Components.Web
@using IgniteUI.Blazor.Controls

<div class="container">

    @if (users != null && columns != null)
    {
        <IgbGridLite TItem="User" 
                     Data="@users" 
                     Columns="@columns"
                     class="grid-lite-sample" />
    }
</div>

@code {
    private List<User> users;
    private List<IgbColumnConfiguration> columns;

    protected override void OnInitialized()
    {
        // Generate 1000 users like in the original sample
        users = MockDataGenerator.CreateUsers(1000);

        columns = new List<IgbColumnConfiguration>
        {
            new IgbColumnConfiguration
            },
            new IgbColumnConfiguration
            {
                Key = nameof(User.FirstName),
                HeaderText = "First name",
                Sort = true,
                Filter = true,
                Resizable = true
            },
            new IgbColumnConfiguration
            {
                Key = nameof(User.LastName),
                HeaderText = "Last name",
                Sort = true,
                Filter = true,
                Resizable = true
            },
            new IgbColumnConfiguration
            {
                Key = nameof(User.Email),
                HeaderText = "Email Address",
                Type = GridLiteColumnDataType.String
            },
            new IgbColumnConfiguration
            {
                Key = nameof(User.Priority),
                HeaderText = "Priority",
                Width = "150px",
                Sort = true
            },
            new IgbColumnConfiguration
            {
                Key = nameof(User.Satisfaction),
                HeaderText = "Satisfaction rating",
                Type = GridLiteColumnDataType.Number,
                Sort = true,
                Filter = true,
                Width = "180px"
            },
            new IgbColumnConfiguration
            {
                Key = nameof(User.RegisteredAt),
                HeaderText = "Registered @",
                Type = GridLiteColumnDataType.Date,
                Sort = true,
                Width = "180px"
            },
            new IgbColumnConfiguration
            {
                Key = nameof(User.Active),
                Type = GridLiteColumnDataType.Boolean,
                HeaderText = "Active",
                Width = "100px"
            }
        };
    }
}
```


Grid Lite is designed to give you the core features that you need to deliver a beautiful data grid / data table experience in your apps. Designed for performance and beauty, the Grid Lite will work in any framework, on any platform.

## Performance Built In

Row-level virtualization allows you to render unlimited amounts of data with smooth scrolling.

## Automatic Column Types

Column types are automatically generated based on your data source, with built-in filtering tailored to each column type.

## Interactive Features

All the core interactive features your users expect: column filtering, column hiding, column resizing, column sorting, and more.

## Beautiful UX & Branding

Built-in theme support for Bootstrap, Material & Fluent, plus endless branding options in color palettes, fonts, elevation, display density & more.

## Rich Keyboard Navigation

Full Excel-style keyboard navigation gives users the experience they expect, with high performance even on large datasets.

## Is Grid Lite a Free & Open-Source Blazor Data Grid?

Yes. Ignite UI Grid Lite is a free, open-source Blazor data grid released under the MIT license. You can use it in commercial or personal projects with no licensing fees. It is part of our initiative to make Ignite UI more open, transparent, and accessible.

- MIT-licensed

- Free for commercial use

- Community-driven development

- No feature gating

However, if your project scales and grows in complexity and functionality, and you require an enterprise-grade application, we have a seamless upgrade strategy. It will make the transitioning from the free Blazor data grid (Grid Lite) to the full-featured and advanced Data Grid simpler and faster.
