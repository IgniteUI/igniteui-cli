---
title: Getting Started | Ignite UI for Blazor Open-Source Libraries | Infragistics
_description: Use Infragistics' Open-Source Blazor components to create apps with lightweight, MIT licensed components including Grid Lite. Try now.
_keywords: Ignite UI for Blazor, Infragistics, Getting Started, Open-Source, MIT License
mentionedTypes: []
_tocName: Open-Source Libraries
---

# Getting Started with Open-Source Libraries

This topic provides step-by-step instructions for creating Blazor applications with the Ignite UI for Blazor open-source libraries using Visual Studio.

## Overview

Ignite UI for Blazor offers open-source UI components under the MIT license. These lightweight packages provide essential functionality for building modern web applications without requiring a commercial license.

The open-source libraries include:

- **IgniteUI.Blazor.Lite** - A lightweight package containing open-source UI components
- **IgniteUI.Blazor.GridLite** - A lightweight, open-source data grid component

## Create a New Blazor Project

- Start Visual Studio and click **Create a new project** on the start page, select a Blazor template such as **Blazor Server App**, **Blazor WebAssembly App**, or **Blazor Web App**, and click **Next**.

> \[!Note]
> When using **Blazor Server App**, ensure you add `@rendermode InteractiveServer` in the pages where the components are used.

- Provide a project name and location, then click **Next**.

- Specify additional project options and click **Create**.

## Install IgniteUI.Blazor.Lite

The IgniteUI.Blazor.Lite package contains open-source UI components delivered via NuGet.

> \[!Note]
> You should not combine the **IgniteUI.Blazor** and **IgniteUI.Blazor.Lite** packages in the same project. They use the same namespaces and contain duplicate components, so only one of them should be used.

In Visual Studio, open the NuGet package manager by selecting **Tools** → **NuGet Package Manager** → **Manage NuGet Packages for Solution**. Search for and install the **IgniteUI.Blazor.Lite** NuGet package.

Or install via the Package Manager Console:

```cmd
Install-Package IgniteUI.Blazor.Lite
```

Or via .NET CLI:

```cmd
dotnet add package IgniteUI.Blazor.Lite
```

## Register IgniteUI.Blazor.Lite

### .NET 6 and Later Applications

1 - Open the **Program.cs** file and register the Ignite UI for Blazor Service by calling **builder.Services.AddIgniteUIBlazor** function:

```razor
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddServerSideBlazor();

builder.Services.AddIgniteUIBlazor();

var app = builder.Build();
```

2 - Add the **IgniteUI.Blazor.Controls** namespace in the **\_Imports.razor** file:

```razor
@using IgniteUI.Blazor.Controls
```

3 - Add the Style Sheet in the appropriate location based on your project type:

```razor
<head>
    <link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
</head>
```

4 - Add Script Reference:

```razor
<script src="_content/IgniteUI.Blazor/app.bundle.js"></script>
```

## Using the OSS Blazor Components

Add an Ignite UI for Blazor component to your razor page, for example:

```razor
<IgbCard style="width:350px">
    <IgbCardMedia>
        <img src="https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80" />
    </IgbCardMedia>
    <IgbCardHeader>
        <h4>Jane Doe</h4>
        <h6>Professional Photographer</h6>
    </IgbCardHeader>
    <IgbCardContent>Hi! I'm Jane, photographer and filmmaker.
        Photography is a way of feeling, of touching,
        of loving. What you have caught on film is captured forever...
        it remembers little things, long after you have
        forgotten everything.</IgbCardContent>
    <IgbCardActions>
        <IgbButton>More Info</IgbButton>
    </IgbCardActions>
</IgbCard>
```

For more detailed information about which components are included in the light package, see the - [Open-Source vs Premium Components](general-open-source-vs-premium.md) topic.

For more detailed information about Grid Lite features and configuration, see the [Grid Lite Overview](grid-lite/overview.md) topic.

## Additional Resources

- [Open-Source vs Premium Components](general-open-source-vs-premium.md)
- [Grid Lite Overview](grid-lite/overview.md)
