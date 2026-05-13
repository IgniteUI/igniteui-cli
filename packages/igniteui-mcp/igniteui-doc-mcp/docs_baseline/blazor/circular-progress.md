---
title: Blazor Circular Progress | Circular Progress | Infragistics
_description: Circular Progress Indicator component allows developers to display progress in a circle with endless customization options.
_keywords: Blazor Circular Progress, Ignite UI for Blazor, Infragistics
_license: MIT
mentionedTypes: ["CircularProgress", "CircularGradient"]
namespace: Infragistics.Controls
_tocName: Circular Progress
---

# Blazor Circular Progress Overview

The Ignite UI for Blazor Circular Progress Indicator component provides a visual indicator of an application’s process as it changes. The circular indicator updates its appearance as its state changes.

## Blazor Circular Progress Example

```razor
@using IgniteUI.Blazor.Controls


<div class="root">

    <style>
        #circularProgress {
            margin: 20px;
            --diameter: 50px;
        }
    </style>

    <IgbCircularProgress id="circularProgress" Value=100/>
</div>

@code {

}
```

<div class="divider--half"></div>

## Usage

Before using the [`IgbCircularProgress`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCircularProgress.html), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbCircularProgressModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbCalendar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

The simplest way to start using the [`IgbCircularProgress`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCircularProgress.html) is as follows:

```razor
<IgbCircularProgress Value=100/>
```

### Progress Types

You can set the type of your indicator, using the [`Variant`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbProgressBase.html#IgniteUI_Blazor_Controls_IgbProgressBase_Variant) attribute. There are five types of circular progress indicators - **primary** (default), **error**, **success**, **info**, and **warning**.

```razor
<IgbCircularProgress Value=100 Variant=@ProgressBaseVariant.Success  />
```

### Indeterminate Progress

If you want to track a process that is not determined precisely, you can set the [`Indeterminate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbProgressBase.html#IgniteUI_Blazor_Controls_IgbProgressBase_Indeterminate) property. Also, you can hide the default label of the Ignite UI for Blazor [`IgbCircularProgress`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCircularProgress.html) by setting the [`HideLabel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbProgressBase.html#IgniteUI_Blazor_Controls_IgbProgressBase_HideLabel) property and customize the progress indicator default label via the exposed [`LabelFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbProgressBase.html#IgniteUI_Blazor_Controls_IgbProgressBase_LabelFormat) property.

```razor
<IgbCircularProgress Value=100 Indeterminate=true/>
```

The following sample demonstrates the above configuration:

```razor
@using IgniteUI.Blazor.Controls


<div class="root">

    <style>
        #circularProgress{
            --diameter: 50px;
        }
    </style>

    <IgbCircularProgress id="circularProgress" Indeterminate=true />
</div>

@code {

}
```

<div class="divider--half"></div>

### Animation Duration

You can use the [`AnimationDuration`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbProgressBase.html#IgniteUI_Blazor_Controls_IgbProgressBase_AnimationDuration) property on the [`IgbCircularProgress`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCircularProgress.html) component to specify how long the animation cycle should take in milliseconds.

```razor
<IgbCircularProgress AnimationDuration=5000 Indeterminate=true />
```

### Gradient Progress

Customizing the progress bar in order to use a color gradient instead of a solid color could be done via the exposed `gradient` slot and [`IgbCircularGradient`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCircularGradient.html) which defines the gradient stops.

```razor
@using IgniteUI.Blazor.Controls


<style>
    #sampleContent {
        width: 300px;
        display: flex;
        align-items: center;
        margin-top: 30px;
    }

    #circularProgress {
        margin-right: 50px;
        margin-left: 20px;
        --diameter: 100px;
        --stroke-thickness: 5px;
    }
</style>

<div id="sampleContent">
    <IgbCircularProgress @ref="CircularProgressRef" id="circularProgress" Max=100 Value=@ProgressValue>
        <IgbCircularGradient slot="gradient" Offset="0%"   Color="#ff9a40"/>
        <IgbCircularGradient slot="gradient" Offset="50%"  Color="#1eccd4"/>
        <IgbCircularGradient slot="gradient" Offset="100%" Color="#ff0079"/>
    </IgbCircularProgress>
    <div class="buttonContainer">
        <IgbIconButton @ref="RemoveIconRef" @onclick="OnRemoveIconClick" IconName="remove" Collection="material" />
        <IgbIconButton @ref="AddIconRef" @onclick="OnAddIconClick" IconName="add" Collection="material" />
    </div>
</div>

@code {

    private IgbCircularProgress CircularProgressRef { get; set; }
    private double ProgressValue { get; set; }

    private IgbIconButton AddIconRef { get; set; }
    private IgbIconButton RemoveIconRef { get; set; }

    protected override void OnInitialized()
    {
        this.ProgressValue = 0;
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if(firstRender && this.AddIconRef != null && this.RemoveIconRef != null)
        {
            await this.AddIconRef.EnsureReady();
            await this.RemoveIconRef.EnsureReady();

            string addIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'><path d='M0 0h24v24H0z' fill='none'/><path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/></svg>";
            string removeIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'><path d='M0 0h24v24H0z' fill='none'/><path d='M19 13H5v-2h14v2z'/></svg>";

            await this.AddIconRef.RegisterIconFromTextAsync("add", addIcon, "material");
            await this.RemoveIconRef.RegisterIconFromTextAsync("remove", removeIcon, "material");
        }
    }

    private void OnAddIconClick(MouseEventArgs args)
    {
        this.ProgressValue = this.ProgressValue + 10;
    }

    private void OnRemoveIconClick(MouseEventArgs args)
    {
        if(this.ProgressValue > 0)
        {
            this.ProgressValue = this.ProgressValue - 10;
        }
    }
}
```

> [!Note]
> For each [`IgbCircularGradient`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCircularGradient.html) defined as gradient slot of Ignite UI for Blazor [`IgbCircularProgress`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCircularProgress.html) a [SVG stop](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop) element would be created. The values passed as `color`, `offset` and `opacity` would be set as stop-color, offset and stop-opacity of the SVG element without further validations.

```razor
<IgbCircularProgress>
    <IgbCircularGradient slot="gradient" Offset="0%"   Color="#ff9a40"/>
    <IgbCircularGradient slot="gradient" Offset="50%"  Color="#1eccd4"/>
    <IgbCircularGradient slot="gradient" Offset="100%" Color="#ff0079"/>
</IgbCircularProgress>
```

<div class="divider--half"></div>

## Styling

The [`IgbCircularProgress`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCircularProgress.html) component exposes CSS parts for almost all of its inner elements:

|Name|Description|
|--|--|
| `svg`               | The progress SVG element.                |
| `gradient_start`     | The progress linear-gradient start color. |
| `gradient_end`       | The progress linear-gradient end color.  |
| `track`              | The progress ring's track area.          |
| `fill`               | The progress indicator area.             |
| `label`              | The progress label.                      |
| `value`              | The progress label value.                |
| `indeterminate`      | The progress indeterminate state.        |
| `primary`            | The progress indicator primary state.    |
| `danger`             | The progress indicator error state.      |
| `warning`            | The progress indicator warning state.    |
| `info`               | The progress indicator info state.       |
| `success`            | The progress indicator success state.    |

Using this CSS parts we have almost full control over the Circular Progress styling.

```css

igc-circular-progress {
  margin: 20px;
  --diameter: 50px;
}

igc-circular-progress::part(gradient_end),
igc-circular-progress::part(gradient_start) {
  stop-color: var(--ig-success-200);
}

igc-circular-progress::part(track) {
  stroke: var(--ig-gray-400);
}

```

```razor
@using IgniteUI.Blazor.Controls


<div class="root">

    <style>
        igc-circular-progress {
            margin: 20px;
            --diameter: 50px;
        }

        igc-circular-progress::part(gradient_end),
        igc-circular-progress::part(gradient_start) {
            stop-color: #72da67;
        }

        igc-circular-progress::part(track) {
            stroke: rgb(216, 211, 211);
        }
    </style>

    <IgbCircularProgress Indeterminate=true/>
</div>

@code {

}
```

## API References

- [`IgbButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButton.html)
- [`IgbCalendar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html)
- [`IgbCircularGradient`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCircularGradient.html)
- [`IgbCircularProgress`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCircularProgress.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
