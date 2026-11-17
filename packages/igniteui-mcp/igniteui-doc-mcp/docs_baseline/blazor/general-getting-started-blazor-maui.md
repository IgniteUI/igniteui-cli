---
title: Build a Blazor Hybrid App with .NET MAUI - Ignite UI for Blazor
description: This article provides step-by-step instructions on how to create a Blazor Hybrid app with .NET MAUI using Ignite UI for Blazor. Try it Now!
keywords: "Ignite UI for Blazor, Infragistics, Getting Started"
mentionedTypes: []
llms:
  description: "Step-by-step instructions for creating a Blazor Hybrid app with Ignite UI for Blazor, using Visual Studio and .NET MAUI."
_tocName: .NET MAUI Blazor Hybrid App
---
# Getting Started: Build a Blazor Hybrid App with .NET MAUI

This topic provides step-by-step instructions for creating .NET MAUI Blazor applications with Ignite UI for Blazor using Visual Studio.

## What is Blazor Hybrid?

Blazor hybrid is something between Blazor Server and Blazor Web Assembly. It simplifies the development, the code, and the processes as it brings together the capabilities of desktop and mobile native client frameworks. This technology lets you apply your C# and .NET skills when creating native client applications.

But in order to be able to use it for your apps, you need .NET MAUI.

## What is .NET MAUI?

.NET MAUI (.NET Multi-platform App UI) is an open-source, cross-platform framework for building native desktop and mobile apps from a single shared code-base. With it, you can more easily develop Blazor applications that run on different devices and operating systems, including Android, iOS, macOS, and Windows using C# and XAML.

## Prerequisites

- Visual Studio 2022 17.12 or above, with the **.NET Multi-platform App UI development** workload

For more information, see the [.NET MAUI installation](https://learn.microsoft.com/dotnet/maui/get-started/installation) topic.

## Create and Run a Blazor Hybrid App with .Net Maui and Ignite UI for Blazor

The steps below describe how to create a new .NET MAUI Blazor project. If you want to add Ignite UI for Blazor to an existing application, go to the [**Install Ignite UI for Blazor Package**](#install-ignite-ui-for-blazor) section.

Start Visual Studio and click **Create a new project** on the start page, select the **.NET MAUI Blazor Hybrid App** template, and click **Next**.

Provide a project name and location, and click **Next**.

In the **Additional information** dialog, select the framework version and click **Create**.

## Install Ignite UI for Blazor

Ignite UI for Blazor is delivered via NuGet packages. Install **IgniteUI.Blazor** from the [Infragistics NuGet Feed](./general-nuget-feed.md) or **IgniteUI.Blazor.Trial** from [NuGet.org](https://www.nuget.org/packages/IgniteUI.Blazor.Trial).

For more information on installing Ignite UI for Blazor using NuGet, read the [Installing Ignite UI for Blazor](./general-installing-blazor.md) topic.

## Register Ignite UI for Blazor

1 - Open the **MauiProgram.cs** file and register the Ignite UI for Blazor Service by calling **builder.Services.AddIgniteUIBlazor** function:

```cs
public static class MauiProgram
{
    public static MauiApp CreateMauiApp()
    {
        var builder = MauiApp.CreateBuilder();
        // ...
        builder.Services.AddMauiBlazorWebView();
#if DEBUG
        builder.Services.AddBlazorWebViewDeveloperTools();
#endif

        //register IgniteUI for Blazor
        builder.Services.AddIgniteUIBlazor();
        return builder.Build();
    }
}
```

2 - Add the **IgniteUI.Blazor.Controls** namespace in the **_Imports.razor** file:

```razor
@using IgniteUI.Blazor.Controls
```

3 - Add the Style Sheet in the **`<head>`** element of the **wwwroot/index.html** file:

```razor
<head>
    <link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
</head>
```

## Add Ignite UI for Blazor Component

Add an Ignite UI for Blazor component to your razor page:

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

Build and run the .NET MAUI Blazor app for Windows.

**Note:** 
For more information about building cross-platform applications with .NET MAUI, visit the [Microsoft Documentation](https://docs.microsoft.com/en-us/dotnet/maui/get-started/first-app?pivots=devices-android).
