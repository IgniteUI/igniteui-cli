---
title: "Web Components Toolbar Component | Ignite UI for Web Components"
description: See how you can easily get started with Web Components Toolbar Component. Compatible with the Data Chart. Extend your .
keywords: "Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components Toolbar components, Web Components Toolbar controls"
license: commercial
mentionedTypes: ["Toolbar", "ToolAction", "DomainChart", "CategoryChart", "DataChart", "TrendLineType"]
llms:
  description: "The Web Components Toolbar component is a companion container for UI operations to be used primarily with our charting components."
_tocName: Toolbar
_premium: true
---
# Web Components Toolbar Overview

The Web Components Toolbar component is a companion container for UI operations to be used primarily with our charting components. The toolbar will dynamically update with a preset of properties and tool items when linked to our [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) or [`IgcCategoryChart`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent) components. You'll be able to create custom tools for your project allowing end users to provide changes, offering an endless amount of customization.

## Web Components Toolbar Example

```typescript
export class CountryRenewableElectricityItem {
    public constructor(init: Partial<CountryRenewableElectricityItem>) {
        Object.assign(this, init);
    }

    public year: string;
    public europe: number;
    public china: number;
    public america: number;

}
export class CountryRenewableElectricity extends Array<CountryRenewableElectricityItem> {
    public constructor(items: Array<CountryRenewableElectricityItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryRenewableElectricityItem({ year: `2009`, europe: 34, china: 21, america: 19 }),
                new CountryRenewableElectricityItem({ year: `2010`, europe: 43, china: 26, america: 24 }),
                new CountryRenewableElectricityItem({ year: `2011`, europe: 66, china: 29, america: 28 }),
                // ... 9 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.aboveContentSplit {
    display: flex;
    flex-direction: row;
}
.aboveContentLeftContainer {
    margin-left: 1.25rem;
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;
    align-items: flex-end;
}
.aboveContentRightContainer {
    margin-right: 1.25rem;
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: flex-end;
}
```

## Dependencies

Install the Ignite UI for Web Components layouts, inputs, charts and core packages:

```cmd
npm install igniteui-webcomponents-layouts
npm install igniteui-webcomponents-inputs
npm install igniteui-webcomponents-charts
npm install igniteui-webcomponents-core
```

The following modules are required when using the `IgcToolbar` with the [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) component and it's features.

```ts
import { ModuleManager } from 'igniteui-webcomponents-core';
import { IgcToolbarModule } from 'igniteui-webcomponents-layouts';
import { IgcDataChartToolbarModule, IgcDataChartCoreModule, IgcDataChartCategoryModule, IgcDataChartAnnotationModule, IgcDataChartInteractivityModule, IgcDataChartCategoryTrendLineModule } from 'igniteui-webcomponents-charts';

ModuleManager.register(
    IgcToolbarModule,
    IgcToolActionLabelModule,
    IgcDataChartToolbarModule,
    IgcDataChartCategoryModule,
    IgcDataChartCoreModule,
    IgcDataChartInteractivityModule,
    IgcDataChartAnnotationModule,
    IgcDataChartCategoryTrendLineModule
);
```

## Usage

### Tool Actions

The following is a list of the different `IgcToolAction` items that you can add to the Toolbar.

- `IgcToolActionButton`
- `IgcToolActionCheckbox`
- `IgcToolActionIconButton`
- `IgcToolActionIconMenu`
- `IgcToolActionLabel`
- `IgcToolActionNumberInput`
- `IgcToolActionRadio`
- `IgcToolActionSubPanel`

Each of these tools exposes an `OnCommand` event that is triggered by mouse click. Note, the `IgcToolActionIconMenu` is a wrapper for other tools that can also be wrapped inside a `IgcToolActionIconMenu`.

New and existing tools can be repositioned and marked hidden using the `OverlayId`, `BeforeId` and `AfterId` properties on the `IgcToolAction` object. ToolActions also expose a `Visibility` property.

The following example demonstrates a couple of features. First you can group tools together in the `IgcToolActionSubPanel` including hiding built in tools such as the **ZoomReset** and **AnalyzeMenu** menu tool actions. In this example a new instance of the **ZoomReset** tool action within the **ZoomMenu** by using the the `AfterId` property and assigning that to **ZoomOut** to be precise with it's placement. It is also highlighted via the `IsHighlighted` property on the tool.

```typescript
export class CountryRenewableElectricityItem {
    public constructor(init: Partial<CountryRenewableElectricityItem>) {
        Object.assign(this, init);
    }

    public year: string;
    public europe: number;
    public china: number;
    public america: number;

}
export class CountryRenewableElectricity extends Array<CountryRenewableElectricityItem> {
    public constructor(items: Array<CountryRenewableElectricityItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryRenewableElectricityItem({ year: `2009`, europe: 34, china: 21, america: 19 }),
                new CountryRenewableElectricityItem({ year: `2010`, europe: 43, china: 26, america: 24 }),
                new CountryRenewableElectricityItem({ year: `2011`, europe: 66, china: 29, america: 28 }),
                // ... 9 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.aboveContentSplit {
    display: flex;
    flex-direction: row;
}
.aboveContentLeftContainer {
    margin-left: 1.25rem;
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;
    align-items: flex-end;
}
.aboveContentRightContainer {
    margin-right: 1.25rem;
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: flex-end;
}
```

### Web Components Data Chart Integration

The Web Components Toolbar contains a `Target` property. This is used to link a component, such as the [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) as shown in the code below:

```html
  <div>
      <igc-toolbar
      name="Toolbar"
      id="Toolbar">
      </igc-toolbar>
  </div>

  <div class="container fill">
      <igc-data-chart
      is-horizontal-zoom-enabled="true"
      name="chart"
      id="chart">
      </igc-data-chart>
  </div>
```

```ts
  private _bind: () => void;
  constructor() {
    var toolbar = this.toolbar = document.getElementById('Toolbar') as IgcToolbarComponent;
    var chart = this.chart = document.getElementById('chart') as IgcDataChartComponent;

    this._bind = () => {
        toolbar.target = this.chart;
    }
    this._bind();
  }
```

Several pre-existing `IgcToolAction` items and menus become available when the [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) is linked with the Toolbar. Here is a list of the built-in Web Components [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) Tool Actions and their associated `OverlayId`:

Zooming Actions

- `ZoomMenu`: A `IgcToolActionIconMenu` that exposes three `IgcToolActionLabel` items to invoke the [`ZoomIn`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=zoomIn) and [`ZoomOut`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=zoomOut) methods on the chart for increasing/decreasing the chart's zoom level including `ZoomReset`, a `IgcToolActionLabel` that invokes the [`ResetZoom`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=resetZoom) method on the chart to reset the zoom level to it's default position.

Trend Actions

- `AnalyzeMenu`: A `IgcToolActionIconMenu` that contains several options for configuring different options of the chart.
- `AnalyzeHeader`: A sub section header.
  - `LinesMenu`: A sub menu containing various tools for showing different dashed horizontal lines on the chart.
  - `LinesHeader`: A sub menu section header for the following three tools:
    - `MaxValue`: A `IgcToolActionCheckbox` that displays a dashed horizontal line along the yAxis at the maximum value of the series.
    - `MinValue`: A `IgcToolActionCheckbox` that displays a dashed horizontal line along the yAxis at the minimum value of the series.
    - [`Average`](mcp:get_api_reference?platform=webcomponents&component=ValueLayerValueMode&member=Average):  A `IgcToolActionCheckbox` that displays a dashed horizontal line along the yAxis at the average value of the series.
  - `TrendsMenu`: A sub menu containing tools for applying various trendlines to the [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) plot area.
  - `TrendsHeader`: A sub menu section header for the following three tools:
    - **Exponential**: A `IgcToolActionRadio` that sets the [`TrendLineType`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=trendLineType) on each series in the chart to **ExponentialFit**.
    - **Linear**: A `IgcToolActionRadio` that sets the [`TrendLineType`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=trendLineType) on each series in the chart to **LinearFit**.
    - **Logarithmic**: A `IgcToolActionRadio` that sets the [`TrendLineType`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=trendLineType) on each series in the the chart to **LogarithmicFit**.
- `HelpersHeader`: A sub section header.
  - `SeriesAvg`: A `IgcToolActionCheckbox` that adds or removes a [`IgcValueLayer`](mcp:get_api_reference?platform=webcomponents&component=IgcValueLayerComponent) to the chart's series collection using the [`IgcValueLayerValueMode`](mcp:get_api_reference?platform=webcomponents&component=ValueLayerValueMode) of type [`Average`](mcp:get_api_reference?platform=webcomponents&component=ValueLayerValueMode&member=Average).
  - `ValueLabelsMenu`: A sub menu containing various tools for showing different annotations on the [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent)'s plot area.
  - `ValueLabelsHeader`: A sub menu section header for the following tools:
    - `ShowValueLabels`: A `IgcToolActionCheckbox` that toggles data point values by using a [`IgcCalloutLayer`](mcp:get_api_reference?platform=webcomponents&component=IgcCalloutLayerComponent).
    - `ShowLastValueLabel`: A `IgcToolActionCheckbox` that toggles final value axis annotations by using a [`IgcFinalValueLayer`](mcp:get_api_reference?platform=webcomponents&component=IgcFinalValueLayerComponent).
- `ShowCrosshairs`: A `IgcToolActionCheckbox` that toggles mouse-over crosshair annotations via the chart's [`CrosshairsDisplayMode`](mcp:get_api_reference?platform=webcomponents&component=IgcDomainChartComponent&member=crosshairsDisplayMode) property.
- `ShowGridlines`: A `IgcToolActionCheckbox` that toggles extra gridlines by applying a `MajorStroke` to the X-Axis.

Save to Image Action

- `CopyAsImage`: A `IgcToolActionLabel` that exposes an option to copy the chart to the clipboard.
- `CopyHeader`: A sub section header.

### SVG Icons

When adding tools manually, icons can be assigned using the `RenderIconFromText` method. There are three parameters to pass in this method. The first is the icon collection name defined on the tool eg. `IconCollectionName`. The second is the name of the icon defined on the tool eg. `IconName`, followed by adding the SVG string.

### Data URL Icons

Similarly to adding svg, you can also add an Icon image from a URL via the `RegisterIconFromDataURL`. The method's third parameter would be used to enter a string URL.

The following snippet shows both methods of adding an Icon.

```ts
public toolbarCustomIconOnViewInit(): void {

  const icon = '<svg width="28px" height="28px" stroke="none" viewBox="0 0 3.5 3.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--gis" preserveAspectRatio="xMidYMid meet"><path d="M0.436 0.178a0.073 0.073 0 0 0 -0.062 0.036L0.01 0.846a0.073 0.073 0 0 0 0.063 0.109h0.729a0.073 0.073 0 0 0 0.063 -0.109L0.501 0.214a0.073 0.073 0 0 0 -0.064 -0.036zm0.001 0.219 0.238 0.413H0.199zM1.4 0.507v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245zM0.073 1.388A0.073 0.073 0 0 0 0 1.461v0.583a0.073 0.073 0 0 0 0.073 0.073h0.729A0.073 0.073 0 0 0 0.875 2.045V1.461a0.073 0.073 0 0 0 -0.073 -0.073zm0.073 0.146h0.583v0.438H0.146zM1.4 1.674v0.245h0.945v-0.245zm1.19 0v0.245h0.91v-0.245zM0.438 2.447c-0.241 0 -0.438 0.197 -0.438 0.438 0 0.241 0.197 0.438 0.438 0.438s0.438 -0.197 0.438 -0.438c0 -0.241 -0.197 -0.438 -0.438 -0.438zm0 0.146a0.291 0.291 0 0 1 0.292 0.292 0.291 0.291 0 0 1 -0.292 0.292 0.291 0.291 0 0 1 -0.292 -0.292A0.291 0.291 0 0 1 0.438 2.593zM1.4 2.842v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245z" fill="#000000" fill-rule="evenodd"/></svg>';

  this.toolbar.registerIconFromText("CustomCollection", "CustomIcon", icon);
}
```

```ts
public toolbarCustomIconOnViewInit(): void {

  toolbar.registerIconFromDataURL("CustomCollection", "CustomIcon", "https://www.svgrepo.com/show/678/calculator.svg");

}
```

```html
<igc-tool-action-label
    title="Custom Icon"
    icon-name="CustomIcon"
    icon-collection-name="CustomCollection">
</igc-tool-action-label>
```

```ts
public toolbarCustomIconOnViewInit(): void {

  const icon = '<svg width="28px" height="28px" stroke="none" viewBox="0 0 3.5 3.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--gis" preserveAspectRatio="xMidYMid meet"><path d="M0.436 0.178a0.073 0.073 0 0 0 -0.062 0.036L0.01 0.846a0.073 0.073 0 0 0 0.063 0.109h0.729a0.073 0.073 0 0 0 0.063 -0.109L0.501 0.214a0.073 0.073 0 0 0 -0.064 -0.036zm0.001 0.219 0.238 0.413H0.199zM1.4 0.507v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245zM0.073 1.388A0.073 0.073 0 0 0 0 1.461v0.583a0.073 0.073 0 0 0 0.073 0.073h0.729A0.073 0.073 0 0 0 0.875 2.045V1.461a0.073 0.073 0 0 0 -0.073 -0.073zm0.073 0.146h0.583v0.438H0.146zM1.4 1.674v0.245h0.945v-0.245zm1.19 0v0.245h0.91v-0.245zM0.438 2.447c-0.241 0 -0.438 0.197 -0.438 0.438 0 0.241 0.197 0.438 0.438 0.438s0.438 -0.197 0.438 -0.438c0 -0.241 -0.197 -0.438 -0.438 -0.438zm0 0.146a0.291 0.291 0 0 1 0.292 0.292 0.291 0.291 0 0 1 -0.292 0.292 0.291 0.291 0 0 1 -0.292 -0.292A0.291 0.291 0 0 1 0.438 2.593zM1.4 2.842v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245z" fill="#000000" fill-rule="evenodd"/></svg>';

  this.toolbar.registerIconFromText("CustomCollection", "CustomIcon", icon);

}
```

```ts
public toolbarCustomIconOnViewInit(): void {

  toolbar.registerIconFromDataURL("CustomCollection", "CustomIcon", "https://www.svgrepo.com/show/678/calculator.svg");

}
```

### Vertical Orientation

By default the Web Components Toolbar is shown horizontally, but it also has the ability to shown vertically by setting the `Orientation` property.

```html
<igc-toolbar orientation="Vertical" />
```

The following example demonstrates the vertical orientation of the Web Components Toolbar.

```typescript
export class CountryRenewableElectricityItem {
    public constructor(init: Partial<CountryRenewableElectricityItem>) {
        Object.assign(this, init);
    }

    public year: string;
    public europe: number;
    public china: number;
    public america: number;

}
export class CountryRenewableElectricity extends Array<CountryRenewableElectricityItem> {
    public constructor(items: Array<CountryRenewableElectricityItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryRenewableElectricityItem({ year: `2009`, europe: 34, china: 21, america: 19 }),
                new CountryRenewableElectricityItem({ year: `2010`, europe: 43, china: 26, america: 24 }),
                new CountryRenewableElectricityItem({ year: `2011`, europe: 66, china: 29, america: 28 }),
                // ... 9 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Color Editor

You can add a custom color editor tool to the the Web Components Toolbar, which will also work with the Command event to perform custom styling to your application.

```ts
<igc-toolbar
  name="toolbar"
  id="toolbar">
      <igc-tool-action-color-editor
      title="Series Brush Color"
      name="colorEditorTool"
      id="colorEditorTool">
      </igc-tool-action-color-editor>
</igc-toolbar>
```

The following example demonstrates styling the Web Components Data Chart series brush with the Color Editor tool.
```typescript
export class CountryRenewableElectricityItem {
    public constructor(init: Partial<CountryRenewableElectricityItem>) {
        Object.assign(this, init);
    }

    public year: string;
    public europe: number;
    public china: number;
    public america: number;

}
export class CountryRenewableElectricity extends Array<CountryRenewableElectricityItem> {
    public constructor(items: Array<CountryRenewableElectricityItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryRenewableElectricityItem({ year: `2009`, europe: 34, china: 21, america: 19 }),
                new CountryRenewableElectricityItem({ year: `2010`, europe: 43, china: 26, america: 24 }),
                new CountryRenewableElectricityItem({ year: `2011`, europe: 66, china: 29, america: 28 }),
                // ... 9 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.aboveContentSplit {
    display: flex;
    flex-direction: row;
}
.aboveContentLeftContainer {
    margin-left: 1.25rem;
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;
    align-items: flex-end;
}
.aboveContentRightContainer {
    margin-right: 1.25rem;
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: flex-end;
}
```

{/* ## Styling/Theming

The icon component can be styled by using it's `BaseTheme` property directly to the `IgcToolbar`.

```html
<igc-toolbar base-theme="SlingshotDark" />
```


## API References

`IgcToolbar`<br />
[`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent)<br />

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
