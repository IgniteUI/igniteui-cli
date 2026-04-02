---
title: Web Components Toolbar Component | Ignite UI for Web Components
_description: See how you can easily get started with Web Components Toolbar Component. Compatible with the Data Chart. Extend your .
_keywords: Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components Toolbar components, Web Components Toolbar controls
_license: commercial
mentionedTypes: ["Toolbar", "ToolAction", "DomainChart", "CategoryChart", "XamDataChart", "TrendLineType"]
_tocName: Toolbar
_premium: true
---

# Web Components Toolbar Overview

The Web Components Toolbar component is a companion container for UI operations to be used primarily with our charting components. The toolbar will dynamically update with a preset of properties and tool items when linked to our [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) or [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html) components. You'll be able to create custom tools for your project allowing end users to provide changes, offering an endless amount of customization.

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

The following modules are required when using the [`IgcToolbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolbarcomponent.html) with the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) component and it's features.

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

The following is a list of the different [`IgcToolActionComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioncomponent.html) items that you can add to the Toolbar.

- [`IgcToolActionButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactionbuttoncomponent.html)
- [`IgcToolActionCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioncheckboxcomponent.html)
- [`IgcToolActionIconButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioniconbuttoncomponent.html)
- [`IgcToolActionIconMenuComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioniconmenucomponent.html)
- [`IgcToolActionLabelComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactionlabelcomponent.html)
- [`IgcToolActionNumberInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactionnumberinputcomponent.html)
- [`IgcToolActionRadioComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactionradiocomponent.html)
- [`IgcToolActionSubPanelComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactionsubpanelcomponent.html)

Each of these tools exposes an `OnCommand` event that is triggered by mouse click. Note, the [`IgcToolActionIconMenuComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioniconmenucomponent.html) is a wrapper for other tools that can also be wrapped inside a [`IgcToolActionIconMenuComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioniconmenucomponent.html).

New and existing tools can be repositioned and marked hidden using the [`overlayId`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioncomponent.html#overlayId), [`beforeId`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioncomponent.html#beforeId) and [`afterId`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioncomponent.html#afterId) properties on the [`IgcToolActionComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioncomponent.html) object. ToolActions also expose a [`visibility`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioncomponent.html#visibility) property.

The following example demonstrates a couple of features. First you can group tools together in the [`IgcToolActionSubPanelComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactionsubpanelcomponent.html) including hiding built in tools such as the **ZoomReset** and **AnalyzeMenu** menu tool actions. In this example a new instance of the **ZoomReset** tool action within the **ZoomMenu** by using the the [`afterId`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioncomponent.html#afterId) property and assigning that to **ZoomOut** to be precise with it's placement. It is also highlighted via the [`isHighlighted`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioncomponent.html#isHighlighted) property on the tool.

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

The Web Components Toolbar contains a `Target` property. This is used to link a component, such as the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) as shown in the code below:

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

Several pre-existing [`IgcToolActionComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioncomponent.html) items and menus become available when the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) is linked with the Toolbar. Here is a list of the built-in Web Components [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) Tool Actions and their associated [`overlayId`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioncomponent.html#overlayId):

Zooming Actions

- `ZoomMenu`: A [`IgcToolActionIconMenuComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioniconmenucomponent.html) that exposes three [`IgcToolActionLabelComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactionlabelcomponent.html) items to invoke the [`zoomIn`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#zoomIn) and [`zoomOut`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#zoomOut) methods on the chart for increasing/decreasing the chart's zoom level including `ZoomReset`, a [`IgcToolActionLabelComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactionlabelcomponent.html) that invokes the [`resetZoom`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#resetZoom) method on the chart to reset the zoom level to it's default position.

Trend Actions

- `AnalyzeMenu`: A [`IgcToolActionIconMenuComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioniconmenucomponent.html) that contains several options for configuring different options of the chart.
- `AnalyzeHeader`: A sub section header.
  - `LinesMenu`: A sub menu containing various tools for showing different dashed horizontal lines on the chart.
  - `LinesHeader`: A sub menu section header for the following three tools:
    - `MaxValue`: A [`IgcToolActionCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioncheckboxcomponent.html) that displays a dashed horizontal line along the yAxis at the maximum value of the series.
    - `MinValue`: A [`IgcToolActionCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioncheckboxcomponent.html) that displays a dashed horizontal line along the yAxis at the minimum value of the series.
    - `Average`:  A [`IgcToolActionCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioncheckboxcomponent.html) that displays a dashed horizontal line along the yAxis at the average value of the series.
  - `TrendsMenu`: A sub menu containing tools for applying various trendlines to the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html) plot area.
  - `TrendsHeader`: A sub menu section header for the following three tools:
    - **Exponential**: A [`IgcToolActionRadioComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactionradiocomponent.html) that sets the [`trendLineType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#trendLineType) on each series in the chart to **ExponentialFit**.
    - **Linear**: A [`IgcToolActionRadioComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactionradiocomponent.html) that sets the [`trendLineType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#trendLineType) on each series in the chart to **LinearFit**.
    - **Logarithmic**: A [`IgcToolActionRadioComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactionradiocomponent.html) that sets the [`trendLineType`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#trendLineType) on each series in the the chart to **LogarithmicFit**.
- `HelpersHeader`: A sub section header.
  - `SeriesAvg`: A [`IgcToolActionCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioncheckboxcomponent.html) that adds or removes a [`IgcValueLayerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcvaluelayercomponent.html) to the chart's series collection using the [`ValueLayerValueMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.valuelayervaluemode.html) of type [`Average`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/enums/igniteui_webcomponents_charts.valuelayervaluemode.html#Average).
  - `ValueLabelsMenu`: A sub menu containing various tools for showing different annotations on the [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html)'s plot area.
  - `ValueLabelsHeader`: A sub menu section header for the following tools:
    - `ShowValueLabels`: A [`IgcToolActionCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioncheckboxcomponent.html) that toggles data point values by using a [`IgcCalloutLayerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccalloutlayercomponent.html).
    - `ShowLastValueLabel`: A [`IgcToolActionCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioncheckboxcomponent.html) that toggles final value axis annotations by using a [`IgcFinalValueLayerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcfinalvaluelayercomponent.html).
- `ShowCrosshairs`: A [`IgcToolActionCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioncheckboxcomponent.html) that toggles mouse-over crosshair annotations via the chart's [`crosshairsDisplayMode`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdomainchartcomponent.html#crosshairsDisplayMode) property.
- `ShowGridlines`: A [`IgcToolActionCheckboxComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioncheckboxcomponent.html) that toggles extra gridlines by applying a `MajorStroke` to the X-Axis.

Save to Image Action

- `CopyAsImage`: A [`IgcToolActionLabelComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactionlabelcomponent.html) that exposes an option to copy the chart to the clipboard.
- `CopyHeader`: A sub section header.

### SVG Icons

When adding tools manually, icons can be assigned using the `RenderIconFromText` method. There are three parameters to pass in this method. The first is the icon collection name defined on the tool eg. [`iconCollectionName`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioncomponent.html#iconCollectionName). The second is the name of the icon defined on the tool eg. [`iconName`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolactioncomponent.html#iconName), followed by adding the SVG string.

### Data URL Icons

Similarly to adding svg, you can also add an Icon image from a URL via the [`registerIconFromDataURL`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolbarcomponent.html#registerIconFromDataURL). The method's third parameter would be used to enter a string URL.

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

By default the Web Components Toolbar is shown horizontally, but it also has the ability to shown vertically by setting the [`orientation`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolbarcomponent.html#orientation) property.

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

The following example demonstrates styling the Web Components Data Chart series brush with the Color Editor tool. ```typescript
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


<!-- ## Styling/Theming

The icon component can be styled by using it's `BaseTheme` property directly to the `Toolbar`.

```html
<igx-toolbar baseTheme="SlingshotDark" />
```

```html
<igc-toolbar base-theme="SlingshotDark" />
```

```razor
<IgbToolbar BaseTheme="BaseControlTheme.SlingshotDark" />
```

```tsx
<IgrToolbar baseTheme="SlingshotDark" />
```

<!-- The following example demonstrates the various theme options that can be applied.
`sample="/charts/toolbar/theming", height="600", alt="Web Components Toolbar Styling/Theming"` -->

## API References

- [`IgcToolbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolbarcomponent.html)
- [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
