---
title: Web Components Treemap | Data Visualization Tools | Orientation | Layout | Data Binding | Infragistics
_description: Use Infragistics' Web Components Treemap control show relative weighting of data points at more than one level supporting strip, squarified, and slice-and-dice algorithms. Learn about Ignite UI for Web Components treemap!
_keywords: Web Components Tree Map, Treemap, layout, orientation, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Treemap", "TreemapOrientation", "TreemapLayoutType", "TreemapHighlightingMode", "TreemapHighlightedValueDisplayMode"]
namespace: Infragistics.Controls.Charts
_tocName: Treemap
_premium: true
---

# Web Components Treemap

The Ignite UI for Web Components Treemap chart displays hierarchical (tree-structured) data as a set of nested nodes. Each branch of the tree is given a treemap node, which is then tiled with smaller nodes representing sub-branches. Each node’s rectangle has an area proportional to a specified dimension on the data. Often the nodes are colored to show a separate dimension of the data.

## Web Components Treemap Example

In the following example, the [`IgcTreemapComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcTreemapComponent) demonstrates the 30 largest countries in the world by total area.

```typescript
export class CountyHierarchicalDataItem {
    public constructor(init: Partial<CountyHierarchicalDataItem>) {
        Object.assign(this, init);
    }

    public code: string;
    public parent: string;
    public name: string;
    public population: number;

}
export class CountyHierarchicalData extends Array<CountyHierarchicalDataItem> {
    public constructor(items: Array<CountyHierarchicalDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountyHierarchicalDataItem({ code: `AFC`, parent: null, name: `Africa`, population: null }),
                new CountyHierarchicalDataItem({ code: `ASA`, parent: null, name: `Asia`, population: null }),
                new CountyHierarchicalDataItem({ code: `EUR`, parent: null, name: `Europe`, population: null }),
                // ... 219 more items
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

<div class="divider--half"></div>

## Treemap Recommendations

### Are Web Components Treemaps right for your project?

When the color and size dimensions are correlated in some way with the tree structure, one can often easily see patterns that would be difficult to spot in other ways. A second advantage of treemaps is that, by construction, they make efficient use of space. As a result, they can legibly display thousands of items on the screen simultaneously.

- Treemaps are more effective than pie charts and other forms of area charts that often do a poor job of classifying data points and communicating the relative differences of their values.
- Treemaps are designed for drill down scenarios. You can continuously drill down into the data set that is represented by smaller rectangles for more efficient data analysis.
- Treemaps are not designed to convey numerical quantities; the intent is to show relative rankings.

Like any other data visualization, a Treemap chart visualization should be used in specific scenarios. It does not solve the same problem that a visualization like a Bar Chart or a Line Chart would. It is really meant for a more complex, richer data display.

### Treemap Use Cases

There are several common use cases for choosing a Treemap. When you:

- Have drill-down hierarchical data (data organized as a tree, with branches and sub-branches).
- Want to illustrate hierarchies of relative weight and comparative values between categories (branches) and subcategories (sub-branches).
- Want to display large data sets that need a compact, space-efficient visualization.
- Want to deliver at-a-glance, quick data analysis without precise values. The relative size of the rectangles help identify patterns and/or outliers very quickly.
- Want to make efficient use of space. Treemaps can legibly display thousands of items on the screen simultaneously.

### When not to Use a Treemap

- You are telling a data story that requires precise values
- You have negative data values
- You have flat, non-hierarchical data
- Your data is similar in size

### Treemap Data Structure

- The data source must be an array or a list of data items
- The data source must contain at least one data item otherwise the map will not render any nodes.
- All data items must contain at least one data column (e.g. string) which should be mapped to the [`labelMemberPath`](mcp:get_api_reference?platform=webcomponents&component=IgcTreemapComponent&member=labelMemberPath) property.
- All data items must contain at least one numeric data column which should be mapped using the [`valueMemberPath`](mcp:get_api_reference?platform=webcomponents&component=IgcTreemapComponent&member=valueMemberPath) property.
- To categorize data into organized tiles you can optionally use [`parentIdMemberPath`](mcp:get_api_reference?platform=webcomponents&component=IgcTreemapComponent&member=parentIdMemberPath) and [`idMemberPath`](mcp:get_api_reference?platform=webcomponents&component=IgcTreemapComponent&member=idMemberPath).

## Web Components Treemap Configuration

In the following example, the treemap demonstrates the ability of changing it's algorithmic structure by modifying the [`layoutType`](mcp:get_api_reference?platform=webcomponents&component=IgcTreemapComponent&member=layoutType) and [`layoutOrientation`](mcp:get_api_reference?platform=webcomponents&component=IgcTreemapComponent&member=layoutOrientation) properties.

```typescript
export class CountyHierarchicalDataItem {
    public constructor(init: Partial<CountyHierarchicalDataItem>) {
        Object.assign(this, init);
    }

    public code: string;
    public parent: string;
    public name: string;
    public population: number;

}
export class CountyHierarchicalData extends Array<CountyHierarchicalDataItem> {
    public constructor(items: Array<CountyHierarchicalDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountyHierarchicalDataItem({ code: `AFC`, parent: null, name: `Africa`, population: null }),
                new CountyHierarchicalDataItem({ code: `ASA`, parent: null, name: `Asia`, population: null }),
                new CountyHierarchicalDataItem({ code: `EUR`, parent: null, name: `Europe`, population: null }),
                // ... 219 more items
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

<div class="divider--half"></div>

### Layout Types

The Treemap chart displays the relative weight of data. It uses a variety of algorithms to help it determine how the layout of its data items should occur:

- `SliceAndDiced` - layout algorithm aims to preserve the initial order at the expense of the aspect ratio.
- `Squarified` - layout tiling algorithm has a better aspect ratio than the `SliceAndDice` and keeps a better order than Squarified.
- `Stripped` - layout type algorithm obtains the best aspect ratio but the objects are arranged by size.

The Treemap allows you to choose the algorithm that is best for your requirements, defaulting to use the Squarified method. It also includes the ability to allow you to colorize nodes using two mechanisms:

- A group-based mechanism that colors items with like values
- A scale-based mechanism similar to a map choropleth, which maps node colors based on their value.

### Layout Orientation

[`layoutOrientation`](mcp:get_api_reference?platform=webcomponents&component=IgcTreemapComponent&member=layoutOrientation) property enables the user to set the direction in which the nodes of the hierarchy will be expanded.

Note that the [`layoutOrientation`](mcp:get_api_reference?platform=webcomponents&component=IgcTreemapComponent&member=layoutOrientation) property works with the layout types SliceAndDice and Strip.

- `Horizontal` – the child nodes are going to be stacked horizontally(SliceAndDice).
- `Vertical` – the child nodes are going to be stacked vertically (SliceAndDice).

## Web Components Treemap Styling

In the following example, the treemap demonstrates the ability of changing the look and feel of the nodes achieved by styling through the `NodeStylingScript` event.

```typescript
export class CountyHierarchicalDataItem {
    public constructor(init: Partial<CountyHierarchicalDataItem>) {
        Object.assign(this, init);
    }

    public code: string;
    public parent: string;
    public name: string;
    public population: number;

}
export class CountyHierarchicalData extends Array<CountyHierarchicalDataItem> {
    public constructor(items: Array<CountyHierarchicalDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountyHierarchicalDataItem({ code: `AFC`, parent: null, name: `Africa`, population: null }),
                new CountyHierarchicalDataItem({ code: `ASA`, parent: null, name: `Asia`, population: null }),
                new CountyHierarchicalDataItem({ code: `EUR`, parent: null, name: `Europe`, population: null }),
                // ... 219 more items
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

### Web Components Treemap Highlighting

In the following example, the treemap demonstrates the ability of node highlighting. There are two options for this feature. Each node can individually brighten, by decreasing its opacity, or cause all other nodes to trigger the same effect. To enable this feature, set [`highlightingMode`](mcp:get_api_reference?platform=webcomponents&component=IgcTreemapComponent&member=highlightingMode)to Brighten or FadeOthers.

```typescript
export class CountyHierarchicalDataItem {
    public constructor(init: Partial<CountyHierarchicalDataItem>) {
        Object.assign(this, init);
    }

    public code: string;
    public parent: string;
    public name: string;
    public population: number;

}
export class CountyHierarchicalData extends Array<CountyHierarchicalDataItem> {
    public constructor(items: Array<CountyHierarchicalDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountyHierarchicalDataItem({ code: `AFC`, parent: null, name: `Africa`, population: null }),
                new CountyHierarchicalDataItem({ code: `ASA`, parent: null, name: `Asia`, population: null }),
                new CountyHierarchicalDataItem({ code: `EUR`, parent: null, name: `Europe`, population: null }),
                // ... 219 more items
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

## Web Components Treemap Percent based highlighting

- [`highlightedDataSource`](mcp:get_api_reference?platform=webcomponents&component=IgcTreemapComponent&member=highlightedDataSource): Specifies the datasource to read highlighted values from. If null, then highlighted values are read from the ItemsSource property.
- [`highlightedValueMemberPath`](mcp:get_api_reference?platform=webcomponents&component=IgcTreemapComponent&member=highlightedValueMemberPath): Specifies the name of the property in the datasource where the highlighted values are read.
- [`highlightedValueOpacity`](mcp:get_api_reference?platform=webcomponents&component=IgcTreemapComponent&member=highlightedValueOpacity): Controls the opacity of the normal value behind the highlighted value.
- [`highlightedValuesDisplayMode`](mcp:get_api_reference?platform=webcomponents&component=IgcTreemapComponent&member=highlightedValuesDisplayMode): Enables or disables highlighted values.
  - Auto: The treemap decides what mode to use.
  - Overlay: The treemap displays highlighted values over top the normal value with a slight opacity applied to the normal value.
  - Hidden: The treemap does not show highlighted values.

```typescript
export class CountryTopUrbanPopDataItem {
    public constructor(init: Partial<CountryTopUrbanPopDataItem>) {
        Object.assign(this, init);
    }

    public code: string;
    public parent: string;
    public name: string;
    public population: number;
    public urbanPopulation: number;
    public urbanPopPercent: string;

}
export class CountryTopUrbanPopData extends Array<CountryTopUrbanPopDataItem> {
    public constructor(items: Array<CountryTopUrbanPopDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryTopUrbanPopDataItem({ code: `ASA`, parent: null, name: `Asia`, population: null, urbanPopulation: null, urbanPopPercent: null }),
                new CountryTopUrbanPopDataItem({ code: `NAM`, parent: null, name: `North America`, population: null, urbanPopulation: null, urbanPopPercent: null }),
                new CountryTopUrbanPopDataItem({ code: `CHI`, parent: `Asia`, name: `China`, population: 1425178792, urbanPopulation: 941865672, urbanPopPercent: `65%` }),
                // ... 3 more items
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

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Shape Chart](shape-chart.md)

## API References

The following is a list of API members mentioned in the above sections:

- [`IgcTreemapComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcTreemapComponent)
- [`layoutOrientation`](mcp:get_api_reference?platform=webcomponents&component=IgcTreemapComponent&member=layoutOrientation)
- [`highlightedValuesDisplayMode`](mcp:get_api_reference?platform=webcomponents&component=IgcTreemapComponent&member=highlightedValuesDisplayMode)
- [`highlightedValueMemberPath`](mcp:get_api_reference?platform=webcomponents&component=IgcTreemapComponent&member=highlightedValueMemberPath)
- [`layoutType`](mcp:get_api_reference?platform=webcomponents&component=IgcTreemapComponent&member=layoutType)
