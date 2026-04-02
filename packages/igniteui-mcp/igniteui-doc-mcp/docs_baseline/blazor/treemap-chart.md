---
title: Blazor Treemap | Data Visualization Tools | Orientation | Layout | Data Binding | Infragistics
_description: Use Infragistics' Blazor Treemap control show relative weighting of data points at more than one level supporting strip, squarified, and slice-and-dice algorithms. Learn about Ignite UI for Blazor treemap!
_keywords: Blazor Tree Map, Treemap, layout, orientation, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Treemap", "TreemapOrientation", "TreemapLayoutType", "TreemapHighlightingMode", "TreemapHighlightedValueDisplayMode"]
namespace: Infragistics.Controls.Charts
_tocName: Treemap
_premium: true
---

# Blazor Treemap

The Ignite UI for Blazor Treemap chart displays hierarchical (tree-structured) data as a set of nested nodes. Each branch of the tree is given a treemap node, which is then tiled with smaller nodes representing sub-branches. Each node’s rectangle has an area proportional to a specified dimension on the data. Often the nodes are colored to show a separate dimension of the data.

## Blazor Treemap Example

In the following example, the [`IgbTreemap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreemap.html) demonstrates the 30 largest countries in the world by total area.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Comparing Population of Countries
    </div>
    <div class="container vertical fill">
        <IgbTreemap
        Name="treemap"
        @ref="treemap"
        DataSource="CountyHierarchicalData"
        ParentIdMemberPath="Parent"
        IdMemberPath="Name"
        LabelMemberPath="Name"
        ValueMemberPath="Population"
        FillScaleMode="TreemapFillScaleMode.Value"
        FillScaleMinimumValue="0"
        FillScaleMaximumValue="1500000000"
        FillBrushes="#4e62cf #8a58d6"
        IsFillScaleLogarithmic="true"
        RootTitle="Countries"
        HeaderDisplayMode="TreemapHeaderDisplayMode.Overlay"
        ParentNodeBottomPadding="0"
        ParentNodeLeftPadding="0"
        ParentNodeRightPadding="0"
        ParentNodeTopPadding="0"
        Outline="black"
        StrokeThickness="1">
        </IgbTreemap>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var treemap = this.treemap;

    }

    private IgbTreemap treemap;

    private CountyHierarchicalData _countyHierarchicalData = null;
    public CountyHierarchicalData CountyHierarchicalData
    {
        get
        {
            if (_countyHierarchicalData == null)
            {
                _countyHierarchicalData = new CountyHierarchicalData();
            }
            return _countyHierarchicalData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CountyHierarchicalDataItem
{
    public string Code { get; set; }
    public string Parent { get; set; }
    public string Name { get; set; }
    public double Population { get; set; }
}

public class CountyHierarchicalData
    : List<CountyHierarchicalDataItem>
{
    public CountyHierarchicalData()
    {
        this.Add(new CountyHierarchicalDataItem() { Code = @"AFC", Parent = null, Name = @"Africa", Population = double.NaN });
        this.Add(new CountyHierarchicalDataItem() { Code = @"ASA", Parent = null, Name = @"Asia", Population = double.NaN });
        this.Add(new CountyHierarchicalDataItem() { Code = @"EUR", Parent = null, Name = @"Europe", Population = double.NaN });
        // ... 219 more items
    }
}
```


<div class="divider--half"></div>

## Treemap Recommendations

### Are Blazor Treemaps right for your project?

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
- All data items must contain at least one data column (e.g. string) which should be mapped to the [`LabelMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreemap.html#IgniteUI_Blazor_Controls_IgbTreemap_LabelMemberPath) property.
- All data items must contain at least one numeric data column which should be mapped using the [`ValueMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreemap.html#IgniteUI_Blazor_Controls_IgbTreemap_ValueMemberPath) property.
- To categorize data into organized tiles you can optionally use [`ParentIdMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreemap.html#IgniteUI_Blazor_Controls_IgbTreemap_ParentIdMemberPath) and [`IdMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreemap.html#IgniteUI_Blazor_Controls_IgbTreemap_IdMemberPath).

## Blazor Treemap Configuration

In the following example, the treemap demonstrates the ability of changing it's algorithmic structure by modifying the [`LayoutType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreemap.html#IgniteUI_Blazor_Controls_IgbTreemap_LayoutType) and [`LayoutOrientation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreemap.html#IgniteUI_Blazor_Controls_IgbTreemap_LayoutOrientation) properties.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="options vertical">
        <IgbPropertyEditorPanel

        DescriptionType="Treemap"
        IsHorizontal="true"
        IsWrappingEnabled="true"
        Name="propertyEditorPanel1"
        @ref="propertyEditorPanel1">
            <IgbPropertyEditorPropertyDescription
            PropertyPath="LayoutType"
            Name="LayoutTypeEditor"
            @ref="layoutTypeEditor"
            PrimitiveValue="@("Squarified")"
            Label="Layout">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="LayoutOrientation"
            Name="LayoutOrientationEditor"
            @ref="layoutOrientationEditor"
            PrimitiveValue="@("Vertical")"
            Label="Orientation">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="HeaderDisplayMode"
            Name="HeaderDisplayModeEditor"
            @ref="headerDisplayModeEditor"
            PrimitiveValue="@("Overlay")"
            Label="Headers">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            PropertyPath="LabelVerticalAlignment"
            Name="LabelVerticalAlignmentEditor"
            @ref="labelVerticalAlignmentEditor"
            PrimitiveValue="@("Center")"
            Label="Labels">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="legend-title">
        Comparing Population of Countries
    </div>
    <div class="container vertical fill">
        <IgbTreemap
        Name="treemap"
        @ref="treemap"
        DataSource="CountyHierarchicalData"
        RootTitle="Countries"
        ParentIdMemberPath="Parent"
        IdMemberPath="Name"
        LabelMemberPath="Name"
        ValueMemberPath="Population"
        FillBrushes="#299e41 #4e62cf #5e359c"
        IsFillScaleLogarithmic="true"
        HeaderDisplayMode="TreemapHeaderDisplayMode.Overlay"
        ParentNodeBottomPadding="0"
        ParentNodeLeftPadding="0"
        ParentNodeRightPadding="0"
        ParentNodeTopPadding="0">
        </IgbTreemap>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditorPanel1 = this.propertyEditorPanel1;
        var layoutTypeEditor = this.layoutTypeEditor;
        var layoutOrientationEditor = this.layoutOrientationEditor;
        var headerDisplayModeEditor = this.headerDisplayModeEditor;
        var labelVerticalAlignmentEditor = this.labelVerticalAlignmentEditor;
        var treemap = this.treemap;

        this.BindElements = () => {
            propertyEditorPanel1.Target = this.treemap;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditorPanel1;
    private IgbPropertyEditorPropertyDescription layoutTypeEditor;
    private IgbPropertyEditorPropertyDescription layoutOrientationEditor;
    private IgbPropertyEditorPropertyDescription headerDisplayModeEditor;
    private IgbPropertyEditorPropertyDescription labelVerticalAlignmentEditor;
    private IgbTreemap treemap;

    private CountyHierarchicalData _countyHierarchicalData = null;
    public CountyHierarchicalData CountyHierarchicalData
    {
        get
        {
            if (_countyHierarchicalData == null)
            {
                _countyHierarchicalData = new CountyHierarchicalData();
            }
            return _countyHierarchicalData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CountyHierarchicalDataItem
{
    public string Code { get; set; }
    public string Parent { get; set; }
    public string Name { get; set; }
    public double Population { get; set; }
}

public class CountyHierarchicalData
    : List<CountyHierarchicalDataItem>
{
    public CountyHierarchicalData()
    {
        this.Add(new CountyHierarchicalDataItem() { Code = @"AFC", Parent = null, Name = @"Africa", Population = double.NaN });
        this.Add(new CountyHierarchicalDataItem() { Code = @"ASA", Parent = null, Name = @"Asia", Population = double.NaN });
        this.Add(new CountyHierarchicalDataItem() { Code = @"EUR", Parent = null, Name = @"Europe", Population = double.NaN });
        // ... 219 more items
    }
}
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

[`LayoutOrientation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreemap.html#IgniteUI_Blazor_Controls_IgbTreemap_LayoutOrientation) property enables the user to set the direction in which the nodes of the hierarchy will be expanded.

Note that the [`LayoutOrientation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreemap.html#IgniteUI_Blazor_Controls_IgbTreemap_LayoutOrientation) property works with the layout types SliceAndDice and Strip.

- `Horizontal` – the child nodes are going to be stacked horizontally(SliceAndDice).
- `Vertical` – the child nodes are going to be stacked vertically (SliceAndDice).

## Blazor Treemap Styling

In the following example, the treemap demonstrates the ability of changing the look and feel of the nodes achieved by styling through the `NodeStylingScript` event.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Comparing Population of Countries
    </div>
    <div class="container vertical fill">
        <IgbTreemap
        Name="treemap"
        @ref="treemap"
        DataSource="CountyHierarchicalData"
        ParentIdMemberPath="Parent"
        CustomValueMemberPath="Parent"
        IdMemberPath="Name"
        LabelMemberPath="Name"
        ValueMemberPath="Population"
        RootTitle="Countries"
        HeaderDisplayMode="TreemapHeaderDisplayMode.Overlay"
        OverlayHeaderBackground="#3f403f"
        HeaderHoverBackground="#3f403f"
        HeaderBackground="#3f403f"
        ParentNodeBottomPadding="0"
        ParentNodeLeftPadding="0"
        ParentNodeRightPadding="0"
        ParentNodeTopPadding="0"
        Outline="black"
        StrokeThickness="1">
            <IgbTreemapNodeStyleMapping
            Name="styling1"
            @ref="styling1"
            Value="@("Africa")"
            Fill="#735656"
            MappingMode="TreemapValueMappingMode.CustomValue">
            </IgbTreemapNodeStyleMapping>

            <IgbTreemapNodeStyleMapping
            Name="styling2"
            @ref="styling2"
            Value="@("Europe")"
            Fill="#61ab37"
            MappingMode="TreemapValueMappingMode.CustomValue">
            </IgbTreemapNodeStyleMapping>

            <IgbTreemapNodeStyleMapping
            Name="styling3"
            @ref="styling3"
            Value="@("Asia")"
            Fill="#8b5bb1"
            MappingMode="TreemapValueMappingMode.CustomValue">
            </IgbTreemapNodeStyleMapping>

            <IgbTreemapNodeStyleMapping
            Name="styling4"
            @ref="styling4"
            Value="@("North America")"
            Fill="#5fbaac"
            MappingMode="TreemapValueMappingMode.CustomValue">
            </IgbTreemapNodeStyleMapping>

            <IgbTreemapNodeStyleMapping
            Name="styling5"
            @ref="styling5"
            Value="@("South America")"
            Fill="#ee5879"
            MappingMode="TreemapValueMappingMode.CustomValue">
            </IgbTreemapNodeStyleMapping>

            <IgbTreemapNodeStyleMapping
            Name="styling6"
            @ref="styling6"
            Value="@("Middle East")"
            Fill="#6db1ff"
            MappingMode="TreemapValueMappingMode.CustomValue">
            </IgbTreemapNodeStyleMapping>

            <IgbTreemapNodeStyleMapping
            Name="styling7"
            @ref="styling7"
            Value="@("Central America")"
            Fill="#f7d262"
            MappingMode="TreemapValueMappingMode.CustomValue">
            </IgbTreemapNodeStyleMapping>

            <IgbTreemapNodeStyleMapping
            Name="styling8"
            @ref="styling8"
            Value="@("Oceania")"
            Fill="#a8a8b7"
            MappingMode="TreemapValueMappingMode.CustomValue">
            </IgbTreemapNodeStyleMapping>

        </IgbTreemap>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var treemap = this.treemap;
        var styling1 = this.styling1;
        var styling2 = this.styling2;
        var styling3 = this.styling3;
        var styling4 = this.styling4;
        var styling5 = this.styling5;
        var styling6 = this.styling6;
        var styling7 = this.styling7;
        var styling8 = this.styling8;

    }

    private IgbTreemap treemap;
    private IgbTreemapNodeStyleMapping styling1;
    private IgbTreemapNodeStyleMapping styling2;
    private IgbTreemapNodeStyleMapping styling3;
    private IgbTreemapNodeStyleMapping styling4;
    private IgbTreemapNodeStyleMapping styling5;
    private IgbTreemapNodeStyleMapping styling6;
    private IgbTreemapNodeStyleMapping styling7;
    private IgbTreemapNodeStyleMapping styling8;

    private CountyHierarchicalData _countyHierarchicalData = null;
    public CountyHierarchicalData CountyHierarchicalData
    {
        get
        {
            if (_countyHierarchicalData == null)
            {
                _countyHierarchicalData = new CountyHierarchicalData();
            }
            return _countyHierarchicalData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CountyHierarchicalDataItem
{
    public string Code { get; set; }
    public string Parent { get; set; }
    public string Name { get; set; }
    public double Population { get; set; }
}

public class CountyHierarchicalData
    : List<CountyHierarchicalDataItem>
{
    public CountyHierarchicalData()
    {
        this.Add(new CountyHierarchicalDataItem() { Code = @"AFC", Parent = null, Name = @"Africa", Population = double.NaN });
        this.Add(new CountyHierarchicalDataItem() { Code = @"ASA", Parent = null, Name = @"Asia", Population = double.NaN });
        this.Add(new CountyHierarchicalDataItem() { Code = @"EUR", Parent = null, Name = @"Europe", Population = double.NaN });
        // ... 219 more items
    }
}
```


### Blazor Treemap Highlighting

In the following example, the treemap demonstrates the ability of node highlighting. There are two options for this feature. Each node can individually brighten, by decreasing its opacity, or cause all other nodes to trigger the same effect. To enable this feature, set [`HighlightingMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreemap.html#IgniteUI_Blazor_Controls_IgbTreemap_HighlightingMode)to Brighten or FadeOthers.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="options vertical">
        <IgbPropertyEditorPanel
        Name="PropertyEditor"
        @ref="propertyEditor"

        DescriptionType="Treemap"
        IsHorizontal="true"
        IsWrappingEnabled="true">
            <IgbPropertyEditorPropertyDescription
            PropertyPath="HighlightingMode"
            Name="HighlightedModeEditor"
            @ref="highlightedModeEditor"
            Label="Highlighting Mode: "
            PrimitiveValue="@("Brighten")"
            DropDownValues="@(new string[] { "Brighten", "FadeOthers" })">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="legend-title">
        Comparing Population of Countries
    </div>
    <div class="container vertical fill">
        <IgbTreemap
        Name="treemap"
        @ref="treemap"
        DataSource="CountyHierarchicalData"
        ParentIdMemberPath="Parent"
        IdMemberPath="Name"
        LabelMemberPath="Name"
        ValueMemberPath="Population"
        FillScaleMode="TreemapFillScaleMode.Value"
        FillScaleMinimumValue="0"
        FillScaleMaximumValue="1500000000"
        FillBrushes="#4e62cf #8a58d6"
        IsFillScaleLogarithmic="true"
        RootTitle="Countries"
        HeaderDisplayMode="TreemapHeaderDisplayMode.Overlay"
        ParentNodeBottomPadding="0"
        ParentNodeLeftPadding="0"
        ParentNodeRightPadding="0"
        ParentNodeTopPadding="0"
        Outline="black"
        StrokeThickness="1">
        </IgbTreemap>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditor = this.propertyEditor;
        var highlightedModeEditor = this.highlightedModeEditor;
        var treemap = this.treemap;

        this.BindElements = () => {
            propertyEditor.Target = this.treemap;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription highlightedModeEditor;
    private IgbTreemap treemap;

    private CountyHierarchicalData _countyHierarchicalData = null;
    public CountyHierarchicalData CountyHierarchicalData
    {
        get
        {
            if (_countyHierarchicalData == null)
            {
                _countyHierarchicalData = new CountyHierarchicalData();
            }
            return _countyHierarchicalData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CountyHierarchicalDataItem
{
    public string Code { get; set; }
    public string Parent { get; set; }
    public string Name { get; set; }
    public double Population { get; set; }
}

public class CountyHierarchicalData
    : List<CountyHierarchicalDataItem>
{
    public CountyHierarchicalData()
    {
        this.Add(new CountyHierarchicalDataItem() { Code = @"AFC", Parent = null, Name = @"Africa", Population = double.NaN });
        this.Add(new CountyHierarchicalDataItem() { Code = @"ASA", Parent = null, Name = @"Asia", Population = double.NaN });
        this.Add(new CountyHierarchicalDataItem() { Code = @"EUR", Parent = null, Name = @"Europe", Population = double.NaN });
        // ... 219 more items
    }
}
```


## Blazor Treemap Percent based highlighting

- [`HighlightedDataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreemap.html#IgniteUI_Blazor_Controls_IgbTreemap_HighlightedDataSource): Specifies the datasource to read highlighted values from. If null, then highlighted values are read from the ItemsSource property.
- [`HighlightedValueMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreemap.html#IgniteUI_Blazor_Controls_IgbTreemap_HighlightedValueMemberPath): Specifies the name of the property in the datasource where the highlighted values are read.
- [`HighlightedValueOpacity`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreemap.html#IgniteUI_Blazor_Controls_IgbTreemap_HighlightedValueOpacity): Controls the opacity of the normal value behind the highlighted value.
- [`HighlightedValuesDisplayMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreemap.html#IgniteUI_Blazor_Controls_IgbTreemap_HighlightedValuesDisplayMode): Enables or disables highlighted values.
  - Auto: The treemap decides what mode to use.
  - Overlay: The treemap displays highlighted values over top the normal value with a slight opacity applied to the normal value.
  - Hidden: The treemap does not show highlighted values.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Comparing Top Urban Population Percentages between North America & Asia
    </div>
    <div class="container vertical fill">
        <IgbTreemap
        Name="treemap"
        @ref="treemap"
        DataSource="CountryTopUrbanPopData"
        ParentIdMemberPath="Parent"
        IdMemberPath="Name"
        LabelMemberPath="Name"
        ValueMemberPath="Population"
        HighlightedValueMemberPath="UrbanPopulation"
        HighlightedValuesDisplayMode="TreemapHighlightedValueDisplayMode.Overlay"
        FillBrushes="#fc4100 #ffc55a #00215e #2c4e80"
        RootTitle="Continents"
        HeaderDisplayMode="TreemapHeaderDisplayMode.Auto"
        IsFillScaleLogarithmic="true"
        LabelVerticalAlignment="VerticalAlignment.Top"
        ParentNodeTopMargin="10"
        FillScaleMode="TreemapFillScaleMode.Value"
        TextColor="black"
        FontSize="25"
        FontWeight="Bold">
        </IgbTreemap>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var treemap = this.treemap;

    }

    private IgbTreemap treemap;

    private CountryTopUrbanPopData _countryTopUrbanPopData = null;
    public CountryTopUrbanPopData CountryTopUrbanPopData
    {
        get
        {
            if (_countryTopUrbanPopData == null)
            {
                _countryTopUrbanPopData = new CountryTopUrbanPopData();
            }
            return _countryTopUrbanPopData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CountryTopUrbanPopDataItem
{
    public string Code { get; set; }
    public string Parent { get; set; }
    public string Name { get; set; }
    public double Population { get; set; }
    public double UrbanPopulation { get; set; }
    public string UrbanPopPercent { get; set; }
}

public class CountryTopUrbanPopData
    : List<CountryTopUrbanPopDataItem>
{
    public CountryTopUrbanPopData()
    {
        this.Add(new CountryTopUrbanPopDataItem() { Code = @"ASA", Parent = null, Name = @"Asia", Population = double.NaN, UrbanPopulation = double.NaN, UrbanPopPercent = null });
        this.Add(new CountryTopUrbanPopDataItem() { Code = @"NAM", Parent = null, Name = @"North America", Population = double.NaN, UrbanPopulation = double.NaN, UrbanPopPercent = null });
        this.Add(new CountryTopUrbanPopDataItem() { Code = @"CHI", Parent = @"Asia", Name = @"China", Population = 1425178792, UrbanPopulation = 941865672, UrbanPopPercent = @"65%" });
        // ... 3 more items
    }
}
```


<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

- [Area Chart](area-chart.md)
- [Shape Chart](shape-chart.md)

## API References

The following is a list of API members mentioned in the above sections:

- [`IgbTreemap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreemap.html)
- [`LayoutOrientation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreemap.html#IgniteUI_Blazor_Controls_IgbTreemap_LayoutOrientation)
- [`HighlightedValuesDisplayMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreemap.html#IgniteUI_Blazor_Controls_IgbTreemap_HighlightedValuesDisplayMode)
- [`HighlightedValueMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreemap.html#IgniteUI_Blazor_Controls_IgbTreemap_HighlightedValueMemberPath)
- [`LayoutType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreemap.html#IgniteUI_Blazor_Controls_IgbTreemap_LayoutType)
