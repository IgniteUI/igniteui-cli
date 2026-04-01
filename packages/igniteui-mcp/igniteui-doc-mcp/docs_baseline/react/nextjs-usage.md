---
title: Use Ignite UI for React components in Next.js application | Infragistics
_description: Use Infragistics' React components to create apps and improve data visualization with the world’s fastest React data grid and charts in Next.js.
_keywords: Ignite UI for React Next.js, Ignite UI for React Components in Next.js, Infragistics
mentionedTypes: []
_tocName: Integrating Ignite UI for React with Next.js
---

# Integrating Ignite UI for React with Next.js

Explore the seamless integration of Ignite UI for React into your Next.js project. This topic is crafted to help developers make the most of the Infragistics React components while leveraging the features of Next.js for building robust and performant full stack applications.

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

## Creating New Next.js Project

With above prerequisites installed, we can create a new Next.js application.

1 - Open **VS Code**, select **Terminal** menu and then **New Terminal** option.

2 - Type the following commands in terminal window:

```cmd
npx create-next-app@latest MyAppName
cd MyAppName
```

## Updating Existing Next.js App

If you want to use Ignite UI for React in an existing Next.js project (one that you have from before). We have you covered! All you have to do is execute these commands:

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

## Importing Component Modules

First we have to import the required modules of the components we want to use. We will go ahead and do this for the [**GeographicMap**](geo-map.md) component.

```ts
"use client"
import { IgrGeographicMapModule, IgrGeographicMap } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();
```

> \[!Note]
> It's important to note that Ignite UI for React components are using client-only features like state and browser events. Infragistics' components will work as expected within Client Next.js Components since they have the "use client" directive, but they won't work within Server Components.

## Using Components

We are now ready to use the Ignite UI for React map component in our Next.js component! Let's go ahead and define it:

```tsx
function App() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <IgrGeographicMap
        width="800px"
        height="500px"
        zoomable="true" />
    </div>
  );
}
```

## Running Application

Finally, we can run our new application by using one of the following commands:

```cmd
npm run dev
```

After executing this command, your project will be built and served locally on your computer. It will automatically open in your default browser and you will be able to use Ignite UI for React components in your project.

The final result should look something like this screenshot:

<img src="../images/general/geo-map.png" alt="geo-map" />

## Using React in Next.js Server Components

As mentioned earlier, most components of React rely on state and browser events, making them incompatible with direct use within Server Components. Nevertheless, if you find the need to use them this way, Infragistics' components can be wrapped within their respective Client Components.

```tsx
'use client'
import { IgrGeographicMap } from 'igniteui-react-maps';
IgrGeographicMapModule.register();

export default IgrGeographicMap;
```

Then, in a Next.js Server Component the IgrGeographicMap can be used directly:

```tsx
import IgrGeographicMap from './wrapped-geographic-map';

function App() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <IgrGeographicMap
        width="800px"
        height="500px"
        zoomable="true" />
    </div>
  );
}
```

> \[!Note]
> The majority of Ignite UI for React components may remain unwrapped as they are expected to be utilized within other Client Components. Therefore, there is no need to wrap all Infragistics' components.

## Dynamic import of Ignite UI for React components

Enhancing the initial loading performance of an application is facilitated by lazy loading, which reduces the required amount of JavaScript to render a route. It allows you to defer loading of the imported libraries and only include them in the client bundle when needed. Using `next/dynamic` you can implement lazy loading:

```tsx
"use client";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import dynamic from "next/dynamic";

export default function DynamicButtonComponent() {
  const IgButton = dynamic(
    async () => {
      const { IgrButton, IgrButtonModule } = await import("igniteui-react");
      IgrButtonModule.register();
      return IgrButton;
    }
  );

  return (
      <IgButton variant="contained">
        <span key="title">Click me</span>
      </IgButton>
  );
}
```

However, if a more complex component is used like the [**IgrGrid**](grids/data-grid.md), which typically contains child components, it is essential not to dynamically import each and every child component. The component should be used like this:

```tsx
"use client";
import dynamic from "next/dynamic";
import CustomersDataLocal from "./CustomersDataLocal.json";
import "igniteui-react-grids/grids/combined";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";

export default function GridDynamicComponent() {
  const IgnGrid = dynamic(
    async () => {
      const {
        IgrGrid,
        IgrGridModule,
        IgrColumn,
        IgrGridToolbar,
        IgrGridToolbarTitle,
        IgrGridToolbarActions,
        IgrGridToolbarPinning,
      } = await import("igniteui-react-grids");
      IgrGridModule.register();

      const IgGrid = ({ ...props }) => {
        return (
          <IgrGrid {...props}>
            <IgrGridToolbar>
              <IgrGridToolbarTitle></IgrGridToolbarTitle>
              <IgrGridToolbarActions>
                <IgrGridToolbarPinning></IgrGridToolbarPinning>
              </IgrGridToolbarActions>
            </IgrGridToolbar>
            <IgrColumn field="ID" header="ID" hidden="true"></IgrColumn>
            <IgrColumn
              field="CompanyName"
              header="Company Name"
              width="300px"
            ></IgrColumn>
            <IgrColumn
              field="ContactName"
              header="Contact Name"
              width="200px"
              pinned="true"
            ></IgrColumn>
            <IgrColumn
              field="ContactTitle"
              header="Contact Title"
              width="200px"
              pinned="true"
            ></IgrColumn>
            <IgrColumn
              field="Address"
              header="Address"
              width="300px"
            ></IgrColumn>
            <IgrColumn field="City" header="City" width="120px"></IgrColumn>
            <IgrColumn field="Region" header="Region" width="120px"></IgrColumn>
            <IgrColumn
              field="PostalCode"
              header="Postal Code"
              width="150px"
            ></IgrColumn>
            <IgrColumn field="Phone" header="Phone" width="150px"></IgrColumn>
            <IgrColumn field="Fax" header="Fax" width="150px"></IgrColumn>
          </IgrGrid>
        );
      };
      return IgGrid;
    }
  );

  return <IgnGrid data={CustomersDataLocal}></IgnGrid>;
}
```

> \[!Note]
> Implementing lazy loading for components can enhance performance, but it is advisable to use it exclusively when the components are not immediately visible on the page.

## Limitations

- If your Next.js project is using Page routing then you should transpile the Ignite UI for React packages using the `next.config.js` options. Your config should contain the following:

```tsx
const nextConfig = {
    transpilePackages: ['igniteui-react'],
    experimental: {
        esmExternals: "loose",
    }
}
```

## Additional Resources

- [Ignite UI for React](../components/general-getting-started.md)
- [Grid Overview](../components/grids/data-grid.md)
- [Next.js Documentation](https://nextjs.org/docs)

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
