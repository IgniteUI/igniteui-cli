---
title: Blazor Linear Progress | Linear Progress | Infragistics
_description: Display a progress bar and customize its appearance with endless color and striping options with Linear Progress Indicator component.
_keywords: Blazor Linear Progress, Ignite UI for Blazor, Infragistics
_license: MIT
mentionedTypes: ["LinearProgress"]
_tocName: Linear Progress
---

# Blazor Linear Progress Overview

The Ignite UI for Blazor Linear Progress Indicator component provides a visual indicator of an application’s process as it changes. The [`IgbLinearProgress`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbLinearProgress.html) indicator updates its appearance as its state changes. Also, you can style this component with a choice of colors in stripes or solids.

## Blazor Linear Progress Example

```razor
@using IgniteUI.Blazor.Controls


<div class="root">
    <IgbLinearProgress Value=100/>
</div>

@code {


}
```


<div class="divider--half"></div>

## Usage

Before using the [`IgbLinearProgress`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbLinearProgress.html), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbLinearProgressModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbCalendar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

The simplest way to start using the [`IgbLinearProgress`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbLinearProgress.html) is as follows:

```razor
<IgbLinearProgress Value=100 />
```

### Progress Types

You can set the type of your indicator, using  the [`Variant`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbProgressBase.html#IgniteUI_Blazor_Controls_IgbProgressBase_Variant) attribute. There are five types of linear progress indicators - **primary** (default), **error**, **success**, **info**, and **warning**.

```razor
<IgbLinearProgress Value=100 Variant=@ProgressBaseVariant.Success />
```

### Striped Progress

You can make the indicator striped, using the [`Striped`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbLinearProgress.html#IgniteUI_Blazor_Controls_IgbLinearProgress_Striped) property:

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbLinearProgress Value=100 Variant=@StyleVariant.Primary/>

    <IgbLinearProgress Value=100 Variant=@StyleVariant.Success Striped=true/>

    <IgbLinearProgress Value=100 Variant=@StyleVariant.Danger />

    <IgbLinearProgress Value=100 Variant=@StyleVariant.Info Striped=true />

    <IgbLinearProgress Value=100 Variant=@StyleVariant.Warning />
</div>

@code {


}
```


<div class="divider--half"></div>

### Indeterminate Progress

If you want to track a process that is not determined precisely, you can set the [`Indeterminate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbProgressBase.html#IgniteUI_Blazor_Controls_IgbProgressBase_Indeterminate) property.

### Animation Duration

The [`AnimationDuration`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbProgressBase.html#IgniteUI_Blazor_Controls_IgbProgressBase_AnimationDuration) property is used to specify how long the animation cycle should take. It takes as value a number which represents the animation duration in milliseconds.

```razor
<IgbLinearProgress AnimationDuration=5000 Indeterminate=true />
```

### Text Properties

You can align the default value, using the [`LabelAlign`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbLinearProgress.html#IgniteUI_Blazor_Controls_IgbLinearProgress_LabelAlign) property. Permitted values are **top**, **bottom**, **top-start**, **top-end**, **bottom-start** and **bottom-end**.

To hide the default label of the progress indicator, use the [`HideLabel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbProgressBase.html#IgniteUI_Blazor_Controls_IgbProgressBase_HideLabel) attribute.

The [`LabelFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbProgressBase.html#IgniteUI_Blazor_Controls_IgbProgressBase_LabelFormat) property can be used to customize the [`IgbLinearProgress`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbLinearProgress.html) default label.

The following sample demonstrates the above configuration:

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <style>
        .progress-container {
            margin-bottom: 15px;
        }
    </style>

    <IgbLinearProgress class="progress-container" Value=100 Variant=@StyleVariant.Primary/>

    <IgbLinearProgress class="progress-container" Value=100 Variant=@StyleVariant.Success
                       Indeterminate=true Striped=true/>

    <IgbLinearProgress Value=100 Variant=@StyleVariant.Danger LabelFormat="Custom Text"
                       LabelAlign=@LinearProgressLabelAlign.BottomEnd />

    <IgbLinearProgress class="progress-container" Value=100 Variant=@StyleVariant.Info Striped=true HideLabel=true />

    <IgbLinearProgress class="progress-container" Value=100 Variant=@StyleVariant.Warning
                       LabelAlign="@LinearProgressLabelAlign.BottomStart" />
</div>

@code {

}
```


<div class="divider--half"></div>

### Dynamic Progress

You can dynamically change the value of the progress indicator by using external controls like buttons. To achieve this, we can bind the value to a class property:

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbLinearProgress Max=100 LabelAlign=@LinearProgressLabelAlign.BottomStart Value=@ProgressValue/>
    <div class="buttonContainer">
        <IgbIconButton @ref="RemoveIconRef" @onclick="OnRemoveIconClick" IconName="remove" Collection="material" />
        <IgbIconButton @ref="AddIconRef" @onclick="OnAddIconClick" IconName="add" Collection="material" />
    </div>
</div>

@code {

    private double ProgressValue { get; set; }
    private IgbIconButton AddIconRef { get; set; }
    private IgbIconButton RemoveIconRef { get; set; }

    protected override void OnInitialized()
    {
        this.ProgressValue = 50;
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


<div class="divider--half"></div>

## Styling

The [`IgbLinearProgress`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbLinearProgress.html) component exposes CSS parts for almost all of its inner elements:

|Name|Description|
|--|--|
| `track`         | The progress ring's track area. |
| `fill`          | The progress indicator area. |
| `striped`       | The progress striped indicator. |
| `label`         | The progress indicator label. |
| `value`         | The progress label value. |
| `indeterminate` | The progress indeterminate state. |
| `primary`       | The progress indicator primary state. |
| `danger`        | The progress indicator error state. |
| `warning`       | The progress indicator warning state. |
| `info`          | The progress indicator info state. |
| `success`       | The progress indicator success state. |

Using this CSS parts we have almost full control of the Linear Progress styling.

```razor
@using IgniteUI.Blazor.Controls


<div class="root">
    <style>
        igc-linear-progress::part(track) {
            background-color: #D3D3D3
        }

        igc-linear-progress::part(fill) {
            background-color: #ECAA53
        }

        igc-linear-progress::part(label) {
            color: #ECAA53
        }
    </style>

    <IgbLinearProgress Value=100/>
</div>

@code {

}
```


```css
igc-linear-progress::part(track){
  background-color: var(--ig-gray-300)
}

igc-linear-progress::part(fill){
  background-color: var(--ig-primary-300)
}

igc-linear-progress::part(label){
  color: var(--ig-primary-300)
}
```

## API References

- [`IgbButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButton.html)
- [`IgbCalendar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html)
- [`IgbLinearProgress`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbLinearProgress.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
