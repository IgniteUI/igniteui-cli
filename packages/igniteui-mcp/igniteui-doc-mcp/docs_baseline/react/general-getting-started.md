---
title: Getting Started | Ignite UI for React | Infragistics
_description: Use Infragistics' React components to create apps and improve data visualization with the world’s fastest, virtualized, real-time React data grid and streaming financial and business and financial charts.
_keywords: Ignite UI for React, Infragistics, Getting Started
_language: en
mentionedTypes: ["XamBulletGraph", "IgrGrid"]
_tocName: Getting Started
---

# Getting Started With Ignite UI for React

[`Ignite UI for React`](https://github.com/IgniteUI/igniteui-react) is a complete set of UI widgets, components, and Figma UI kits for React by Infragistics. It enables developers to build modern, high-performance HTML5 and JavaScript apps for desktop browsers, mobile experiences, and progressive web apps (PWAs).

Ignite UI for React comprises several packages available under either an MIT or a commercial license, depending on the components and services they contain. For a detailed list of components and their license, please refer to the [License FAQ and Installation](./general-licensing.md) and [Open Source vs Premium](./general-open-source-vs-premium.md) topics.

## Prerequisites

1. Install NodeJS.
2. Install Visual Studio Code.

<div>
    <div style="display:inline-block;width:45%;text-align:center;">
      <img src="../images/general/nodejs.svg" alt="nodejs"
           style="display:flex;max-height:100px;margin:auto auto 20px auto;" />
      <a target="_blank" href="https://nodejs.org/en/download/" class="no-external-icon"
         style="color:white;background-color:#09f;text-decoration:none;font-weight:700;font-size:16px;padding: 5px 15px 5px 15px;">
        DOWNLOAD NODE
      </a>
    </div>
    <div style="display:inline-block;width:45%;text-align:center;">
      <img src="../images/general/vs-code.svg" alt="vs-code"
           style="display:flex;max-height:100px;margin:auto auto 20px auto;" />
      <a target="_blank" href="https://code.visualstudio.com/download" class="no-external-icon"
         style="color:white;background-color:#09f;text-decoration:none;font-weight:700;font-size:16px;padding: 5px 15px 5px 15px;">
        DOWNLOAD VS CODE
      </a>
    </div>
</div>

## Using Ignite UI CLI

To create an application from scratch and configure it to use Ignite UI React you can use the Ignite UI CLI. The first step is to install the respective package globally as follows:

```cmd
npm install -g igniteui-cli
```

If you want to get a guided experience through the available options, you can initialize the step-by-step mode that will help you create and set up your new application. To start the guide, simply run the `ig` command:

```cmd
ig
```

Then choose `React` as the framework and `Ignite UI for React TS` as the project type. Select the `Default Top Navigation` project template, add a specific component/view, or select `Complete & Run`.
For more information about the Ignite UI CLI, see the [CLI overview](general-cli-overview.md).

If you added a Grid component during the prompts, once the application is running you should see something similar to the following:

<img src="../images/general/ig-cli-grid.png" />

> [!NOTE]
> Keep in mind that by default Ignite UI CLI installs the Trial version of Ignite UI for React's Grid component which is under [commercial license](./general-open-source-vs-premium.md#comparison-table-for-all-components).

Alternatively, you can use popular frameworks such as Next.js, Vite, or Expo as recommended by the React team. The following are step-by-step instructions for creating React applications with Ignite UI for React using one of these methods.

## Using Vite CLI

### Creating a New React Project

All popular frameworks for React development provide powerful CLI tools for scaffolding a React application.

1 - Open **VS Code**, select **Terminal** menu and then **New Terminal** option.

2 - Type the following command in the terminal window:

```cmd
npm create vite@latest
```

Then follow the prompts to choose a name for the project, React as the framework, whether to use TypeScript, and various other options provided by Vite. Please refer to this <a href="https://react.dev/learn/creating-a-react-app" target="_blank">topic</a> for more information on the different ways to boilerplate a React application.

### Adding an Ignite UI React Grid Component

##### Package Installation

To add the Ignite UI React [**Grid**](grids/data-grid.md) component to the app you need to install the `igniteui-react-grids` package:

```cmd
npm install igniteui-react-grids --save
```

#### Importing Component Modules

Then we can import the required modules of the components we want to use. Let's do this for the Grid and Column components that we will also use in the template. We also need to import one of the themes.

```ts
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
```

#### Using Components

We are now ready to use the Ignite UI for React grid component in our markup! Let's go ahead and define it:

```tsx
// App.txs
function App() {
  const data = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 35 }
  ];

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <IgrGrid
        data={data}
        autoGenerate={false}>
        <IgrColumn
          field="name"
          header="Name"
          dataType="string">
        </IgrColumn>
        <IgrColumn
          field="age"
          header="Age"
          dataType="number">
        </IgrColumn>
      </IgrGrid>
    </div>
  );
}
```

### Running Application

Finally, we can run our new application:

```cmd
npm run dev
```

After executing this command, your project will be built and served locally on your computer. It will automatically open in your default browser and you will be able to use Ignite UI for React components in your project. The final result should show a data grid with sample data:

<img src="../images/general/ig-vite-grid.png" />

## Updating Existing Apps

If you want to use Ignite UI for React in an existing React CLI project, we have you covered! All you have to do is execute these commands:

```cmd
npm install --save igniteui-react
npm install --save igniteui-react-charts igniteui-react-core
npm install --save igniteui-react-excel igniteui-react-core
npm install --save igniteui-react-gauges igniteui-react-core
npm install --save igniteui-react-grids igniteui-react-core
npm install --save igniteui-react-maps igniteui-react-core
npm install --save igniteui-react-spreadsheet igniteui-react-core
```

Or

```cmd
yarn add igniteui-react-charts igniteui-react-core
yarn add igniteui-react-excel igniteui-react-core
yarn add igniteui-react-gauges igniteui-react-core
yarn add igniteui-react-grids igniteui-react-core
yarn add igniteui-react-maps igniteui-react-core
yarn add igniteui-react-spreadsheet igniteui-react-core
```

This will automatically install packages for Ignite UI for React, along with all of their dependencies, font imports and styles references to the existing project.

# Ignite UI for React Packages Overview

Ignite UI for React is a comprehensive suite of UI components, design toolkits, and supporting services for React. Built to empower developers to create modern, high-performance React applications for desktop browsers, mobile experiences, and progressive web apps (PWAs), Ignite UI for React leverages the latest React best practices and APIs.

## Charts & Graphs

Ignite UI for React contains a library of [Charts & Graphs](charts/chart-overview.md) that lets you visualize any type of data through its 65+ types of chart series and combinations to create stunning and interactive charts and dashboards. Built for speed and beauty, designed to work on every modern browser and with complete touch and interactivity, you can quickly build responsive visuals on any device.

## Gauges

Ignite UI for React provides [Radial Gauge](radial-gauge.md), [Linear Gauge](linear-gauge.md), and [Bullet Graph](bullet-graph.md) components used to illustrate data in an easy and intuitive way. The [Radial Gauge](radial-gauge.md) has a variety of customization options in order to create a predefined shape and scale. The [Linear Gauge](linear-gauge.md) provides a simple view of a value compared against a scale and one or more ranges. It supports one scale, one set of tick marks and one set of labels. The [Bullet Graph](bullet-graph.md) component lets you create data visualizations, replacing meters and gauges that are used on dashboards with simple bar charts.

## Maps

The Ignite UI for React [Geographic Map](geo-map.md) component brings the ability to visualize geographic data in your application. It can render data sets consisting of many geographic locations in shapes of markers, lines, polygons, or even interactive bitmaps. It allows you to overlay multiple map layers with geographic data, mark specific geographic locations and display information using custom markers and colors.

## Grids & Inputs

Ignite UI for React provides several [Grid](grids/grids-header.md) components that allow you to bind and display data with little configuration in the form of [Grid Lite](grid-lite/overview.md) - a light-weight grid component under MIT license, [Data Grid](grids/data-grid.md) - a feature-rich grid component under commercial license, [List](grids/list.md), [Tree](grids/tree.md), and even [Spreadsheet](spreadsheet-overview.md).

## Buttons, Inputs, Layouts, and Menus

Ignite UI for React provides various types of [Buttons](inputs/button.md), [Inputs](inputs/input.md), [Menus](menus/navbar.md), and [Layouts](layouts/tabs.md) that give you the ability to build modern web applications using encapsulation and the concept of reusable components in a dependency-free approach. See the [Storybook here](https://igniteui.github.io/igniteui-webcomponents). These components are based on the [Indigo Design System](https://www.infragistics.com/products/appbuilder/ui-toolkit), are fully supported by [App Builder](https://appbuilder.indigo.design/) and are backed by ready-to-use UI kits for Figma.
