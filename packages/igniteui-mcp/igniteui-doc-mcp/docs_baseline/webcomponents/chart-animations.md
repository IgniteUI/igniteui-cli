---
title: Web Components Chart Animations | Data Visualization | Infragistics
description: Infragistics' Web Components Chart Animations
keywords: Web Components Charts, Animations, Infragistics
license: commercial

namespace: Infragistics.Controls.Charts
llms:
  description: "Animations allow you to ease-in the series as it loads a new data source."
_tocName: Chart Animations
_premium: true
---
# Web Components Chart Animations

Animations allow you to ease-in the series as it loads a new data source. The available animation differs depending on the type of series involved. For example, the column series animates by rising from the x-axis, a line series animates by drawing from the origin of y-axis.

Animations are disabled in the Ignite UI for Web Components Charts, but they can be enabled by setting the [`IsTransitionInEnabled`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=isTransitionInEnabled) property to true. From there, you can set the [`TransitionInDuration`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=transitionInDuration) property to determine how long your animation should take to complete and the [`TransitionInMode`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=transitionInMode) to determine the type of animation that takes place.

## Web Components Chart Animation Example

The following example depicts a [Line Chart](../types/line-chart.md) with an animation set to the default [`TransitionInMode`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=transitionInMode) - "Auto." The drop-down and slider at the top in this example will allow you to modify the [`TransitionInMode`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=transitionInMode) and [`TransitionInDuration`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent&member=transitionInDuration), respectively, so that you can see what the different supported animations look like at different speeds.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Highlighting](chart-highlighting.md)
- [Chart Tooltips](chart-tooltips.md)

## API References
[`IgcCategoryChart`](mcp:get_api_reference?platform=webcomponents&component=IgcCategoryChartComponent)
