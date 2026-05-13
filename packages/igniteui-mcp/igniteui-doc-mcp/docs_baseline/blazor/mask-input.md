---
title: Blazor MaskInput | Infragistics
_description: Infragistics' Blazor MaskInput allows the user to control input and format the visible value based on configurable mask rules
_keywords: Blazor input, Ignite UI for Blazor, Infragistics
_license: MIT
mentionedTypes: ["MaskInput"]
_tocName: Mask Input
---

## Blazor Mask Input Overview

The Ignite UI for Blazor Mask Input is an input field that allows the developer to control user input and format the visible value, based on configurable rules. It provides different input options and ease in use and configuration.

### Blazor Mask Input Example

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample center">
    <IgbMaskInput Mask="00000">
        <IgbIcon @ref="IconRef" IconName="location" Collection="material" slot="prefix"></IgbIcon>
        <span slot="helper-text">ZIP Code</span>
    </IgbMaskInput>

</div>

@code {
    private IgbIcon IconRef { get; set; }
    protected async override Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && IconRef != null)
        {
            await this.IconRef.EnsureReady();
            var locationIcon = "<svg width='24px' height='24px' viewBox='0 0 24 24' role='img' xmlns='http://www.w3.org/2000/svg' aria-labelledby='locationIconTitle' stroke='#000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' fill='none' color='#000000'> <title id='locationIconTitle'>Location</title> <path d='M12,21 C16,16.8 18,12.8 18,9 C18,5.6862915 15.3137085,3 12,3 C8.6862915,3 6,5.6862915 6,9 C6,12.8 8,16.8 12,21 Z'/> <circle cx='12' cy='9' r='1'/> </svg>";
            await this.IconRef.RegisterIconFromTextAsync("location", locationIcon, "material");
        }
    }
}
```

## Usage

Before using the [`IgbMaskInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMaskInput.html), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbMaskInputModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbMaskInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMaskInput.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

For a complete introduction to the Ignite UI for Blazor, read the [**Getting Started**](../general-getting-started.md) topic.

### Mask Rules

The table bellow shows the supported built-in mask rules:

| Mask Character | Description |
| :--- | :--- |
| 0 | Digit character \[0-9]. Entry is required. |
| 9 | Digit character \[0-9]. Entry is optional. |
| # | Digit character \[0-9], plus (+), or minus (-) sign. Entry is required. |
| L | Letter character. Entry is required. |
| ? | Letter character. Entry is optional. |
| A | Alphanumeric (letter or digit) character. Entry is required. |
| a | Alphanumeric (letter or digit) character. Entry is optional. |
| & | Any keyboard character. Entry is required. |
| C | Any keyboard character. Entry is optional. |
| \ | Escapes a mask flag and turns it into a literal. |

These flags also participate in the component validation - i.e., the input becomes invalid if some but not all required positions are filled (no positions filled/empty value is still a responsibility of `required`). This applies to both stand-alone inputs and when included in a form.

### Applying Mask

Applying the mask is pretty straightforward. All you need to do is provide a predetermined pattern to the [`Mask`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMaskInput.html#IgniteUI_Blazor_Controls_IgbMaskInput_Mask) property of the input.

In the example below, we will apply a mask for a phone number with an extension code.

```razor
<IgbMaskInput @ref="MaskInputRef" Mask="(####) 00-00-00 Ext. 9999">
    <IgbIcon IconName="phone" Collection="material" slot="prefix"></IgbIcon>
    <span slot="helper-text">Phone number</span>
</IgbMaskInput>
```

After that you should see the following in your browser:

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample center">
    <IgbMaskInput Mask="(####) 00-00-00 Ext. 9999">
        <IgbIcon @ref="IconRef" IconName="phone" Collection="material" slot="prefix"></IgbIcon>
        <span slot="helper-text">Phone Number</span>
    </IgbMaskInput>
</div>

@code {
    private IgbIcon IconRef { get; set; }
    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && this.IconRef != null)
        {
            await this.IconRef.EnsureReady();
            string phoneIcon = "<svg width='24px' height='24px' viewBox='0 0 12 12' enable-background='new 0 0 12 12' version='1.1' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g><path d='M6.2478638,8.4810181C6.1535645,8.5752563,6.0301514,8.6223755,5.9067383,8.6223755   S5.6599121,8.5752563,5.5656128,8.4810181L3.5189819,6.4343872C3.4247437,6.3400879,3.3775635,6.2166748,3.3775635,6.0932617   s0.0471802-0.2468872,0.1414185-0.3411255l1.0233154-1.0233154L1.8134766,2l-0.682251,0.6821899   c-1.5083008,1.5083618-1.5083008,3.9494019,0,5.4577026l2.7288818,2.7288208   c0.3770752,0.3770752,0.812439,0.6599121,1.2769775,0.8484497C5.6015625,11.9057007,6.0952759,12,6.5889282,12   c0.4937134,0,0.9873657-0.0942993,1.4519043-0.2828369s0.8999023-0.4713745,1.2769775-0.8484497L10,10.1865234L7.2711792,7.4577026   L6.2478638,8.4810181z' fill='#1D1D1B'/><path d='M6.5,1H6v1h0.5C8.4296875,2,10,3.5703125,10,5.5V6h1V5.5C11,3.0185547,8.9814453,1,6.5,1z' fill='#1D1D1B'/><path d='M8,5.5V6h1V5.5C9,4.121582,7.878418,3,6.5,3H6v1h0.5C7.3271484,4,8,4.6728516,8,5.5z' fill='#1D1D1B'/></g></svg>";
            await this.IconRef.RegisterIconFromTextAsync("phone", phoneIcon, "material");
        }
    }
}
```

### Prompt Character

Developers can customize the prompt symbol used for unfilled parts of the mask. To do this, simply provide any character to the [`Prompt`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMaskInputBase.html#IgniteUI_Blazor_Controls_IgbMaskInputBase_Prompt) property:

```razor
<IgbMaskInput @ref="MaskInputRef" Mask="(####) 00-00-00 Ext. 9999" Prompt="-"></IgbMaskInput>
```

By default, the `prompt` character is **underscore**.

### Placeholder

Developers can also take advantage of the [`Placeholder`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInputBase.html#IgniteUI_Blazor_Controls_IgbInputBase_Placeholder) property, which serves the purpose of the native input placeholder attribute. If no value is provided for the placeholder, the value of the mask is used as such.

```razor
<IgbMaskInput @ref="MaskInputRef" Mask="00/00/0000" Placeholder="dd/MM/yyyy"></IgbMaskInput>
```

### Value Modes

The [`IgbMaskInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMaskInput.html) exposes a [`ValueMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMaskInput.html#IgniteUI_Blazor_Controls_IgbMaskInput_ValueMode) property that lets you choose between `raw` and `withFormatting` options to configure which input value (formatted or raw) to bind in your form when a specific mask is applied. By default, [`ValueMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMaskInput.html#IgniteUI_Blazor_Controls_IgbMaskInput_ValueMode) is set to `raw`. Try it for yourself in the example below:

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <IgbMaskInput @ref="MaskInputRef" Change="OnInputChange">
        <IgbIcon @ref="IconRef" IconName="file" Collection="material" slot="prefix"></IgbIcon>
    </IgbMaskInput>

    <div id="content" style="width: 100%; height: inherit;">
        <IgbRadioGroup Alignment="ContentOrientation.Horizontal" style="margin-bottom: 10px;">
            <IgbRadio name="mode" Value="raw" LabelPosition="ToggleLabelPosition.After" Checked="true" Change="OnRadioButtonClick">raw</IgbRadio>
            <IgbRadio name="mode" Value="withFormatting" LabelPosition="ToggleLabelPosition.After" Change="OnRadioButtonClick">withFormatting</IgbRadio>
        </IgbRadioGroup>
        <span id="value-span">Value: @SpanValue</span>
    </div>
</div>

@code {
    private IgbIcon IconRef { get; set; }
    private IgbMaskInput MaskInputRef { get; set; }
    private string SpanValue { get; set; } = "";

    protected async override Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && IconRef != null)
        {
            await this.IconRef.EnsureReady();
            var fileIcon = "<svg width='32px' height='32px' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title/><g id='document'><polyline class='cls-1' points='25 9 25 29 7 29 7 3 16 3'/><line class='cls-1' x1='16' x2='25' y1='3' y2='9'/><line class='cls-1' x1='16' x2='16' y1='3' y2='9'/><line class='cls-1' x1='25' x2='16' y1='9' y2='9'/><line class='cls-1' x1='11' x2='16' y1='17' y2='17'/><line class='cls-1' x1='11' x2='20' y1='21' y2='21'/></g></svg>";
            await this.IconRef.RegisterIconFromTextAsync("file", fileIcon, "material");
        }
    }

    public void OnInputChange()
    {
        this.SpanValue = this.MaskInputRef.Value;
    }

    public void OnRadioButtonClick(IgbRadioChangeEventArgs e)
    {
        if (e.Detail.Value == "raw")
        {
            this.MaskInputRef.ValueMode = MaskInputValueMode.Raw;
        } else
        {
            this.MaskInputRef.ValueMode = MaskInputValueMode.WithFormatting;      
        }
        this.MaskInputRef.Value = null;
        this.OnInputChange();
    }
}
```

## Styling

The [`IgbMaskInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMaskInput.html) component exposes CSS parts for almost all of its inner elements. The following table lists all of the exposed CSS parts:

|Name|Description|
|--|--|
| `container` | The main wrapper that holds all main input elements. |
| `input` | The native input element. |
| `label` | The native label element. |
| `prefix` | The prefix wrapper. |
| `suffix` | The suffix wrapper. |
| `helper-text` | The helper text wrapper. |

```css
igc-mask-input::part(input) {
  background-color: var(--ig-primary-100);
  border-color: var(--ig-secondary-500);
  box-shadow: none;
}

igc-mask-input::part(input)::placeholder {
  color: var(--ig-primary-100-contrast);
}
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample center">
    <style>
        igc-mask-input::part(input) {
            background-color: var(--ig-primary-100);
            border-color: var(--ig-secondary-500);
            box-shadow: none;
        }

        igc-mask-input::part(input)::placeholder {
            color: var(--ig-primary-100-contrast);
        }
    </style>

    <IgbMaskInput Mask="(####) 00-00-00 Ext. 9999">
        <IgbIcon @ref="IconRef" IconName="phone" Collection="material" slot="prefix"></IgbIcon>
        <span slot="helper-text">Phone number</span>
    </IgbMaskInput>
</div>

@code {

    private IgbIcon IconRef { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if(firstRender && this.IconRef != null)
        {
            await this.IconRef.EnsureReady();
            string phoneIcon = "<svg width='24px' height='24px' viewBox='0 0 12 12' enable-background='new 0 0 12 12' version='1.1' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g><path d='M6.2478638,8.4810181C6.1535645,8.5752563,6.0301514,8.6223755,5.9067383,8.6223755   S5.6599121,8.5752563,5.5656128,8.4810181L3.5189819,6.4343872C3.4247437,6.3400879,3.3775635,6.2166748,3.3775635,6.0932617   s0.0471802-0.2468872,0.1414185-0.3411255l1.0233154-1.0233154L1.8134766,2l-0.682251,0.6821899   c-1.5083008,1.5083618-1.5083008,3.9494019,0,5.4577026l2.7288818,2.7288208   c0.3770752,0.3770752,0.812439,0.6599121,1.2769775,0.8484497C5.6015625,11.9057007,6.0952759,12,6.5889282,12   c0.4937134,0,0.9873657-0.0942993,1.4519043-0.2828369s0.8999023-0.4713745,1.2769775-0.8484497L10,10.1865234L7.2711792,7.4577026   L6.2478638,8.4810181z' fill='#1D1D1B'/><path d='M6.5,1H6v1h0.5C8.4296875,2,10,3.5703125,10,5.5V6h1V5.5C11,3.0185547,8.9814453,1,6.5,1z' fill='#1D1D1B'/><path d='M8,5.5V6h1V5.5C9,4.121582,7.878418,3,6.5,3H6v1h0.5C7.3271484,4,8,4.6728516,8,5.5z' fill='#1D1D1B'/></g></svg>";
            await this.IconRef.RegisterIconFromTextAsync("phone", phoneIcon, "material");
        }
    }
}
```

## Assumptions and limitations

- The masked input does not expose a _type_ attribute since it is always an input of type **text**.
- Undo/redo behavior is currently unsupported.

## API References

- [`IgbInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html)
- [`IgbMaskInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMaskInput.html)
- [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html)
- [`IgbRadio`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadio.html)
- [`IgbRadioGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadioGroup.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
