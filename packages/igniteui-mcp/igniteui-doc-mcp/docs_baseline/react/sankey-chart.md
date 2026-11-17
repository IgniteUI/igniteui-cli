---
title: "React Sankey Chart | Data Visualization | Infragistics"
description: "The React Sankey chart draws weighted flows between stages as node bands joined by ribbons whose width is proportional to each flow's value."
keywords: "React Charts, Sankey Chart, Sankey Diagram, Flow Chart, Alluvial Chart, Dependency Wheel, Infragistics"
license: commercial
mentionedTypes: ["DataChart", "SankeySeries", "RadialSankeySeries", "FlowSeries", "FlowStyleMapping", "SankeyLayoutAdapter", "SankeyNodeAlignment", "SankeyLinkAggregationMode", "SankeyRibbonShape", "SankeyHighlightScope", "SankeyDataLegendScope", "CalloutLayer", "DataToolTipLayer", "DataLegend", "CategoryXAxis", "NumericYAxis", "CategoryAngleAxis", "ProportionalCategoryAngleAxis", "NumericRadiusAxis"]
namespace: Infragistics.Controls.Charts
llms:
  description: "The Ignite UI for React Sankey chart is a DataChart series that draws weighted flows between stages: nodes are stacked bands and links are ribbons whose width is proportional to each flow's value."
platformType: xplat
_tocName: Sankey Chart
_premium: true
---
# React Sankey Chart

The Ignite UI for React Sankey chart shows how a quantity flows from one stage to the next. Each node is a band whose height is the amount passing through it, and each link is a ribbon whose width is proportional to the flow it carries, so a reader can see at a glance where the largest flows go and where they split or merge. The chart is the `SankeySeries`, hosted in the `IgrDataChart`, so it uses the chart's axes, tooltips, highlighting, selection, animation and annotation layers.

## React Sankey Chart Example

The following example splits a monthly budget into needs, wants and savings, and then into where each one goes. The axes are hidden and a `IgrCalloutLayer` labels every node.



Like this sample? Try the complete Ignite UI for React toolkit and begin building your own apps. <a href="https://www.infragistics.com/products/ignite-ui-react/download">Download free trial.</a>

## Sankey Chart Recommendations

### Are React Sankey Charts right for your project?

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

## React Sankey Chart Data Binding

### Nodes and Links

Bind the nodes to the series' data source and the links to `linkSource`. Name the node fields with `nodeIdMemberPath`, `nodeLabelMemberPath` and `nodeLayerMemberPath`, and the link fields with `linkSourceMemberPath`, `linkTargetMemberPath` and `linkValueMemberPath`. A link's source and target name node ids, and a node's layer is the zero-based index of its stage on the `IgrCategoryXAxis`.

```tsx
<IgrDataChart
    ref={this.chartRef}>
    <IgrCategoryXAxis
        name="xAxis"
        ref={ref => { this.xAxis = ref; }}
        dataSource={this.sankeyHouseholdStages}
        label="stage" />
    <IgrNumericYAxis
        name="yAxis"
        ref={ref => { this.yAxis = ref; }} />
    <IgrSankeySeries
        name="sankey"
        ref={ref => { this.sankey = ref; }}
        xAxisName="xAxis"
        yAxisName="yAxis"
        dataSource={this.sankeyHouseholdNodes}
        nodeIdMemberPath="id"
        nodeLabelMemberPath="label"
        nodeLayerMemberPath="layer"
        linkSource={this.sankeyHouseholdLinks}
        linkSourceMemberPath="source"
        linkTargetMemberPath="target"
        linkValueMemberPath="value" />
</IgrDataChart>
```

Set `linkIdMemberPath` when each link carries a stable id of its own. The series matches links by id when the data changes, so an edited link animates from its old shape to its new one.

### Links Only

When the series has links but no nodes, or nodes without a layer, it builds the nodes from the distinct sources and targets and assigns each one a layer. The node labels are the ids used in the links.



```tsx
<IgrDataChart
    ref={this.chartRef}>
    <IgrCategoryXAxis
        name="xAxis"
        ref={ref => { this.xAxis = ref; }}
        dataSource={this.sankeyIncomeStages}
        label="stage" />
    <IgrNumericYAxis
        name="yAxis"
        ref={ref => { this.yAxis = ref; }} />
    <IgrSankeySeries
        name="sankey"
        ref={ref => { this.sankey = ref; }}
        xAxisName="xAxis"
        yAxisName="yAxis"
        linkSource={this.sankeyIncomeFlow}
        linkSourceMemberPath="source"
        linkTargetMemberPath="target"
        linkValueMemberPath="value" />
</IgrDataChart>
```

Two properties control how the layout is derived. Neither applies when the nodes carry an explicit layer.

| Property | Values | Effect |
|---|---|---|
| `nodeAlignment` | `Left` (default), `Right`, `Justify`, `Center` | Which layer a node is placed in. `Left` places each node as early as possible, `Right` as late as possible, `Justify` keeps sources at the first layer and moves every node without outgoing links to the last, and `Center` places each node midway between the two. |
| `linkAggregation` | `Aggregate` (default), `Separate` | Whether several records with the same source and target become one ribbon carrying their total, or one ribbon each. |

### Rows of Categories (Alluvial Chart)

To chart a table in which each row is a combination of categories and a count, assign a `SankeyLayoutAdapter` to the series' `layoutAdapter`. Set the adapter's link data source to the table, list the category columns in order in `dimensionMemberPaths`, and name the count column in `linkValueMemberPath`. Each column becomes a stage, each distinct value in a column becomes a node, and each row links its values in consecutive columns.



```tsx
<IgrDataChart
    ref={this.chartRef}>
    <IgrCategoryXAxis
        name="xAxis"
        ref={ref => { this.xAxis = ref; }}
        dataSource={this.sankeyOrderStages}
        label="Stage" />
    <IgrNumericYAxis
        name="yAxis"
        ref={ref => { this.yAxis = ref; }} />
    <IgrSankeySeries
        name="sankey"
        ref={ref => { this.sankey = ref; }}
        xAxisName="xAxis"
        yAxisName="yAxis"
        layoutAdapter={this.sankeyLayoutAdapter1} />
</IgrDataChart>
```

When a `layoutAdapter` is assigned, the series draws the adapter's nodes and links and ignores its own data source and link bindings.

## React Sankey Chart Configuration

### Node Spacing

`nodeGap` sets the space between the nodes stacked in one stage. By default the series chooses the gap from the data, so that the gaps in the busiest stage take up about a quarter of the largest stage's total and no single gap is wider than 4% of it. To set it yourself, give it in the units of the numeric axis, not in pixels, relative to the size of your values; `0` stacks the bands flush. A stage with more nodes has more gaps, so the ribbons fan out further in the busier stages.

```tsx
<IgrSankeySeries
    nodeGap={250} />
```

### Node Labels

The axis labels name the stages, not the nodes. To label every node, add a `IgrCalloutLayer` that targets the series, turn on `isAutoCalloutBehaviorEnabled`, and set `useValueForAutoCalloutLabels` to false so each callout shows the node's label rather than its value. `useItemColorForOutline` outlines each callout in its node's color. Increase the chart's `plotAreaMarginRight` to leave room for the labels of the last stage. The series places each label beside its node, to the right where there is room and otherwise to the left; set the layer's `allowedPositions` to restrict the positions further.

```tsx
plotAreaMarginRight={180}<IgrCalloutLayer
    name="nodeLabels"
    ref={ref => { this.nodeLabels = ref; }}
    targetSeries={this.sankey}
    isAutoCalloutBehaviorEnabled={true}
    useValueForAutoCalloutLabels={false}
    useItemColorForOutline={true}
    calloutStrokeThickness={2}
    calloutTextColor="Black"
    calloutBackground="White" />
```

### Tooltips

Add a `IgrDataToolTipLayer` to describe the flow near the cursor. The tooltip pins to the closest node, much as a category tooltip pins to the closest category. It is headed with the node's label and lists one row per ribbon on the side of the node the cursor is on, with a total:

- Left of a node, the rows are the ribbons flowing into it, each named by the node it comes from.
- Right of a node, the rows are the ribbons flowing out of it, each named by the node it goes to.
- A node with no ribbons on that side, such as a source on its left, lists the other side instead.

Past the midpoint between two stages, the next stage's nodes are the closest ones. The tooltip then moves to them and describes the same ribbons arriving there.

The series `dataToolTipScope` property changes what the tooltip covers:

- `Node` (the default) describes the closest node.
- `Stage` describes every node in the closest stage, each as its own group.
- `Element` describes only the node or ribbon under the cursor, or the closest one.

In the layer's individual grouping mode, each listed ribbon gets its own tooltip, pointing at the ribbon. A `IgrDataLegend` follows the series `dataLegendScope` property instead, which defaults to `Stage`.

```tsx
<IgrSankeySeries
    title="Monthly Budget" />
<IgrDataToolTipLayer
    name="tooltips"
    ref={ref => { this.tooltips = ref; }} />
```

### Hiding the Axes

A Sankey chart usually reads best without axis lines, gridlines or value labels. Set `areLabelsVisible` to false, `tickLength` to `0`, and `stroke` and `majorStroke` to `Transparent` on both axes.

```tsx
<IgrCategoryXAxis
    name="xAxis"
    ref={ref => { this.xAxis = ref; }}
    dataSource={this.sankeyHouseholdStages}
    label="stage"
    areLabelsVisible={false}
    tickLength={0}
    stroke="rgba(0, 0, 0, 0)"
    majorStroke="rgba(0, 0, 0, 0)" />
<IgrNumericYAxis
    name="yAxis"
    ref={ref => { this.yAxis = ref; }}
    areLabelsVisible={false}
    tickLength={0}
    stroke="rgba(0, 0, 0, 0)"
    majorStroke="rgba(0, 0, 0, 0)" />
```

## React Sankey Chart Styling

The following example colors three nodes by label and one by value, draws the ribbons at a constant width, rounds the node corners, and fades the rest of the chart when you hover a node or a ribbon.



### Node and Ribbon Colors

`useItemWiseColors` gives each node its own color from the chart palette. Without it, every node uses the series `brush` and `outline`. Each ribbon is drawn with the fill and outline of its source node. `areaFillOpacity` sets the translucency of the ribbons, and `thickness` the width of the node and ribbon outlines.

```tsx
<IgrSankeySeries
    useItemWiseColors={true}
    areaFillOpacity={0.7}
    thickness={0} />
```

### Style Mappings

`styleMappings` colors nodes declaratively. Each `FlowStyleMapping` matches a node by `nodeLabel`, by a value range from `minimumValue` to `maximumValue` (both inclusive), or by both, and applies its `fill` and `outline`, which the node's outgoing ribbons then take too. The first mapping that matches a node wins, and a matched node takes the mapping's colors in place of its item-wise color, so you can color every node from the palette and pick out a few. To restyle elements in code instead, handle the series' `assigningStyle` event.

```tsx
<IgrSankeySeries
    useItemWiseColors={true}>
    <IgrFlowStyleMapping
        nodeLabel="Savings"
        fill="rgba(46, 125, 50, 1)"
        outline="rgba(46, 125, 50, 1)" />
    <IgrFlowStyleMapping
        nodeLabel="Housing"
        fill="rgba(21, 101, 192, 1)"
        outline="rgba(21, 101, 192, 1)" />
    <IgrFlowStyleMapping
        nodeLabel="Discretionary"
        fill="rgba(239, 108, 0, 1)"
        outline="rgba(239, 108, 0, 1)" />
    <IgrFlowStyleMapping
        minimumValue={9000}
        maximumValue={10000}
        fill="rgba(106, 27, 154, 1)"
        outline="rgba(106, 27, 154, 1)" />
</IgrSankeySeries>
```

### Ribbon Shape and Node Corners

`ribbonShape` sets the shape of the ribbons. `Curved` (the default) is the classic S-curve, whose apparent width narrows through a steep bend. `Straightened` turns diagonal sooner and narrows less, and `UniformWidth` keeps the ribbon the same width along its whole length. Every shape meets the nodes at the same points, so the ribbons still line up with the bands they connect. `radiusX` and `radiusY` round the corners of the node bands; both default to `0`.

```tsx
<IgrSankeySeries
    ribbonShape="UniformWidth"
    radiusX={4}
    radiusY={4} />
```

### Highlighting

Set the chart's `highlightingMode` to highlight what the pointer is over. `highlightScope` decides what is highlighted with it: `ConnectedFlow` (the default) highlights a hovered node together with every ribbon into and out of it, and a hovered ribbon together with the two nodes it joins, while `Element` highlights only the hovered node or ribbon.

```tsx
<IgrDataChart
    highlightingMode="FadeOthersSpecific"
    highlightingBehavior="DirectlyOver">
    <IgrSankeySeries
        highlightScope="ConnectedFlow" />
</IgrDataChart>
```

## React Sankey Chart Highlighted Values

The highlighted-values overlay draws a second value for every link over the first, as a thinner ribbon centered in the original one — a filtered subset compared with the whole, for example. Name the second value in `highlightedLinkValueMemberPath` and set `highlightedValuesDisplayMode` to `Overlay`. If the second values are in a different collection from the links, bind it to `highlightedLinkSource`.



```tsx
<IgrSankeySeries
    highlightedLinkValueMemberPath="highlighted"
    highlightedValuesDisplayMode="Overlay" />
```

## React Sankey Chart Animation

When the flows change, the series can animate from the old ribbons and nodes to the new ones. Set `transitionDuration` to the length of the animation in milliseconds; it is `0`, no animation, by default. Changes made to the data in place then animate. To also animate when you assign a different `linkSource`, or point `linkValueMemberPath` at another value column, set `shouldAnimateOnDataSourceSwap` to true. Set `linkIdMemberPath` to a field that identifies each link in every version of the data, so that each ribbon animates from its own previous shape. When the new flows change the range of the numeric axis, set the chart's `animateSeriesWhenAxisRangeChanges` to true so that the series also animates through the rescale.

The following example keeps one value column per month. Choosing a month in the editor sets `linkValueMemberPath` to that month's column, and the flows animate to the new values.



```tsx
<IgrDataChart
    animateSeriesWhenAxisRangeChanges={true}>
    <IgrSankeySeries
        linkSource={this.sankeyBudgetMonths}
        linkIdMemberPath="Id"
        linkSourceMemberPath="Source"
        linkTargetMemberPath="Target"
        linkValueMemberPath="July"
        shouldAnimateOnDataSourceSwap={true}
        transitionDuration={1000} />
</IgrDataChart>
```

```tsx
var chart = this.chart;
var month = args.newValue as string;
var series = chart.actualSeries;
for (var i = 0; i < series.length; i++) {
    if (series[i] instanceof IgrSankeySeries) {
        // The links carry one value column per month; reading another column animates the
        // flows to that month's values (shouldAnimateOnDataSourceSwap + transitionDuration).
        (series[i] as IgrSankeySeries).linkValueMemberPath = month;
    }
}
```

## React Radial Sankey Chart

The `RadialSankeySeries` draws the same flows around a circle, in the style of a dependency wheel: the stages become angles, the node bands become arcs, and the ribbons sweep between them. It takes the same data and the same properties as the `SankeySeries`, but uses a `IgrCategoryAngleAxis` and a `IgrNumericRadiusAxis` in place of the category and numeric axes. Set the `IgrCalloutLayer`'s `calloutCollisionMode` to `RadialOutsideEnd` to place the node labels around the outside of the ring.



```tsx
<IgrDataChart
    ref={this.chartRef}>
    <IgrCategoryAngleAxis
        name="angleAxis"
        ref={ref => { this.angleAxis = ref; }}
        dataSource={this.sankeyIncomeStages}
        label="stage" />
    <IgrNumericRadiusAxis
        name="radiusAxis"
        ref={ref => { this.radiusAxis = ref; }} />
    <IgrRadialSankeySeries
        name="radialSankey"
        ref={ref => { this.radialSankey = ref; }}
        angleAxisName="angleAxis"
        radiusAxisName="radiusAxis"
        linkSource={this.sankeyIncomeFlow}
        linkSourceMemberPath="source"
        linkTargetMemberPath="target"
        linkValueMemberPath="value" />
    <IgrCalloutLayer
        name="nodeLabels"
        ref={ref => { this.nodeLabels = ref; }}
        targetSeries={this.radialSankey}
        isAutoCalloutBehaviorEnabled={true}
        useValueForAutoCalloutLabels={false}
        calloutCollisionMode="RadialOutsideEnd" />
</IgrDataChart>
```

### Proportional Stages

With a `IgrCategoryAngleAxis`, every stage gets an equal share of the circle. To size the stages differently, use a `IgrProportionalCategoryAngleAxis` and name a weight column in its `valueMemberPath`; each stage's share of the circle is proportional to its weight.



```tsx
<IgrProportionalCategoryAngleAxis
    name="angleAxis"
    ref={ref => { this.angleAxis = ref; }}
    dataSource={this.sankeyIncomeStageWeights}
    label="stage"
    valueMemberPath="weight" />
```

The highlighted-values overlay works the same way on the radial series.



## Additional Resources

- [Chart Annotations](../features/chart-annotations.md)
- [Chart Highlighting](../features/chart-highlighting.md)
- [Radial Chart](radial-chart.md)
- [Treemap](treemap-chart.md)

## API References

- `IgrDataChart`
- `SankeySeries`
- `RadialSankeySeries`
- `SankeyLayoutAdapter`
- `FlowStyleMapping`
- `IgrCalloutLayer`
- `IgrDataToolTipLayer`
- `IgrDataLegend`
- `IgrCategoryXAxis`
- `IgrNumericYAxis`
- `IgrCategoryAngleAxis`
- `IgrProportionalCategoryAngleAxis`
- `IgrNumericRadiusAxis`
