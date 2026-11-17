---
title: "Web Components Sankey Chart | Data Visualization | Infragistics"
description: "The Web Components Sankey chart draws weighted flows between stages as node bands joined by ribbons whose width is proportional to each flow's value."
keywords: "Web Components Charts, Sankey Chart, Sankey Diagram, Flow Chart, Alluvial Chart, Dependency Wheel, Infragistics"
license: commercial
mentionedTypes: ["DataChart", "SankeySeries", "RadialSankeySeries", "FlowSeries", "FlowStyleMapping", "SankeyLayoutAdapter", "SankeyNodeAlignment", "SankeyLinkAggregationMode", "SankeyRibbonShape", "SankeyHighlightScope", "SankeyDataLegendScope", "CalloutLayer", "DataToolTipLayer", "DataLegend", "CategoryXAxis", "NumericYAxis", "CategoryAngleAxis", "ProportionalCategoryAngleAxis", "NumericRadiusAxis"]
namespace: Infragistics.Controls.Charts
llms:
  description: "The Ignite UI for Web Components Sankey chart is a DataChart series that draws weighted flows between stages: nodes are stacked bands and links are ribbons whose width is proportional to each flow's value."
platformType: xplat
_tocName: Sankey Chart
_premium: true
---
# Web Components Sankey Chart

The Ignite UI for Web Components Sankey chart shows how a quantity flows from one stage to the next. Each node is a band whose height is the amount passing through it, and each link is a ribbon whose width is proportional to the flow it carries, so a reader can see at a glance where the largest flows go and where they split or merge. The chart is the `SankeySeries`, hosted in the [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent), so it uses the chart's axes, tooltips, highlighting, selection, animation and annotation layers.

## Web Components Sankey Chart Example

The following example splits a monthly budget into needs, wants and savings, and then into where each one goes. The axes are hidden and a [`IgcCalloutLayerComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCalloutLayerComponent) labels every node.



Like this sample? Try the complete Ignite UI for Web Components toolkit and begin building your own apps. <a href="https://www.infragistics.com/products/ignite-ui-web-components/download">Download free trial.</a>

## Sankey Chart Recommendations

### Are Web Components Sankey Charts right for your project?

A Sankey chart suits data that moves through stages and where the size of each movement matters: money from income to spending, energy from source to use, visitors from landing page to conversion, or orders from region to sales channel. Because every flow keeps its width from end to end, the chart shows both the parts and how they recombine.

### Sankey Chart Use Cases

- Budgets and cash flow — income split into expense and savings categories.
- Energy, material, or resource balances.
- Customer journeys and conversion funnels with branching paths.
- Breakdowns of one population across several categorical dimensions, such as region, product and channel (an alluvial chart).

### When not to Use a Sankey Chart

- Your data has no stages or direction — use a [Pie Chart](pie-chart.md) or a [Treemap](treemap-chart.md) to show parts of a whole.
- You need to compare exact values — a [Bar Chart](bar-chart.md) or [Column Chart](column-chart.md) is easier to read precisely.
- There are many small flows of similar size — the ribbons become thin and hard to tell apart.

### Sankey Chart Data Structure

A Sankey chart reads two kinds of record:

- **Links** — one record per flow, naming its source node, its target node and its value. Every Sankey chart needs these.
- **Nodes** — one record per node, carrying its id, its label, and the stage (layer) it belongs to. These are optional: without them the series derives the nodes and their layers from the links.

A node's value is the larger of its incoming and outgoing totals, so a node that passes on everything it receives is exactly as tall as the flows on either side of it. A link whose value is not a finite number is skipped and draws no ribbon.

The stages run along a category axis, one category per stage, and the stacked node values run along a numeric axis.

## Web Components Sankey Chart Data Binding

### Nodes and Links

Bind the nodes to the series' data source and the links to `linkSource`. Name the node fields with `nodeIdMemberPath`, `nodeLabelMemberPath` and `nodeLayerMemberPath`, and the link fields with `linkSourceMemberPath`, `linkTargetMemberPath` and `linkValueMemberPath`. A link's source and target name node ids, and a node's layer is the zero-based index of its stage on the [`IgcCategoryXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryXAxisComponent).

```html
<igc-data-chart
    id="chart">
    <igc-category-x-axis
        id="xAxis"
        label="stage">
    </igc-category-x-axis>
    <igc-numeric-y-axis
        id="yAxis">
    </igc-numeric-y-axis>
    <igc-sankey-series
        id="sankey"
        node-id-member-path="id"
        node-label-member-path="label"
        node-layer-member-path="layer"
        link-source-member-path="source"
        link-target-member-path="target"
        link-value-member-path="value">
    </igc-sankey-series>
</igc-data-chart>
```

```ts
xAxis.dataSource = this.sankeyHouseholdStages;
sankey.xAxis = this.xAxis;
sankey.yAxis = this.yAxis;
sankey.dataSource = this.sankeyHouseholdNodes;
sankey.linkSource = this.sankeyHouseholdLinks;
```

Set `linkIdMemberPath` when each link carries a stable id of its own. The series matches links by id when the data changes, so an edited link animates from its old shape to its new one.

### Links Only

When the series has links but no nodes, or nodes without a layer, it builds the nodes from the distinct sources and targets and assigns each one a layer. The node labels are the ids used in the links.



```html
<igc-data-chart
    id="chart">
    <igc-category-x-axis
        id="xAxis"
        label="stage">
    </igc-category-x-axis>
    <igc-numeric-y-axis
        id="yAxis">
    </igc-numeric-y-axis>
    <igc-sankey-series
        id="sankey"
        link-source-member-path="source"
        link-target-member-path="target"
        link-value-member-path="value">
    </igc-sankey-series>
</igc-data-chart>
```

```ts
xAxis.dataSource = this.sankeyIncomeStages;
sankey.xAxis = this.xAxis;
sankey.yAxis = this.yAxis;
sankey.linkSource = this.sankeyIncomeFlow;
```

Two properties control how the layout is derived. Neither applies when the nodes carry an explicit layer.

| Property | Values | Effect |
|---|---|---|
| `nodeAlignment` | `Left` (default), `Right`, `Justify`, `Center` | Which layer a node is placed in. `Left` places each node as early as possible, `Right` as late as possible, `Justify` keeps sources at the first layer and moves every node without outgoing links to the last, and `Center` places each node midway between the two. |
| `linkAggregation` | `Aggregate` (default), `Separate` | Whether several records with the same source and target become one ribbon carrying their total, or one ribbon each. |

### Rows of Categories (Alluvial Chart)

To chart a table in which each row is a combination of categories and a count, assign a `SankeyLayoutAdapter` to the series' `layoutAdapter`. Set the adapter's link data source to the table, list the category columns in order in `dimensionMemberPaths`, and name the count column in `linkValueMemberPath`. Each column becomes a stage, each distinct value in a column becomes a node, and each row links its values in consecutive columns.



```html
<igc-data-chart
    id="chart">
    <igc-category-x-axis
        id="xAxis"
        label="Stage">
    </igc-category-x-axis>
    <igc-numeric-y-axis
        id="yAxis">
    </igc-numeric-y-axis>
    <igc-sankey-series
        id="sankey">
    </igc-sankey-series>
</igc-data-chart>
```

```ts
xAxis.dataSource = this.sankeyOrderStages;
sankey.xAxis = this.xAxis;
sankey.yAxis = this.yAxis;
var sankeyLayoutAdapter1 = new IgcSankeyLayoutAdapter();
sankeyLayoutAdapter1.linkItemsSource = this.sankeyOrderChannels;
sankeyLayoutAdapter1.dimensionMemberPaths = ["Region", "Product", "Channel"];
sankeyLayoutAdapter1.linkValueMemberPath = "Orders";
sankey.layoutAdapter = sankeyLayoutAdapter1;
```

When a `layoutAdapter` is assigned, the series draws the adapter's nodes and links and ignores its own data source and link bindings.

## Web Components Sankey Chart Configuration

### Node Spacing

`nodeGap` sets the space between the nodes stacked in one stage. By default the series chooses the gap from the data, so that the gaps in the busiest stage take up about a quarter of the largest stage's total and no single gap is wider than 4% of it. To set it yourself, give it in the units of the numeric axis, not in pixels, relative to the size of your values; `0` stacks the bands flush. A stage with more nodes has more gaps, so the ribbons fan out further in the busier stages.

```html
<igc-sankey-series
    node-gap="250">
</igc-sankey-series>
```

### Node Labels

The axis labels name the stages, not the nodes. To label every node, add a [`IgcCalloutLayerComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCalloutLayerComponent) that targets the series, turn on [`isAutoCalloutBehaviorEnabled`](mcp:get_api_reference?platform=webcomponents&component=IgcCalloutLayerComponent&member=isAutoCalloutBehaviorEnabled), and set [`useValueForAutoCalloutLabels`](mcp:get_api_reference?platform=webcomponents&component=IgcCalloutLayerComponent&member=useValueForAutoCalloutLabels) to false so each callout shows the node's label rather than its value. [`useItemColorForOutline`](mcp:get_api_reference?platform=webcomponents&component=IgcCalloutLayerComponent&member=useItemColorForOutline) outlines each callout in its node's color. Increase the chart's [`plotAreaMarginRight`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=plotAreaMarginRight) to leave room for the labels of the last stage. The series places each label beside its node, to the right where there is room and otherwise to the left; set the layer's [`allowedPositions`](mcp:get_api_reference?platform=webcomponents&component=IgcCalloutLayerComponent&member=allowedPositions) to restrict the positions further.

```html
plot-area-margin-right="180"<igc-callout-layer
    id="nodeLabels"
    is-auto-callout-behavior-enabled="true"
    use-value-for-auto-callout-labels="false"
    use-item-color-for-outline="true"
    callout-stroke-thickness="2"
    callout-text-color="Black"
    callout-background="White">
</igc-callout-layer>
```

### Tooltips

Add a [`IgcDataToolTipLayerComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataToolTipLayerComponent) to describe the flow near the cursor. The tooltip pins to the closest node, much as a category tooltip pins to the closest category. It is headed with the node's label and lists one row per ribbon on the side of the node the cursor is on, with a total:

- Left of a node, the rows are the ribbons flowing into it, each named by the node it comes from.
- Right of a node, the rows are the ribbons flowing out of it, each named by the node it goes to.
- A node with no ribbons on that side, such as a source on its left, lists the other side instead.

Past the midpoint between two stages, the next stage's nodes are the closest ones. The tooltip then moves to them and describes the same ribbons arriving there.

The series `dataToolTipScope` property changes what the tooltip covers:

- `Node` (the default) describes the closest node.
- `Stage` describes every node in the closest stage, each as its own group.
- `Element` describes only the node or ribbon under the cursor, or the closest one.

In the layer's individual grouping mode, each listed ribbon gets its own tooltip, pointing at the ribbon. A [`IgcDataLegendComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataLegendComponent) follows the series `dataLegendScope` property instead, which defaults to `Stage`.

```html
<igc-sankey-series
    title="Monthly Budget">
</igc-sankey-series>
<igc-data-tool-tip-layer
    id="tooltips">
</igc-data-tool-tip-layer>
```

### Hiding the Axes

A Sankey chart usually reads best without axis lines, gridlines or value labels. Set `areLabelsVisible` to false, [`tickLength`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryXAxisComponent&member=tickLength) to `0`, and `stroke` and [`majorStroke`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryXAxisComponent&member=majorStroke) to `Transparent` on both axes.

```html
<igc-category-x-axis
    id="xAxis"
    label="stage"
    are-labels-visible="false"
    tick-length="0"
    stroke="rgba(0, 0, 0, 0)"
    major-stroke="rgba(0, 0, 0, 0)">
</igc-category-x-axis>
<igc-numeric-y-axis
    id="yAxis"
    are-labels-visible="false"
    tick-length="0"
    stroke="rgba(0, 0, 0, 0)"
    major-stroke="rgba(0, 0, 0, 0)">
</igc-numeric-y-axis>
```

## Web Components Sankey Chart Styling

The following example colors three nodes by label and one by value, draws the ribbons at a constant width, rounds the node corners, and fades the rest of the chart when you hover a node or a ribbon.



### Node and Ribbon Colors

[`useItemWiseColors`](mcp:get_api_reference?platform=webcomponents&component=IgcDataToolTipLayerComponent&member=useItemWiseColors) gives each node its own color from the chart palette. Without it, every node uses the series `brush` and `outline`. Each ribbon is drawn with the fill and outline of its source node. [`areaFillOpacity`](mcp:get_api_reference?platform=webcomponents&component=IgcDataToolTipLayerComponent&member=areaFillOpacity) sets the translucency of the ribbons, and `thickness` the width of the node and ribbon outlines.

```html
<igc-sankey-series
    use-item-wise-colors="true"
    area-fill-opacity="0.7"
    thickness="0">
</igc-sankey-series>
```

### Style Mappings

`styleMappings` colors nodes declaratively. Each `FlowStyleMapping` matches a node by `nodeLabel`, by a value range from [`minimumValue`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent&member=minimumValue) to [`maximumValue`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent&member=maximumValue) (both inclusive), or by both, and applies its `fill` and `outline`, which the node's outgoing ribbons then take too. The first mapping that matches a node wins, and a matched node takes the mapping's colors in place of its item-wise color, so you can color every node from the palette and pick out a few. To restyle elements in code instead, handle the series' `assigningStyle` event.

```html
<igc-sankey-series
    use-item-wise-colors="true">
    <igc-flow-style-mapping
        node-label="Savings"
        fill="rgba(46, 125, 50, 1)"
        outline="rgba(46, 125, 50, 1)">
    </igc-flow-style-mapping>
    <igc-flow-style-mapping
        node-label="Housing"
        fill="rgba(21, 101, 192, 1)"
        outline="rgba(21, 101, 192, 1)">
    </igc-flow-style-mapping>
    <igc-flow-style-mapping
        node-label="Discretionary"
        fill="rgba(239, 108, 0, 1)"
        outline="rgba(239, 108, 0, 1)">
    </igc-flow-style-mapping>
    <igc-flow-style-mapping
        minimum-value="9000"
        maximum-value="10000"
        fill="rgba(106, 27, 154, 1)"
        outline="rgba(106, 27, 154, 1)">
    </igc-flow-style-mapping>
</igc-sankey-series>
```

### Ribbon Shape and Node Corners

`ribbonShape` sets the shape of the ribbons. `Curved` (the default) is the classic S-curve, whose apparent width narrows through a steep bend. `Straightened` turns diagonal sooner and narrows less, and `UniformWidth` keeps the ribbon the same width along its whole length. Every shape meets the nodes at the same points, so the ribbons still line up with the bands they connect. `radiusX` and `radiusY` round the corners of the node bands; both default to `0`.

```html
<igc-sankey-series
    ribbon-shape="UniformWidth"
    radius-x="4"
    radius-y="4">
</igc-sankey-series>
```

### Highlighting

Set the chart's [`highlightingMode`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=highlightingMode) to highlight what the pointer is over. `highlightScope` decides what is highlighted with it: `ConnectedFlow` (the default) highlights a hovered node together with every ribbon into and out of it, and a hovered ribbon together with the two nodes it joins, while `Element` highlights only the hovered node or ribbon.

```html
<igc-data-chart
    highlighting-mode="FadeOthersSpecific"
    highlighting-behavior="DirectlyOver">
    <igc-sankey-series
        highlight-scope="ConnectedFlow">
    </igc-sankey-series>
</igc-data-chart>
```

## Web Components Sankey Chart Highlighted Values

The highlighted-values overlay draws a second value for every link over the first, as a thinner ribbon centered in the original one — a filtered subset compared with the whole, for example. Name the second value in `highlightedLinkValueMemberPath` and set [`highlightedValuesDisplayMode`](mcp:get_api_reference?platform=webcomponents&component=IgcDataToolTipLayerComponent&member=highlightedValuesDisplayMode) to `Overlay`. If the second values are in a different collection from the links, bind it to `highlightedLinkSource`.



```html
<igc-sankey-series
    highlighted-link-value-member-path="highlighted"
    highlighted-values-display-mode="Overlay">
</igc-sankey-series>
```

## Web Components Sankey Chart Animation

When the flows change, the series can animate from the old ribbons and nodes to the new ones. Set [`transitionDuration`](mcp:get_api_reference?platform=webcomponents&component=IgcDataToolTipLayerComponent&member=transitionDuration) to the length of the animation in milliseconds; it is `0`, no animation, by default. Changes made to the data in place then animate. To also animate when you assign a different `linkSource`, or point `linkValueMemberPath` at another value column, set [`shouldAnimateOnDataSourceSwap`](mcp:get_api_reference?platform=webcomponents&component=IgcDataToolTipLayerComponent&member=shouldAnimateOnDataSourceSwap) to true. Set `linkIdMemberPath` to a field that identifies each link in every version of the data, so that each ribbon animates from its own previous shape. When the new flows change the range of the numeric axis, set the chart's [`animateSeriesWhenAxisRangeChanges`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=animateSeriesWhenAxisRangeChanges) to true so that the series also animates through the rescale.

The following example keeps one value column per month. Choosing a month in the editor sets `linkValueMemberPath` to that month's column, and the flows animate to the new values.



```html
<igc-data-chart
    animate-series-when-axis-range-changes="true">
    <igc-sankey-series
        link-id-member-path="Id"
        link-source-member-path="Source"
        link-target-member-path="Target"
        link-value-member-path="July"
        should-animate-on-data-source-swap="true"
        transition-duration="1000">
    </igc-sankey-series>
</igc-data-chart>
```

```ts
var chart = this.chart;
var month = args.newValue as string;
var series = chart.actualSeries;
for (var i = 0; i < series.length; i++) {
    if (series[i] instanceof IgcSankeySeriesComponent) {
        // The links carry one value column per month; reading another column animates the
        // flows to that month's values (shouldAnimateOnDataSourceSwap + transitionDuration).
        (series[i] as IgcSankeySeriesComponent).linkValueMemberPath = month;
    }
}
```

## Web Components Radial Sankey Chart

The `RadialSankeySeries` draws the same flows around a circle, in the style of a dependency wheel: the stages become angles, the node bands become arcs, and the ribbons sweep between them. It takes the same data and the same properties as the `SankeySeries`, but uses a [`IgcCategoryAngleAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryAngleAxisComponent) and a [`IgcNumericRadiusAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericRadiusAxisComponent) in place of the category and numeric axes. Set the [`IgcCalloutLayerComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCalloutLayerComponent)'s [`calloutCollisionMode`](mcp:get_api_reference?platform=webcomponents&component=IgcCalloutLayerComponent&member=calloutCollisionMode) to `RadialOutsideEnd` to place the node labels around the outside of the ring.



```html
<igc-data-chart
    id="chart">
    <igc-category-angle-axis
        id="angleAxis"
        label="stage">
    </igc-category-angle-axis>
    <igc-numeric-radius-axis
        id="radiusAxis">
    </igc-numeric-radius-axis>
    <igc-radial-sankey-series
        id="radialSankey"
        link-source-member-path="source"
        link-target-member-path="target"
        link-value-member-path="value">
    </igc-radial-sankey-series>
    <igc-callout-layer
        id="nodeLabels"
        is-auto-callout-behavior-enabled="true"
        use-value-for-auto-callout-labels="false"
        callout-collision-mode="RadialOutsideEnd">
    </igc-callout-layer>
</igc-data-chart>
```

```ts
angleAxis.dataSource = this.sankeyIncomeStages;
radialSankey.angleAxis = this.angleAxis;
radialSankey.radiusAxis = this.radiusAxis;
radialSankey.linkSource = this.sankeyIncomeFlow;
nodeLabels.targetSeries = this.radialSankey;
```

### Proportional Stages

With a [`IgcCategoryAngleAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryAngleAxisComponent), every stage gets an equal share of the circle. To size the stages differently, use a [`IgcProportionalCategoryAngleAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcProportionalCategoryAngleAxisComponent) and name a weight column in its [`valueMemberPath`](mcp:get_api_reference?platform=webcomponents&component=IgcProportionalCategoryAngleAxisComponent&member=valueMemberPath); each stage's share of the circle is proportional to its weight.



```html
<igc-proportional-category-angle-axis
    id="angleAxis"
    label="stage"
    value-member-path="weight">
</igc-proportional-category-angle-axis>
```

The highlighted-values overlay works the same way on the radial series.



## Additional Resources

- [Chart Annotations](../features/chart-annotations.md)
- [Chart Highlighting](../features/chart-highlighting.md)
- [Radial Chart](radial-chart.md)
- [Treemap](treemap-chart.md)

## API References

- [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent)
- `SankeySeries`
- `RadialSankeySeries`
- `SankeyLayoutAdapter`
- `FlowStyleMapping`
- [`IgcCalloutLayerComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCalloutLayerComponent)
- [`IgcDataToolTipLayerComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataToolTipLayerComponent)
- [`IgcDataLegendComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataLegendComponent)
- [`IgcCategoryXAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryXAxisComponent)
- [`IgcNumericYAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericYAxisComponent)
- [`IgcCategoryAngleAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryAngleAxisComponent)
- [`IgcProportionalCategoryAngleAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcProportionalCategoryAngleAxisComponent)
- [`IgcNumericRadiusAxisComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcNumericRadiusAxisComponent)
