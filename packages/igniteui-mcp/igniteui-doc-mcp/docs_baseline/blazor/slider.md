---
title: Blazor Slider & Range Slider Components | Ignite UI for Blazor
_description: Learn how to configure a selection in a given range by using the thumb track with Blazor Slider & Range Slider part of Ignite UI for Blazor. Choose between single and range slider.
_keywords: Blazor, UI controls, web widgets, UI widgets, Blazor Slider Components, Infragistics
mentionedTypes: ["Slider", "SliderLabel", "RangeSlider"]
_license: MIT
_tocName: Slider & Range Slider
---

# Blazor Slider & Range Slider Overview

The Blazor Slider & Range Slider components allow selection in a given range by moving the thumb along the track. The track can be defined as continuous or stepped and you can choose between single and range slider.

## Blazor Slider & Range Slider Example

```razor
@using IgniteUI.Blazor.Controls


<style>
    igc-slider,
    igc-range-slider {
        padding: 30px 30px  0px 30px;
        flex-grow: 1;
    }

    .slider-container {
        display: flex;
        align-items: baseline;
    }

    .slider-label {
        width: 100px;
        text-align: end;
    }
</style>

<div class="container sample center">
    <div class="slider-container">
        <span class="slider-label">Slider</span>
        <IgbSlider Value="40">
        </IgbSlider>
    </div>
    <div class="slider-container">
        <span class="slider-label"> Range Slider</span>
        <IgbRangeSlider Lower="20" Upper="70">
        </IgbRangeSlider>
    </div>
</div>

@code {



}
```

## Usage

Before using the [`IgbSlider`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSlider.html) and [`IgbRangeSlider`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRangeSlider.html), you need to register them as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(
  typeof(IgbSliderModule),
  typeof(IgbRangeSliderModule)
);
```

The simplest way to start using the [`IgbSlider`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSlider.html) and [`IgbRangeSlider`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRangeSlider.html) is as follows:

```razor
<IgbSlider Value="40" />
<IgbRangeSlider Lower="20" Upper="70" />
```

### Value

The main difference between the Slider and Range Slider components is that the Slider component has a single thumb, while the Range Slider component has two thumbs. The single thumb of the Slider component displays its [`Value`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSlider.html#IgniteUI_Blazor_Controls_IgbSlider_Value) property. The two thumbs of the Range Slider component display its [`Lower`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRangeSlider.html#IgniteUI_Blazor_Controls_IgbRangeSlider_Lower) and [`Upper`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRangeSlider.html#IgniteUI_Blazor_Controls_IgbRangeSlider_Upper) value properties.

Both sliders emit two events when any of the values is changed. The [`IgbInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html) event is emitted whenever a value is changed using keyboard or drag interaction while the `Change` event is emitted when the value change is committed on drag end or keyboard interaction.

```razor
@using IgniteUI.Blazor.Controls


<style>
    igc-slider,
    igc-range-slider {
        padding: 30px 30px  0px 30px;
    }

    .value-container {
        padding-left: 30px;
        display: flex;
    }

    .slider-label {
        white-space: pre;
    }
</style>

<div class="container sample center">
    <IgbSlider Value=@ValueInt Change=OnChange
        >
    </IgbSlider>
    <div class="value-container">
        <span class="slider-label">Value: @ValueInt</span>
    </div>

    <IgbRangeSlider Lower=@LowerInt Upper=@UpperInt Change=OnRangeChange>
    </IgbRangeSlider>
    <div class="value-container">
        <span class="slider-label">Lower: @LowerInt, </span>
        <span class="slider-label">Upper: @UpperInt</span>
    </div>
</div>

@code {
    private double ValueInt = 40;
    private double LowerInt = 20;
    private double UpperInt = 70;

    private void OnChange(IgbNumberEventArgs e)
    {
        if(e != null)
        {
            ValueInt = e.Detail;
        }
    }

    private void OnRangeChange(IgbRangeSliderValueEventArgs e)
    {
        if(e.Detail != null && !double.IsNaN(e.Detail.Lower) && !double.IsNaN(e.Detail.Upper))
        {
            LowerInt = e.Detail.Lower;
            UpperInt = e.Detail.Upper;
        }
    }
}
```

While dragging a slider thumb, it displays its value in a tooltip. You could hide this tooltip using the [`HideTooltip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_HideTooltip) property.

### Disabled

You can use the [`Disabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_Disabled) property of the sliders to disable their user interactions.

```razor
@using IgniteUI.Blazor.Controls


<style>
igc-slider {
    padding: 30px 30px  0px 30px;
}
</style>

<div class="container sample center">
     <IgbSlider
        Disabled="true"
        Value="40">
     </IgbSlider>
</div>

@code {


}
```

### Constraints

The track of the sliders has a minimum and maximum values which are configured using the [`Min`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html#IgniteUI_Blazor_Controls_IgbInput_Min) and [`Max`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html#IgniteUI_Blazor_Controls_IgbInput_Max) properties. Additionally, you can restrict the thumb dragging using the [`LowerBound`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_LowerBound) and [`UpperBound`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_UpperBound) properties.

```razor
@using IgniteUI.Blazor.Controls


<style>
igc-slider {
    padding: 30px 30px  0px 30px;
}
</style>

<div class="container sample center">
     <IgbSlider
        Max="1000"
        Min="100"
        LowerBound="200"
        UpperBound="800"
        Value="400"
        PrimaryTicks="2">
     </IgbSlider>
</div>

@code {


}
```

### Step

The [`Step`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html#IgniteUI_Blazor_Controls_IgbInput_Step) property specifies the granularity of the slider that the value must adhere to. By default, the slider track looks continuous. Setting the [`DiscreteTrack`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_DiscreteTrack) property of the slider to **true** will make it to display the steps on the track.

```razor
@using IgniteUI.Blazor.Controls


<style>
    igc-slider
    {
        padding: 30px 30px  0px 30px;
        flex-grow: 1;
    }
</style>

<div class="container sample center">
    <IgbSlider
        Value="40"
        Step="10"
        DiscreteTrack="true">
    </IgbSlider>
</div>

@code {


}
```

If the [`Step`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html#IgniteUI_Blazor_Controls_IgbInput_Step) property is set to `0`, no stepping is implied and any value in the slider range is allowed. In this case, the slider will look continuous even if [`DiscreteTrack`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_DiscreteTrack) is set to **true**.

### Tick Marks

The slider components could display tick marks and labels. The slider components support two types of tick marks: primary and secondary. In order to display the primary tick marks, you should set the [`PrimaryTicks`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_PrimaryTicks) property to a value greater than `1`. The number of primary ticks will be evenly distributed on the track. In order to display the secondary tick marks, you should set the [`SecondaryTicks`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_SecondaryTicks) property to a value greater than `0`. The value of [`SecondaryTicks`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_SecondaryTicks) specifies the number of secondary ticks between every two primary ticks.

```razor
@using IgniteUI.Blazor.Controls


<style>
    igc-slider
    {
        padding: 30px 30px  0px 30px;
        flex-grow: 1;
    }
</style>

<div class="container sample center">
    <IgbSlider
        PrimaryTicks="3"
        SecondaryTicks="4">
    </IgbSlider>
</div>

@code {


}
```

Additionally, you could configure the orientation of the tick marks using the [`TickOrientation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_TickOrientation) property. By default, the [`TickOrientation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_TickOrientation) value is `end` which displays the ticks below the slider track. You could set it to `start` which displays them above the track and `mirror` which mirrors the ticks above and below the track.

By default, the tick marks display labels with their values. You could modify the rotation of the tick labels using the `SliderTickLabelRotation` property. Additionally, you could hide the labels of the primary and secondary ticks using the [`HidePrimaryLabels`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_HidePrimaryLabels) and [`HideSecondaryLabels`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_HideSecondaryLabels) properties.

```razor
@using IgniteUI.Blazor.Controls


<style>
    igc-slider
    {
        padding: 30px 30px  0px 30px;
        flex-grow: 1;
    }
</style>

<div class="container sample center">
    <IgbSlider
        PrimaryTicks="6"
        SecondaryTicks="1"
        TickOrientation="SliderTickOrientation.Mirror"
        HideSecondaryLabels="true">
    </IgbSlider>
</div>

@code {


}
```

### Value Format

If you want to format the thumb and tick label values, the slider provides [`ValueFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_ValueFormat), [`ValueFormatOptions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_ValueFormatOptions) and [`Locale`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_Locale) properties. Тhe [`ValueFormatOptions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_ValueFormatOptions) allows you to specify the number of fraction and significant digits, style (decimal, currency, percent, unit), notation and others taking into account the specified [`Locale`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_Locale). The [`ValueFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_ValueFormat) is a string which may contain the `{0}` identifier which will be replaced by the value with applied format options.

```razor
@using IgniteUI.Blazor.Controls


<style>
    igc-slider {
        padding: 30px 50px;
    }
</style>

<div class="container sample center">
    <IgbSlider @ref="SliderRef"
        PrimaryTicks="3"
        SecondaryTicks="4">
    </IgbSlider>
    <IgbSlider @ref="SliderRef2"
        ValueFormat="Storage: {0} GB">
    </IgbSlider>
</div>

@code {
    public IgbNumberFormatSpecifier formatSpecifier;
    public IgbNumberFormatSpecifier formatSpecifier2;

    private IgbSlider _slider;
    public IgbSlider SliderRef
    {
        get
        {
            return _slider;
        }
        set
        {
            _slider = value;
            formatSpecifier = new IgbNumberFormatSpecifier();
            formatSpecifier.Style = "currency";
            formatSpecifier.Currency = "USD";
            _slider.ValueFormatOptions = formatSpecifier;
            StateHasChanged();
        }
    }

    private IgbSlider _slider2;
    public IgbSlider SliderRef2
    {
        get
        {
            return _slider2;
        }
        set
        {
            _slider2 = value;
            formatSpecifier2 = new IgbNumberFormatSpecifier();
            formatSpecifier2.MinimumFractionDigits = 1;
            _slider2.ValueFormatOptions = formatSpecifier2;
            StateHasChanged();
        }
    }



}
```

### Labels

In some cases you would want to format the values of the slider as string values i.e. map the values **\[0, 1, 2]** to **\['Low', 'Medium', 'High']**. For this scenario the slider allows you to define [`IgbSliderLabel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderLabel.html) elements inside it. The text content of the slider labels is going to be used for thumb and tick labels. Please note that when slider labels are provided, the [`Min`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_Min), [`Max`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_Max) and [`Step`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_Step) properties are automatically calculated so that they do not allow values that do not map to the provided labels. In the case of 'Low', 'Medium' and 'High' labels, [`Min`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_Min) is set to `0`, [`Max`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_Max) is set to `2` and [`Step`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_Step) is set to `1`.

```razor
@using IgniteUI.Blazor.Controls


<style>
    igc-slider
    {
        padding: 30px 30px  0px 30px;
        flex-grow: 1;
    }
</style>

<div class="container sample center">
    <IgbSlider
        Value="1"
        PrimaryTicks="3">
            <IgbSliderLabel>Low</IgbSliderLabel>
            <IgbSliderLabel>Medium</IgbSliderLabel>
            <IgbSliderLabel>High</IgbSliderLabel>
    </IgbSlider>
</div>

@code {



}
```

## Styling

The [`IgbSlider`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSlider.html) component exposes CSS parts for almost all of its inner elements. The following table lists all of the exposed CSS parts:

|Name|Description|
|--|--|
| `base` | The base wrapper of the slider. |
| `ticks` | The ticks container. |
| `tick-group` | The tick group container. |
| `tick` | The tick element. |
| `tick-label` | The tick label element. |
| `tick-label-inner` | The inner element of the tick label. |
| `thumbs` | The thumbs container. |
| `thumb` | The thumb element. |
| `thumb-label` | The label container of the thumb tooltip. |
| `thumb-label-inner` | The label element of the thumb tooltip. |
| `track` | The track container. |
| `steps` | The track steps element. |
| `inactive` | The inactive element of the track. |
| `fill` | The filled part of the track. |

The following sample demonstrates how to style the track fill and thumb parts:

```razor
@using IgniteUI.Blazor.Controls


<style>
    igc-slider {
        padding: 30px 30px  0px 30px;
    }

    igc-range-slider {
        padding: 30px 30px  0px 30px;
    }

    igc-slider::part(thumb) {
    background: #28a745;
    }

    igc-slider::part(thumb):focus {
        background: #28a745;
        box-shadow: 0 0 0 2px #28a74694;
    }

    igc-slider::part(fill) {
        display: block;
        background: #28a745;
    }

    igc-range-slider::part(thumb) {
        background: orange;
    }

    igc-range-slider::part(thumb):focus {
        background: navy;
        box-shadow: 0 0 0 2px orange;
    }

    igc-range-slider::part(track) {
        display: block;
        background: navy;
    }

    igc-range-slider::part(thumb-label-inner) {
        background: navy;
    }
</style>

<div class="container sample center">
    <div class="slider-container">
        <span class="slider-label">Slider</span>
        <IgbSlider Value="40">
        </IgbSlider>
    </div>
    <div class="slider-container">
        <span class="slider-label"> Range Slider</span>
        <IgbRangeSlider Lower="20" Upper="70">
        </IgbRangeSlider>
    </div>
</div>

@code {



}
```

## API References

- [`HidePrimaryLabels`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_HidePrimaryLabels)
- [`HideSecondaryLabels`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_HideSecondaryLabels)
- [`HideTooltip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_HideTooltip)
- [`PrimaryTicks`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_PrimaryTicks)
- [`IgbRangeSlider`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRangeSlider.html)
- [`SecondaryTicks`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_SecondaryTicks)
- [`IgbSliderLabel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderLabel.html)
- [`IgbSlider`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSlider.html)
- `SliderTickLabelRotation`
- [`TickOrientation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_TickOrientation)
- [`UpperBound`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_UpperBound)
- [`ValueFormatOptions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_ValueFormatOptions)
- [`ValueFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSliderBase.html#IgniteUI_Blazor_Controls_IgbSliderBase_ValueFormat)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
