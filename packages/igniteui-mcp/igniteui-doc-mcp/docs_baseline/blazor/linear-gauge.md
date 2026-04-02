---
title: Blazor Linear Gauge | Data Visualization Tools | Infragistics
_description: Use Infragistics' Blazor linear gauge control to visualize data with a simple and concise view. Learn about the Ignite UI for Blazor linear gauge configurable elements!
_keywords: linear gauge, Ignite UI for Blazor, Infragistics, animation, labels, needle, scales, ranges, tick marks
_license: commercial
mentionedTypes: ["XamLinearGauge"]
namespace: Infragistics.Controls.Gauges
_tocName: Linear Gauge
_premium: true
---

# Blazor Linear Gauge Overview

The Ignite UI for Blazor linear gauge component allows for visualizing data in the form of a linear gauge. The [`IgbLinearGauge`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbLinearGauge.html) provides a simple and concise view of a value compared against a scale and one or more ranges. It supports one scale, one set of tick marks and one set of labels. The component has also a built-in support for animated transitions. This animation is easily customizable by setting the [`TransitionDuration`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbLinearGauge.html#IgniteUI_Blazor_Controls_IgbLinearGauge_TransitionDuration) property. The features of the linear gauge component include configurable orientation and direction, configurable visual elements such as the needle, and more.

## Blazor Linear Gauge Example

The following sample demonstrates how setting multiple properties on the same [`IgbLinearGauge`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbLinearGauge.html) can transform it to completely different linear gauge.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="options horizontal">
        <button @onclick="onAnimateToGauge1">Gauge Animation #1</button>
        <button @onclick="onAnimateToGauge2">Gauge Animation #2</button>
        <button @onclick="onAnimateToGauge3">Gauge Animation #3</button>
    </div>
    <div class="container vertical">
        <IgbLinearGauge Height="80px" Width="100%"
                     TransitionDuration="@TransitionDuration"
                     MinimumValue=@MinimumValue
                     MaximumValue=@MaximumValue
                     Value=@Value
                     Interval=@Interval
                     LabelInterval=@LabelInterval
                     LabelExtent=@LabelExtent
                     IsNeedleDraggingEnabled=@IsNeedleDraggingEnabled
                     NeedleShape=@NeedleShape
                     NeedleBrush=@NeedleBrush
                     NeedleOutline=@NeedleOutline
                     NeedleStrokeThickness=@NeedleStrokeThickness
                     NeedleOuterExtent=@NeedleOuterExtent
                     NeedleInnerExtent=@NeedleInnerExtent
                     MinorTickCount=@MinorTickCount
                     MinorTickEndExtent=@MinorTickEndExtent
                     MinorTickStartExtent=@MinorTickStartExtent
                     MinorTickStrokeThickness=@MinorTickStrokeThickness
                     TickStartExtent=@TickStartExtent
                     TickEndExtent=@TickEndExtent
                     TickStrokeThickness=@TickStrokeThickness
                     ScaleStrokeThickness=@ScaleStrokeThickness
                     ScaleBrush=@ScaleBrush
                     ScaleOutline=@ScaleOutline
                     ScaleInnerExtent=@ScaleInnerExtent
                     ScaleOuterExtent=@ScaleOuterExtent
                     ScaleStartExtent=@ScaleStartExtent
                     ScaleEndExtent=@ScaleEndExtent
                     BackingBrush=@BackingBrush
                     BackingOutline=@BackingOutline
                     BackingStrokeThickness=@BackingStrokeThickness>
            @for (int i = 0; i < RangeInfo.Count; i++)
            {
                GaugeRangeInfo info = RangeInfo[i];
                <IgbLinearGraphRange StartValue=info.StartValue
                                  EndValue=info.EndValue
                                  InnerStartExtent=info.InnerStartExtent
                                  InnerEndExtent=info.InnerEndExtent
                                  OuterStartExtent=info.OuterStartExtent
                                  OuterEndExtent=info.OuterEndExtent
                                  Brush="@info.Brush"
                                  Outline="@info.Outline">
                </IgbLinearGraphRange>
            }
        </IgbLinearGauge>
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

    private bool IsNeedleDraggingEnabled;
    private LinearGraphNeedleShape NeedleShape;
    private string NeedleBrush;
    private string NeedleOutline;
    private double NeedleStrokeThickness;
    private double NeedleOuterExtent;
    private double NeedleInnerExtent;

    private double MinorTickCount;
    private double MinorTickEndExtent;
    private double MinorTickStartExtent;
    private double MinorTickStrokeThickness;
    private double TickStartExtent;
    private double TickEndExtent;
    private double TickStrokeThickness;

    private double ScaleStrokeThickness;
    private string ScaleBrush;
    private string ScaleOutline;
    private double ScaleInnerExtent;
    private double ScaleOuterExtent;
    private double ScaleStartExtent;
    private double ScaleEndExtent;

    private string BackingBrush;
    private string BackingOutline;
    private double BackingStrokeThickness;

    private System.Collections.ObjectModel.ObservableCollection<GaugeRangeInfo> RangeInfo;

    private bool ShouldAnimate = false;

    protected override void OnInitialized()
    {
        this.MinimumValue = 0;
        this.MaximumValue = 100;
        this.Value = 50;
        this.Interval = 10;
        this.LabelInterval = 10;
        this.LabelExtent = 0.0;
        this.MinorTickEndExtent = 0.10;
        this.MinorTickStartExtent = 0.20;
        this.TickStartExtent = 0.25;
        this.TickEndExtent = 0.05;
        this.TickStrokeThickness = 2;
        this.NeedleShape = LinearGraphNeedleShape.Needle;
        this.NeedleBrush = "#79797A";
        this.NeedleOutline = "#79797A";
        this.ScaleStrokeThickness = 0;
        this.ScaleBrush = "#FFFFFF";
        this.ScaleOutline = "#D3D3D3";
        this.BackingBrush = "#FFFFFF";
        this.BackingOutline = "#D1D1D1";
        this.BackingStrokeThickness = 0;

        this.RangeInfo = new System.Collections.ObjectModel.ObservableCollection<GaugeRangeInfo>();

        this.onAnimateToGauge3();
    }

    private void onAnimateToGauge1()
    {
        if (ShouldAnimate)
        {
            this.TransitionDuration = 1000;
        }
        // linear gauge requires settings for these properties:
        this.MinimumValue = 0;
        this.MaximumValue = 80;
        this.Value = 60;
        this.Interval = 20;

        // setting custom appearance of labels
        this.LabelInterval = 20;
        this.LabelExtent = 0.0;

        // setting custom appearance of needle
        this.IsNeedleDraggingEnabled = true;
        this.NeedleShape = LinearGraphNeedleShape.Trapezoid;
        this.NeedleBrush = "#79797a";
        this.NeedleOutline = "#ffffffff";
        this.NeedleStrokeThickness = 1;
        this.NeedleOuterExtent = 0.9;
        this.NeedleInnerExtent = 0.3;

        // setting custom appearance of major/minor ticks
        this.MinorTickCount = 5;
        this.MinorTickEndExtent = 0.10;
        this.MinorTickStartExtent = 0.20;
        this.MinorTickStrokeThickness = 1;
        this.TickStartExtent = 0.25;
        this.TickEndExtent = 0.05;
        this.TickStrokeThickness = 2;

        // setting extent of gauge scale
        this.ScaleStrokeThickness = 0;
        this.ScaleBrush = "#ffffff";
        this.ScaleOutline = "#dbdbdb";
        this.ScaleInnerExtent = 0.075;
        this.ScaleOuterExtent = 0.85;
        this.ScaleStartExtent = 0.05;
        this.ScaleEndExtent = 0.95;

        // setting appearance of backing fill and outline
        this.BackingBrush = "#ffffff";
        this.BackingOutline = "#d1d1d1";
        this.BackingStrokeThickness = 0;

        this.RangeInfo.Clear();

        List<string> colors = new List<string>() { "#A4BD29", "#F86232" };
        double[] startValues = { 0, 40 };
        double[] endValues = { 40, 80 };

        for (int i = 0; i < colors.Count; i++)
        {
            GaugeRangeInfo info = new GaugeRangeInfo()
            {
                StartValue = startValues[i],
                EndValue = endValues[i],
                Brush = colors[i],
                Outline = colors[i],
                InnerStartExtent = 0.075,
                InnerEndExtent = 0.075,
                OuterStartExtent = 0.65,
                OuterEndExtent = 0.65
            };

            this.RangeInfo.Add(info);
        }

        this.ShouldAnimate = true;
    }

    private void onAnimateToGauge2()
    {
        if (ShouldAnimate)
        {
            this.TransitionDuration = 1000;
        }
        // linear gauge requires settings for these properties:
        this.MinimumValue = 100;
        this.MaximumValue = 200;
        this.Value = 150;
        this.Interval = 20;

        // setting custom appearance of labels
        this.LabelInterval = 20;
        this.LabelExtent = 0.0;

        // setting custom appearance of needle
        this.IsNeedleDraggingEnabled = true;
        this.NeedleShape = LinearGraphNeedleShape.Triangle;
        this.NeedleBrush = "#79797a";
        this.NeedleOutline = "#ffffffff";
        this.NeedleStrokeThickness = 1;
        this.NeedleOuterExtent = 0.9;
        this.NeedleInnerExtent = 0.3;

        // setting custom appearance of major/minor ticks
        this.MinorTickCount = 4;
        this.MinorTickEndExtent = 0.10;
        this.MinorTickStartExtent = 0.20;
        this.MinorTickStrokeThickness = 1;
        this.TickStartExtent = 0.25;
        this.TickEndExtent = 0.05;
        this.TickStrokeThickness = 2;

        // setting extent of gauge scale
        this.ScaleStrokeThickness = 0;
        this.ScaleBrush = "#ffffff";
        this.ScaleOutline = "#dbdbdb";
        this.ScaleInnerExtent = 0.075;
        this.ScaleOuterExtent = 0.85;
        this.ScaleStartExtent = 0.05;
        this.ScaleEndExtent = 0.95;

        // setting appearance of backing fill and outline
        this.BackingBrush = "#ffffff";
        this.BackingOutline = "#d1d1d1";
        this.BackingStrokeThickness = 0;

        this.RangeInfo.Clear();

        List<string> colors = new List<string>() { "#0078C8","#0099FF","#21A7FF","#45B9FF" };
        double[] startValues = { 100, 125, 150, 175 };
        double[] endValues = { 125, 150, 175, 200 };

        for (int i = 0; i < colors.Count; i++)
        {
            GaugeRangeInfo info = new GaugeRangeInfo()
            {
                StartValue = startValues[i],
                EndValue = endValues[i],
                Brush = colors[i],
                Outline = colors[i],
                InnerStartExtent = 0.075,
                InnerEndExtent = 0.075,
                OuterStartExtent = 0.65,
                OuterEndExtent = 0.65
            };

            this.RangeInfo.Add(info);
        }

        this.ShouldAnimate = true;
    }

    private void onAnimateToGauge3()
    {
        if (ShouldAnimate)
        {
            this.TransitionDuration = 1000;
        }
        // linear gauge requires settings for these properties:
        this.MinimumValue = 0;
        this.MaximumValue = 100;
        this.Value = 50;
        this.Interval = 10;

        // setting custom appearance of labels
        this.LabelInterval = 10;
        this.LabelExtent = 0.0;

        // setting custom appearance of needle
        this.IsNeedleDraggingEnabled = true;
        this.NeedleShape = LinearGraphNeedleShape.Needle;
        this.NeedleBrush = "#79797a";
        this.NeedleOutline = "#ffffffff";
        this.NeedleStrokeThickness = 1;
        this.NeedleOuterExtent = 0.9;
        this.NeedleInnerExtent = 0.3;

        // setting custom appearance of major/minor ticks
        this.MinorTickCount = 5;
        this.MinorTickEndExtent = 0.10;
        this.MinorTickStartExtent = 0.20;
        this.MinorTickStrokeThickness = 1;
        this.TickStartExtent = 0.25;
        this.TickEndExtent = 0.05;
        this.TickStrokeThickness = 2;

        // setting extent of gauge scale
        this.ScaleStrokeThickness = 0;
        this.ScaleBrush = "#ffffff";
        this.ScaleOutline = "#dbdbdb";
        this.ScaleInnerExtent = 0.075;
        this.ScaleOuterExtent = 0.85;
        this.ScaleStartExtent = 0.05;
        this.ScaleEndExtent = 0.95;

        // setting appearance of backing fill and outline
        this.BackingBrush = "#ffffff";
        this.BackingOutline = "#d1d1d1";
        this.BackingStrokeThickness = 0;

        this.RangeInfo.Clear();

        List<string> colors = new List<string>() { "#9FB328", "#438C47", "#3F51B5" };
        double[] startValues = { 0, 30, 70 };
        double[] endValues = { 30, 70, 100 };

        for (int i = 0; i < colors.Count; i++)
        {
            GaugeRangeInfo info = new GaugeRangeInfo()
            {
                StartValue = startValues[i],
                EndValue = endValues[i],
                Brush = colors[i],
                Outline = colors[i],
                InnerStartExtent = 0.075,
                InnerEndExtent = 0.075,
                OuterStartExtent = 0.95,
                OuterEndExtent = 0.95
            };

            this.RangeInfo.Add(info);
        }

        this.ShouldAnimate = true;
    }
}
```


<div class="divider--half"></div>

## Component Modules

The [`IgbLinearGauge`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbLinearGauge.html) requires the following modules:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbLinearGaugeModule));
```

<div class="divider--half"></div>

## Usage

The following code demonstrates how create a linear gauge containing a needle and three comparative ranges on the scale.

```razor
<IgbLinearGauge Height="80px" Width="100%"
        MinimumValue="5"
        MaximumValue="55"
        Value="43" >
    <IgbLinearGraphRange StartValue="0"
            EndValue="15"
            Brush="red" >
    </IgbLinearGraphRange>
     <IgbLinearGraphRange StartValue="15"
            EndValue="30"
            Brush="yellow">
    <IgbLinearGraphRange StartValue="30"
            EndValue="55"
            Brush="green">
    </IgbLinearGraphRange>
</IgbLinearGauge>
```

<div class="divider--half"></div>

## Needle

This is the primary measure displayed by the linear gauge component and is visualized as a bar or you can customize it to show almost any shape as is demonstrated below.

```razor
<IgbLinearGauge Height="80px" Width="100%"
    MinimumValue="0" Value="50"
    MaximumValue="100" Interval="10"
    IsNeedleDraggingEnabled="true"
    NeedleShape="LinearGraphNeedleShape.Custom"
    NeedleBrush="DodgerBlue"
    NeedleOutline="DodgerBlue"
    NeedleStrokeThickness="1"
    NeedleBreadth="15"
    NeedleInnerExtent="0.35"
    NeedleOuterExtent="0.65"
    NeedleOuterPointExtent="0.8"
    NeedleInnerPointExtent="0.325"
    NeedleInnerPointWidth="0"
    NeedleOuterPointWidth="0.3"
    NeedleInnerBaseWidth="0"
    NeedleOuterBaseWidth="0.07">
</IgbLinearGauge>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbLinearGauge Height="80px" Width="100%"
                     MinimumValue="0" Value="50"
                     MaximumValue="100" Interval="10"
                     IsNeedleDraggingEnabled="true"
                     NeedleShape="LinearGraphNeedleShape.Custom"
                     NeedleBrush="DodgerBlue"
                     NeedleOutline="DodgerBlue"
                     NeedleStrokeThickness="1"
                     NeedleBreadth="15"
                     NeedleInnerExtent="0.35"
                     NeedleOuterExtent="0.65"
                     NeedleOuterPointExtent="0.8"
                     NeedleInnerPointExtent="0.325"
                     NeedleInnerPointWidth="0"
                     NeedleOuterPointWidth="0.3"
                     NeedleInnerBaseWidth="0"
                     NeedleOuterBaseWidth="0.07">
        </IgbLinearGauge>
    </div>
</div>

@code {

}
```


## Highlight Needle

The linear gauge can be modified to show a second needle. This will make the main needle's [`Value`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbLinearGauge.html#IgniteUI_Blazor_Controls_IgbLinearGauge_Value) appear with a lower opacity. To enable this first set [`HighlightValueDisplayMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbLinearGauge.html#IgniteUI_Blazor_Controls_IgbLinearGauge_HighlightValueDisplayMode) to Overlay and then apply a [`HighlightValue`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbLinearGauge.html#IgniteUI_Blazor_Controls_IgbLinearGauge_HighlightValue).

```razor
<IgbLinearGauge Height="80px" Width="100%"
    MinimumValue="0"
    MaximumValue="100"
    Value="75"
    Interval="10"
    LabelInterval="10"
    LabelExtent="0.025"
    LabelsPreTerminal="0"
    LabelsPostInitial="0"
    NeedleBrush="Blue"
    HighlightValueDisplayMode="HighlightedValueDisplayMode.Overlay"
    HighlightValue=25
    IsHighlightNeedleDraggingEnabled=true>
</IgbLinearGauge>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbLinearGauge Height="80px" Width="100%"
            MinimumValue="0" 
            MaximumValue="100" 
            Value="75"
            Interval="10"
            LabelInterval="10"
            LabelExtent="0.025"
            LabelsPreTerminal="0"
            LabelsPostInitial="0"
            NeedleBrush="Blue"
            HighlightValueDisplayMode="HighlightedValueDisplayMode.Overlay"
            HighlightValue=25
            IsHighlightNeedleDraggingEnabled=true>
        </IgbLinearGauge>
    </div>
</div>

@code {


}
```


## Ranges

The ranges are visual elements that highlight a specified range of values on a scale. Their purpose is to visually communicate the qualitative state of the performance bar measure, illustrating at the same times the degree to which it resides within that state.

```razor
<IgbLinearGauge Height="80px" Width="100%"
        MinimumValue="0" Value="50"
        MaximumValue="100" Interval="10"
        RangeBrushes="#A4BD29, #F86232"
        RangeOutlines="#A4BD29, #F86232">
    <IgbLinearGraphRange StartValue="0"
            EndValue="50"
            InnerStartExtent="0.075"
            InnerEndExtent="0.075"
            OuterStartExtent="0.25"
            OuterEndExtent="0.4">
    </IgbLinearGraphRange>
    <IgbLinearGraphRange StartValue="50"
            EndValue="100"
            InnerStartExtent="0.075"
            InnerEndExtent="0.075"
            OuterStartExtent="0.4"
            OuterEndExtent="0.55">
    </IgbLinearGraphRange>
</IgbLinearGauge>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbLinearGauge Height="80px" Width="100%"
                     MinimumValue="0" Value="50"
                     MaximumValue="100" Interval="10"
                     RangeBrushes="#A4BD29, #F86232"
                     RangeOutlines="#A4BD29, #F86232">
            <IgbLinearGraphRange StartValue="0"
                              EndValue="50"
                              InnerStartExtent="0.075"
                              InnerEndExtent="0.075"
                              OuterStartExtent="0.25"
                              OuterEndExtent="0.4">
            </IgbLinearGraphRange>
            <IgbLinearGraphRange StartValue="50"
                              EndValue="100"
                              InnerStartExtent="0.075"
                              InnerEndExtent="0.075"
                              OuterStartExtent="0.4"
                              OuterEndExtent="0.55">
            </IgbLinearGraphRange>
        </IgbLinearGauge>
    </div>
</div>

@code {

}
```


## Tick Marks

The tick marks serve as a visual division of the scale into intervals in order to increase the readability of the linear gauge.

Major tick marks – The major tick marks are used as primary delimiters on the scale. The frequency they appear at, their extents and style can be controlled by setting their corresponding properties.

Minor tick marks – The minor tick marks represent helper tick marks, which might be used to additionally improve the readability of the scale and can be customized in a way similar to the major ones.

```razor
 <IgbLinearGauge Height="80px" Width="100%"
    MinimumValue="0" Value="50"
    MaximumValue="100" Interval="10"
    TickBrush="DodgerBlue"
    TicksPreTerminal="0"
    TicksPostInitial="0"
    TickStrokeThickness="2"
    TickStartExtent="0.25"
    TickEndExtent="0.05"
    MinorTickCount="4"
    MinorTickBrush="DarkViolet"
    MinorTickEndExtent="0.05"
    MinorTickStartExtent="0.15"
    MinorTickStrokeThickness="1">
</IgbLinearGauge>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbLinearGauge Height="80px" Width="100%"
                     MinimumValue="0" Value="50"
                     MaximumValue="100" Interval="10"

                     TickBrush="DodgerBlue"
                     TicksPreTerminal="0"
                     TicksPostInitial="0"
                     TickStrokeThickness="2"
                     TickStartExtent="0.25"
                     TickEndExtent="0.05"

                     MinorTickCount="4"
                     MinorTickBrush="DarkViolet"
                     MinorTickEndExtent="0.05"
                     MinorTickStartExtent="0.15"
                     MinorTickStrokeThickness="1">
        </IgbLinearGauge>
    </div>
</div>

@code {

}
```


## Labels

The labels indicate the measures on the scale.

```razor
<IgbLinearGauge Height="80px" Width="100%"
    MinimumValue="0" Value="50"
    MaximumValue="100" Interval="10"
    LabelInterval="10"
    LabelExtent="0.025"
    LabelsPreTerminal="0"
    LabelsPostInitial="0"
    FontBrush="DodgerBlue"
    Font="11px Verdana">
</IgbLinearGauge>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbLinearGauge Height="80px" Width="100%"
                     MinimumValue="0" Value="50"
                     MaximumValue="100" Interval="10"
                     LabelInterval="10"
                     LabelExtent="0.025"
                     LabelsPreTerminal="0"
                     LabelsPostInitial="0"
                     FontBrush="DodgerBlue"
                     Font="11px Verdana">
        </IgbLinearGauge>
    </div>
</div>

@code {


}
```


## Backing

The backing element represents background and border of the linear gauge component. It is always the first element rendered and all the rest of elements such as labels, and tick marks are overlaid on top of it.

```razor
<IgbLinearGauge Height="80px" Width="100%"
    MinimumValue="0"
    MaximumValue="100"
    Value="50"
    Interval="10"
    BackingBrush="#BDDCFC"
    BackingOutline="DodgerBlue"
    BackingStrokeThickness="4"
    BackingInnerExtent="0"
    BackingOuterExtent="1">
</IgbLinearGauge>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbLinearGauge Height="80px" Width="100%"
                     MinimumValue="0"
                     MaximumValue="100"
                     Value="50"
                     Interval="10"
                     BackingBrush="#BDDCFC"
                     BackingOutline="DodgerBlue"
                     BackingStrokeThickness="4"
                     BackingInnerExtent="0"
                     BackingOuterExtent="1">
        </IgbLinearGauge>
    </div>
</div>

@code {

}
```


## Scale

The scale is a visual element that highlights the full range of values in the linear gauge. You can customize the appearance and the shape of the scale. It can also be inverted (using [`IsScaleInverted`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbLinearGauge.html#IgniteUI_Blazor_Controls_IgbLinearGauge_IsScaleInverted) property) and all labels will be rendered from right-to-left instead of left-to-right.

```razor
<IgbLinearGauge Height="80px" Width="100%"
    MinimumValue="0" Value="50"
    MaximumValue="100" Interval="10"
    IsScaleInverted="false"
    ScaleBrush="DodgerBlue"
    ScaleOutline="Red"
    ScaleStrokeThickness="2"
    ScaleInnerExtent="0.05"
    ScaleOuterExtent="0.65"
    ScaleStartExtent="0.05"
    ScaleEndExtent="0.95">
</IgbLinearGauge>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbLinearGauge Height="80px" Width="100%"
                     MinimumValue="0" Value="50"
                     MaximumValue="100" Interval="10"
                     IsScaleInverted="false"
                     ScaleBrush="DodgerBlue"
                     ScaleOutline="Red"
                     ScaleStrokeThickness="2"
                     ScaleInnerExtent="0.05"
                     ScaleOuterExtent="0.65"
                     ScaleStartExtent="0.05"
                     ScaleEndExtent="0.95">
        </IgbLinearGauge>
    </div>
</div>

@code {

}
```


## Summary

For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project and see the linear gauge with all features and visuals enabled.

```razor
<IgbLinearGauge Height="80px" Width="100%"
        MinimumValue="0"
        MaximumValue="100"

        LabelInterval="10"
        LabelExtent="0.025"
        LabelsPreTerminal="0"
        LabelsPostInitial="0"
        FontBrush="DodgerBlue"
        Font="11px Verdana"

        Interval="10"
        TickBrush="DodgerBlue"
        TicksPreTerminal="0"
        TicksPostInitial="0"
        TickStrokeThickness="2"
        TickStartExtent="0.25"
        TickEndExtent="0.05"

        MinorTickCount="4"
        MinorTickBrush="DarkViolet"
        MinorTickEndExtent="0.05"
        MinorTickStartExtent="0.15"
        MinorTickStrokeThickness="1"
        Value="50"
        MaximumValue="100" Interval="10"
        IsNeedleDraggingEnabled="true"
        NeedleShape="LinearGraphNeedleShape.Custom"
        NeedleBrush="DodgerBlue"
        NeedleOutline="DodgerBlue"
        NeedleStrokeThickness="1"
        NeedleBreadth="15"
        NeedleInnerExtent="0.35"
        NeedleOuterExtent="0.65"
        NeedleOuterPointExtent="0.8"
        NeedleInnerPointExtent="0.325"
        NeedleInnerPointWidth="0"
        NeedleOuterPointWidth="0.3"
        NeedleInnerBaseWidth="0"
        NeedleOuterBaseWidth="0.07"

        IsScaleInverted="false"
        ScaleBrush="DodgerBlue"
        ScaleOutline="Red"
        ScaleStrokeThickness="2"
        ScaleInnerExtent="0.05"
        ScaleOuterExtent="0.65"
        ScaleStartExtent="0.05"
        ScaleEndExtent="0.95"

        BackingBrush="#BDDCFC"
        BackingOutline="DodgerBlue"
        BackingStrokeThickness="4"
        BackingInnerExtent="0"
        BackingOuterExtent="1"

        RangeBrushes="#A4BD29, #F86232"
        RangeOutlines="#A4BD29, #F86232">
    <IgbLinearGraphRange StartValue="0"
                EndValue="50"
                InnerStartExtent="0.075"
                InnerEndExtent="0.075"
                OuterStartExtent="0.25"
                OuterEndExtent="0.4">
    </IgbLinearGraphRange>
    <IgbLinearGraphRange StartValue="50"
                EndValue="100"
                InnerStartExtent="0.075"
                InnerEndExtent="0.075"
                OuterStartExtent="0.4"
                OuterEndExtent="0.55">
    </IgbLinearGraphRange>
</IgbLinearGauge>
```

<div class="divider--half"></div>

## API References

The following is a list of API members mentioned in the above sections:

- [`IgbLinearGauge`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbLinearGauge.html)
- [`IgbLinearGraphRange`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbLinearGraphRange.html)

## Additional Resources

You can find more information about other types of gauges in these topics:

- [Bullet Graph](bullet-graph.md)
- [Radial Gauge](radial-gauge.md)
