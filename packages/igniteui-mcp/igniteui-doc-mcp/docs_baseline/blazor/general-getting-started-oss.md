---
title: Getting Started | Ignite UI for Blazor Open-Source Libraries | Infragistics
description: Use Infragistics' Open-Source Blazor components to create apps with lightweight, MIT licensed components including Grid Lite. Try now.
keywords: "Ignite UI for Blazor, Infragistics, Getting Started, Open-Source, MIT License"
mentionedTypes: []
llms:
  description: "Ignite UI for Blazor offers open-source UI components under the MIT license."
_tocName: Open-Source Libraries
---
# Getting Started with Open-Source Libraries

This topic provides step-by-step instructions for creating Blazor applications with the Ignite UI for Blazor open-source libraries using Visual Studio.

## Overview

Ignite UI for Blazor offers open-source UI components under the MIT license. These lightweight packages provide essential functionality for building modern web applications without requiring a commercial license.

The open-source libraries include:

- [**IgniteUI.Blazor.Lite**](https://www.nuget.org/packages/IgniteUI.Blazor.Lite) - A lightweight package containing open-source UI components ([GitHub](https://github.com/IgniteUI/igniteui-blazor))
- [**IgniteUI.Blazor.GridLite**](https://www.nuget.org/packages/IgniteUI.Blazor.GridLite) - A lightweight, open-source data grid component ([GitHub](https://github.com/IgniteUI/IgniteUI.Blazor.GridLite))

## Create a New Blazor Project

- Start Visual Studio and click **Create a new project** on the start page, select the **Blazor Web App**, **Blazor WebAssembly Standalone App** or **.NET MAUI Blazor Hybrid App** template, and click **Next**.

**Note:** 
In a **Blazor Web App**, the components need an interactive render mode: **InteractiveServer**, **InteractiveWebAssembly** or **InteractiveAuto**. Set it on the pages that use the components (for example `@rendermode InteractiveServer`) or globally in **Components/App.razor**. Static server-side rendering is not currently supported.

- Provide a project name and location, then click **Next**.

- Specify additional project options and click **Create**.

## Install IgniteUI.Blazor.Lite

The IgniteUI.Blazor.Lite package contains open-source UI components delivered via NuGet.

**Note:** 
You should not combine the **IgniteUI.Blazor** (or **IgniteUI.Blazor.Trial**) and **IgniteUI.Blazor.Lite** packages in the same project. They use the same namespaces and contain duplicate components, so only one of them should be used.

In Visual Studio, open the NuGet package manager by selecting **Tools** → **NuGet Package Manager** → **Manage NuGet Packages for Solution**. Search for and install the **IgniteUI.Blazor.Lite** NuGet package. In a Blazor Web App with the WebAssembly or Auto render mode, installing it in the client project is enough, as the server project gets it through the project reference.

Or install via the Package Manager Console:

```cmd
Install-Package IgniteUI.Blazor.Lite
```

Or via .NET CLI:

```cmd
dotnet add package IgniteUI.Blazor.Lite
```

## Register IgniteUI.Blazor.Lite

1 - Open the **Program.cs** file (**MauiProgram.cs** in a .NET MAUI Blazor Hybrid app) and register the Ignite UI for Blazor Service by calling **builder.Services.AddIgniteUIBlazor** function. In a Blazor Web App with the WebAssembly or Auto render mode, do this in the **Program.cs** of both the server and the client project:

```csharp
builder.Services.AddIgniteUIBlazor();
```

Each component loads its client resources the first time it renders, so listing component modules is optional (see [Component Modules](./general-getting-started.md#component-modules)).

2 - Add the **IgniteUI.Blazor.Controls** namespace in the **_Imports.razor** file (in both projects of a Blazor Web App with a client project):

```razor
@using IgniteUI.Blazor.Controls
```

3 - Add the Style Sheet in the **`<head>`** element of the app's host page: **Components/App.razor** in a Blazor Web App, or **wwwroot/index.html** in a standalone Blazor WebAssembly or Blazor Hybrid app:

```razor
<head>
    <link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
</head>
```

## Using the OSS Blazor Components

Add an Ignite UI for Blazor component to your razor page. In a Blazor Web App with the WebAssembly or Auto render mode, the page must be in the client project. For example:

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

Build and run the Blazor app.

For more detailed information about which components are included in the light package, see the [Open-Source vs Premium Components](./general-open-source-vs-premium.md) topic.

## Install IgniteUI.Blazor.GridLite

To add Grid Lite, install the **IgniteUI.Blazor.GridLite** package in the same project:

```cmd
dotnet add package IgniteUI.Blazor.GridLite
```

The grid needs no service registration of its own, and the Lite theme added above styles it too.

For more detailed information about Grid Lite features and configuration, see the [Grid Lite Overview](./grid-lite/overview.md) topic.

## Additional Resources

- [Open-Source vs Premium Components](./general-open-source-vs-premium.md)
- [Grid Lite Overview](./grid-lite/overview.md)
