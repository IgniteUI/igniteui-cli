---
title: Blazor Color Editor | Color Editor | Infragistics
_description: Color Editor component provides an easily configurable option to change colors for any desirable component or aspect of your application.
_keywords: Blazor Color Editor, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["ColorEditor"]
namespace: Infragistics.Controls
_tocName: Color Editor
_premium: true
---

# Blazor Color Editor Overview <label class="badge badge--preview">PREVIEW</label>

The Ignite UI for Blazor Color Editor is a lightweight color picker component. The Color Editor can pop open by clicking the brush icon. Both the rgba and hex values can be obtained from the desired color along the bottom. These values will update when the three sliders are modified. The center box is designed for adjusting the saturation and brightness along with two adjacent sliders for adjusting the rgb and luminance values. Rgb registers between (1-255). The lightness registers between(0-1).

## Blazor Color Editor Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="container vertical fill">
        <IgbColorEditor
        Name="colorEditor"
        @ref="colorEditor">
        </IgbColorEditor>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var colorEditor = this.colorEditor;

    }

    private IgbColorEditor colorEditor;

}
```

<div class="divider--half"></div>

## Dependencies

First, add the **IgniteUI.Blazor.Controls** namespace in the **\_Imports.razor** file:

```razor
@using IgniteUI.Blazor.Controls
```

The following modules are required when using the Dashboard Tile component:

```razor
// in Program.cs file
builder.Services.AddIgniteUIBlazor(
    typeof(IgbColorEditorModule)
);
```

## Usage

The simplest way to start using the `ColorEditor` is as follows:

```razor
<IgbColorEditor>
</IgbColorEditor>
```

## Binding to events

The Color Editor component raises the following events:

- valueChanged
- valueChanging

```razor
<IgbColorEditor ValueChanged="@OnValueChanged" />

@code {
    public void OnValueChanged(IgbColorEditorPanelSelectedValueChangedEventArgs e)
    {

    }
}
```

<div class="divider--half"></div>

## API References

- `ColorEditor`

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
