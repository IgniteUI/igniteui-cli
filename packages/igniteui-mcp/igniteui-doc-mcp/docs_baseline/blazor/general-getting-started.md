---
title: Getting Started | Ignite UI for Blazor | Infragistics
description: "Install Ignite UI for Blazor and render your first component. Covers CLI scaffolding, manual package setup, and AI tooling with Agent Skills and MCP servers."
keywords: "Ignite UI for Blazor, Infragistics, Getting Started"
last_updated: "2025-04-06"
mentionedTypes: []
llms:
  description: "Ignite UI for Blazor is a complete set of UI widgets, components, and Figma UI kits for Blazor by Infragistics."
platformType: xplat
_tocName: Blazor Apps (General)
---
# Getting Started With Ignite UI for Blazor

This topic provides step-by-step instructions for creating a Blazor Web App with Ignite UI for Blazor using Visual Studio. The differences for [standalone Blazor WebAssembly apps](#standalone-blazor-webassembly-apps) and [existing Blazor Server apps](#existing-blazor-server-apps) are listed at the end.

For the MIT-licensed packages, see [Getting Started with Open-Source Libraries](./general-getting-started-oss.md), and for a Blazor Hybrid app, see [Build a Blazor Hybrid App with .NET MAUI](./general-getting-started-blazor-maui.md).

## Create a New Blazor Web App Project

Microsoft's [Blazor tutorial](https://dotnet.microsoft.com/learn/aspnet/blazor-tutorial/intro) walks through a first Blazor app in Visual Studio Code and links to the same for Visual Studio and the .NET CLI. The steps below use Visual Studio with the **ASP.NET and web development** workload.

If you want to add Ignite UI for Blazor to an existing application, go to the [**Install Ignite UI for Blazor**](#install-ignite-ui-for-blazor) section.

**Note:** 
Since .NET 8, the **Blazor Web App** template replaces the **Blazor Server App** template. For an app that runs on the server, choose the **Server** interactive render mode.

### Using Visual Studio

Start Visual Studio and click **Create a new project** on the start page, select the **Blazor Web App** template, and click **Next**.

Provide a project name and location, and click **Next**.

In the **Additional information** dialog, set:

- **Interactive render mode**: Server, WebAssembly or Auto. Ignite UI for Blazor components need an interactive render mode, as static server-side rendering is not currently supported.
- **Interactivity location**: Per page/component (the default) sets the render mode on each page, for example `@rendermode InteractiveServer`, and Global sets it once in **Components/App.razor**.

Specify any other project options, and click **Create**.

### Using the .NET CLI

Create the project with the `dotnet new blazor` command. This example sets the Server render mode globally:

```cmd
dotnet new blazor -o MyBlazorApp --interactivity Server --all-interactive
```

## Install Ignite UI for Blazor

Ignite UI for Blazor is delivered via NuGet packages. Install **IgniteUI.Blazor** from the [Infragistics NuGet Feed](./general-nuget-feed.md) or **IgniteUI.Blazor.Trial** from [NuGet.org](https://www.nuget.org/packages/IgniteUI.Blazor.Trial).

In a Blazor Web App with the WebAssembly or Auto render mode, installing it in the client project is enough, as the server project gets it through the project reference.

For more information on installing Ignite UI for Blazor using NuGet, read the [Installing Ignite UI for Blazor](./general-installing-blazor.md) topic.

## Register Ignite UI for Blazor

1 - Open the **Program.cs** file and register the Ignite UI for Blazor Service by calling **builder.Services.AddIgniteUIBlazor** function. In a Blazor Web App with the WebAssembly or Auto render mode, do this in the **Program.cs** of both the server and the client project:

```csharp
builder.Services.AddIgniteUIBlazor();
```

2 - Add the **IgniteUI.Blazor.Controls** namespace in the **_Imports.razor** file (in both projects when there is a client project):

```razor
@using IgniteUI.Blazor.Controls
```

3 - Add the Style Sheet in the **`<head>`** element of the **Components/App.razor** file:

```razor
<head>
    <link rel="stylesheet" href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" />
</head>
```

For .NET 9 or later applications, it is recommended to use the **Assets** collection property:

```razor
<head>
    <link rel="stylesheet" href="@Assets["_content/IgniteUI.Blazor/themes/light/bootstrap.css"]" />
</head>
```

4 - Add the script reference before the Blazor script in the **Components/App.razor** file. Reference it directly, not through **Assets**:

```razor
<script src="_content/IgniteUI.Blazor/app.bundle.js"></script>
<script src="@Assets["_framework/blazor.web.js"]"></script>
```

### Component Modules

Calling `builder.Services.AddIgniteUIBlazor()` is all most apps need: each component loads its client resources the first time it renders. Register modules explicitly to:

- have a component's resources ready when the app starts, before the component first renders;
- use a component that is created only on the client, for example by a JavaScript template, where no Razor component requests its module;
- enable features that no component requests on its own, such as chart interactivity ([`IgbDataChartInteractivityModule`](mcp:get_api_reference?platform=blazor&component=IgbDataChartInteractivityModule)) or the `*FullModule` bundles, all in the **IgniteUI.Blazor** package.

List the modules in `AddIgniteUIBlazor`, which loads them when the Ignite UI runtime starts:

```csharp
builder.Services.AddIgniteUIBlazor(
    typeof(IgbBadgeModule),
    typeof(IgbDataChartInteractivityModule)
);
```

Or register a module later, with the injected runtime:

```razor
@inject IIgniteUIBlazor IgniteUIBlazor

@code {
    protected override void OnInitialized()
    {
        IgbBadgeModule.Register(IgniteUIBlazor);
    }
}
```

## Add Ignite UI for Blazor Component

Add an Ignite UI for Blazor component to a razor page that has an interactive render mode. With the WebAssembly or Auto render mode, the page must be in the client project:

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

## Standalone Blazor WebAssembly Apps

In an app created from the **Blazor WebAssembly Standalone App** template (`dotnet new blazorwasm`), every component is interactive, so no render mode is needed. Follow the steps above with these differences:

- Add the style sheet in the **`<head>`** element of the **wwwroot/index.html** file.
- Skip the script reference in step 4.

## Existing Blazor Server Apps

Apps created from the **Blazor Server App** template before .NET 8 are still supported, but Microsoft recommends Blazor Web Apps (see [Convert a Blazor Server app into a Blazor Web App](https://learn.microsoft.com/aspnet/core/migration/70-to-80#convert-a-blazor-server-app-into-a-blazor-web-app)). Until you convert, no render mode is needed. Follow the steps above with these differences:

- Add the style sheet in the **`<head>`** element of the **Pages/_Host.cshtml** file (**Pages/_Layout.cshtml** in .NET 6).
- Skip the script reference in step 4.
