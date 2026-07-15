---
title: Installing Ignite UI for Blazor
_description: How to install Blazor using nuget packages.
_keywords: Blazor, NuGet, Feed, Infragistics, Install
mentionedTypes: []
_tocName: Installing Ignite UI for Blazor
---

# Installing Ignite UI for Blazor

Ignite UI for Blazor is delivered via NuGet packages. To use the Ignite UI for Blazor components in your Blazor applications, you must first install the appropriate NuGet packages.

There are three ways to install Ignite UI for Blazor using NuGet:

- [Using Visual Studio](#using-visual-studio)
- [Using the .NET CLI](#using-the-net-cli)
- [Using the Package Manager](#using-the-package-manager)

Licensed users should use the official licensed Ignite UI for Blazor NuGet packages provided on the [Infragistics Private NuGet Feed](./general-nuget-feed.md).

> [!Note]
> Trial users can install the **IgniteUI.Blazor** trial NuGet package found on [NuGet.org](https://www.nuget.org/packages/IgniteUI.Blazor).

## Using Visual Studio

Right click the Solution, or Project, and select **Manage NuGet Packages for Solution**.

<img src="../images/general/nuget-manage-packages.jpg" alt="nuget-manage-packages" />

In the package manager dialog, open the **Browse** tab, select the **Infragistics** package source, and install the **IgniteUI.Blazor** NuGet package into the project.

<img src="../images/general/nuget-package-manager-browse.jpg" alt="nuget-package-manager-browse" />

> [!Note]
> If you do not have an Infragistics package source available, learn how to add it by reading the [Infragistics NuGet feed topic](./general-nuget-feed.md).

## Using the .NET CLI

```cmd
> dotnet add package IgniteUI.Blazor --version 25.2.83 (March 2026)
```

## Using the Package Manager

```cmd
PM> Install-Package IgniteUI.Blazor -Version 25.2.83 (March 2026)
```
