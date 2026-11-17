---
title: "Web Components Toolbar Component | Ignite UI for Web Components"
description: See how you can easily get started with Web Components Toolbar Component. Compatible with the Data Chart. Extend your .
keywords: "Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components Toolbar components, Web Components Toolbar controls"
license: commercial
mentionedTypes: ["Toolbar", "ToolAction", "DomainChart", "CategoryChart", "DataChart", "Axis", "ValueLayerValueMode"]
llms:
  description: "The Web Components Toolbar component is a companion container for UI operations to be used primarily with our charting components."
platformType: xplat
_tocName: Toolbar
_premium: true
---
# Web Components Toolbar Overview

The Web Components Toolbar component is a companion container for UI operations to be used primarily with our charting components. The toolbar will dynamically update with a preset of properties and tool items when linked to our [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) or [`IgcCategoryChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent) components. You'll be able to create custom tools for your project allowing end users to provide changes, offering an endless amount of customization.

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

The following modules are required when using the `IgcToolbarComponent` with the [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) component and it's features.

```ts
import { ModuleManager } from 'igniteui-webcomponents-core';
import { IgcToolbarModule } from 'igniteui-webcomponents-layouts';
import { IgcDataChartToolbarModule, IgcDataChartCoreModule, IgcDataChartCategoryModule, IgcDataChartAnnotationModule, IgcDataChartInteractivityModule, IgcDataChartCategoryTrendLineModule } from 'igniteui-webcomponents-charts';
// ...
ModuleManager.register(
    IgcToolbarModule,
    IgcDataChartToolbarModule,
    IgcDataChartCoreModule,
    IgcDataChartCategoryModule,
    IgcDataChartAnnotationModule,
    IgcDataChartInteractivityModule,
    IgcDataChartCategoryTrendLineModule
);
```

## Usage

### Tool Actions

The following is a list of the different `IgcToolActionComponent` items that you can add to the Toolbar.

- `IgcToolActionButtonComponent`
- `IgcToolActionCheckboxComponent`
- `IgcToolActionIconButtonComponent`
- `IgcToolActionIconMenuComponent`
- `IgcToolActionLabelComponent`
- `IgcToolActionNumberInputComponent`
- `IgcToolActionRadioComponent`
- `IgcToolActionSubPanelComponent`

Each of these tools exposes an `onCommand` event that is triggered by mouse click. Note, the `IgcToolActionIconMenuComponent` is a wrapper for other tools that can also be wrapped inside a `IgcToolActionIconMenuComponent`.

New and existing tools can be repositioned and marked hidden using the `overlayId`, `beforeId` and `afterId` properties on the `IgcToolActionComponent` object. ToolActions also expose a `IgcToolActionComponent.visibility` property.

The following example demonstrates a couple of features. First you can group tools together in the `IgcToolActionSubPanelComponent` including hiding built in tools such as the **ZoomReset** and **AnalyzeMenu** menu tool actions. In this example a new instance of the **ZoomReset** tool action within the **ZoomMenu** by using the the `afterId` property and assigning that to **ZoomOut** to be precise with it's placement. It is also highlighted via the `isHighlighted` property on the tool.

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

The Web Components Toolbar contains a `target` property. This is used to link a component, such as the [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) as shown in the code below:

```html
<igc-toolbar
    id="toolbar"
    orientation="Horizontal">
</igc-toolbar>
<igc-data-chart
    id="chart"
    is-horizontal-zoom-enabled="true"
    is-vertical-zoom-enabled="true">
</igc-data-chart>
```

```ts
toolbar.target = this.chart;
```

Several pre-existing `IgcToolActionComponent` items and menus become available when the [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) is linked with the Toolbar. Here is a list of the built-in Web Components [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) Tool Actions and their associated `overlayId`:

Zooming Actions

- `ZoomMenu`: A `IgcToolActionIconMenuComponent` that exposes three `IgcToolActionLabelComponent` items to invoke the [`zoomIn`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=zoomIn) and [`zoomOut`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=zoomOut) methods on the chart for increasing/decreasing the chart's zoom level including `ZoomReset`, a `IgcToolActionLabelComponent` that invokes the [`resetZoom`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=resetZoom) method on the chart to reset the zoom level to it's default position.

Trend Actions

- `AnalyzeMenu`: A `IgcToolActionIconMenuComponent` that contains several options for configuring different options of the chart.
- `AnalyzeHeader`: A sub section header.
  - `LinesMenu`: A sub menu containing various tools for showing different dashed horizontal lines on the chart.
  - `LinesHeader`: A sub menu section header for the following three tools:
    - `MaxValue`: A `IgcToolActionCheckboxComponent` that displays a dashed horizontal line along the yAxis at the maximum value of the series.
    - `MinValue`: A `IgcToolActionCheckboxComponent` that displays a dashed horizontal line along the yAxis at the minimum value of the series.
    - `Average`:  A `IgcToolActionCheckboxComponent` that displays a dashed horizontal line along the yAxis at the average value of the series.
  - `TrendsMenu`: A sub menu containing tools for applying various trendlines to the [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) plot area.
  - `TrendsHeader`: A sub menu section header for the following three tools:
    - **Exponential**: A `IgcToolActionRadioComponent` that sets the [`trendLineType`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=trendLineType) on each series in the chart to **ExponentialFit**.
    - **Linear**: A `IgcToolActionRadioComponent` that sets the [`trendLineType`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=trendLineType) on each series in the chart to **LinearFit**.
    - **Logarithmic**: A `IgcToolActionRadioComponent` that sets the [`trendLineType`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=trendLineType) on each series in the the chart to **LogarithmicFit**.
- `HelpersHeader`: A sub section header.
  - `SeriesAvg`: A `IgcToolActionCheckboxComponent` that adds or removes a [`IgcValueLayerComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcValueLayerComponent) to the chart's series collection using the [`ValueLayerValueMode`](mcp:get_api_reference?platform=webcomponents&component=ValueLayerValueMode) of type [`Average`](mcp:get_api_reference?platform=webcomponents&component=ValueLayerValueMode&member=Average).
  - `ValueLabelsMenu`: A sub menu containing various tools for showing different annotations on the [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent)'s plot area.
  - `ValueLabelsHeader`: A sub menu section header for the following tools:
    - `ShowValueLabels`: A `IgcToolActionCheckboxComponent` that toggles data point values by using a [`IgcCalloutLayerComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCalloutLayerComponent).
    - `ShowLastValueLabel`: A `IgcToolActionCheckboxComponent` that toggles final value axis annotations by using a [`IgcFinalValueLayerComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcFinalValueLayerComponent).
- `ShowCrosshairs`: A `IgcToolActionCheckboxComponent` that toggles mouse-over crosshair annotations via the chart's [`crosshairsDisplayMode`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=crosshairsDisplayMode) property.
- `ShowGridlines`: A `IgcToolActionCheckboxComponent` that toggles extra gridlines by applying a [`majorStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcAxisComponent&member=majorStroke) to the X-Axis.

Save to Image Action

- `CopyAsImage`: A `IgcToolActionLabelComponent` that exposes an option to copy the chart to the clipboard.
- `CopyHeader`: A sub section header.

### SVG Icons

When adding tools manually, icons can be assigned using the `registerIconFromText` method. There are three parameters to pass in this method. The first is the icon collection name defined on the tool eg. `iconCollectionName`. The second is the name of the icon defined on the tool eg. `iconName`, followed by adding the SVG string.

### Data URL Icons

Similarly to adding svg, you can also add an Icon image from a URL via the `registerIconFromDataURL`. The method's third parameter would be used to enter a string URL.

The following code registers an icon each way, an SVG string and a URL, into two collections:

```ts
var toolbar = this.toolbar;
const icon = '<svg width="28px" height="28px" stroke="none" viewBox="0 0 3.5 3.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--gis" preserveAspectRatio="xMidYMid meet"><path d="M0.436 0.178a0.073 0.073 0 0 0 -0.062 0.036L0.01 0.846a0.073 0.073 0 0 0 0.063 0.109h0.729a0.073 0.073 0 0 0 0.063 -0.109L0.501 0.214a0.073 0.073 0 0 0 -0.064 -0.036zm0.001 0.219 0.238 0.413H0.199zM1.4 0.507v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245zM0.073 1.388A0.073 0.073 0 0 0 0 1.461v0.583a0.073 0.073 0 0 0 0.073 0.073h0.729A0.073 0.073 0 0 0 0.875 2.045V1.461a0.073 0.073 0 0 0 -0.073 -0.073zm0.073 0.146h0.583v0.438H0.146zM1.4 1.674v0.245h0.945v-0.245zm1.19 0v0.245h0.91v-0.245zM0.438 2.447c-0.241 0 -0.438 0.197 -0.438 0.438 0 0.241 0.197 0.438 0.438 0.438s0.438 -0.197 0.438 -0.438c0 -0.241 -0.197 -0.438 -0.438 -0.438zm0 0.146a0.291 0.291 0 0 1 0.292 0.292 0.291 0.291 0 0 1 -0.292 0.292 0.291 0.291 0 0 1 -0.292 -0.292A0.291 0.291 0 0 1 0.438 2.593zM1.4 2.842v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245z" fill="#000000" fill-rule="evenodd"/></svg>';
toolbar.registerIconFromText("CustomCollection", "CustomIcon", icon);

toolbar.registerIconFromDataURL("CustomCollection2", "CustomIcon2", "https://www.svgrepo.com/show/678/calculator.svg");
```

A tool then asks for a registered icon by the collection and name it was registered under:

```html
<igc-tool-action-label
    title="Custom Icon"
    icon-name="CustomIcon"
    icon-collection-name="CustomCollection">
</igc-tool-action-label>
```

### Vertical Orientation

By default the Web Components Toolbar is shown horizontally, but it also has the ability to shown vertically by setting the `IgcToolbarComponent.orientation` property.

```html
<igc-toolbar
    id="toolbar"
    orientation="Vertical">
</igc-toolbar>
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

```html
<igc-toolbar
    id="toolbar">
    <igc-tool-action-color-editor
        title="Series Brush"
        id="colorEditorTool"
        command-id="ToggleSeriesBrush">
    </igc-tool-action-color-editor>
</igc-toolbar>
<igc-data-chart
    id="chart"
    is-horizontal-zoom-enabled="true">
</igc-data-chart>
```

```ts
toolbar.target = this.chart;
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

The icon component can be styled by using it's `baseTheme` property directly to the `Toolbar`.

```html
<igc-toolbar base-theme="SlingshotDark" />
```


## API References

`IgcToolbarComponent`<br />
[`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent)<br />

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
