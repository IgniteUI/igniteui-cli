---
title: Blazor Radial Gauge Chart | Data Visualization Tools | Infragistics
_description: Use Infragistics' Blazor radial gauge control to create engaging data visualizations and dashboards and show off KPIs with rich style and interactivity. Learn about the Ignite UI for Blazor radial gauge configurable elements!
_keywords: Radial Gauge, Ignite UI for Blazor, Infragistics, animation, labels, needle, scales, ranges, tick marks
_license: commercial
mentionedTypes: ["XamRadialGauge", "XamRadialGaugeRange"]
namespace: Infragistics.Controls.Gauges
_tocName: Radial Gauge
_premium: true
---

# Blazor Radial Gauge Overview

The Blazor radial gauge component provides a number of visual elements, like a needle, tick marks, ranges, and labels, in order to create a predefined shape and scale. The [`IgbRadialGauge`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html)  also has built-in support for animated transitions. This animation is easily customizable by setting the [`TransitionDuration`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_TransitionDuration) property.

## Blazor Radial Gauge Example

The following sample demonstrates how setting multiple properties on the same [`IgbRadialGauge`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html) can transform it to completely different radial gauge.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="options horizontal">
        <button @onclick="onAnimateToGauge1">Gauge Animation #1</button>
        <button @onclick="onAnimateToGauge2">Gauge Animation #2</button>
        <button @onclick="onAnimateToGauge3">Gauge Animation #3</button>
        <button @onclick="onAnimateToGauge4">Gauge Animation #4</button>
    </div>
    <div class="container vertical">
        <IgbRadialGauge @ref="Gauge"
                     Height="100%" Width="100%"
                     TransitionDuration="@TransitionDuration"
                     Value=@Value
                     Interval=@Interval
                     MinimumValue=@MinimumValue
                     MaximumValue=@MaximumValue
                     Font=@Font
                     LabelInterval=@LabelInterval
                     LabelExtent=@LabelExtent
                     MinorTickCount=@MinorTickCount
                     MinorTickEndExtent=@MinorTickEndExtent
                     MinorTickStartExtent=@MinorTickStartExtent
                     MinorTickStrokeThickness=@MinorTickStrokeThickness
                     MinorTickBrush=@MinorTickBrush
                     TickStartExtent=@TickStartExtent
                     TickEndExtent=@TickEndExtent
                     TickStrokeThickness=@TickStrokeThickness
                     TickBrush="@TickBrush"
                     NeedleShape=@NeedleShape
                     NeedleEndExtent=@NeedleEndExtent
                     NeedleEndWidthRatio=@NeedleEndWidthRatio
                     NeedleStartWidthRatio=@NeedleStartWidthRatio
                     NeedlePivotShape=@NeedlePivotShape
                     NeedlePivotWidthRatio=@NeedlePivotWidthRatio
                     NeedleBaseFeatureWidthRatio=@NeedleBaseFeatureWidthRatio
                     NeedleBrush=@NeedleBrush
                     NeedleOutline=@NeedleOutline
                     NeedlePivotBrush=@NeedlePivotBrush
                     NeedlePivotOutline=@NeedlePivotOutline
                     NeedlePointFeatureExtent=@NeedlePointFeatureExtent
                     IsNeedleDraggingEnabled=@IsNeedleDraggingEnabled
                     BackingBrush=@BackingBrush
                     BackingOutline=@BackingOutline
                     BackingStrokeThickness=@BackingStrokeThickness
                     BackingShape=@BackingShape
                     BackingOversweep=@BackingOversweep
                     BackingCornerRadius=@BackingCornerRadius
                     BackingOuterExtent=@BackingOuterExtent
                     ScaleStartAngle=@ScaleStartAngle
                     ScaleEndAngle=@ScaleEndAngle
                     ScaleEndExtent=@ScaleEndExtent
                     ScaleStartExtent=@ScaleStartExtent
                     ScaleOversweepShape=@ScaleOversweepShape
                     ScaleBrush=@ScaleBrush
                     ScaleSweepDirection=@ScaleSweepDirection>
            @for (int i = 0; i < RangeInfo.Count; i++)
            {
                GaugeRangeInfo info = RangeInfo[i];
                <IgbRadialGaugeRange StartValue=@info.StartValue
                                  EndValue=@info.EndValue
                                  InnerStartExtent=@info.InnerStartExtent
                                  InnerEndExtent=@info.InnerEndExtent
                                  OuterStartExtent=@info.OuterStartExtent
                                  OuterEndExtent=@info.OuterEndExtent
                                  Brush="@info.Brush"
                                  Outline="@info.Outline">
                </IgbRadialGaugeRange>
            }
        </IgbRadialGauge>
    </div>
</div>

@code {

    private IgbRadialGauge Gauge;
    private double MinimumValue;
    private double MaximumValue;
    private double Value;
    private double Interval;
    private int TransitionDuration;

    private double LabelExtent;
    private double LabelInterval;
    private string Font;

    private double ScaleStartAngle;
    private double ScaleEndAngle;
    private string ScaleBrush;
    private SweepDirection ScaleSweepDirection;
    private double ScaleEndExtent;
    private double ScaleStartExtent;
    private RadialGaugeScaleOversweepShape ScaleOversweepShape;

    private string BackingOutline;
    private string BackingBrush;
    private RadialGaugeBackingShape BackingShape;
    private double BackingStrokeThickness;
    private double BackingOversweep;
    private double BackingCornerRadius;
    private double BackingOuterExtent;

    private bool IsNeedleDraggingEnabled;
    private double NeedlePointFeatureExtent;
    private double NeedleEndExtent;
    private RadialGaugeNeedleShape NeedleShape;
    private RadialGaugePivotShape NeedlePivotShape;
    private double NeedlePivotWidthRatio;
    private string NeedleBrush;
    private string NeedleOutline;
    private double NeedleStartWidthRatio;
    private double NeedleEndWidthRatio;
    private double NeedleBaseFeatureWidthRatio;
    private string NeedlePivotBrush;
    private string NeedlePivotOutline;

    private string TickBrush;
    private double TickEndExtent;
    private double TickStartExtent;
    private double TickStrokeThickness;
    private string MinorTickBrush;
    private double MinorTickEndExtent;
    private double MinorTickStartExtent;
    private double MinorTickCount;
    private double MinorTickStrokeThickness;

    private System.Collections.ObjectModel.ObservableCollection<GaugeRangeInfo> RangeInfo;

    protected override void OnInitialized()
    {
        this.MinimumValue = 0;
        this.MaximumValue = 50;
        this.Value = 25;
        this.Interval = 5;

        this.Font = null;
        this.LabelInterval = 5;
        this.LabelExtent = 0.71;

        this.ScaleStartAngle = 120;
        this.ScaleEndAngle = 60;
        this.ScaleEndExtent = 0;
        this.ScaleStartExtent = 0;
        this.ScaleBrush = "#D6D6D6";
        this.ScaleSweepDirection = SweepDirection.Clockwise;
        this.ScaleOversweepShape = RadialGaugeScaleOversweepShape.Auto;

        this.BackingOutline = "#D6D6D6";
        this.BackingBrush = "#FCFCFC";
        this.BackingShape = RadialGaugeBackingShape.Circular;
        this.BackingStrokeThickness = 5;
        this.BackingOversweep = 0;
        this.BackingCornerRadius = 0;
        this.BackingOuterExtent = 0;

        this.IsNeedleDraggingEnabled = true;
        this.NeedleEndExtent = 0.8;
        this.NeedleShape = RadialGaugeNeedleShape.Triangle;
        this.NeedlePivotShape = RadialGaugePivotShape.CircleOverlay;
        this.NeedlePivotWidthRatio = 0.15;
        this.NeedleBrush = "#79797A";
        this.NeedleOutline = "#79797A";
        this.NeedleStartWidthRatio = 0.05;
        this.NeedleEndWidthRatio = 0.03;
        this.NeedleBaseFeatureWidthRatio = 0.15;
        this.NeedlePivotBrush = "#79797A";
        this.NeedlePivotOutline = "#79797A";
        this.NeedlePointFeatureExtent = 0;

        this.MinorTickCount = 4;
        this.MinorTickEndExtent = 0.625;
        this.MinorTickStartExtent = 0.6;
        this.MinorTickStrokeThickness = 1;
        this.MinorTickBrush = "#79797A";
        this.TickStartExtent = 0.6;
        this.TickEndExtent = 0.65;
        this.TickStrokeThickness = 2;

        RangeInfo = new System.Collections.ObjectModel.ObservableCollection<GaugeRangeInfo>();
        //RangeInfo.Add(new GaugeRangeInfo()
        //{
        //    Brush = "red",
        //    Outline = "red",
        //    StartValue = 0,
        //    EndValue = 100,
        //    InnerStartExtent = 0.3,
        //    InnerEndExtent = 0.3,
        //    OuterStartExtent = 0.9,
        //    OuterEndExtent = 0.9
        //});
    }

    public void onAnimateToGauge1()
    {
        this.TransitionDuration = 1000;
        this.MinimumValue = 0;
        this.MaximumValue = 10;
        this.Value = 7.5;

        // Scale Settings
        this.ScaleStartAngle = 180;
        this.ScaleEndAngle = 270;
        this.ScaleBrush = "transparent";
        this.ScaleSweepDirection = SweepDirection.Clockwise;

        // Backing Settings
        this.BackingOutline = "white";
        this.BackingBrush = "white";
        this.BackingShape = RadialGaugeBackingShape.Fitted;

        // Needle Settings
        this.NeedleEndExtent = 0.8;
        this.NeedleShape = RadialGaugeNeedleShape.Triangle;
        this.NeedlePivotShape = RadialGaugePivotShape.Circle;
        this.NeedlePivotWidthRatio = 0.1;
        this.NeedleBrush = "#79797a";
        this.NeedleOutline = "#79797a";

        // TickMark Settings
        this.TickBrush = "transparent";
        this.MinorTickBrush = "transparent";

        // Label Settings
        this.LabelInterval = 5;
        this.LabelExtent = 0.915;
        this.Font = "15px Verdana,Arial";

        // setting custom gauge ranges
        GaugeRangeInfo range1 = new GaugeRangeInfo()
        {
            Brush = "#A4BD29",
            Outline = "#A4BD29",
            StartValue = 0,
            EndValue = 5,
            InnerStartExtent = 0.3,
            InnerEndExtent = 0.3,
            OuterStartExtent = 0.9,
            OuterEndExtent = 0.9
        };

        GaugeRangeInfo range2 = new GaugeRangeInfo()
        {
            Brush = "#F86232",
            Outline = "#F86232",
            StartValue = 5,
            EndValue = 10,
            InnerStartExtent = 0.3,
            InnerEndExtent = 0.3,
            OuterStartExtent = 0.9,
            OuterEndExtent = 0.9
        };

        RangeInfo.Clear();

        RangeInfo.Add(range1);
        RangeInfo.Add(range2);
    }

    public void onAnimateToGauge2()
    {
        this.TransitionDuration = 1000;
        this.MinimumValue = 100;
        this.MaximumValue = 200;
        this.Value = 125;

        // Scale Settings
        this.ScaleStartAngle = 180;
        this.ScaleEndAngle = 0;
        this.ScaleBrush = "transparent";
        this.ScaleSweepDirection = SweepDirection.Clockwise;

        // Backing Settings
        this.BackingOutline = "white";
        this.BackingBrush = "white";
        this.BackingShape = RadialGaugeBackingShape.Fitted;

        // Needle Settings
        this.NeedleEndExtent = 0.8;
        this.NeedleShape = RadialGaugeNeedleShape.Triangle;
        this.NeedlePivotShape = RadialGaugePivotShape.Circle;
        this.NeedlePivotWidthRatio = 0.1;
        this.NeedleBrush = "#79797a";
        this.NeedleOutline = "#79797a";

        // TickMark Settings
        this.TickBrush = "transparent";
        this.MinorTickBrush = "transparent";

        // Label Settings
        this.LabelInterval = 50;
        this.LabelExtent = 0.935;
        this.Font = "13px Verdana,Arial";

        GaugeRangeInfo range1 = new GaugeRangeInfo()
        {
            Brush = "#32F845",
            Outline = "#32F845",
            StartValue = 100,
            EndValue = 150,
            InnerStartExtent = 0.3,
            InnerEndExtent = 0.3,
            OuterStartExtent = 0.9,
            OuterEndExtent = 0.9
        };

        GaugeRangeInfo range2 = new GaugeRangeInfo()
        {
            Brush = "#BF32F8",
            Outline = "#BF32F8",
            StartValue = 150,
            EndValue = 200,
            InnerStartExtent = 0.3,
            InnerEndExtent = 0.3,
            OuterStartExtent = 0.9,
            OuterEndExtent = 0.9
        };

        RangeInfo.Clear();
        RangeInfo.Add(range1);
        RangeInfo.Add(range2);
    }

    public void onAnimateToGauge3()
    {
        this.TransitionDuration = 1000;
        this.MinimumValue = 0;
        this.MaximumValue = 80;
        this.Value = 10;
        this.Interval = 10;

        // Label Settings
        this.LabelExtent = 0.6;
        this.LabelInterval = 10;
        this.Font = "15px Verdana,Arial";

        // Scale Settings
        this.ScaleStartAngle = 135;
        this.ScaleEndAngle = 45;
        this.ScaleBrush = "#0b8fed";
        this.ScaleOversweepShape = RadialGaugeScaleOversweepShape.Auto;
        this.ScaleSweepDirection = SweepDirection.Clockwise;
        this.ScaleEndExtent = 0.825;
        this.ScaleStartExtent = 0.775;

        this.MinorTickStartExtent = 0.7;
        this.MinorTickEndExtent = 0.75;
        this.TickStartExtent = 0.675;
        this.TickEndExtent = 0.75;

        // Backing Settings
        this.BackingShape = RadialGaugeBackingShape.Fitted;
        this.BackingBrush = "#fcfcfc";
        this.BackingOutline = "#d6d6d6";
        this.BackingOversweep = 5;
        this.BackingCornerRadius = 10;
        this.BackingOuterExtent = 0.9;

        // Needle Settings
        this.NeedleShape = RadialGaugeNeedleShape.NeedleWithBulb;
        this.NeedlePivotShape = RadialGaugePivotShape.CircleOverlay;
        this.NeedleEndExtent = 0.5;
        this.NeedlePointFeatureExtent = 0.3;
        this.NeedlePivotWidthRatio = 0.2;
        this.NeedleBrush = "#9f9fa0";
        this.NeedleOutline = "#9f9fa0";
        this.NeedlePivotBrush = "#9f9fa0";
        this.NeedlePivotOutline = "#9f9fa0";

        // TickMark Settings
        this.TickBrush = "rgba(51, 51, 51, 1)";
        this.MinorTickBrush = "rgba(73, 73, 73, 1)";
        this.MinorTickCount = 6;

        RangeInfo.Clear();
    }

    public void onAnimateToGauge4()
    {
        this.TransitionDuration = 1000;
        this.MinimumValue = 0;
        this.MaximumValue = 50;
        this.Value = 25;
        this.Interval = 5;

        // setting appearance of labels
        this.LabelInterval = 5;
        this.LabelExtent = 0.71;
        this.Font = "15px Verdana,Arial";

        // setting custom needle
        this.IsNeedleDraggingEnabled = true;
        this.NeedleEndExtent = 0.5;
        this.NeedleShape = RadialGaugeNeedleShape.Triangle;
        this.NeedleEndWidthRatio = 0.03;
        this.NeedleStartWidthRatio = 0.05;
        this.NeedlePivotShape = RadialGaugePivotShape.CircleOverlay;
        this.NeedlePivotWidthRatio = 0.15;
        this.NeedleBaseFeatureWidthRatio = 0.15;
        this.NeedleBrush = "#79797a";
        this.NeedleOutline = "#79797a";
        this.NeedlePivotBrush = "#79797a";
        this.NeedlePivotOutline = "#79797a";

        // setting appearance of major/minor ticks
        this.MinorTickCount = 4;
        this.MinorTickEndExtent = 0.625;
        this.MinorTickStartExtent = 0.6;
        this.MinorTickStrokeThickness = 1;
        this.MinorTickBrush = "#79797a";
        this.TickStartExtent = 0.6;
        this.TickEndExtent = 0.65;
        this.TickStrokeThickness = 2;
        this.TickBrush = "#79797a";

        // setting extent of gauge scale
        this.ScaleStartAngle = 120;
        this.ScaleEndAngle = 60;
        this.ScaleBrush = "#d6d6d6";
        this.ScaleOversweepShape = RadialGaugeScaleOversweepShape.Fitted;
        this.ScaleSweepDirection = SweepDirection.Clockwise;
        this.ScaleEndExtent = 0.57;
        this.ScaleStartExtent = 0.5;

        // setting appearance of backing dial
        this.BackingBrush = "#fcfcfc";
        this.BackingOutline = "#d6d6d6";
        this.BackingStrokeThickness = 5;
        this.BackingShape = RadialGaugeBackingShape.Circular;

        GaugeRangeInfo range1 = new GaugeRangeInfo()
        {
            Brush = "#F86232",
            Outline = "F86232",
            StartValue = 5,
            EndValue = 15,
            InnerStartExtent = 0.5,
            InnerEndExtent = 0.5,
            OuterStartExtent = 0.57,
            OuterEndExtent = 0.57
        };

        GaugeRangeInfo range2 = new GaugeRangeInfo()
        {
            Brush = "#DC3F76",
            Outline = "DC3F76",
            StartValue = 15,
            EndValue = 35,
            InnerStartExtent = 0.5,
            InnerEndExtent = 0.5,
            OuterStartExtent = 0.57,
            OuterEndExtent = 0.57
        };

        GaugeRangeInfo range3 = new GaugeRangeInfo()
        {
            Brush = "#7446B9",
            Outline = "7446B9",
            StartValue = 35,
            EndValue = 45,
            InnerStartExtent = 0.5,
            InnerEndExtent = 0.5,
            OuterStartExtent = 0.57,
            OuterEndExtent = 0.57
        };

        RangeInfo.Clear();
        RangeInfo.Add(range1);
        RangeInfo.Add(range2);
        RangeInfo.Add(range3);
    }

}
```


<div class="divider--half"></div>

<!-- Blazor -->

Please refer to these topics on adding the IgniteUI.Blazor package.

- [Getting Started](general-getting-started.md)
- [Adding Nuget Package](general-nuget-feed.md)

Afterwards you may start implementing the control by adding the following namespaces:

```razor
@using IgniteUI.Blazor.Controls
```

<!-- end: Blazor -->

## Component Modules

The [`IgbRadialGauge`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html) requires the following modules:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbRadialGaugeModule));
```

<div class="divider--half"></div>

## Usage

The following code demonstrates how create a radial gauge containing a needle and three comparative ranges on the scale.

```razor
<IgbRadialGauge Height="100%" Width="100%"
      MinimumValue="0" Value="25"
      MaximumValue="100" Interval="5" >
    <IgbRadialGaugeRange
          StartValue="0"
          EndValue="30"
          Brush="red">
    </IgbRadialGaugeRange>
    <IgbRadialGaugeRange
          StartValue="30"
          EndValue="60"
          Brush="Yellow" >
    </IgbRadialGaugeRange>
    <IgbRadialGaugeRange
          StartValue="60"
          EndValue="100"
          Brush="Green">
    </IgbRadialGaugeRange>
</IgbRadialGauge>
```

<div class="divider--half"></div>

## Backing

The radial gauge component comes with a backing shape drawn behind the scale that acts as a background for the radial gauge.

The backing element represents background and border of the radial gauge component. It is always the first element rendered and all the rest of elements such as needle, labels, and tick marks are overlay on top of it.

The backing can be circular or fitted. A circular shape creates a 360 degree circle gauge while a fitted shape creates a filled arc segment encompassing the [`ScaleStartAngle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_ScaleStartAngle) and [`ScaleEndAngle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_ScaleEndAngle) properties. This can be set by setting the [`BackingShape`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_BackingShape) property.

```razor
 <IgbRadialGauge Height="100%" Width="100%"
    BackingShape="RadialGaugeBackingShape.Fitted"
    BackingBrush="#FCFCFC"
    BackingOutline="DodgerBlue"
    BackingOversweep="5"
    BackingCornerRadius="10"
    BackingStrokeThickness="5"
    BackingOuterExtent="0.8"
    BackingInnerExtent="0.15"

    ScaleStartAngle="135"
    ScaleEndAngle="45"
    MinimumValue="0"
    MaximumValue="80"
    Value="50"
    Interval="10">
</IgbRadialGauge>
```

```razor
@using IgniteUI.Blazor.Controls


    <div class="container vertical">
        <div class="container vertical">
            <IgbRadialGauge Height="100%" Width="100%"
                         BackingShape="RadialGaugeBackingShape.Fitted"
                         BackingBrush="#FCFCFC"
                         BackingOutline="DodgerBlue"
                         BackingOversweep="5"
                         BackingCornerRadius="10"
                         BackingStrokeThickness="5"
                         BackingOuterExtent="0.8"
                         BackingInnerExtent="0.15"

                         ScaleStartAngle="135"
                         ScaleEndAngle="45"
                         ScaleBrush="#DDDDDD"

                         MinimumValue="0"
                         MaximumValue="80"
                         Value="50"
                         Interval="10">
            </IgbRadialGauge>
        </div>
    </div>

@code {

}
```


## Scale

The scale is visual element that highlights full range of values in the gauge which can be created by supplying [`MinimumValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_MinimumValue) and [`MaximumValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_MaximumValue) values. Together with backing, it defines overall shape of gauge. The [`ScaleStartAngle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_ScaleStartAngle) and [`ScaleEndAngle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_ScaleEndAngle) properties define bounds of arc of the scale. While, the [`ScaleSweepDirection`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_ScaleSweepDirection) property specifies whether the scale sweeps in clockwise or counter-clockwise direction. You can customize appearance of the scale by setting [`ScaleBrush`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_ScaleBrush), [`ScaleStartExtent`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_ScaleStartExtent), and [`ScaleEndExtent`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_ScaleEndExtent) properties.

```razor
<IgbRadialGauge
  ScaleStartAngle="135"
  ScaleEndAngle="45"
  ScaleBrush="DodgerBlue"
  ScaleSweepDirection="SweepDirection.Clockwise"
  ScaleOversweep="1"
  ScaleOversweepShape="RadialGaugeScaleOversweepShape.Fitted"
  ScaleStartExtent="0.45"
  ScaleEndExtent="0.575"
  MinimumValue="0"
  MaximumValue="80"
  Value="50"
  Interval="10">
</IgbRadialGauge>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbRadialGauge Height="100%" Width="100%"
                     ScaleStartAngle="135"
                     ScaleEndAngle="45"
                     ScaleBrush="DodgerBlue"
                     ScaleSweepDirection="SweepDirection.Clockwise"
                     ScaleOversweep="1"
                     ScaleOversweepShape="RadialGaugeScaleOversweepShape.Fitted"
                     ScaleStartExtent="0.45"
                     ScaleEndExtent="0.575"

                     MinimumValue="0"
                     MaximumValue="80"
                     Value="50"
                     Interval="10">
        </IgbRadialGauge>
    </div>
</div>

@code {

}
```


## Labels and Titles

The radial gauge labels are visual elements displaying numeric values at a specified interval between values of the [`MinimumValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_MinimumValue) and [`MaximumValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_MaximumValue) properties. You can position labels by setting the [`LabelExtent`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_LabelExtent) property to a fraction, where 0 represents center of gauge and 1 represents outer extent of the gauge backing. Also, you can customize labels setting various styling properties such as [`FontBrush`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_FontBrush) and [`Font`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_Font).

Each of these labels for the needle have various styling attributes you can apply to change the font, angle, brush and distance from the center of the gauge such as [`TitleExtent`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_TitleExtent), [`TitleAngle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_TitleAngle), `SubtitleFontSize`, [`HighlightLabelBrush`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_HighlightLabelBrush).

```razor
<IgbRadialGauge
  Height="100%" Width="100%"
  LabelInterval="10"
  LabelInterval="10"
  Font="11px Verdana"
  FontBrush="DodgerBlue"
  MinimumValue="0"
  MaximumValue="80"
  Value="50"
  Interval="10">
</IgbRadialGauge>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbRadialGauge Height="100%" Width="100%"
                     
                     ScaleStartAngle="135"
                     ScaleEndAngle="45"
                     ScaleBrush="#DDDDDD"
                     TitleDisplaysValue=true
                     SubtitleText="MPH"
                     MinimumValue="0"
                     MaximumValue="80"
                     Value="50"
                     Interval="10">
        </IgbRadialGauge>
    </div>
</div>

@code {

}
```


## Title & Subtitle

[`TitleText`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_TitleText) and [`SubtitleText`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_SubtitleText) properties are available and can both be used to display custom text for the needle. Alternatively, [`TitleDisplaysValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_TitleDisplaysValue) and [`SubtitleDisplaysValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_SubtitleDisplaysValue), when set to true, will let display the needle's value and override [`TitleText`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_TitleText) and [`SubtitleText`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_SubtitleText). So you can occupy custom text for the title but show the value via the subtitle and vice versa.

If the highlight needle is shown, as explained below, then custom text can be shown via  [`HighlightLabelText`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_HighlightLabelText), otherwise [`HighlightLabelDisplaysValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_HighlightLabelDisplaysValue) can be enabled and display it's value.

```razor
<IgbRadialGauge
  TitleText="Global Sales"
  SubTitleText="2024">
</IgbRadialGauge>
```

## Optical Scaling

The radial gauge's labels and titles can change it's scaling. To enable this, first set [`OpticalScalingEnabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_OpticalScalingEnabled) to true. Then you can set [`OpticalScalingSize`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_OpticalScalingSize) which manages the size at which labels have 100% optical scaling. Labels will have larger fonts when gauge's size is larger. For example, labels will have a 200% larger font size when this property is set to 500 and the gauge px size is doubled to eg. 1000.

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <div class="options horizontal">
        <label class="options-label">Optical Scaling: </label>
        <label class="options-label">
        <input type="checkbox" id="checkbox1" checked="true" @onchange="ToggleOpticalScaling" /> Resize Gauge: </label>
        <input class="options-slider" id="slider" type="range" min="20" max="100" step="10" value="100" @onchange="OnGaugeSizeChanged" />
 
    </div>
    <div class="container vertical">

        <IgbRadialGauge @ref=gauge1 Height="@gaugeHeight" Width="@gaugeWidth"
                        OpticalScalingEnabled=@OpticalScalingToggle
                        OpticalScalingSize="500"
                        SubtitleText="MPH"
                        TitleDisplaysValue=true
                        MinimumValue="0"
                        MaximumValue="80"
                        Value="50"
                        Interval="10">
        </IgbRadialGauge>
    </div>
</div>


@code {
    private IgbRadialGauge gauge1 { get; set; }
    private IgbSlider slider1 { get; set; }
    private bool OpticalScalingToggle { get; set; } = true;
    private string gaugeWidth { get; set; } = "100%";
    private string gaugeHeight { get; set; } = "100%";

    private void ToggleOpticalScaling(ChangeEventArgs e)
    {
        this.OpticalScalingToggle = (bool)e.Value;
    }

    private void OnGaugeSizeChanged(ChangeEventArgs e)
    {
        if (e != null)
        {
            gaugeWidth = e.Value.ToString() + "%";
            gaugeHeight = e.Value.ToString() + "%";
        }
    }
}
```


## Tick Marks

Tick marks are thin lines radiating from the center of the radial gauge. There are two types of tick marks: major and minor. Major tick marks are displayed at the [`Interval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_Interval) between the [`MinimumValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_MinimumValue) and [`MaximumValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_MaximumValue) properties. Use the [`MinorTickCount`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_MinorTickCount) property to specify the number of minor tick marks displayed between each major tick mark. You can control the length of tick marks by setting a fraction (between 0 and 1) to [`TickStartExtent`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_TickStartExtent), [`TickEndExtent`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_TickEndExtent), [`MinorTickStartExtent`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_MinorTickStartExtent), and [`MinorTickEndExtent`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_MinorTickEndExtent) properties.

```razor
 <IgbRadialGauge Height="100%" Width="100%"
    TickStartExtent="0.5"
    TickEndExtent="0.57"
    TickStrokeThickness="2"
    TickBrush="DodgerBlue"
    MinorTickCount="4"
    MinorTickEndExtent="0.520"
    MinorTickStartExtent="0.57"
    MinorTickStrokeThickness="1"
    MinorTickBrush="DarkViolet"
    MinimumValue="0"
    MaximumValue="80"
    Value="50"
    Interval="10">
</IgbRadialGauge>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbRadialGauge Height="100%" Width="100%"
                     TickStartExtent="0.5"
                     TickEndExtent="0.57"
                     TickStrokeThickness="2"
                     TickBrush="DodgerBlue"

                     MinorTickCount="4"
                     MinorTickEndExtent="0.520"
                     MinorTickStartExtent="0.57"
                     MinorTickStrokeThickness="1"
                     MinorTickBrush="DarkViolet"

                     MinimumValue="0"
                     MaximumValue="80"
                     Value="50"
                     Interval="10">
        </IgbRadialGauge>
    </div>
</div>

@code {

}
```


## Ranges

A range highlights a set of continuous values bound by a specified [`MinimumValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_MinimumValue) and [`MaximumValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_MaximumValue) properties. You can add multiple ranges to the radial gauge by specifying their starting and ending values. Each range has a few customization properties such as [`Brush`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGaugeRange.html#IgniteUI_Blazor_Controls_IgbRadialGaugeRange_Brush) and [`Outline`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGaugeRange.html#IgniteUI_Blazor_Controls_IgbRadialGaugeRange_Outline). Alternatively, you can set [`RangeBrushes`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_RangeBrushes) and [`RangeOutlines`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_RangeOutlines) properties to a list of colors for the ranges.

```razor
<IgbRadialGauge Height="100%" Width="100%"
      MinimumValue="0" Value="50"
      MaximumValue="80" Interval="10"
      RangeBrushes="#A4BD29, #F86232"
      RangeOutlines="#A4BD29, #F86232">
    <IgbRadialGaugeRange StartValue="10"
          EndValue="25"
          InnerStartExtent="0.50"
          InnerEndExtent="0.50"
          OuterStartExtent="0.57"
          OuterEndExtent="0.57">
    </IgbRadialGaugeRange>
    <IgbRadialGaugeRange StartValue="25"
          EndValue="40"
          InnerStartExtent="0.50"
          InnerEndExtent="0.50"
          OuterStartExtent="0.57"
          OuterEndExtent="0.57">
    </IgbRadialGaugeRange>
</IgbRadialGauge>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbRadialGauge Height="100%" Width="100%"
                     MinimumValue="0" Value="80"
                     MaximumValue="80" Interval="10"
                     RangeBrushes="#A4BD29, #F86232"
                     RangeOutlines="#A4BD29, #F86232">
            <IgbRadialGaugeRange StartValue="10"
                              EndValue="25"
                              InnerStartExtent="0.50"
                              InnerEndExtent="0.50"
                              OuterStartExtent="0.57"
                              OuterEndExtent="0.57">
            </IgbRadialGaugeRange>
            <IgbRadialGaugeRange StartValue="25"
                              EndValue="40"
                              InnerStartExtent="0.50"
                              InnerEndExtent="0.50"
                              OuterStartExtent="0.57"
                              OuterEndExtent="0.57">
            </IgbRadialGaugeRange>
        </IgbRadialGauge>
    </div>
</div>

@code {

}
```


## Needle

Radial gauge needles are visual elements used to signify a gauge set value. Needles are available in one of the several predefined shapes. The needle can have a pivot shape, which is placed in the center of the gauge. The pivot shape also takes one of the predefined shapes. Pivot shapes that include an overlay or an underlay can have a separate pivot brush applied to the shape.

The supported needle shapes and caps are set using the [`NeedleShape`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_NeedleShape) and [`NeedlePivotShape`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_NeedlePivotShape) properties.

You can enable an interactive mode of the gauge (using [`IsNeedleDraggingEnabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_IsNeedleDraggingEnabled) property) and the end-user will be able to change value by dragging the needle between values of [`MinimumValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_MinimumValue) and [`MaximumValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_MaximumValue) properties.

```razor
<IgbRadialGauge Height="100%" Width="100%"
    IsNeedleDraggingEnabled="true"
    IsNeedleDraggingConstrained="true"
    NeedleShape="RadialGaugeNeedleShape.NeedleWithBulb"
    NeedleBrush="DodgerBlue"
    NeedleOutline="DodgerBlue"
    NeedleEndExtent="0.475"
    NeedleStrokeThickness="1"
    NeedlePivotShape="RadialGaugePivotShape.CircleOverlay"
    NeedlePivotBrush="#9F9FA0"
    NeedlePivotOutline="#9F9FA0"
    NeedlePivotWidthRatio="0.2"
    NeedlePivotStrokeThickness="1"
    Value="50"
    MinimumValue="0"
    MaximumValue="80"
    Interval="10">
</IgbRadialGauge>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbRadialGauge Height="100%" Width="100%"
                     IsNeedleDraggingEnabled="true"
                     IsNeedleDraggingConstrained="true"
                     NeedleShape="RadialGaugeNeedleShape.NeedleWithBulb"
                     NeedleBrush="DodgerBlue"
                     NeedleOutline="DodgerBlue"
                     NeedleEndExtent="0.475"
                     NeedleStrokeThickness="1"

                     NeedlePivotShape="RadialGaugePivotShape.CircleOverlay"
                     NeedlePivotBrush="#9F9FA0"
                     NeedlePivotOutline="#9F9FA0"
                     NeedlePivotWidthRatio="0.2"
                     NeedlePivotStrokeThickness="1"

                     Value="50"
                     MinimumValue="0"
                     MaximumValue="80"
                     Interval="10">
        </IgbRadialGauge>
    </div>
</div>

@code {


}
```


## Highlight Needle

The radial gauge can be modified to show a second needle. This will make the main needle's [`Value`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_Value) appear with a lower opacity. To enable this first set [`HighlightValueDisplayMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_HighlightValueDisplayMode) to Overlay and then apply a [`HighlightValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html#IgniteUI_Blazor_Controls_IgbRadialGauge_HighlightValue).

```razor
<IgbLinearGauge Height="80px" Width="100%"
    MinimumValue="0"
    MaximumValue="100"
    Value="30"
    Interval="10"
    LabelInterval="10"
    LabelExtent="0.65"
    HighlightValue="50"
    HighlightValueDisplayMode=HighlightedValueDisplayMode.Overlay
    HighlightLabelDisplaysValue=true
    HighlightLabelSnapsToNeedlePivot=true
    IsHighlightNeedleDraggingEnabled=true
</IgbLinearGauge>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbRadialGauge Height="100%" Width="100%"
            MinimumValue="0"
            MaximumValue="100"
            Value="30"
            Interval="10"
            LabelInterval="10"
            LabelExtent="0.65"    
            HighlightValue="50"
            HighlightValueDisplayMode=HighlightedValueDisplayMode.Overlay
            HighlightLabelDisplaysValue=true
            HighlightLabelSnapsToNeedlePivot=true
            IsHighlightNeedleDraggingEnabled=true>
        </IgbRadialGauge>

    </div>
</div>

@code {

}
```


## Summary

For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project and see the radial gauge with all features and visuals enabled.

```razor
<IgbRadialGauge Height="100%" Width="100%"
             MinimumValue="0"
             MaximumValue="80"
             Value="50"
             Interval="10"

             ScaleStartAngle="135"
             ScaleEndAngle="45"
             ScaleBrush="DodgerBlue"
             ScaleSweepDirection="SweepDirection.Clockwise"
             ScaleOversweep="1"
             ScaleOversweepShape="RadialGaugeScaleOversweepShape.Fitted"
             ScaleStartExtent="0.45"
             ScaleEndExtent="0.575"

             IsNeedleDraggingEnabled="true"
             IsNeedleDraggingConstrained="true"
             NeedleShape="RadialGaugeNeedleShape.NeedleWithBulb"
             NeedleBrush="DodgerBlue"
             NeedleOutline="DodgerBlue"
             NeedleEndExtent="0.475"
             NeedleStrokeThickness="1"
             NeedlePivotShape="RadialGaugePivotShape.CircleOverlay"
             NeedlePivotBrush="#9F9FA0"
             NeedlePivotOutline="#9F9FA0"
             NeedlePivotWidthRatio="0.2"
             NeedlePivotStrokeThickness="1"
             TickStartExtent="0.5"
             TickEndExtent="0.57"
             TickStrokeThickness="2"
             TickBrush="DodgerBlue"

             MinorTickCount="4"
             MinorTickEndExtent="0.520"
             MinorTickStartExtent="0.57"
             MinorTickStrokeThickness="1"
             MinorTickBrush="DarkViolet"

             LabelExtent="0.65"
             LabelInterval="10"
             Font="11px Verdana"
             FontBrush="Black"
             BackingShape="RadialGaugeBackingShape.Fitted"
             BackingBrush="#FCFCFC"
             BackingOutline="DodgerBlue"
             BackingOversweep="5"
             BackingCornerRadius="10"
             BackingStrokeThickness="5"
             BackingOuterExtent="0.8"
             BackingInnerExtent="0.15"

             RangeBrushes="#A4BD29, #F86232"
             RangeOutlines="#A4BD29, #F86232">
    <IgbRadialGaugeRange StartValue="20"
        EndValue="40"
        InnerStartExtent="0.50"
        InnerEndExtent="0.50"
        OuterStartExtent="0.57"
        OuterEndExtent="0.57">
    </IgbRadialGaugeRange>
    <IgbRadialGaugeRange StartValue="40"
        EndValue="60"
        InnerStartExtent="0.50"
        InnerEndExtent="0.50"
        OuterStartExtent="0.57"
        OuterEndExtent="0.57">
    </IgbRadialGaugeRange>
</IgbRadialGauge>
```

## API References

The following is a list of API members mentioned in the above sections:

- [`IgbRadialGauge`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html)
- [`IgbRadialGaugeRange`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGaugeRange.html)

## Additional Resources

You can find more information about other types of gauges in these topics:

- [Bullet Graph](bullet-graph.md)
- [Linear Gauge](linear-gauge.md)
