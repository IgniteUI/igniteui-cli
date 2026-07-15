---
title: Build a Blazor Hybrid App with .NET MAUI - Ignite UI for Blazor
_description: This article provides a step-step instruction on how to create a blazor hybrid app with .Net Maui using Ignite UI for Blazor. Try it Now!
_keywords: Ignite UI for Blazor, Infragistics, Getting Started
mentionedTypes: []
_tocName: .NET MAUI Blazor App
---

# Getting Started: Build a Blazor Hybrid App with .NET MAUI

This topic provides step-by-step instructions for creating .NET MAUI Blazor applications with Ignite UI for Blazor using Visual Studio 2022.

## What is Blazor Hybrid?

Blazor hybrid is something between Blazor Server and Blazor Web Assembly. It simplifies the development, the code, and the processes as it brings together the capabilities of desktop and mobile native client frameworks. This technology lets you apply your C# and .NET skills when creating native client applications.

But in order to be able to use it for your apps, you need .NET MAUI.

## What is .NET MAUI?

.NET MAUI (.NET Multi-platform App UI) is an open-source, cross-platform framework for building native desktop and mobile apps from a single shared code-base. With it, you can more easily develop Blazor applications that run on different devices and operating systems, including Android, iOS, macOS, and Windows using C# and XAML.

## Prerequisites

- .NET SDK 7 or above
- Visual Studio 2022 17.4 or above, with the following workloads:
  - Mobile development with .NET
  - ASP.NET and Web Development

## Create and Run a Blazor Hybrid App with .Net Maui and Ignite UI for Blazor

The steps below describe how to create a new .NET MAUI Blazor project. If you want to add Ignite UI for Blazor to an existing application, go to the [**Install Ignite UI for Blazor Package**](#install-ignite-ui-for-blazor) section.

Start Visual Studio 2022 and click **Create a new project** on the start page, select the **.NET MAUI Blazor App** template, and click **Next**.

<img src="../images/general/new-blazor-project-maui.jpg" alt="new-blazor-project-maui" />

Provide a project name and location, and click **Create**

<img src="../images/general/new-blazor-project-configure-maui.jpg" alt="new-blazor-project-configure-maui" />

## Install Ignite UI for Blazor

Ignite UI for Blazor is delivered via NuGet packages. To use the Ignite UI for Blazor components in your Blazor applications, you must first install the appropriate NuGet packages.

In Visual Studio, open the NuGet package manager by selecting **Tools** → **NuGet Package Manager** → **Manage NuGet Packages for Solution**. Search for and install the **IgniteUI.Blazor** NuGet package.

For more information on installing Ignite UI for Blazor using NuGet, read the [Installing Ignite UI for Blazor](general-installing-blazor.md) topic.

## Register Ignite UI for Blazor

1 - Open the **MauiProgram.cs** file and register the Ignite UI for Blazor Service by calling **builder.Services.AddIgniteUIBlazor** function:

2 - Add the **IgniteUI.Blazor.Controls** namespace in the **\_Imports.razor** file:

```razor
@using IgniteUI.Blazor.Controls
```

3 - Add the Style Sheet in the **\<head>** element of the **wwwroot/index.html** file:

```razor
<head>
    <link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
</head>
```

4 - Add Script Reference to the **wwwroot/index.html** file:

```razor
    <script src="_content/IgniteUI.Blazor/app.bundle.js"></script>
    <script src="_framework/blazor.webview.js" autostart="false"></script>
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

<img src="../images/general/getting-started-blazor-card-windows.jpg" alt="getting-started-blazor-card-windows" />

> [!Note]
> For more information about building cross-platform applications with .NET MAUI, visit the [Microsoft Documentation](https://docs.microsoft.com/en-us/dotnet/maui/get-started/first-app?pivots=devices-android).
