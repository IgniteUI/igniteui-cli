---
title: Blazor Date Picker Component - Ignite UI for Blazor
_description: Infragistics' Blazor Date Picker allows the user to select a date from a calendar and set it in an input element.
_keywords: Blazor Date Picker, Ignite UI for Blazor, Infragistics
_license: MIT
mentionedTypes: ["DatePicker"]
_tocName: Date Picker
---

# Blazor Date Picker Component Overview

The Ignite UI for Blazor Date Picker is a feature rich component used for entering a date through manual text input or choosing date values from a calendar dialog that pops up. Lightweight and simple to use, the Date Picker lets users navigate to a desired date with several view options – month, year, and decade. It also supports common validation properties such as minimum and maximum date constraints and required fields.

The Ignite UI for Blazor Date Picker Component lets users pick a single date through a month-view calendar dropdown or editable input field. The Blazor Date Picker also supports a dialog mode for selection from the calendar only, locale-aware and customizable date formatting and validation integration.

> [!NOTE]
> The [`IgbDatePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html) is a brand new component from Ignite UI for Blazor version . The old [`IgbDatePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html) prior to this version has been renamed to `XDatePicker` and its respective documentation page can be found under "Deprecated Components"

## Blazor Date Picker Example

Below you can see a sample that demonstrates how the Date Picker works when users are enabled to pick a date through a manual text input and click on the calendar icon on the left to navigate to it. See how to render it.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbDatePicker @ref="DatePicker"/>
    </div>
</div>

@code {

    public IgbDatePicker DatePicker { get; set; }
}
```


## Getting Started with Blazor Date Picker

To get started with the [`IgbDatePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html) component, first we need to register its module as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbDatePickerModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbDatePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html) component. The following needs to be placed in the wwwroot/index.html file in a Blazor Web Assembly project or the Pages/\_Host.cshtml file in a Blazor Server project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

For a complete introduction to the Ignite UI for Blazor, read the [**Getting Started**](../general-getting-started.md) topic.

## Using the Blazor Date Picker Component

### Display Date Picker

To instantiate a [`IgbDatePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html) in its default `dropdown` state, use the following code:

```razor
<IgbDatePicker @ref="DatePicker"></IgbDatePicker>
```

### Options

The [`IgbDatePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html) can be bound to a `date`.

```Razor
<IgbDatePicker @ref="DatePicker" Value="@SelectedDate">
</IgbDatePicker>

@code {

    public DateTime SelectedDate { get; set; }
    public IgbDatePicker DatePicker { get; set; }

    protected override void OnInitialized()
    {
        this.SelectedDate = DateTime.Today;
    }
}
```

### Projecting components

With prefix and suffix slots we can add different content before and after the main content of the Input.

```razor
<IgbDatePicker @ref="DatePicker">
    <IgbIcon
        Slot="suffix"
        IconName="arrow_upward"
        Collection="bootstrap"
        Class="small"
        @onclick="() => DatePicker.StepUp(DatePart.Month)">
    </IgbIcon>
</IgbDatePicker>
```

The above snippet will add an additional icon at the end of the input, right after the default clear icon. This will not remove the default toggle icon, though as prefixes and suffixes can be stacked one after the other.

#### Customizing the toggle and clear icons

The calendar and clear icon could be templated by using the `calendar` and `clear` slots:

```razor
<IgbDatePicker>
    <IgbIcon Slot="calendar" IconName="calendar" Collection="material" Class="small"></IgbIcon>
    <IgbIcon Slot="clear" IconName="delete" Collection="material" Class="small"></IgbIcon>
</IgbDatePicker>
```

#### Custom action buttons

The picker's action buttons can be templated using the `actions` slot:

```razor
<IgbDatePicker>
    <IgbButton Slot="actions" @onclick="() => DatePicker.ShowWeekNumbers = true">Show Week Numbers</IgbButton>
</IgbDatePicker>
```

### Keyboard Navigation

The [`IgbDatePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html) has intuitive keyboard navigation that makes it easy to increment, decrement, or jump through different DateParts among others without having to touch the mouse.

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
| <kbd>ESC</kbd> | Closes the calendar pop-up and focuses the input field |

## Examples

### Dialog Mode

The [`IgbDatePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html) also supports a `dialog` mode:

```razor
<IgbDatePicker Mode="PickerMode.Dialog"></IgbDatePicker>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbDatePicker @ref="DatePicker" Mode="PickerMode.Dialog"/>
    </div>
</div>

@code {

    public IgbDatePicker DatePicker { get; set; }
}
```


### Display and input format

[`InputFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html#IgniteUI_Blazor_Controls_IgbDatePicker_InputFormat) and [`DisplayFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html#IgniteUI_Blazor_Controls_IgbDatePicker_DisplayFormat) are properties which can be set to make the picker's editor follow a specified format. The [`InputFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html#IgniteUI_Blazor_Controls_IgbDatePicker_InputFormat) is locale based, so if none is provided, the picker will default to the one used by the browser.

A good thing to note is that the Date Picker Component will always add a leading zero on the `date` and `month` portions if they were provided in a format that does not have it, e.g. `d/M/yy` becomes `dd/MM/yy`. This applies only during editing.

[`DisplayFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html#IgniteUI_Blazor_Controls_IgbDatePicker_DisplayFormat) is used to format the picker's input when it is not focused. If no [`DisplayFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html#IgniteUI_Blazor_Controls_IgbDatePicker_DisplayFormat) is provided, the picker will use the [`InputFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html#IgniteUI_Blazor_Controls_IgbDatePicker_InputFormat) as its [`DisplayFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html#IgniteUI_Blazor_Controls_IgbDatePicker_DisplayFormat).

More information about these can be found in the [`IgbDateTimeInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeInput.html) format section.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbDatePicker @ref="DatePicker" DisplayFormat="shortDate" InputFormat="dd/MM/yy"/>
    </div>
</div>

@code {

    public IgbDatePicker DatePicker { get; set; }
}
```


### Increment and decrement

The [`IgbDatePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html) exposes [`StepUp`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html#IgniteUI_Blazor_Controls_IgbDatePicker_StepUp) and [`StepDown`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html#IgniteUI_Blazor_Controls_IgbDatePicker_StepDown) methods. Both of which come from the [`IgbDateTimeInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeInput.html) and can be used for incrementing and decrementing a specific `DatePart` of the currently set date.

```razor
<IgbDatePicker @ref="DatePicker">
    <IgbIcon
        Slot="prefix"
        IconName="arrow_upward"
        Collection="material"
        @onclick="() => DatePicker.StepUp(DatePart.Month)">
    </IgbIcon>
    <IgbIcon
        Slot="suffix"
        IconName="arrow_downward"
        Collection="material"
        @onclick="() => DatePicker.StepDown(DatePart.Month)">
    </IgbIcon>
</IgbDatePicker>
```

### In Forms

The [`IgbDatePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html) could be used in a form element, the component's [`Min`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html#IgniteUI_Blazor_Controls_IgbDatePicker_Min) and [`Max`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html#IgniteUI_Blazor_Controls_IgbDatePicker_Max) properties act as form validators.

In forms, we can handle the `Change` event of the component and update the value of the label.

```razor
@using IgniteUI.Blazor.Controls

<style>
    .container {
        padding: 0.5rem;
    }

    .horizontal {
        gap: 0.5rem;
    }
</style>

<div class="container vertical">
    <div class="container vertical">
        <form @ref="Form">
            <div class="horizontal">
                <IgbDatePicker @ref="DatePicker"
                               Min="@MinDate"
                               Max="@MaxDate"
                               Value="@SelectedDate"
                               Change="HandleDateChange" />
                <IgbButton onclick="@HandleReset"><span>Reset</span></IgbButton>
            </div>
        </form>
        <p>Date picker value: @(SelectedDate != default ? SelectedDate.ToString("G") : "None")</p>
        <p>Form valid: @FormStatus</p>
    </div>
</div>

@code {
    private IgbDatePicker DatePicker { get; set; }
    private ElementReference Form { get; set; }
    private DateTime SelectedDate { get; set; } = DateTime.Today;
    private DateTime MinDate { get; set; }
    private DateTime MaxDate { get; set; }
    private String FormStatus { get; set; } = "true";

    protected override void OnInitialized()
    {
        var initialDate = DateTime.Today;
        MinDate = initialDate.AddDays(-10);
        MaxDate = initialDate.AddDays(15);

        UpdateFormStatus();
    }

    private void UpdateFormStatus()
    {
        FormStatus = "true";

        if (SelectedDate < MinDate || SelectedDate > MaxDate)
        {
            FormStatus = "false";
        }
    }

    private void HandleDateChange(IgbComponentDateValueChangedEventArgs e)
    {
        if (DateTime.TryParse(e.Detail.ToString(), out var newValue))
        {
            SelectedDate = newValue;
        }
        else
        {
            SelectedDate = default;
        }
        UpdateFormStatus();
    }

    private void HandleReset(MouseEventArgs e)
    {
        SelectedDate = default;
        DatePicker.Clear();
        UpdateFormStatus();
    }


}
```


### Calendar Specific settings

The [`IgbDatePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html) can modify some of the calendar's settings via the properties that the Date Picker exposes. Some of these include [`VisibleMonths`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html#IgniteUI_Blazor_Controls_IgbDatePicker_VisibleMonths) which allows more than one calendar to be displayed when the picker expands, [`WeekStart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html#IgniteUI_Blazor_Controls_IgbDatePicker_WeekStart) which determines the starting day of the week, [`ShowWeekNumbers`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html#IgniteUI_Blazor_Controls_IgbDatePicker_ShowWeekNumbers) which shows the number for each week in the year and more.

## Internationalization

The localization of the [`IgbDatePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html) can be controlled through its [`Locale`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html#IgniteUI_Blazor_Controls_IgbDatePicker_Locale) input.

Here is how a [`IgbDatePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html) with Japanese locale definition would look like:

```razor
<IgbDatePicker Locale="ja-JP"></IgbDatePicker>
```

## Styling

The [`IgbDatePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html) component derives from the [`IgbInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html) and [`IgbCalendar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html) component, so it exposes all available CSS parts. See [Input Styling](../inputs/input.md#styling) and [Calendar Styling](calendar.md#styling) for reference.

```css
igc-date-picker::part(header) {
  background-color: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
}
igc-date-picker::part(calendar-content) {
  background-color: var(--ig-surface-300);
}
igc-date-picker::part(date-inner current) {
  color: var(--ig-info-300);
  background-color: var(--ig-surface-300);
}
igc-date-picker::part(navigation-button):hover,
igc-date-picker::part(months-navigation):hover,
igc-date-picker::part(years-navigation):hover {
  color: var(--ig-secondary-500);
}
igc-date-picker::part(month-inner current),
igc-date-picker::part(year-inner current),
igc-date-picker::part(navigation-button),
igc-date-picker::part(months-navigation),
igc-date-picker::part(years-navigation) {
  color: var(--ig-info-300);
}
igc-date-picker::part(date-inner selected),
igc-date-picker::part(month-inner selected),
igc-date-picker::part(year-inner selected) {
  color: var(--ig-secondary-500-contrast);
  background-color: var(--ig-secondary-500);
}
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbDatePicker @ref="DatePicker" Mode="PickerMode.Dialog"/>
    </div>
</div>

@code {

    public IgbDatePicker DatePicker { get; set; }
}
```


## API References

- [`IgbInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html)
- [`IgbCalendar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html)
- [`IgbDatePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDatePicker.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
