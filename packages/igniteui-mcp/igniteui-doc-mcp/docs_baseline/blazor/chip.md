---
title: Blazor Chip | Infragistics
_description: Infragistics' Blazor Chip component allows you to display content in a predefined style to decorate other components anywhere in an application.
_keywords: Blazor, UI controls, web widgets, UI widgets, Web Components, Blazor Chip Components, Infragistics
_license: MIT
mentionedTypes: ["Chip"]
_tocName: Chip
---

# Blazor Chip Overview

Ignite UI for Blazor Chips help people enter information, make selections, filter content, or trigger actions.

## Blazor Chip Example

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample vertical">
    <IgbChip class="size-medium" Selectable=true Removable=true RemoveScript="handleChipRemove">
        Chip
    </IgbChip>
</div>

@code {

    private IgbIcon RegisterIconRef { get; set; }

}
```


<div class="divider"></div>

## Usage

Before using the [`IgbChip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbChip.html), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbChipModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbChip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbChip.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

The simplest way to start using the [`IgbChip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbChip.html) is as follows:

```razor
<div class="container sample vertical">
    <IgbChip>Chip</IgbChip>
</div>

@code {

    private IgbIcon RegisterIconRef { get; set; }

    protected override void OnInitialized()
    {
    }
}
```

To display a selectable chip, you can use the [`Selectable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbChip.html#IgniteUI_Blazor_Controls_IgbChip_Selectable) property of the chip.

```razor
<IgbChip Selectable="true"></IgbChip>
```

To display a removable chip, you can use the [`Removable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbChip.html#IgniteUI_Blazor_Controls_IgbChip_Removable) property of the chip.

```razor
<IgbChip Removable="true"></IgbChip>
```

## Examples

### Variants

The Ignite UI for Blazor chip supports several pre-defined stylistic variants. You can change the variant by assigning one of the supported values - `Primary`, `Info`, `Success`, `Warning`, or `Danger` to the [`Variant`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbChip.html#IgniteUI_Blazor_Controls_IgbChip_Variant) property.

```razor
<IgbChip Variant="ChipVariant.Success"></IgbChip>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample center" style="flex-direction: row; gap: 8px">
    <IgbChip Variant="StyleVariant.Primary" Selectable="true" Removable="true" RemoveScript="handleChipRemove">
        Primary
    </IgbChip>

    <IgbChip Variant="StyleVariant.Info" Selectable="true" Removable="true" RemoveScript="handleChipRemove">
        Info
    </IgbChip>

    <IgbChip Variant="StyleVariant.Success" Selectable="true" Removable="true" RemoveScript="handleChipRemove">
        Success
    </IgbChip>

    <IgbChip Variant="StyleVariant.Warning" Selectable="true" Removable="true" RemoveScript="handleChipRemove">
        Warning
    </IgbChip>

    <IgbChip Variant="StyleVariant.Danger" Selectable="true" Removable="true" RemoveScript="handleChipRemove">
        Danger
    </IgbChip>
</div>

@code {

}
```


### Disabled

The Ignite UI for Blazor chip can be disabled by using the [`Disabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbChip.html#IgniteUI_Blazor_Controls_IgbChip_Disabled) property.

### Prefix / Suffix

With the `Prefix` and `Suffix` parts of the [`IgbChip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbChip.html) component and their slots, we can add different content before and after the main content of the chip. We provide default select and remove icons but you can customize them using the [`IgbSelect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelect.html) and `Remove` slots. You can add additional content before or after the main content, using the `Start` and `End` slots.

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample center size-medium" style="flex-direction: row; gap: 8px">
    <IgbChip Selectable="true" Removable="true" RemoveScript="handleChipRemove">
        <span slot="select">
            <IgbIcon @ref="@SelectIconRef" IconName="custom-select" Collection="material" ></IgbIcon>
        </span>
        Custom Icons
    </IgbChip>

    <IgbChip Selectable="false" Removable="false">
         <span slot="start">
            <IgbIcon @ref="@BrushIconRef" IconName="brush" Collection="material" ></IgbIcon>
        </span>
        Start Slot
    </IgbChip>

    <IgbChip Selectable="false" Removable="false">
         End Slot
        <span slot="end">
            <IgbIcon @ref="@BrickWallIconRef" IconName="brick-wall" Collection="material"></IgbIcon>
        </span>
    </IgbChip>

    <IgbChip Disabled="true">
         Disabled Slot
        <span slot="end">
            <IgbIcon @ref="@DogIconRef" IconName="dog-icon" Collection="material" ></IgbIcon>
        </span>
    </IgbChip>
</div>

@code {

    private IgbIcon SelectIconRef { get; set; }
    private IgbIcon BrushIconRef { get; set; }
    private IgbIcon BrickWallIconRef { get; set; }
    private IgbIcon DogIconRef { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if(firstRender && this.SelectIconRef != null)
        {
            await this.SelectIconRef.EnsureReady();
            //custom-select
            string selectIcon = "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path fill='currentColor' d='M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z' /></svg>";
            await this.SelectIconRef.RegisterIconFromTextAsync("custom-select", selectIcon, "material");
        }

        if(firstRender && this.BrushIconRef != null)
        {
            await this.BrushIconRef.EnsureReady();
            //brush
            string brushIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-labelledby='bqbrush-desc bqbrush-title'><title id='bqbrush-title'>Brush Icon</title><desc id='bqbrush-desc'>A picture showing a painting brush.</desc><path d='M13.093 6.743a1.074 1.074 0 011.306.251l.237.237-6.4 6.4-.242-.231a1.074 1.074 0 01-.251-1.306c.446-.693 1.553-2.516.515-3.554-1.584-1.585-2.225-.94-3.809-2.528S2.714 3 3.354 2.354s2.073-.489 3.658 1.095.943 2.225 2.527 3.809c1.038 1.042 2.861-.069 3.554-.515zm6.93 5.874L15.31 7.9 8.9 14.31l4.433 4.433c-.039.159-.084.327-.137.508 0 0-.8 2.749.8 2.749s.8-2.749.8-2.749a10.75 10.75 0 01-.272-1.14L16.2 16.44a8.944 8.944 0 00-2.072-3.314s.555-.545 3.323 2.063l.811-.811-1.54-2.5 2.5 1.539z'/></svg>";
            await this.BrushIconRef.RegisterIconFromTextAsync("brush", brushIcon, "material");
        }

        if(firstRender && this.BrickWallIconRef != null)
        {
            await this.BrickWallIconRef.EnsureReady();
            //brick-wall
            string brickIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-labelledby='bpbrick-wall-desc bpbrick-wall-title'><title id='bpbrick-wall-title'>Brick Wall Icon</title><desc id='bpbrick-wall-desc'>A picture depicting a wall made of bricks.</desc><path d='M6 5H2V1h4zm10-4H8v4h8zM2 11h8V7H2zm10 0h8V7h-8zM22 1h-4v4h4zM6 13H2v4h4zm10 0H8v4h8zM2 23h8v-4H2zm10 0h8v-4h-8zm10-10h-4v4h4z'/></svg>";
            await this.BrickWallIconRef.RegisterIconFromTextAsync("brick-wall", brickIcon, "material");
        }

        if(firstRender && this.DogIconRef != null)
        {
            await this.DogIconRef.EnsureReady();
            //dog-icon
            string docIcon = "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path fill='currentColor' d='M18,4C16.29,4 15.25,4.33 14.65,4.61C13.88,4.23 13,4 12,4C11,4 10.12,4.23 9.35,4.61C8.75,4.33 7.71,4 6,4C3,4 1,12 1,14C1,14.83 2.32,15.59 4.14,15.9C4.78,18.14 7.8,19.85 11.5,20V15.72C10.91,15.35 10,14.68 10,14C10,13 12,13 12,13C12,13 14,13 14,14C14,14.68 13.09,15.35 12.5,15.72V20C16.2,19.85 19.22,18.14 19.86,15.9C21.68,15.59 23,14.83 23,14C23,12 21,4 18,4M4.15,13.87C3.65,13.75 3.26,13.61 3,13.5C3.25,10.73 5.2,6.4 6.05,6C6.59,6 7,6.06 7.37,6.11C5.27,8.42 4.44,12.04 4.15,13.87M9,12A1,1 0 0,1 8,11C8,10.46 8.45,10 9,10A1,1 0 0,1 10,11C10,11.56 9.55,12 9,12M15,12A1,1 0 0,1 14,11C14,10.46 14.45,10 15,10A1,1 0 0,1 16,11C16,11.56 15.55,12 15,12M19.85,13.87C19.56,12.04 18.73,8.42 16.63,6.11C17,6.06 17.41,6 17.95,6C18.8,6.4 20.75,10.73 21,13.5C20.75,13.61 20.36,13.75 19.85,13.87Z'/></svg>";
            await this.DogIconRef.RegisterIconFromTextAsync("dog-icon", docIcon, "material");
        }
    }
}
```


## Size

We allow the user to choose the size of the [`IgbChip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbChip.html) by utilizing the `--ig-size` CSS variable:

```css
.size-small {
  --ig-size: var(--ig-size-small);
}

.size-medium {
  --ig-size: var(--ig-size-medium);
}

.size-large {
  --ig-size: var(--ig-size-large);
}
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample center" style="flex-direction: row; gap: 8px; align-items: baseline;">
    <IgbChip @ref=ChipRef class="size-small" Selectable="true">
        small
    </IgbChip>

    <IgbChip class="size-medium" Selectable="true">
        medium
    </IgbChip>

    <IgbChip class="size-large" Selectable="true">
        large
    </IgbChip>
</div>

@code {
    private IgbChip ChipRef {get; set;}

}
```


## Styling

The [`IgbChip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbChip.html) component exposes a `base`, `prefix`, `suffix` CSS parts that can be used to change all of its style properties.

```css
igc-chip::part(base) {
  background: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
}

igc-chip::part(suffix) {
  color: var(--ig-gray-400);
}
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample vertical">
    <IgbChip class="size-medium" Selectable=true Removable=true RemoveScript="handleChipRemove">
        Chip
    </IgbChip>
</div>

@code {

    private IgbIcon RegisterIconRef { get; set; }

}
```


## API References

- [`IgbChip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbChip.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
