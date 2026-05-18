---
title: Blazor Bullet Graph | Data Visualization Tools | Infragistics
_description: Infragistics' Blazor bullet graph control allows you to create dashboards displaying ranges or comparing multiple measurements. View our data visualization tools!
_keywords: Blazor Bullet Graph, animation, labels, needle, scales, ranges, tick marks, Infragistics
_license: commercial
mentionedTypes: ["XamBulletGraph"]
namespace: Infragistics.Controls.Gauges
_tocName: Bullet Graph
_premium: true
---

# Blazor Bullet Graph Overview

The Blazor bullet graph component allows for a linear and concise view of measures compared against a scale.

The Ignite UI for Blazor bullet graph component provides you with the ability to create attractive data presentations, replacing meters and gauges that are used on dashboards with simple yet straightforward and clear bar charts. A bullet graph is one of the most effective and efficient ways to present progress towards goals, good/better/best ranges, or compare multiple measurements in as little horizontal or vertical space as possible.

## Blazor Bullet Graph Example

The following sample demonstrates how setting multiple properties on the same [`IgbBulletGraph`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBulletGraph.html) can transform it to completely different bullet graph.

```razor
@using System.Collections.ObjectModel
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="options horizontal">
        <button @onclick="onAnimateToGauge1">Gauge Animation #1</button>
        <button @onclick="onAnimateToGauge2">Gauge Animation #2</button>
        <button @onclick="onAnimateToGauge3">Gauge Animation #3</button>
    </div>
    <div class="container vertical">
        <IgbBulletGraph Height="80px" Width="100%"
                     TransitionDuration=@TransitionDuration
                     MinimumValue=@MinimumValue
                     MaximumValue=@MaximumValue
                     Value=@Value
                     Interval=@Interval
                     LabelInterval=@LabelInterval
                     LabelExtent=@LabelExtent
                     ValueBrush=@ValueBrush
                     ValueInnerExtent=@ValueInnerExtent
                     ValueOuterExtent=@ValueOuterExtent
                     TargetValueBrush=@TargetValueBrush
                     TargetValueBreadth=@TargetValueBreadth
                     TargetValue=@TargetValue
                     MinorTickCount=@MinorTickCount
                     MinorTickEndExtent=@MinorTickEndExtent
                     MinorTickStartExtent=@MinorTickStartExtent
                     TickStartExtent=@TickStartExtent
                     TickEndExtent=@TickEndExtent
                     TickStrokeThickness=@TickStrokeThickness
                     ScaleBackgroundThickness=@ScaleBackgroundThickness
                     ScaleBackgroundBrush=@ScaleBackgroundBrush
                     ScaleBackgroundOutline=@ScaleBackgroundOutline
                     ScaleStartExtent=@ScaleStartExtent
                     ScaleEndExtent=@ScaleEndExtent
                     BackingBrush=@BackingBrush
                     BackingOutline=@BackingOutline
                     BackingStrokeThickness=@BackingStrokeThickness>

            @if (GaugeRanges.Count > 0)
            {
                 GaugeRangeInfo info0 = GaugeRanges[0];
                 <IgbLinearGraphRange Name=info0.Name
                                  StartValue=info0.StartValue
                                  EndValue=info0.EndValue
                                  InnerStartExtent=info0.InnerStartExtent
                                  InnerEndExtent=info0.InnerEndExtent
                                  OuterStartExtent=info0.OuterStartExtent
                                  OuterEndExtent=info0.OuterEndExtent
                                  Brush="@info0.Brush"
                                  Outline="@info0.Outline">
                 </IgbLinearGraphRange>
            }
            @if (GaugeRanges.Count > 1)
            {
                 GaugeRangeInfo info1 = GaugeRanges[1];
                 <IgbLinearGraphRange Name=info1.Name
                                  StartValue=info1.StartValue
                                  EndValue=info1.EndValue
                                  InnerStartExtent=info1.InnerStartExtent
                                  InnerEndExtent=info1.InnerEndExtent
                                  OuterStartExtent=info1.OuterStartExtent
                                  OuterEndExtent=info1.OuterEndExtent
                                  Brush="@info1.Brush"
                                  Outline="@info1.Outline">
                 </IgbLinearGraphRange>
            }
            @if (GaugeRanges.Count > 2)
            {
                 GaugeRangeInfo info2 = GaugeRanges[2];
                 <IgbLinearGraphRange Name=info2.Name
                                  StartValue=info2.StartValue
                                  EndValue=info2.EndValue
                                  InnerStartExtent=info2.InnerStartExtent
                                  InnerEndExtent=info2.InnerEndExtent
                                  OuterStartExtent=info2.OuterStartExtent
                                  OuterEndExtent=info2.OuterEndExtent
                                  Brush="@info2.Brush"
                                  Outline="@info2.Outline">
                 </IgbLinearGraphRange>
            }
        </IgbBulletGraph>

    </div>
</div>

@code {

    private double MinimumValue;
    private double MaximumValue;
    private double Value;
    private double Interval;
    private int TransitionDuration;

    private double LabelInterval;
    private double LabelExtent;

    private double ValueInnerExtent;
    private double ValueOuterExtent;
    private string ValueBrush;

    private string TargetValueBrush;
    private double TargetValueBreadth;
    private double TargetValue;

    private double MinorTickCount;
    private double MinorTickEndExtent;
    private double MinorTickStartExtent;
    private double TickStartExtent;
    private double TickEndExtent;
    private double TickStrokeThickness;

    private double ScaleBackgroundThickness;
    private string ScaleBackgroundBrush;
    private string ScaleBackgroundOutline;
    private double ScaleStartExtent;
    private double ScaleEndExtent;

    private string BackingBrush;
    private string BackingOutline;
    private double BackingStrokeThickness;

    private bool ShouldAnimate = false;

    private List<GaugeRangeInfo> GaugeRanges;

    protected override void OnInitialized()
    {
        this.MinimumValue = 0;
        this.MaximumValue = 120;
        this.ValueBrush = "#4286F4";
        this.Value = 70;
        this.TargetValueBrush = "#4286F4";
        this.TargetValue = 90;
        this.TargetValueBreadth = 10;
        this.Interval = 10;
        this.LabelInterval = 10;
        this.LabelExtent = 0.02;
        this.ScaleBackgroundThickness = 0;
        this.ScaleBackgroundBrush = "#DBDBDB";
        this.ScaleBackgroundOutline = "Gray";
        this.TransitionDuration = 0;

        this.GaugeRanges = new List<GaugeRangeInfo>();

        this.onAnimateToGauge3();
    }

    private void onAnimateToGauge1()
    {
        if (ShouldAnimate)
        {
            this.TransitionDuration = 1000;
        }
        this.MinimumValue = 0;
        this.MaximumValue = 80;
        this.Value = 70;
        this.Interval = 20;

        // setting appearance of labels
        this.LabelInterval = 10;
        this.LabelExtent = 0.02;

        // setting custom appearance of performance bar
        this.ValueInnerExtent = 0.5;
        this.ValueOuterExtent = 0.7;
        this.ValueBrush = "#000000";

        // setting custom appearance of target bar
        this.TargetValueBrush = "#000000";
        this.TargetValueBreadth = 10;
        this.TargetValue = 60;

        // setting appearance of major/minor ticks
        this.MinorTickCount = 5;
        this.MinorTickEndExtent = 0.10;
        this.MinorTickStartExtent = 0.20;
        this.TickStartExtent = 0.20;
        this.TickEndExtent = 0.05;
        this.TickStrokeThickness = 2;

        // setting extent of gauge scale
        this.ScaleBackgroundThickness = 0.5;
        this.ScaleBackgroundBrush = "#dbdbdb";
        this.ScaleBackgroundOutline = "gray";
        this.ScaleStartExtent = 0.05;
        this.ScaleEndExtent = 0.95;
        this.ScaleBackgroundThickness = 0;

        // setting appearance of backing fill and outline
        this.BackingBrush = "#f7f7f7";
        this.BackingOutline = "#d1d1d1";
        this.BackingStrokeThickness = 0;

        var colors = new List<string>() { "#A4BD29", "#F86232" };
        var ranges = new List<GaugeRangeInfo>();
        for (int i = 0; i < colors.Count; i++)
        {
            var info = new GaugeRangeInfo()
            {
                Name = "range " + i.ToString(),
                StartValue = i * 40,
                EndValue = (i * 40) + 40,
                Brush = colors[i],
                Outline = colors[i],
                InnerStartExtent = 0.2,
                InnerEndExtent = 0.2,
                OuterStartExtent = 0.95,
                OuterEndExtent = 0.95
            };
            ranges.Add(info);
        }
        this.GaugeRanges = ranges;
        this.ShouldAnimate = true;
    }

    private void onAnimateToGauge2()
    {
        if (ShouldAnimate)
        {
            this.TransitionDuration = 1000;
        }
        this.MinimumValue = 100;
        this.MaximumValue = 200;
        this.Value = 120;
        this.Interval = 10;

        // setting appearance of labels
        this.LabelInterval = 10;
        this.LabelExtent = 0.02;

        // setting custom appearance of performance bar
        this.ValueInnerExtent = 0.5;
        this.ValueOuterExtent = 0.7;
        this.ValueBrush = "#000000";

        // setting custom appearance of target bar
        this.TargetValueBrush = "#000000";
        this.TargetValueBreadth = 10;
        this.TargetValue = 180;

        // setting appearance of major/minor ticks
        this.MinorTickCount = 5;
        this.MinorTickEndExtent = 0.10;
        this.MinorTickStartExtent = 0.20;
        this.TickStartExtent = 0.20;
        this.TickEndExtent = 0.05;
        this.TickStrokeThickness = 2;

        // setting extent of gauge scale
        this.ScaleBackgroundThickness = 0.5;
        this.ScaleBackgroundBrush = "#dbdbdb";
        this.ScaleBackgroundOutline = "gray";
        this.ScaleStartExtent = 0.05;
        this.ScaleEndExtent = 0.95;
        this.ScaleBackgroundThickness = 0;

        // setting appearance of backing fill and outline
        this.BackingBrush = "#f7f7f7";
        this.BackingOutline = "#d1d1d1";
        this.BackingStrokeThickness = 0;

        var colors = new List<string>() { "#0078C8", "#21A7FF", "#4FB9FF" };
        double[] startValues = { 100, 150, 175 };
        double[] endValues   = { 150, 175, 200 };

        var ranges = new List<GaugeRangeInfo>();
        for (int i = 0; i < colors.Count; i++)
        {
            var info = new GaugeRangeInfo()
            {
                Name = "range " + i.ToString(),
                StartValue = startValues[i],
                EndValue = endValues[i],
                Brush = colors[i],
                Outline = colors[i],
                InnerStartExtent = 0.2,
                InnerEndExtent = 0.2,
                OuterStartExtent = 0.95,
                OuterEndExtent = 0.95
            };
            ranges.Add(info);
        }
        this.GaugeRanges = ranges;
        this.ShouldAnimate = true;
    }

    private void onAnimateToGauge3()
    {
        if (ShouldAnimate)
        {
            this.TransitionDuration = 1000;
        }
        this.MinimumValue = 0;
        this.MaximumValue = 120;
        this.Value = 70;
        this.Interval = 10;

        // setting appearance of labels
        this.LabelInterval = 10;
        this.LabelExtent = 0.02;

        // setting custom appearance of performance bar
        this.ValueInnerExtent = 0.5;
        this.ValueOuterExtent = 0.7;
        this.ValueBrush = "#000000";

        // setting custom appearance of target bar
        this.TargetValueBrush = "#000000";
        this.TargetValueBreadth = 10;
        this.TargetValue = 90;

        // setting appearance of major/minor ticks
        this.MinorTickCount = 5;
        this.MinorTickEndExtent = 0.10;
        this.MinorTickStartExtent = 0.20;
        this.TickStartExtent = 0.20;
        this.TickEndExtent = 0.05;
        this.TickStrokeThickness = 2;

        // setting extent of gauge scale
        this.ScaleBackgroundThickness = 0.5;
        this.ScaleBackgroundBrush = "#dbdbdb";
        this.ScaleBackgroundOutline = "gray";
        this.ScaleStartExtent = 0.05;
        this.ScaleEndExtent = 0.95;
        this.ScaleBackgroundThickness = 0;

        // setting appearance of backing fill and outline
        this.BackingBrush = "#f7f7f7";
        this.BackingOutline = "#d1d1d1";
        this.BackingStrokeThickness = 0;

        var colors = new List<string>() { "#FF9800", "#F96232", "#C62828" };
        var ranges = new List<GaugeRangeInfo>();

        for (int i = 0; i < colors.Count; i++)
        {
            var info = new GaugeRangeInfo()
            {
                Name = "range " + i.ToString(),
                StartValue = i * 40,
                EndValue = (i * 40) + 40,
                Brush = colors[i],
                Outline = colors[i],
                InnerStartExtent = 0.2,
                InnerEndExtent = 0.2,
                OuterStartExtent = 0.95,
                OuterEndExtent = 0.95
            };
            ranges.Add(info);
        }
        this.GaugeRanges = ranges;
        this.ShouldAnimate = true;
    }
}
```

<div class="divider--half"></div>

The bullet graph supports one scale, one set of tick marks and one set of labels. The bullet graph component also has built-in support for animated transitions. This animation is easily customizable by setting the [`TransitionDuration`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBulletGraph.html#IgniteUI_Blazor_Controls_IgbBulletGraph_TransitionDuration) property.
The features of the bullet graph include configurable orientation and direction, configurable visual elements such as the needle, and more.

## Component Modules

The [`IgbBulletGraph`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBulletGraph.html) requires the following modules:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbBulletGraphModule));
```

<div class="divider--half"></div>

## Usage

The following code walks through creating a bullet graph component, and configuring a performance bar, comparative measure marker, and three comparative ranges on the scale.

```razor
<IgbBulletGraph Height="80px" Width="100%"
MinimumValue="5" Value="35"
MaximumValue="55" TargetValue="43">
<IgbLinearGraphRange StartValue="0"
  EndValue="15"
  Brush="#828181" />
<IgbLinearGraphRange StartValue="15"
  EndValue="30"
  Brush="#AAAAAA" />
<IgbLinearGraphRange StartValue="30"
  EndValue="55"
  Brush="#D0D0D0" />
</IgbBulletGraph>
```

<div class="divider--half"></div>

## Comparative Measures

The bullet graph can show two measures: performance value and target value.

Performance value is the primary measure displayed by the component and it is visualized as a bar that stretches along the length of the whole graph. The target value is a measure which the performance value compares against. It is displayed as a small block that runs perpendicular to the orientation of the performance bar.

```razor
<IgbBulletGraph Height="80px" Width="100%"
    MinimumValue="0"
    MaximumValue="100"

    Value="50"
    ValueBrush="DodgerBlue"
    ValueStrokeThickness="1"
    ValueInnerExtent="0.5"
    ValueOuterExtent="0.65"

    TargetValue="80"
    TargetValueBreadth="10"
    TargetValueBrush="LimeGreen"
    TargetValueOutline="LimeGreen"
    TargetValueStrokeThickness="1"
    TargetValueInnerExtent="0.3"
    TargetValueOuterExtent="0.85">
</IgbBulletGraph>
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="container vertical">
        <IgbBulletGraph Height="80px" Width="100%"
                     MinimumValue="0"
                     MaximumValue="100"

                     Value="50"
                     ValueBrush="DodgerBlue"
                     ValueStrokeThickness="1"
                     ValueInnerExtent="0.5"
                     ValueOuterExtent="0.65"

                     TargetValue="80"
                     TargetValueBreadth="10"
                     TargetValueBrush="LimeGreen"
                     TargetValueOutline="LimeGreen"
                     TargetValueStrokeThickness="1"
                     TargetValueInnerExtent="0.3"
                     TargetValueOuterExtent="0.85"

                     ScaleBackgroundBrush="#E5E5E5"
                     ScaleBackgroundOutline="#E5E5E5"
                     BackingBrush="#F7F7F7"
                     BackingOutline="#BFBFBF"
                     TickStrokeThickness="1.5">
        </IgbBulletGraph>
    </div>
</div>

@code {

}
```

## Highlight Value

The bullet graph's performance value can be further modified to show progress represented as a highlighted value. This will make the [`Value`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBulletGraph.html#IgniteUI_Blazor_Controls_IgbBulletGraph_Value) appear with a lower opacity. A good example is if [`Value`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBulletGraph.html#IgniteUI_Blazor_Controls_IgbBulletGraph_Value) is 50 and  [`HighlightValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBulletGraph.html#IgniteUI_Blazor_Controls_IgbBulletGraph_HighlightValue) is set to 25. This would represent a performance of 50% regardless of what the value of [`TargetValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBulletGraph.html#IgniteUI_Blazor_Controls_IgbBulletGraph_TargetValue) is set to. To enable this first set [`HighlightValueDisplayMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBulletGraph.html#IgniteUI_Blazor_Controls_IgbBulletGraph_HighlightValueDisplayMode) to Overlay and then apply a [`HighlightValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBulletGraph.html#IgniteUI_Blazor_Controls_IgbBulletGraph_HighlightValue) to something lower than [`Value`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBulletGraph.html#IgniteUI_Blazor_Controls_IgbBulletGraph_Value).

```razor
<IgbBulletGraph Height="80px" Width="100%"
    MinimumValue="0"
    Value="70"
    TargetValue="90"
    Interval="10"
    MaximumValue="100"
    LabelInterval="10"
    LabelExtent="0.025"
    HighlightValueDisplayMode="HighlightedValueDisplayMode.Overlay"
    HighlightValue=25>
</IgbBulletGraph>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbBulletGraph Height="80px" Width="100%"
            MinimumValue="0" 
            Value="70"
            TargetValue="90"
            Interval="10"
            MaximumValue="100" 
            LabelInterval="10"
            LabelExtent="0.025"
            LabelsPreTerminal="0"
            LabelsPostInitial="0"
            HighlightValueDisplayMode="HighlightedValueDisplayMode.Overlay"
            HighlightValue=25>
        </IgbBulletGraph>
    </div>
</div>

@code {

}
```

## Comparative Ranges

The ranges are visual elements that highlight a specified range of values on a scale. Their purpose is to visually communicate the qualitative state of the performance bar measure, illustrating at the same time the degree to which it resides within that state.

```razor
<IgbBulletGraph Height="80px" Width="100%"
  MinimumValue="0" Value="80" Interval="10"
  MaximumValue="100" TargetValue="90"
  RangeBrushes="#C62828,#F96232,#FF9800"
  RangeOutlines="#C62828,#F96232,#FF9800">
<IgbLinearGraphRange
  StartValue="0"
  EndValue="40"
  InnerStartExtent="0.075"
  InnerEndExtent="0.075"
  OuterStartExtent="0.95"
  OuterEndExtent="0.95">
</IgbLinearGraphRange>
<IgbLinearGraphRange
  StartValue="40"
  EndValue="70"
  InnerStartExtent="0.075"
  InnerEndExtent="0.075"
  OuterStartExtent="0.95"
  OuterEndExtent="0.95">
</IgbLinearGraphRange>
<IgbLinearGraphRange StartValue="70"
  EndValue="100"
  InnerStartExtent="0.075"
  InnerEndExtent="0.075"
  OuterStartExtent="0.95"
  OuterEndExtent="0.95">
</IgbLinearGraphRange>
</IgbBulletGraph>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbBulletGraph Height="80px" Width="100%"
                     MinimumValue="0" Value="80" Interval="10"
                     MaximumValue="100" TargetValue="90"
                     RangeBrushes="#C62828,#F96232,#FF9800"
                     RangeOutlines="#C62828,#F96232,#FF9800">
            <IgbLinearGraphRange StartValue="0" EndValue="40" Brush="#C62828" Outline="#C62828"
                              InnerStartExtent="0.075" InnerEndExtent="0.075"
                              OuterStartExtent="0.95" OuterEndExtent="0.95">
            </IgbLinearGraphRange>
            <IgbLinearGraphRange StartValue="40" EndValue="70" Brush="#F96232" Outline="#F96232"
                              InnerStartExtent="0.075" InnerEndExtent="0.075"
                              OuterStartExtent="0.95" OuterEndExtent="0.95">
            </IgbLinearGraphRange>
            <IgbLinearGraphRange StartValue="70" EndValue="100" Brush="#FF9800" Outline="#FF9800"
                              InnerStartExtent="0.075" InnerEndExtent="0.075"
                              OuterStartExtent="0.95" OuterEndExtent="0.95">
            </IgbLinearGraphRange>
        </IgbBulletGraph>
    </div>
</div>

@code {

}
```

## Tick Marks

The tick marks serve as a visual division of the scale into intervals in order to increase the readability of the bullet graph.

- Major tick marks – The major tick marks are used as primary delimiters on the scale. The frequency they appear at, their extents and style can be controlled by setting their corresponding properties.
- Minor tick marks – The minor tick marks represent helper tick marks, which might be used to additionally improve the readability of the scale and can be customized in a way similar to the major ones.

```razor
<IgbBulletGraph Height="80px" Width="100%"
    MinimumValue="0" Value="70" Interval="10"
    MaximumValue="100" TargetValue="90"

    TickBrush="DodgerBlue"
    TicksPreTerminal="0"
    TicksPostInitial="0"
    TickStrokeThickness="2"
    TickStartExtent="0.2"
    TickEndExtent="0.075"

    MinorTickCount="4"
    MinorTickBrush="DarkViolet"
    MinorTickEndExtent="0.1"
    MinorTickStartExtent="0.2"
    MinorTickStrokeThickness="1">
</IgbBulletGraph>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbBulletGraph Height="80px" Width="100%"
                     MinimumValue="0" Value="70" Interval="10"
                     MaximumValue="100" TargetValue="90"

                     TickBrush="DodgerBlue"
                     TicksPreTerminal="0"
                     TicksPostInitial="0"
                     TickStrokeThickness="2"
                     TickStartExtent="0.2"
                     TickEndExtent="0.075"

                     MinorTickCount="4"
                     MinorTickBrush="DarkViolet"
                     MinorTickEndExtent="0.1"
                     MinorTickStartExtent="0.2"
                     MinorTickStrokeThickness="1">
        </IgbBulletGraph>
    </div>
</div>

@code {

}
```

## Labels

The labels indicate the measures on the scale.

```razor
<IgbBulletGraph Height="80px" Width="100%"
  MinimumValue="0" Value="70" Interval="10"
  MaximumValue="100" TargetValue="90"
  LabelInterval="10"
  LabelExtent="0.025"
  LabelsPreTerminal="0"
  LabelsPostInitial="0"
  FontBrush="DodgerBlue"
  Font="11px Verdana">
</IgbBulletGraph>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbBulletGraph Height="80px" Width="100%"
                     MinimumValue="0" Value="70" Interval="10"
                     MaximumValue="100" TargetValue="90"
                     LabelInterval="10"
                     LabelExtent="0.025"
                     LabelsPreTerminal="0"
                     LabelsPostInitial="0"
                     FontBrush="DodgerBlue"
                     Font="11px Verdana">
        </IgbBulletGraph>
    </div>
</div>

@code {

}
```

## Backing

The backing element represents background and border of the bullet graph component. It is always the first element rendered and all the rest of elements such as labels, and tick marks are overlaid on top of it.

```razor
<IgbBulletGraph Height="80px" Width="100%"
  MinimumValue="0" Value="70" Interval="10"
  MaximumValue="100" TargetValue="90"
  BackingBrush="#BDDCFC"
  BackingOutline="DodgerBlue"
  BackingStrokeThickness="4"
  BackingInnerExtent="0"
  BackingOuterExtent="1">
</IgbBulletGraph>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbBulletGraph Height="80px" Width="100%"
                     MinimumValue="0" Value="70" Interval="10"
                     MaximumValue="100" TargetValue="90"
                     BackingBrush="#BDDCFC"
                     BackingOutline="DodgerBlue"
                     BackingStrokeThickness="4"
                     BackingInnerExtent="0"
                     BackingOuterExtent="1">
        </IgbBulletGraph>
    </div>
</div>

@code {

}
```

## Scale

The scale is visual element that highlights the full range of values in the gauge. You can customize appearance and shape of the scale. The scale can also be inverted (using [`IsScaleInverted`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBulletGraph.html#IgniteUI_Blazor_Controls_IgbBulletGraph_IsScaleInverted) property) and all labels will be rendered from right-to-left instead of left-to-right.

```razor
<IgbBulletGraph Height="80px" Width="100%"
  MinimumValue="0" Value="70" Interval="10"
  MaximumValue="100" TargetValue="90"
  IsScaleInverted="false"
  ScaleBackgroundBrush="DodgerBlue"
  ScaleBackgroundOutline="Red"
  ScaleBackgroundThickness="2"
  ScaleStartExtent="0.05"
  ScaleEndExtent="0.95">
</IgbBulletGraph>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbBulletGraph Height="80px" Width="100%"
                     MinimumValue="0" Value="70" Interval="10"
                     MaximumValue="100" TargetValue="90"
                     IsScaleInverted="false"
                     ScaleBackgroundBrush="DodgerBlue"
                     ScaleBackgroundOutline="Red"
                     ScaleBackgroundThickness="2"
                     ScaleStartExtent="0.05"
                     ScaleEndExtent="0.95">
        </IgbBulletGraph>
    </div>
</div>

@code {

}
```

## Summary

For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project and see the bullet graph with all features and visuals enabled.

```razor
<IgbBulletGraph Height="80px" Width="100%"
    MinimumValue="0" Value="50" Interval="10"
    MaximumValue="100" TargetValue="90"
    IsScaleInverted="false"
    ScaleBackgroundBrush="DodgerBlue"
    ScaleBackgroundOutline="Red"
    ScaleBackgroundThickness="2"
    ScaleStartExtent="0.05"
    ScaleEndExtent="0.95"

    ValueBrush="Black"
    ValueStrokeThickness="1"
    ValueInnerExtent="0.5"
    ValueOuterExtent="0.65"
    TargetValue="80"
    TargetValueBreadth="7.5"
    TargetValueBrush="Black"
    TargetValueOutline="Black"
    TargetValueStrokeThickness="1"
    TargetValueInnerExtent="0.3"
    TargetValueOuterExtent="0.85"

    LabelInterval="10"
    LabelExtent="0.025"
    LabelsPreTerminal="0"
    LabelsPostInitial="0"
    FontBrush="DodgerBlue"
    Font="11px Verdana"

    BackingBrush="#BDDCFC"
    BackingOutline="DodgerBlue"
    BackingStrokeThickness="4"
    BackingInnerExtent="0"
    BackingOuterExtent="1"
    TickBrush="DodgerBlue"
    TicksPreTerminal="0"
    TicksPostInitial="0"
    TickStrokeThickness="2"
    TickStartExtent="0.2"
    TickEndExtent="0.075"

    MinorTickCount="4"
    MinorTickBrush="DarkViolet"
    MinorTickEndExtent="0.1"
    MinorTickStartExtent="0.2"
    MinorTickStrokeThickness="1"

    RangeBrushes="#C62828,#F96232,#FF9800"
    RangeOutlines="#C62828,#F96232,#FF9800">
    <IgbLinearGraphRange StartValue="20" EndValue="40"
        InnerStartExtent="0.025" InnerEndExtent="0.025"
        OuterStartExtent="0.9" OuterEndExtent="0.9">
    </IgbLinearGraphRange>
    <IgbLinearGraphRange StartValue="40" EndValue="60"
        InnerStartExtent="0.025" InnerEndExtent="0.025"
        OuterStartExtent="0.9" OuterEndExtent="0.9">
    </IgbLinearGraphRange>
    <IgbLinearGraphRange StartValue="60" EndValue="90"
        InnerStartExtent="0.025" InnerEndExtent="0.025"
        OuterStartExtent="0.9 OuterEndExtent="0.9">
    </IgbLinearGraphRange>
</IgbBulletGraph>
```

## API References

The following is a list of API members mentioned in the above sections:

- [`IgbBulletGraph`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBulletGraph.html)
- [`IgbLinearGraphRange`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbLinearGraphRange.html)

## Additional Resources

You can find more information about other types of gauges in these topics:

- [Linear Gauge](linear-gauge.md)
- [Radial Gauge](radial-gauge.md)
