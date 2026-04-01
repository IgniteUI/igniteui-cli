---
title: Blazor DateTimeInput | Infragistics
_description: Infragistics' Blazor DateTimeInput allows the user to edit date and time in an input element
_keywords: Blazor input, Ignite UI for Blazor, Infragistics
_license: MIT
mentionedTypes: ["DateTimeInput"]
_tocName: Date Time Input
---

# Blazor Date Time Input Overview

The Ignite UI for Blazor Date Time Input allows the user to set and edit the date and time in a chosen input element. The user can edit both date and time portions using an editable masked input. Additionally, one can specify a desired display and input format, as well as min and max values to utilize validation.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <IgbDateTimeInput @ref="DateTimeInputRef">
        <IgbIcon IconName="clear" Collection="myIcons" slot="prefix" @onclick="OnClear"></IgbIcon>
        <IgbIcon IconName="up" Collection="myIcons" slot="suffix" @onclick="OnStepUp"></IgbIcon>
        <IgbIcon IconName="down" Collection="myIcons" slot="suffix" @onclick="OnStepDown"></IgbIcon>
    </IgbDateTimeInput>
    <IgbIcon @ref="RegisterIconRef"></IgbIcon>

</div>

@code {

    IgbDateTimeInput? DateTimeInputRef;
    IgbIcon? RegisterIconRef;

    protected async override Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && RegisterIconRef != null)
        {
            await RegisterIconRef.EnsureReady();
            var upIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 14l5-5 5 5z\"/></svg>";
            var downIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 10l5 5 5-5z\"/></svg>";
            var clearIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>";
            await RegisterIconRef.RegisterIconFromTextAsync("up", upIcon, "myIcons");
            await RegisterIconRef.RegisterIconFromTextAsync("down", downIcon, "myIcons");
            await RegisterIconRef.RegisterIconFromTextAsync("clear", clearIcon, "myIcons");
        }
    }

    public async Task OnClear()
    {
        await DateTimeInputRef?.ClearAsync();
    }

    public async Task OnStepUp()
    {
        await DateTimeInputRef?.StepUpAsync();
    }

    public async Task OnStepDown()
    {
        await DateTimeInputRef?.StepDownAsync();
    }
}
```


## Usage

<!-- Blazor -->

Before using the [`IgbDateTimeInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeInput.html), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbDateTimeInputModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbDateTimeInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeInput.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

### Value binding

The easiest way to set the value of the [`IgbDateTimeInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeInput.html) component is by passing a Date object to the [`Value`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeInput.html#IgniteUI_Blazor_Controls_IgbDateTimeInput_Value) property:

```razor
<IgbDateTimeInput @ref="DateTimeInputRef" Value="@Date">
    <IgbIcon IconName="clear" Collection="myIcons" slot="prefix" @onclick="OnClear"></IgbIcon>
</IgbDateTimeInput>
```

### Keyboard Navigation

The [`IgbDateTimeInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeInput.html) has intuitive keyboard navigation that makes it easy to increment, decrement, or jump through different `DateParts` among others without having to touch the mouse.

|Keys|Description|
|----|-----------|
| <kbd>←</kbd> | Move one character to the beginning |
| <kbd>→</kbd> | Move one character to the end |
| <kbd>HOME</kbd> | Move to the beginning |
| <kbd>END</kbd> | Move to the end |
| <kbd>CTRL</kbd> / <kbd>CMD</kbd> + <kbd>←</kbd> | Move to the beginning of the date/time section - current one or left one |
| <kbd>CTRL</kbd> / <kbd>CMD</kbd> + <kbd>→</kbd> | Move to the end of the date/time section - current on or right one |
| Focus on a date/time part + <kbd>↓</kbd> | Decrements a date/time part |
| Focus on a date/time part + <kbd>↑</kbd> | Increments a date/time part |
| <kbd>CTRL</kbd> / <kbd>CMD</kbd> + <kbd>;</kbd> | Sets the current date/time as the value of the editor |

## Setting formats

The [`IgbDateTimeInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeInput.html) supports different display and input formats.

It uses [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) which allows it to support predefined format options, such as `long` and `short`, `medium` and `full`. Additionally, it can also accept a custom string constructed from supported characters, such as `dd-MM-yy`. Also, if no [`DisplayFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeInput.html#IgniteUI_Blazor_Controls_IgbDateTimeInput_DisplayFormat) is provided, the component will use the [`InputFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeInput.html#IgniteUI_Blazor_Controls_IgbDateTimeInput_InputFormat) as such.

### Input Format

The table bellow shows formats that are supported by the component's [`InputFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeInput.html#IgniteUI_Blazor_Controls_IgbDateTimeInput_InputFormat):

|Format|Description|
|-------|----------|
| `d` | Date, will be coerced with a leading zero while editing. |
| `dd` | Date with an explicitly set leading zero. |
| `M` | Month, will be coerced with a leading zero while editing. |
| `MM` | Month with an explicitly set leading zero. |
| `yy` | Short year format. |
| `yyyy` | Full year format. |
| `h` | Hours in 12-hour format, will be coerced with a leading zero while editing. |
| `hh` | Hours in 12-hour format with an explicitly set leading zero. |
| `H` | Hours in 24-hour format, will be coerced with a leading zero while editing. |
| `HH` | Hours in 24-hour format, with an explicitly set leading zero. |
| `m` | Minutes, will be coerced with a leading zero while editing. |
| `mm` | Minutes with an explicitly set leading zero. |
| `tt` | AM/PM section for 12-hour format. |

To set a specific input format, pass it as a string to the [`IgbDateTimeInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeInput.html). This will set both the expected user input format and the `mask`. Additionally, the [`InputFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeInput.html#IgniteUI_Blazor_Controls_IgbDateTimeInput_InputFormat) is locale based, so if none is provided, the editor will default to `dd/MM/yyyy`.

```razor
<IgbDateTimeInput @ref="DateTimeInputRef" InputFormat="dd-MM-yy" DisplayFormat="medium">
    <IgbIcon IconName="clear" Collection="myIcons" slot="prefix" @onclick="OnClear"></IgbIcon>
</IgbDateTimeInput>
```

If all went well, you should see the following in your browser:

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbDateTimeInput @ref="DateTimeInputRef" InputFormat="dd-MM-yy" DisplayFormat="medium">
        <IgbIcon IconName="clear" Collection="myIcons" slot="prefix" @onclick="OnClear"></IgbIcon>
        <IgbIcon IconName="up" Collection="myIcons" slot="suffix" @onclick="OnStepUp"></IgbIcon>
        <IgbIcon IconName="down" Collection="myIcons" slot="suffix" @onclick="OnStepDown"></IgbIcon>
    </IgbDateTimeInput>
    <IgbIcon @ref="RegisterIconRef"/>
</div>

@code {
    IgbDateTimeInput? DateTimeInputRef;
    IgbIcon? RegisterIconRef;

    protected async override Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && RegisterIconRef != null)
        {
            await RegisterIconRef.EnsureReady();
            var upIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 14l5-5 5 5z\"/></svg>";
            var downIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 10l5 5 5-5z\"/></svg>";
            var clearIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>";
            await RegisterIconRef.RegisterIconFromTextAsync("up", upIcon, "myIcons");
            await RegisterIconRef.RegisterIconFromTextAsync("down", downIcon, "myIcons");
            await RegisterIconRef.RegisterIconFromTextAsync("clear", clearIcon, "myIcons");
        }
    }
    public async Task OnClear()
    {
        await DateTimeInputRef?.ClearAsync();
    }

    public async Task OnStepUp()
    {
        await DateTimeInputRef?.StepUpAsync();
    }
    public async Task OnStepDown()
    {
        await DateTimeInputRef?.StepDownAsync();
    }
}
```


### Display format

The date time input exposes predefined formats for displaying date/time in various manners. All of the examples below are given in en-US locale.

| Option | Example |
|:-------:|:-----------|
| `short` | 7/17/22, 12:00 AM |
| `medium` | Jul 17, 2022, 12:00:00 AM |
| `long` | July 17, 2022 at 12:00:00 AM GMT+3 |
| `full` | Sunday, July 17, 2022 at 12:00:00 AM Eastern European Summer Time |
| `shortDate` | 7/17/22 |
| `mediumDate` | Jul 17, 2022 |
| `longDate` | July 17, 2022 |
| `fullDate` | Sunday, July 17, 2022 |
| `shortTime` | 12:00 AM |
| `mediumTime` | 12:00:00 AM |
| `longTime` | 12:00:00 AM GMT+3 |
| `fullTime` | 12:00:00 AM Eastern European Summer Time |

Furthermore, users can construct a displayFormat string using the supported symbols described in the following table. <br>

| Type | Format | Description | Example |
|:---|-------:|:-----------|:--------|
| Day | `d` | Minimum digits. | 7, 17 |
|   | `dd` | Zero padded. | 07, 17 |
| Month | `M` | Minimum digits. | 3, 10 |
|   | `MM` | Zero padded. | 03, 10 |
|   | `MMM` | Abbreviated | Oct |
|   | `MMMM` | Wide | October |
|   | `MMMMM` | Narrow | O |
| Year | `y` | Numeric | 2022 |
|   | `yy` | Two digit | 22
|   | `yyy` | Numeric | 2022
|   | `yyyy` |  Numeric  | 2022
| Hour 1-12 | `h` | Minimum digits | 1, 12 |
|   | `hh` | Zero padded | 01, 12
| Hour 1-24 | `H` | Minimum digits | 1, 23 |
|   | `HH` | Zero padded | 01, 23 |
| Minute | `m` | Minimum digits | 1, 59 |
|   | `mm` | Zero padded | 01, 59 |
| Second |  `s` | Minimum digits | 1, 59 |
|   | `ss` | Zero padded | 01, 59 |
| Time Period | `t` | Abbreviated | AM, PM |
|   | `tt` | Abbreviated | AM, PM |
|   | `ttt` | Short | noon |
|   | `tttt` | Long | noon |
|   | `ttttt` | Narrow | n |

> \[!Note]
> Many locales use the same time period string, irrespective of the format specified. Also, it has an effect only if a 12-hour clock is used.

## Min/max value

You can specify [`Min`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeInput.html#IgniteUI_Blazor_Controls_IgbDateTimeInput_Min) and [`Max`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeInput.html#IgniteUI_Blazor_Controls_IgbDateTimeInput_Max) properties to restrict input and control the validity of the component. Just like the [`Value`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeInput.html#IgniteUI_Blazor_Controls_IgbDateTimeInput_Value) property, they can be of type `string`.

```razor
<IgbDateTimeInput @ref="DateTimeInputRef" Min="@MinDate" Max="@MaxDate">
    <IgbIcon IconName="clear" Collection="myIcons" slot="prefix" @onclick="OnClear"></IgbIcon>
</IgbDateTimeInput>
```

If all went well, the component will be `invalid` if the value is greater or lower than the given dates. Check out the example below:

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbDateTimeInput @ref="DateTimeInputRef" Min="@MinDate" Max="@MaxDate">
        <IgbIcon IconName="clear" Collection="myIcons" slot="prefix" @onclick="OnClear"></IgbIcon>
        <IgbIcon IconName="up" Collection="myIcons" slot="suffix" @onclick="OnStepUp"></IgbIcon>
        <IgbIcon IconName="down" Collection="myIcons" slot="suffix" @onclick="OnStepDown"></IgbIcon>
    </IgbDateTimeInput>
    <IgbIcon @ref="RegisterIconRef"/>
</div>

@code {
    IgbDateTimeInput? DateTimeInputRef;
    IgbIcon? RegisterIconRef;

    DateTime MinDate = new DateTime(2021, 1, 1);
    DateTime MaxDate = new DateTime(2022, 1, 1);

    protected async override Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && RegisterIconRef != null)
        {
            await RegisterIconRef.EnsureReady();
            var upIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 14l5-5 5 5z\"/></svg>";
            var downIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 10l5 5 5-5z\"/></svg>";
            var clearIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>";
            await RegisterIconRef.RegisterIconFromTextAsync("up", upIcon, "myIcons");
            await RegisterIconRef.RegisterIconFromTextAsync("down", downIcon, "myIcons");
            await RegisterIconRef.RegisterIconFromTextAsync("clear", clearIcon, "myIcons");
        }
    }

    public async Task OnClear()
    {
        await DateTimeInputRef?.ClearAsync();
    }

    public async Task OnStepUp()
    {
        await DateTimeInputRef?.StepUpAsync();
    }
    public async Task OnStepDown()
    {
        await DateTimeInputRef?.StepDownAsync();
    }
}
```


## Step up/down

The [`IgbDateTimeInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeInput.html) exposes public [`StepUp`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeInput.html#IgniteUI_Blazor_Controls_IgbDateTimeInput_StepUp) and [`StepDown`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeInput.html#IgniteUI_Blazor_Controls_IgbDateTimeInput_StepDown) methods. They increment or decrement a specific `DatePart` of the currently set date and time and can be used in a couple of ways.

In the first scenario, if no specific DatePart is passed to the method, a default DatePart will increment or decrement, based on the specified [`InputFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeInput.html#IgniteUI_Blazor_Controls_IgbDateTimeInput_InputFormat) and the internal component implementation. In the second scenario, you can explicitly specify what DatePart to manipulate as it may suite different requirements. Also, both methods accept an optional `delta` parameter of type number which can be used to set the stepUp/stepDown step.

<!-- WebComponents, Blazor -->

Additionally, [`SpinDelta`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeInput.html#IgniteUI_Blazor_Controls_IgbDateTimeInput_SpinDelta) is a property that can be used to apply a different delta to each date time segment. It will be applied when spinning with the keyboard, mouse wheel or with the [`StepUp`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeInput.html#IgniteUI_Blazor_Controls_IgbDateTimeInput_StepUp) and [`StepDown`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeInput.html#IgniteUI_Blazor_Controls_IgbDateTimeInput_StepDown) methods, as long as they don't have the delta parameter provided since it will take precedence over [`SpinDelta`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeInput.html#IgniteUI_Blazor_Controls_IgbDateTimeInput_SpinDelta).

Try it in the example below:

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbDateTimeInput @ref="DateTimeInputRef" SpinDelta="@SpinDelta">
        <IgbIcon IconName="clear" Collection="myIcons" slot="prefix" @onclick="OnClear"></IgbIcon>
        <IgbIcon IconName="up" Collection="myIcons" slot="suffix" @onclick="OnStepUp"></IgbIcon>
        <IgbIcon IconName="down" Collection="myIcons" slot="suffix" @onclick="OnStepDown"></IgbIcon>
    </IgbDateTimeInput>
    <IgbIcon @ref="RegisterIconRef"/>
</div>

@code {
    IgbDateTimeInput? DateTimeInputRef;
    IgbIcon? RegisterIconRef;

    IgbDatePartDeltas SpinDelta = new IgbDatePartDeltas()
    {
        Date = 2,
        Month = 3,
        Year = 10
    };

    protected async override Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && RegisterIconRef != null)
        {
            await RegisterIconRef.EnsureReady();
            var upIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 14l5-5 5 5z\"/></svg>";
            var downIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 10l5 5 5-5z\"/></svg>";
            var clearIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>";
            await RegisterIconRef.RegisterIconFromTextAsync("up", upIcon, "myIcons");
            await RegisterIconRef.RegisterIconFromTextAsync("down", downIcon, "myIcons");
            await RegisterIconRef.RegisterIconFromTextAsync("clear", clearIcon, "myIcons");
        }
    }

    public async Task OnClear()
    {
        await DateTimeInputRef?.ClearAsync();
    }
    public async Task OnStepUp()
    {
        await DateTimeInputRef?.StepUpAsync(DatePart.Month, SpinDelta.Month);
    }
    public async Task OnStepDown()
    {
        await DateTimeInputRef?.StepDownAsync(DatePart.Date, SpinDelta.Date);
    }
}
```


## Styling

The [`IgbDateTimeInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeInput.html) component exposes CSS parts for almost all of its inner elements. The following table lists all of the exposed CSS parts:

|Name|Description|
|--|--|
| `container` | The main wrapper that holds all main input elements. |
| `input` | The native input element. |
| `label` | The native label element. |
| `prefix` | The prefix wrapper. |
| `suffix` | The suffix wrapper. |
| `helper-text` | The helper text wrapper. |

```css
igc-date-time-input {
    --_background: var(--ig-primary-200);
    --_foreground: var(--ig-gray-900);

    --input-prefix-color: var(--_foreground);
    --input-suffix-color: var(--_foreground);
    --input-prefix-color--filled: var(--_foreground);
    --input-suffix-color--filled: var(--_foreground);
    --input-prefix-background: var(--_background);
    --input-suffix-background: var(--_background);
    --input-prefix-background--filled: var(--_background);
    --input-suffix-background--filled: var(--_background);
    --input-prefix-color--focused: var(--_foreground);
    --input-suffix-color--focused: var(--_foreground);
    --input-prefix-background--focused: var(--_background);
    --input-suffix-background--focused: var(--_background);
}
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbDateTimeInput @ref="DateTimeInputRef" SpinDelta="@SpinDelta">
        <IgbIcon IconName="clear" Collection="myIcons" slot="prefix" @onclick="OnClear"></IgbIcon>
        <IgbIcon IconName="up" Collection="myIcons" slot="suffix" @onclick="OnStepUp"></IgbIcon>
        <IgbIcon IconName="down" Collection="myIcons" slot="suffix" @onclick="OnStepDown"></IgbIcon>
    </IgbDateTimeInput>
    <IgbIcon @ref="RegisterIconRef"/>
</div>

@code {
    IgbDateTimeInput? DateTimeInputRef;
    IgbIcon? RegisterIconRef;

    IgbDatePartDeltas SpinDelta = new IgbDatePartDeltas()
    {
        Date = 2,
        Month = 3,
        Year = 10
    };

    protected async override Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && RegisterIconRef != null)
        {
            await RegisterIconRef.EnsureReady();
            var upIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 14l5-5 5 5z\"/></svg>";
            var downIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 10l5 5 5-5z\"/></svg>";
            var clearIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>";
            await RegisterIconRef.RegisterIconFromTextAsync("up", upIcon, "myIcons");
            await RegisterIconRef.RegisterIconFromTextAsync("down", downIcon, "myIcons");
            await RegisterIconRef.RegisterIconFromTextAsync("clear", clearIcon, "myIcons");
        }
    }

    public async Task OnClear()
    {
        await DateTimeInputRef?.ClearAsync();
    }
    public async Task OnStepUp()
    {
        await DateTimeInputRef?.StepUpAsync(DatePart.Month, SpinDelta.Month);
    }
    public async Task OnStepDown()
    {
        await DateTimeInputRef?.StepDownAsync(DatePart.Date, SpinDelta.Date);
    }
}
```


## API References

- [`IgbInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html)
- [`IgbMaskInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbMaskInput.html)
- [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html)
- [`IgbDateTimeInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeInput.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
