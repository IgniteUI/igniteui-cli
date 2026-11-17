---
title: "Blazor Sankey Chart | Data Visualization | Infragistics"
description: "The Blazor Sankey chart draws weighted flows between stages as node bands joined by ribbons whose width is proportional to each flow's value."
keywords: "Blazor Charts, Sankey Chart, Sankey Diagram, Flow Chart, Alluvial Chart, Dependency Wheel, Infragistics"
license: commercial
mentionedTypes: ["DataChart", "SankeySeries", "RadialSankeySeries", "FlowSeries", "FlowStyleMapping", "SankeyLayoutAdapter", "SankeyNodeAlignment", "SankeyLinkAggregationMode", "SankeyRibbonShape", "SankeyHighlightScope", "SankeyDataLegendScope", "CalloutLayer", "DataToolTipLayer", "DataLegend", "CategoryXAxis", "NumericYAxis", "CategoryAngleAxis", "ProportionalCategoryAngleAxis", "NumericRadiusAxis"]
namespace: Infragistics.Controls.Charts
llms:
  description: "The Ignite UI for Blazor Sankey chart is a DataChart series that draws weighted flows between stages: nodes are stacked bands and links are ribbons whose width is proportional to each flow's value."
platformType: xplat
_tocName: Sankey Chart
_premium: true
---
# Blazor Sankey Chart

The Ignite UI for Blazor Sankey chart shows how a quantity flows from one stage to the next. Each node is a band whose height is the amount passing through it, and each link is a ribbon whose width is proportional to the flow it carries, so a reader can see at a glance where the largest flows go and where they split or merge. The chart is the `SankeySeries`, hosted in the [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart), so it uses the chart's axes, tooltips, highlighting, selection, animation and annotation layers.

## Blazor Sankey Chart Example

The following example splits a monthly budget into needs, wants and savings, and then into where each one goes. The axes are hidden and a [`IgbCalloutLayer`](mcp:get_api_reference?platform=blazor&component=IgbCalloutLayer) labels every node.



Like this sample? Try the complete Ignite UI for Blazor toolkit and begin building your own apps. <a href="https://www.infragistics.com/products/ignite-ui-blazor/download">Download free trial.</a>

## Sankey Chart Recommendations

### Are Blazor Sankey Charts right for your project?

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

## Blazor Sankey Chart Data Binding

### Nodes and Links

Bind the nodes to the series' data source and the links to `LinkSource`. Name the node fields with `NodeIdMemberPath`, `NodeLabelMemberPath` and `NodeLayerMemberPath`, and the link fields with `LinkSourceMemberPath`, `LinkTargetMemberPath` and `LinkValueMemberPath`. A link's source and target name node ids, and a node's layer is the zero-based index of its stage on the [`IgbCategoryXAxis`](mcp:get_api_reference?platform=blazor&component=IgbCategoryXAxis).

```razor
<IgbDataChart
    @ref="chart">
    <IgbCategoryXAxis
        @ref="xAxis"
        DataSource="SankeyHouseholdStages"
        Label="Stage" />
    <IgbNumericYAxis
        @ref="yAxis" />
    <IgbSankeySeries
        @ref="sankey"
        XAxisName="xAxis"
        YAxisName="yAxis"
        DataSource="SankeyHouseholdNodes"
        NodeIdMemberPath="Id"
        NodeLabelMemberPath="Label"
        NodeLayerMemberPath="Layer"
        LinkSource="SankeyHouseholdLinks"
        LinkSourceMemberPath="Source"
        LinkTargetMemberPath="Target"
        LinkValueMemberPath="Value" />
</IgbDataChart>
```

Set `LinkIdMemberPath` when each link carries a stable id of its own. The series matches links by id when the data changes, so an edited link animates from its old shape to its new one.

### Links Only

When the series has links but no nodes, or nodes without a layer, it builds the nodes from the distinct sources and targets and assigns each one a layer. The node labels are the ids used in the links.



```razor
<IgbDataChart
    @ref="chart">
    <IgbCategoryXAxis
        @ref="xAxis"
        DataSource="SankeyIncomeStages"
        Label="Stage" />
    <IgbNumericYAxis
        @ref="yAxis" />
    <IgbSankeySeries
        @ref="sankey"
        XAxisName="xAxis"
        YAxisName="yAxis"
        LinkSource="SankeyIncomeFlow"
        LinkSourceMemberPath="Source"
        LinkTargetMemberPath="Target"
        LinkValueMemberPath="Value" />
</IgbDataChart>
```

Two properties control how the layout is derived. Neither applies when the nodes carry an explicit layer.

| Property | Values | Effect |
|---|---|---|
| `NodeAlignment` | `Left` (default), `Right`, `Justify`, `Center` | Which layer a node is placed in. `Left` places each node as early as possible, `Right` as late as possible, `Justify` keeps sources at the first layer and moves every node without outgoing links to the last, and `Center` places each node midway between the two. |
| `LinkAggregation` | `Aggregate` (default), `Separate` | Whether several records with the same source and target become one ribbon carrying their total, or one ribbon each. |

### Rows of Categories (Alluvial Chart)

To chart a table in which each row is a combination of categories and a count, assign a `SankeyLayoutAdapter` to the series' `LayoutAdapter`. Set the adapter's link data source to the table, list the category columns in order in `DimensionMemberPaths`, and name the count column in `LinkValueMemberPath`. Each column becomes a stage, each distinct value in a column becomes a node, and each row links its values in consecutive columns.



```razor
<IgbDataChart
    @ref="chart">
    <IgbCategoryXAxis
        @ref="xAxis"
        DataSource="SankeyOrderStages"
        Label="Stage" />
    <IgbNumericYAxis
        @ref="yAxis" />
    <IgbSankeySeries
        @ref="sankey"
        XAxisName="xAxis"
        YAxisName="yAxis" />
</IgbDataChart>
```

```razor
var sankeyLayoutAdapter1 = new IgbSankeyLayoutAdapter();
sankeyLayoutAdapter1.LinkItemsSource = SankeyOrderChannels;
sankeyLayoutAdapter1.DimensionMemberPaths = new string[] { "Region", "Product", "Channel" };
sankeyLayoutAdapter1.LinkValueMemberPath = "Orders";
sankey.LayoutAdapter = sankeyLayoutAdapter1;
```

When a `LayoutAdapter` is assigned, the series draws the adapter's nodes and links and ignores its own data source and link bindings.

## Blazor Sankey Chart Configuration

### Node Spacing

`NodeGap` sets the space between the nodes stacked in one stage. By default the series chooses the gap from the data, so that the gaps in the busiest stage take up about a quarter of the largest stage's total and no single gap is wider than 4% of it. To set it yourself, give it in the units of the numeric axis, not in pixels, relative to the size of your values; `0` stacks the bands flush. A stage with more nodes has more gaps, so the ribbons fan out further in the busier stages.

```razor
<IgbSankeySeries
    NodeGap="250" />
```

### Node Labels

The axis labels name the stages, not the nodes. To label every node, add a [`IgbCalloutLayer`](mcp:get_api_reference?platform=blazor&component=IgbCalloutLayer) that targets the series, turn on [`IsAutoCalloutBehaviorEnabled`](mcp:get_api_reference?platform=blazor&component=IgbCalloutLayer&member=IsAutoCalloutBehaviorEnabled), and set [`UseValueForAutoCalloutLabels`](mcp:get_api_reference?platform=blazor&component=IgbCalloutLayer&member=UseValueForAutoCalloutLabels) to false so each callout shows the node's label rather than its value. [`UseItemColorForOutline`](mcp:get_api_reference?platform=blazor&component=IgbCalloutLayer&member=UseItemColorForOutline) outlines each callout in its node's color. Increase the chart's [`PlotAreaMarginRight`](mcp:get_api_reference?platform=blazor&component=IgbDataChart&member=PlotAreaMarginRight) to leave room for the labels of the last stage. The series places each label beside its node, to the right where there is room and otherwise to the left; set the layer's [`AllowedPositions`](mcp:get_api_reference?platform=blazor&component=IgbCalloutLayer&member=AllowedPositions) to restrict the positions further.

```razor
PlotAreaMarginRight="180"<IgbCalloutLayer
    @ref="nodeLabels"
    IsAutoCalloutBehaviorEnabled="true"
    UseValueForAutoCalloutLabels="false"
    UseItemColorForOutline="true"
    CalloutStrokeThickness="2"
    CalloutTextColor="Black"
    CalloutBackground="White" />
```

### Tooltips

Add a [`IgbDataToolTipLayer`](mcp:get_api_reference?platform=blazor&component=IgbDataToolTipLayer) to describe the flow near the cursor. The tooltip pins to the closest node, much as a category tooltip pins to the closest category. It is headed with the node's label and lists one row per ribbon on the side of the node the cursor is on, with a total:

- Left of a node, the rows are the ribbons flowing into it, each named by the node it comes from.
- Right of a node, the rows are the ribbons flowing out of it, each named by the node it goes to.
- A node with no ribbons on that side, such as a source on its left, lists the other side instead.

Past the midpoint between two stages, the next stage's nodes are the closest ones. The tooltip then moves to them and describes the same ribbons arriving there.

The series `DataToolTipScope` property changes what the tooltip covers:

- `Node` (the default) describes the closest node.
- `Stage` describes every node in the closest stage, each as its own group.
- `Element` describes only the node or ribbon under the cursor, or the closest one.

In the layer's individual grouping mode, each listed ribbon gets its own tooltip, pointing at the ribbon. A [`IgbDataLegend`](mcp:get_api_reference?platform=blazor&component=IgbDataLegend) follows the series `DataLegendScope` property instead, which defaults to `Stage`.

```razor
<IgbSankeySeries
    Title="Monthly Budget" />
<IgbDataToolTipLayer
    @ref="tooltips" />
```

### Hiding the Axes

A Sankey chart usually reads best without axis lines, gridlines or value labels. Set [`AreLabelsVisible`](mcp:get_api_reference?platform=blazor&component=IgbCategoryXAxis&member=AreLabelsVisible) to false, [`TickLength`](mcp:get_api_reference?platform=blazor&component=IgbCategoryXAxis&member=TickLength) to `0`, and `stroke` and [`MajorStroke`](mcp:get_api_reference?platform=blazor&component=IgbCategoryXAxis&member=MajorStroke) to `Transparent` on both axes.

```razor
<IgbCategoryXAxis
    @ref="xAxis"
    DataSource="SankeyHouseholdStages"
    Label="Stage"
    AreLabelsVisible="false"
    TickLength="0"
    Stroke="rgba(0, 0, 0, 0)"
    MajorStroke="rgba(0, 0, 0, 0)" />
<IgbNumericYAxis
    @ref="yAxis"
    AreLabelsVisible="false"
    TickLength="0"
    Stroke="rgba(0, 0, 0, 0)"
    MajorStroke="rgba(0, 0, 0, 0)" />
```

## Blazor Sankey Chart Styling

The following example colors three nodes by label and one by value, draws the ribbons at a constant width, rounds the node corners, and fades the rest of the chart when you hover a node or a ribbon.



### Node and Ribbon Colors

[`UseItemWiseColors`](mcp:get_api_reference?platform=blazor&component=IgbDataToolTipLayer&member=UseItemWiseColors) gives each node its own color from the chart palette. Without it, every node uses the series `brush` and `outline`. Each ribbon is drawn with the fill and outline of its source node. [`AreaFillOpacity`](mcp:get_api_reference?platform=blazor&component=IgbDataToolTipLayer&member=AreaFillOpacity) sets the translucency of the ribbons, and `thickness` the width of the node and ribbon outlines.

```razor
<IgbSankeySeries
    UseItemWiseColors="true"
    AreaFillOpacity="0.7"
    Thickness="0" />
```

### Style Mappings

`StyleMappings` colors nodes declaratively. Each `FlowStyleMapping` matches a node by `NodeLabel`, by a value range from [`MinimumValue`](mcp:get_api_reference?platform=blazor&component=IgbNumericYAxis&member=MinimumValue) to [`MaximumValue`](mcp:get_api_reference?platform=blazor&component=IgbNumericYAxis&member=MaximumValue) (both inclusive), or by both, and applies its `fill` and `outline`, which the node's outgoing ribbons then take too. The first mapping that matches a node wins, and a matched node takes the mapping's colors in place of its item-wise color, so you can color every node from the palette and pick out a few. To restyle elements in code instead, handle the series' `AssigningStyle` event.

```razor
<IgbSankeySeries
    UseItemWiseColors="true">
    <IgbFlowStyleMapping
        NodeLabel="Savings"
        Fill="rgba(46, 125, 50, 1)"
        Outline="rgba(46, 125, 50, 1)" />
    <IgbFlowStyleMapping
        NodeLabel="Housing"
        Fill="rgba(21, 101, 192, 1)"
        Outline="rgba(21, 101, 192, 1)" />
    <IgbFlowStyleMapping
        NodeLabel="Discretionary"
        Fill="rgba(239, 108, 0, 1)"
        Outline="rgba(239, 108, 0, 1)" />
    <IgbFlowStyleMapping
        MinimumValue="9000"
        MaximumValue="10000"
        Fill="rgba(106, 27, 154, 1)"
        Outline="rgba(106, 27, 154, 1)" />
</IgbSankeySeries>
```

### Ribbon Shape and Node Corners

`RibbonShape` sets the shape of the ribbons. `Curved` (the default) is the classic S-curve, whose apparent width narrows through a steep bend. `Straightened` turns diagonal sooner and narrows less, and `UniformWidth` keeps the ribbon the same width along its whole length. Every shape meets the nodes at the same points, so the ribbons still line up with the bands they connect. `RadiusX` and `RadiusY` round the corners of the node bands; both default to `0`.

```razor
<IgbSankeySeries
    RibbonShape="SankeyRibbonShape.UniformWidth"
    RadiusX="4"
    RadiusY="4" />
```

### Highlighting

Set the chart's [`HighlightingMode`](mcp:get_api_reference?platform=blazor&component=IgbDataChart&member=HighlightingMode) to highlight what the pointer is over. `HighlightScope` decides what is highlighted with it: `ConnectedFlow` (the default) highlights a hovered node together with every ribbon into and out of it, and a hovered ribbon together with the two nodes it joins, while `Element` highlights only the hovered node or ribbon.

```razor
<IgbDataChart
    HighlightingMode="SeriesHighlightingMode.FadeOthersSpecific"
    HighlightingBehavior="SeriesHighlightingBehavior.DirectlyOver">
    <IgbSankeySeries
        HighlightScope="SankeyHighlightScope.ConnectedFlow" />
</IgbDataChart>
```

## Blazor Sankey Chart Highlighted Values

The highlighted-values overlay draws a second value for every link over the first, as a thinner ribbon centered in the original one — a filtered subset compared with the whole, for example. Name the second value in `HighlightedLinkValueMemberPath` and set [`HighlightedValuesDisplayMode`](mcp:get_api_reference?platform=blazor&component=IgbDataToolTipLayer&member=HighlightedValuesDisplayMode) to [`Overlay`](mcp:get_api_reference?platform=blazor&component=SeriesHighlightedValuesDisplayMode&member=Overlay). If the second values are in a different collection from the links, bind it to `HighlightedLinkSource`.



```razor
<IgbSankeySeries
    HighlightedLinkValueMemberPath="Highlighted"
    HighlightedValuesDisplayMode="SeriesHighlightedValuesDisplayMode.Overlay" />
```

## Blazor Sankey Chart Animation

When the flows change, the series can animate from the old ribbons and nodes to the new ones. Set [`TransitionDuration`](mcp:get_api_reference?platform=blazor&component=IgbDataToolTipLayer&member=TransitionDuration) to the length of the animation in milliseconds; it is `0`, no animation, by default. Changes made to the data in place then animate. To also animate when you assign a different `LinkSource`, or point `LinkValueMemberPath` at another value column, set [`ShouldAnimateOnDataSourceSwap`](mcp:get_api_reference?platform=blazor&component=IgbDataToolTipLayer&member=ShouldAnimateOnDataSourceSwap) to true. Set `LinkIdMemberPath` to a field that identifies each link in every version of the data, so that each ribbon animates from its own previous shape. When the new flows change the range of the numeric axis, set the chart's [`AnimateSeriesWhenAxisRangeChanges`](mcp:get_api_reference?platform=blazor&component=IgbDataChart&member=AnimateSeriesWhenAxisRangeChanges) to true so that the series also animates through the rescale.

The following example keeps one value column per month. Choosing a month in the editor sets `LinkValueMemberPath` to that month's column, and the flows animate to the new values.



```razor
<IgbDataChart
    AnimateSeriesWhenAxisRangeChanges="true">
    <IgbSankeySeries
        LinkSource="SankeyBudgetMonths"
        LinkIdMemberPath="Id"
        LinkSourceMemberPath="Source"
        LinkTargetMemberPath="Target"
        LinkValueMemberPath="July"
        ShouldAnimateOnDataSourceSwap="true"
        TransitionDuration="1000" />
</IgbDataChart>
```

```razor
var chart = this.chart;
var month = args.NewValue.ToString();
var series = chart.ActualSeries;
for (var i = 0; i < series.Count; i++)
{
    var sankey = series[i] as IgbSankeySeries;
    if (sankey != null)
    {
        // The links carry one value column per month; reading another column animates the
        // flows to that month's values (ShouldAnimateOnDataSourceSwap + TransitionDuration).
        sankey.LinkValueMemberPath = month;
    }
}
```

## Blazor Radial Sankey Chart

The `RadialSankeySeries` draws the same flows around a circle, in the style of a dependency wheel: the stages become angles, the node bands become arcs, and the ribbons sweep between them. It takes the same data and the same properties as the `SankeySeries`, but uses a [`IgbCategoryAngleAxis`](mcp:get_api_reference?platform=blazor&component=IgbCategoryAngleAxis) and a [`IgbNumericRadiusAxis`](mcp:get_api_reference?platform=blazor&component=IgbNumericRadiusAxis) in place of the category and numeric axes. Set the [`IgbCalloutLayer`](mcp:get_api_reference?platform=blazor&component=IgbCalloutLayer)'s [`CalloutCollisionMode`](mcp:get_api_reference?platform=blazor&component=IgbCalloutLayer&member=CalloutCollisionMode) to [`RadialOutsideEnd`](mcp:get_api_reference?platform=blazor&component=CalloutCollisionMode&member=RadialOutsideEnd) to place the node labels around the outside of the ring.



```razor
<IgbDataChart
    @ref="chart">
    <IgbCategoryAngleAxis
        @ref="angleAxis"
        DataSource="SankeyIncomeStages"
        Label="Stage" />
    <IgbNumericRadiusAxis
        @ref="radiusAxis" />
    <IgbRadialSankeySeries
        @ref="radialSankey"
        AngleAxisName="angleAxis"
        RadiusAxisName="radiusAxis"
        LinkSource="SankeyIncomeFlow"
        LinkSourceMemberPath="Source"
        LinkTargetMemberPath="Target"
        LinkValueMemberPath="Value" />
    <IgbCalloutLayer
        @ref="nodeLabels"
        IsAutoCalloutBehaviorEnabled="true"
        UseValueForAutoCalloutLabels="false"
        CalloutCollisionMode="CalloutCollisionMode.RadialOutsideEnd" />
</IgbDataChart>
```

```razor
nodeLabels.TargetSeries = this.radialSankey;
```

### Proportional Stages

With a [`IgbCategoryAngleAxis`](mcp:get_api_reference?platform=blazor&component=IgbCategoryAngleAxis), every stage gets an equal share of the circle. To size the stages differently, use a [`IgbProportionalCategoryAngleAxis`](mcp:get_api_reference?platform=blazor&component=IgbProportionalCategoryAngleAxis) and name a weight column in its [`ValueMemberPath`](mcp:get_api_reference?platform=blazor&component=IgbProportionalCategoryAngleAxis&member=ValueMemberPath); each stage's share of the circle is proportional to its weight.



```razor
<IgbProportionalCategoryAngleAxis
    @ref="angleAxis"
    DataSource="SankeyIncomeStageWeights"
    Label="Stage"
    ValueMemberPath="Weight" />
```

The highlighted-values overlay works the same way on the radial series.



## Additional Resources

- [Chart Annotations](../features/chart-annotations.md)
- [Chart Highlighting](../features/chart-highlighting.md)
- [Radial Chart](radial-chart.md)
- [Treemap](treemap-chart.md)

## API References

- [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart)
- `SankeySeries`
- `RadialSankeySeries`
- `SankeyLayoutAdapter`
- `FlowStyleMapping`
- [`IgbCalloutLayer`](mcp:get_api_reference?platform=blazor&component=IgbCalloutLayer)
- [`IgbDataToolTipLayer`](mcp:get_api_reference?platform=blazor&component=IgbDataToolTipLayer)
- [`IgbDataLegend`](mcp:get_api_reference?platform=blazor&component=IgbDataLegend)
- [`IgbCategoryXAxis`](mcp:get_api_reference?platform=blazor&component=IgbCategoryXAxis)
- [`IgbNumericYAxis`](mcp:get_api_reference?platform=blazor&component=IgbNumericYAxis)
- [`IgbCategoryAngleAxis`](mcp:get_api_reference?platform=blazor&component=IgbCategoryAngleAxis)
- [`IgbProportionalCategoryAngleAxis`](mcp:get_api_reference?platform=blazor&component=IgbProportionalCategoryAngleAxis)
- [`IgbNumericRadiusAxis`](mcp:get_api_reference?platform=blazor&component=IgbNumericRadiusAxis)
