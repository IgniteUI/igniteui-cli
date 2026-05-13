---
title: Blazor Date Range Picker Component - Ignite UI for Blazor
_description: Infragistics' Blazor Date Range Picker allows the user to select a range of two dates from a calendar and set it in an input element.
_keywords: Blazor Date Range Picker, Ignite UI for Blazor, Infragistics
_license: MIT
mentionedTypes: ["DateRangePicker"]
_tocName: Date Range Picker
---

# Blazor Date Range Picker Overview

The Ignite UI for Blazor Date Range Picker is a lightweight component that includes a text input and a calendar pop-up, allowing users to easily select start and end dates. It is highly customizable to fit various application requirements, offering features such as date range restrictions, configurable date formats, and more.

## Date Range Picker Example

Below is a sample demonstrating the [`IgbDateRangePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html) component in action, where a calendar pop-up allows users to select start and end dates.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbDateRangePicker @ref="DateRangePicker" Value="@Range" Label="Date Range" />
    </div>
</div>

@code {

    public IgbDateRangePicker DateRangePicker { get; set; }

    public IgbDateRangeValue Range = new IgbDateRangeValue()
    {
        Start = DateTime.Today,
        End = DateTime.Today.AddDays(3)
    };
}
```

### Getting Started

To get started with the [`IgbDateRangePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html) component, first we need to register its module as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbDateRangePickerModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbDateRangePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html) component. The following needs to be placed in the wwwroot/index.html file in a Blazor Web Assembly project or the Pages/\_Host.cshtml file in a Blazor Server project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

Now you can start with a basic configuration of the Blazor [`IgbDateRangePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html).

For a complete introduction to the Ignite UI for Blazor, read the [**Getting Started**](../general-getting-started.md) topic.

## Usage

The [`IgbDateRangePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html) allows users to select a start and end date either by choosing a date range from a dropdown/calendar pop-up or by typing directly into the input fields - one for the start date and one for the end date.

The picker offers two modes for displaying date values: single input and two inputs. In single input mode, the field is non-editable, and the date range cannot be edited by typing. In two inputs mode, however, users can edit the start and end dates by typing in separate input fields.

When the calendar is visible, a date range can be selected by choosing both a start and end date. Selecting a date will set both the start and end date, and once a second date is chosen, it will set the end date. If a range is already selected, clicking any other date on the calendar will start a new range selection.

### Display Date Range Picker

To instantiate a [`IgbDateRangePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html) in its default single input mode, use the following code:

```razor
<IgbDateRangePicker @ref="DateRangePicker"></IgbDateRangePicker>
```

To switch the [`IgbDateRangePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html) to use two inputs, set the [`UseTwoInputs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_UseTwoInputs) property to `true`.

```razor
<IgbDateRangePicker UseTwoInputs="true"></IgbDateRangePicker>
```

### Value

In addition to being selected or typed by the user, the range value of the [`IgbDateRangePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html) can also be set using the [`Value`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_Value) property. It's important to note that the value must follow the format: **{ start: startDate, end: endDate }**, where `startDate` and `endDate` are `Date` objects representing the selected range.

```razor
 <IgbDateRangePicker @ref="DateRangePicker" Value="@Range" Label="Date Range"/>

 @code {
    public IgbDateRangePicker DateRangePicker { get; set; }

    public IgbDateRangeValue Range = new IgbDateRangeValue()
    {
        Start = DateTime.Today,
        End = DateTime.Today.AddDays(3)
    };
}
```

### Read-only & Non-editable

You can also make the [`IgbDateRangePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html) read-only, which disables changing the range value through both typing and calendar selection, disables keyboard navigation, and makes the calendar and clear icons appear visually disabled. This is useful when the range is assigned via the value attribute and is intended to be display-only. To enable this behavior, simply set the [`ReadOnly`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_ReadOnly) property.

```razor
 <IgbDateRangePicker UseTwoInputs="true" ReadOnly="true"/>
```

Alternatively, you can use the [`NonEditable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_NonEditable) property, which, unlike [`ReadOnly`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_ReadOnly), only prevents editing the input(s) via typing, while still allowing selection through the calendar and clearing via the clear icon.

```razor
 <IgbDateRangePicker UseTwoInputs="true" NonEditable="true"/>
```

### Popup modes

By default, when clicked, the [`IgbDateRangePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html) opens its calendar pop-up in `dropdown` mode. Alternatively, the calendar can be opened in `dialog` mode by setting the [`Mode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_Mode) property to `dialog`.

```razor
 <IgbDateRangePicker Mode="PickerMode.Dialog"/>
```

### Keyboard Navigation

The [`IgbDateRangePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html) features intuitive keyboard navigation, allowing users to easily increment, decrement, or jump between different component parts, all without needing to use a mouse.

The available keyboard navigation options vary depending on whether the component is in single input or two inputs mode.

**Two Inputs Mode:**

|Keys|Description|
|----|-----------|
| <kbd>←</kbd> | Moves the caret one character to the left |
| <kbd>→</kbd> | Moves the caret one character to the right |
| <kbd>CTRL</kbd> + <kbd>ArrowLeft</kbd> | Moves the caret to the beginning of the current input mask section or to the start of the previous one if it's already at the beginning |
| <kbd>CTRL</kbd> + <kbd>ArrowRight</kbd> | Moves the caret to the end of the current input mask section or to the end of the next one if it's already at the end |
| <kbd>ArrowUp</kbd> | Increments the currently "focused" part of the input mask by one step |
| <kbd>ArrowDown</kbd> | Decrements the currently "focused" part of the input mask by one step |
| <kbd>HOME</kbd> | Moves the caret to the beginning of the input mask |
| <kbd>END</kbd> | Moves the caret to the end of the input mask |
| <kbd>CTRL</kbd> + <kbd>;</kbd> | Sets the current date as the value of the component |

**Both Single and Two Inputs Modes:**

|Keys|Description|
|----|-----------|
| <kbd>ALT</kbd> + <kbd>↓</kbd> | Opens the calendar dropdown |
| <kbd>ALT</kbd> + <kbd>↑</kbd> | Closes the calendar dropdown |

You can also navigate within the calendar pop-up using the keyboard. The navigation is the same as in the [`IgbCalendar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html) component.

|Keys|Description|
|----|-----------|
| <kbd>↑</kbd> / <kbd>↓</kbd> / <kbd>←</kbd> / <kbd>→</kbd>| Navigates through the days in the month |
| <kbd>ENTER</kbd> | Selects the currently focused day |
| <kbd>PAGE UP</kbd> | Moves to the previous month's view |
| <kbd>PAGE DOWN</kbd> | Moves to the next month's view |
| <kbd>SHIFT</kbd> + <kbd>PAGE UP</kbd> | Moves to the previous year |
| <kbd>SHIFT</kbd> + <kbd>PAGE DOWN</kbd> | Moves to the next year |
| <kbd>HOME</kbd> | Focuses the first day of the current month that is in view (or earliest month when more than one month view is displayed) |
| <kbd>END</kbd> | Focuses the last day of the current month that is in view. (or latest month when more than one month view is displayed) |
| <kbd>Escape</kbd> | Closes the calender pop-up |

## Layout

### Label

You can define a label for the [`IgbDateRangePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html) component using the [`Label`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_Label) property when it is in single input mode. In two inputs mode, you can use the [`LabelStart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_LabelStart) and [`LabelEnd`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_LabelEnd) properties to define labels for the start and end date input fields, respectively.

```razor
 <IgbDateRangePicker Label="Date Range"/>
```

```razor
 <IgbDateRangePicker UseTwoInputs="true" LabelStart="Start Date" LabelEnd="End Date"/>
```

### Format

You also have the option to customize the date format displayed in the input fields. There are three properties available for this purpose: [`Locale`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_Locale), [`InputFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_InputFormat), and [`DisplayFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_DisplayFormat).

The [`Locale`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_Locale) property allows you to set the desired locale identifier, which determines how the date is formatted based on regional conventions.
For example, to display the date in a Japanese format, you can set the locale property like this:

```razor
 <IgbDateRangePicker Locale="ja-JP"/>
```

If you want to manually define the date format, you can use the [`InputFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_InputFormat) property by passing a custom format string:

```razor
 <IgbDateRangePicker InputFormat="dd/MM/yy"/>
```

The [`DisplayFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_DisplayFormat) property also accepts a custom format string, but it only applies when the input field is idle (i.e., not focused). When the field is focused, the format reverts to the default or to the one defined by [`InputFormat`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_InputFormat), if both properties are used together:

```razor
 <IgbDateRangePicker InputFormat="dd/MM/yy" DisplayFormat='yy/MM/dd'/>
```

### Calendar Layout and Formatting

You can further customize the pop-up calendar using various properties:

|Name|Type|Description|
|--|--|--|
| [`Orientation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_Orientation) | 'vertical' or 'horizontal' | Allows you to set whether the calendar should be displayed vertically or horizontally. |
| [`VisibleMonths`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_VisibleMonths) | string | Controls how many months are visible at a time, with a value of either 1 or 2. |
| [`ShowWeekNumbers`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_ShowWeekNumbers) | string | Enables or disables the week number column in the calendar. |
| [`Open`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseComboBoxLike.html#IgniteUI_Blazor_Controls_IgbBaseComboBoxLike_Open) | boolean | Determines whether the calendar picker is open. |
| [`KeepOpenOnSelect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseComboBoxLike.html#IgniteUI_Blazor_Controls_IgbBaseComboBoxLike_KeepOpenOnSelect) | boolean | Keeps the calendar picker open after a date selection. |
| [`KeepOpenOnOutsideClick`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseComboBoxLike.html#IgniteUI_Blazor_Controls_IgbBaseComboBoxLike_KeepOpenOnOutsideClick) | boolean | Keeps the calendar picker open when clicking outside of it. |
| [`WeekStart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_WeekStart) | string | Sets the start day of the week. |
| [`HideOutsideDays`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_HideOutsideDays) | boolean | Hides days that fall outside the current month view. |
| [`HideHeader`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_HideHeader) | boolean | Hides the calendar header (applicable only in dialog mode). |
| [`HeaderOrientation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_HeaderOrientation) | 'vertical' or 'horizontal' | Aligns the calendar header vertically or horizontally (dialog mode only). |
| [`ActiveDate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_ActiveDate) | Date | Sets the date that is initially highlighted in the calendar. If not set, the current date becomes the active date. |

```razor
 <IgbDateRangePicker Orientation="ContentOrientation.Vertical" VisibleMonths="1" ShowWeekNumbers="true"/>
```

### Min & Max

You can also set the [`Min`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_Min) and [`Max`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_Max) properties to restrict user input by disabling calendar dates outside the defined range. These properties act as validators, so even if the user manually types a date outside the range, the [`IgbDateRangePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html) will become invalid.

```razor
 <IgbDateRangePicker Min="@MinDate" Max="@MaxDate"/>

 @code {
    public DateTime MinDate = new DateTime(DateTime.Today.Year, DateTime.Today.Month, 1);
    public DateTime MaxDate = new DateTime(DateTime.Today.Year, DateTime.Today.Month, 30);
 }
```

### Custom & Predefined Date Ranges

You can also add custom date range chips to the calendar pop-up for faster range selection using the [`CustomRanges`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_CustomRanges) property. For example, you can create a custom date range chip to quickly select the range for the upcoming 7 days, ending with the current date. In addition, by setting the [`UsePredefinedRanges`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_UsePredefinedRanges) property, a set of predefined ranges chips will be displayed along with the custom ones.

```razor
<IgbDateRangePicker CustomRanges="@CustomRanges" UsePredefinedRanges="true" Label="Custom Ranges" />

@code {
    public IgbCustomDateRange[] CustomRanges = [
            new IgbCustomDateRange()
            {
                Label = "Previous 7 Days",
                DateRange = new IgbDateRangeValue()
                {
                    Start = DateTime.Today.AddDays(-7),
                    End = DateTime.Today
                }
            },
            new IgbCustomDateRange()
            {
                Label = "Next 7 Days",
                DateRange = new IgbDateRangeValue()
                {
                    Start = DateTime.Today,
                    End = DateTime.Today.AddDays(7)
                }
            }
    ];
}
```

Now, when you click the newly created **"Next 7 days"** chip in the calendar pop-up, the range will automatically be selected, from today through the next 7 days.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbDateRangePicker @ref="DateRangePicker" CustomRanges="@CustomRanges" Mode="PickerMode.Dialog" UsePredefinedRanges="true" Label="Custom Ranges" />
    </div>
</div>

@code {

    public IgbDateRangePicker DateRangePicker { get; set; }

    public IgbCustomDateRange[] CustomRanges = [
            new IgbCustomDateRange()
            {
                Label = "Previous 7 Days",
                DateRange = new IgbDateRangeValue()
                {
                    Start = DateTime.Today.AddDays(-7),
                    End = DateTime.Today
                }
            },
            new IgbCustomDateRange()
            {
                Label = "Next 7 Days",
                DateRange = new IgbDateRangeValue()
                {
                    Start = DateTime.Today,
                    End = DateTime.Today.AddDays(7)
                }
            }
    ];
}
```

### Disabled & Special dates

You also have the ability to set disabled dates in the calendar to narrow the range of dates the user can choose from. To set the disabled dates, you can use the [`DisabledDates`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_DisabledDates) property.

```razor
<IgbDateRangePicker DisabledDates="@DisabledDates" />

@code {
    public IgbDateRangeDescriptor[] DisabledDates = [
        new IgbDateRangeDescriptor
    {
        RangeType = DateRangeType.Between,
        DateRange = new DateTime[] { new DateTime(DateTime.Today.Year, DateTime.Today.Month, 5), new DateTime(DateTime.Today.Year, DateTime.Today.Month, 8) },
    }];
}
```

You can see more information about all the possibilities that the [`DisabledDates`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_DisabledDates) property offers here: [Disabled dates](./calendar.md#disabled-dates)

You can also do the same if you want to set one or more special dates in the calendar; the only difference is that you need to use the [`SpecialDates`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_SpecialDates) property instead. [Special dates](./calendar.md#special-dates)

### Forms

The [`IgbDateRangePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html) component can also be used seamlessly with the HTML form element. The [`Min`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_Min), [`Max`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_Max), and [`Required`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_Required) properties act as form validators.

```razor
@using IgniteUI.Blazor.Controls

<style>
    .buttons {
        gap: 5px;
        margin-top: 15px;
    }

    igc-dialog::part(content) {
        padding: 1rem;
    }
</style>

<div class="container vertical">
    <div class="container vertical">
        <form @ref="Form" @onsubmit="@HandleSubmit">
            <fieldset class="vertical">
                <IgbDateRangePicker @ref="DateRangePicker" bind-Value="@Range" Label="Date Range" Required="true" Min="@Min" Change="HandleDateRangeChange" />
                <div class="buttons horizontal">
                    <IgbButton Type="submit" Variant="ButtonVariant.Outlined"><span>Submit</span></IgbButton>
                    <IgbButton Type="reset" Variant="ButtonVariant.Outlined"><span>Reset</span></IgbButton>
                </div>
            </fieldset>
        </form>
        <IgbDialog @ref="DialogRef">
            <div class="vertical">
                <span class="horizontal"><b>Start:&emsp;</b> @Range?.Start</span>
                <span class="horizontal"><b>End:&emsp; </b> @Range?.End</span>
            </div>
            <IgbButton slot="footer" @onclick="OnDialogHide" Variant=@ButtonVariant.Flat>OK</IgbButton>
        </IgbDialog>
    </div>
</div>

@code {
    private ElementReference Form { get; set; }
    public IgbDateRangePicker DateRangePicker { get; set; }
    public DateTime Min = new DateTime(DateTime.Today.Year, DateTime.Today.Month, 1);
    public IgbDateRangeValue Range { get; set; }
    public IgbDialog DialogRef;

    private void HandleDateRangeChange(IgbDateRangeValueEventArgs e)
    {
        this.Range = new IgbDateRangeValue
        {
            Start = e.Detail.Start,
            End = e.Detail.End
        };
    }

    public async void HandleSubmit()
    {
        if (this.DialogRef != null)
        {
            await this.DialogRef.ShowAsync();
        }
    }

    public async Task OnDialogHide()
    {
        if (this.DialogRef != null)
        {
            await this.DialogRef.HideAsync();
        }
    }
}
```

## Additional configuration

### Properties

In addition to the properties we've already covered, the [`IgbDateRangePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html) component offers a variety of additional properties that allow you to further configure its behavior.

|Name|Type|Description|
|--|--|--|
| [`Disabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_Disabled) | boolean | Disables the component. |
| [`NonEditable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_NonEditable) | boolean | Disables typing in the input field(s). |
| [`Placeholder`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_Placeholder) | string | Placeholder text for the single input mode. |
| [`PlaceholderStart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_PlaceholderStart) | string | Placeholder text for the start date input (two inputs mode). |
| [`PlaceholderEnd`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_PlaceholderEnd) | string | Placeholder text for the end date input (two inputs mode). |
| [`Outlined`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_Outlined) | boolean | Determines whether the input part will have outline appearance in the [Material theme](../themes/overview.md). |
| [`Prompt`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_Prompt) | string | The prompt character used for unfilled parts of the input(s) mask. |
| [`ResourceStrings`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_ResourceStrings) | IgcDateRangePickerResourceStrings | Resource strings for localization of the date-range picker and the calendar. |

### Slots

You also have the ability to add custom content and modify the appearance of the [`IgbDateRangePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html) component using the available slots.

The `prefix` and `suffix` slots allow you to insert custom content before or after the input field (only available in single input mode):

```razor
<IgbDateRangePicker>
    <IgbIcon @ref="DropDownIcon" slot="prefix" IconName="dropdown" Collection="material"></IgbIcon>
    <IgbIcon @ref="UploadIcon" slot="suffix" IconName="upload" Collection="material"></IgbIcon>
</IgbDateRangePicker>
```

In two inputs mode, you can use the `prefix-start`, `prefix-end`, `suffix-start`, and `suffix-end` slots instead to target the individual inputs.

Another set of useful slots are `clear-icon` and `calendar-icon`, which allow you to customize the icons for the clear and calendar buttons in the input fields:

```razor
<IgbDateRangePicker>
    <IgbIcon slot="clear-icon" @ref="ClearIcon" IconName="bin" Collection="material"></IgbIcon>
    <IgbIcon slot="calendar-icon" @ref="CalendarIcon" IconName="apps" Collection="material"></IgbIcon>
</IgbDateRangePicker>
```

In two inputs mode, you can also customize the default “to” text between the fields by using the `separator` slot:

```razor
<IgbDateRangePicker UseTwoInputs="true">
  <span slot="separator">till</span>
</IgbDateRangePicker>
```

The `actions` slot allows you to insert a custom action button with your own logic. For example, the button below toggles week numbers column in the calendar:

```razor
<IgbDateRangePicker Mode="PickerMode.Dialog" @ref="ActionsDateRange">
    <IgbButton slot="actions" @onclick="() => ActionsDateRange.ShowWeekNumbers = !ActionsDateRange.ShowWeekNumbers">Toggle week numbers</IgbButton>
</IgbDateRangePicker>
```

In addition to the slots we've already covered, the following slots are also available in the [`IgbDateRangePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html) component:

|Name|Description|
|--|--|
| `title` | Renders content for the calendar title. Applicable only in dialog mode. |
| `helper-text` | Renders content below the input field(s). |
| `header-date` | Replaces the default current date/range text in the calendar header. Applicable only in dialog mode. |
| `clear-icon-start` | Custom clear icon for the start input (two inputs mode). |
| `clear-icon-end` | Custom clear icon for the end input (two inputs mode). |
| `calendar-icon-start` | Custom calendar icon for the start input (two inputs mode). |
| `calendar-icon-end` | Custom calendar icon for the end input (two inputs mode). |
| `calendar-icon-open` | Icon or content shown when the picker is open (applies to both inputs in two inputs mode). |
| `calendar-icon-open-start` | Icon or content for the open state of the start input (two inputs mode).|
| `calendar-icon-open-end` | Icon or content for the open state of the end input (two inputs mode). |

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <h3>Actions</h3>
        <IgbDateRangePicker Mode="PickerMode.Dialog" @ref="ActionsDateRange">
            <IgbButton slot="actions" @onclick="() => ActionsDateRange.ShowWeekNumbers = !ActionsDateRange.ShowWeekNumbers">Toggle week numbers</IgbButton>
        </IgbDateRangePicker>

        <h3>Custom separator</h3>
        <IgbDateRangePicker UseTwoInputs="true">
            <span slot="separator">till</span>
        </IgbDateRangePicker>

        <h3>Helper text</h3>
        <IgbDateRangePicker>
            <span slot="helper-text">Helper text goes here.</span>
        </IgbDateRangePicker>

        <h3>Prefix & Suffix</h3>
        <IgbDateRangePicker>
            <IgbIcon @ref="DropDownIcon" slot="prefix" IconName="dropdown" Collection="material"></IgbIcon>
            <IgbIcon @ref="UploadIcon" slot="suffix" IconName="upload" Collection="material"></IgbIcon>
        </IgbDateRangePicker>

        <h3>Clear & Calendar icons</h3>
        <IgbDateRangePicker>
            <IgbIcon slot="clear-icon" @ref="ClearIcon" IconName="bin" Collection="material"></IgbIcon>
            <IgbIcon slot="calendar-icon" @ref="CalendarIcon" IconName="apps" Collection="material"></IgbIcon>
        </IgbDateRangePicker>

        <h3>Custom calendar header + title</h3>
        <IgbDateRangePicker Mode="PickerMode.Dialog">
            <span slot="title">Custom calendar title goes here.</span>
            <span slot="header-date">Custom content instead of date goes here.</span>
        </IgbDateRangePicker>
    </div>
</div>

@code {
    public IgbDateRangePicker ActionsDateRange { get; set; }
    private IgbIcon DropDownIcon { get; set; }
    private IgbIcon UploadIcon { get; set; }
    private IgbIcon ClearIcon { get; set; }
    private IgbIcon CalendarIcon { get; set; }

    // Register custom icons
    protected override void OnAfterRender(bool firstRender)
    {
        base.OnAfterRender(firstRender);
        if (this.DropDownIcon != null && firstRender)
        {
            string ddIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#e3e3e3'><path d='M480-360 280-560h400L480-360Z'/></svg>";

            this.DropDownIcon.EnsureReady().ContinueWith(new Action<Task>((e) =>
               {
                   this.DropDownIcon.RegisterIconFromText("dropdown", ddIcon, "material");
               }));
        }

        if (this.UploadIcon != null && firstRender)
        {
            string upload = "<svg xmlns=\'http://www.w3.org/2000/svg\' height=\'24px\' viewBox=\'0 -960 960 960\' width=\'24px\' fill=\'#e3e3e3\'><path d=\'M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z\'/></svg>";

            this.UploadIcon.EnsureReady().ContinueWith(new Action<Task>((e) =>
               {
                   this.UploadIcon.RegisterIconFromText("upload", upload, "material");
               }));
        }

        if (this.CalendarIcon != null && firstRender)
        {
            string apps = "<svg xmlns=\'http://www.w3.org/2000/svg\' height=\'24px\' viewBox=\'0 -960 960 960\' width=\'24px\' fill=\'#e3e3e3\'><path d=\'M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z\'/></svg>";
            this.CalendarIcon.EnsureReady().ContinueWith(new Action<Task>((e) =>
              {
                  this.CalendarIcon.RegisterIconFromText("apps", apps, "material");
              }));
        }

        if (this.ClearIcon != null && firstRender)
        {
            string bin = "<svg xmlns=\'http://www.w3.org/2000/svg\' height=\'24px\' viewBox=\'0 -960 960 960\' width=\'24px\' fill=\'#e3e3e3\'><path d=\'M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z\'/></svg>";
            this.ClearIcon.EnsureReady().ContinueWith(new Action<Task>((e) =>
             {
                 this.ClearIcon.RegisterIconFromText("bin", bin, "material");
             }));  
        }
    }
}
```

### Methods

In addition to the properties and slots, the [`IgbDateRangePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html) also exposes few methods that you can use:

|Name|Description|
|--|--|
| [`Show`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseComboBoxLike.html#IgniteUI_Blazor_Controls_IgbBaseComboBoxLike_Show) | Displays the calendar picker component. |
| [`Hide`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseComboBoxLike.html#IgniteUI_Blazor_Controls_IgbBaseComboBoxLike_Hide) | Hides the calendar picker component. |
| [`Toggle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseComboBoxLike.html#IgniteUI_Blazor_Controls_IgbBaseComboBoxLike_Toggle) | Toggles the calendar picker between the shown and hidden states. |
| [`Clear`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_Clear) | Clears the input fields, removing any user input. |
| [`Select`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_Select) | Selects a date range value in the picker. |
| [`SetCustomValidity`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html#IgniteUI_Blazor_Controls_IgbDateRangePicker_SetCustomValidity) | Sets a custom validation message. If the provided message is not empty, the input will be marked as invalid. |

## Styling

Since the [`IgbDateRangePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html) component uses the [`IgbCalendar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html) component, it also inherits the Calendar's CSS parts, allowing you to style both components seamlessly. You can find the full list of exposed Calendar CSS parts here: [Calendar Styling](calendar.md#styling). In addition to the Calendar's CSS parts, the [`IgbDateRangePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html) also exposes some unique CSS parts that you can use to customize its appearance:

|Name|Description|
|--|--|
| `separator` | The separator element between the two inputs. |
| `ranges` | The wrapper that renders the custom and predefined ranges. |
| `label` | The label wrapper that renders content above the target input. |
| `container` | The main wrapper that holds all main input elements. |
| `input` | The native input element. |
| `prefix` | The prefix wrapper. |
| `suffix` | The suffix wrapper. |
| `calendar-icon` | The calendar icon wrapper for the closed state. |
| `calendar-icon-start` | The calendar icon wrapper for the closed state of the start input (two inputs). |
| `calendar-icon-end` | The calendar icon wrapper for the closed state of the end input (two inputs). |
| `calendar-icon-open` | The calendar icon wrapper for the open state. |
| `calendar-icon-open-start` | The calendar icon wrapper for the open state of the start input (two inputs). |
| `calendar-icon-open-end` | The calendar icon wrapper for the open state of the end input (two inputs). |
| `clear-icon` | The clear icon wrapper (single input). |
| `clear-icon-start` | The clear icon wrapper for the start input (two inputs). |
| `clear-icon-end` | The clear icon wrapper for the end input (two inputs). |
| `actions` | The actions wrapper. |
| `helper-text` | The helper-text wrapper that renders content below the target input. |

```css
igc-date-range-picker::part(label) {
  color: var(--ig-gray-600);
}

igc-date-range-picker::part(calendar-icon-start),
igc-date-range-picker::part(calendar-icon-end) {
  background-color: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
}

igc-date-range-picker::part(calendar-icon-open-start),
igc-date-range-picker::part(calendar-icon-open-end) {
  background-color: var(--ig-primary-700);
  color: var(--ig-primary-700-contrast);
}

igc-date-range-picker::part(clear-icon-start),
igc-date-range-picker::part(clear-icon-end) {
  background-color: var(--ig-error-500);
  color: var(--ig-error-500-contrast);
}
```

```razor
@using IgniteUI.Blazor.Controls

<style>
    igc-date-range-picker::part(label) {
        color: var(--ig-gray-600);
    }

    igc-date-range-picker::part(calendar-icon-start),
    igc-date-range-picker::part(calendar-icon-end) {
        background-color: var(--ig-primary-500);
        color: var(--ig-primary-500-contrast);
    }

    igc-date-range-picker::part(calendar-icon-open-start),
    igc-date-range-picker::part(calendar-icon-open-end) {
        background-color: var(--ig-primary-700);
        color: var(--ig-primary-700-contrast);
    }

    igc-date-range-picker::part(clear-icon-start),
    igc-date-range-picker::part(clear-icon-end) {
        background-color: var(--ig-error-500);
        color: var(--ig-error-500-contrast);
    }
</style>

<div class="container vertical">
    <div class="container vertical">
        <IgbDateRangePicker @ref="DateRangePicker" UseTwoInputs="true" LabelStart="Departure date" LabelEnd="Arrival date">
            <IgbIcon @ref="UpPlane" slot="calendar-icon-start" IconName="up-plane" Collection="material"></IgbIcon>
            <IgbIcon @ref="DownPlane" slot="calendar-icon-end" IconName="down-plane" Collection="material"></IgbIcon>
        </IgbDateRangePicker>
    </div>
</div>

@code {

    public IgbDateRangePicker DateRangePicker { get; set; }
    private IgbIcon UpPlane { get; set; }
    private IgbIcon DownPlane { get; set; }

    // Register custom icons
    protected override void OnAfterRender(bool firstRender)
    {
        base.OnAfterRender(firstRender);
        if (this.UpPlane != null && firstRender)
        {
            string upPlane = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#e3e3e3\"><path d=\"M120-120v-80h720v80H120Zm70-200L40-570l96-26 112 94 140-37-207-276 116-31 299 251 170-46q32-9 60.5 7.5T864-585q9 32-7.5 60.5T808-487L190-320Z\"/></svg>";
            this.UpPlane.EnsureReady().ContinueWith(new Action<Task>((e) =>
               {
                   this.UpPlane.RegisterIconFromText("up-plane", upPlane, "material");
               }));
        }

        if (this.DownPlane != null && firstRender)
        {
            string downPlane = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#e3e3e3\"><path d=\"M120-120v-80h720v80H120Zm622-202L120-499v-291l96 27 48 139 138 39-35-343 115 34 128 369 172 49q25 8 41.5 29t16.5 48q0 35-28.5 61.5T742-322Z\"/></svg>";
            this.DownPlane.EnsureReady().ContinueWith(new Action<Task>((e) =>
               {
                   this.DownPlane.RegisterIconFromText("down-plane", downPlane, "material");
               }));
        }
    }
}
```

## API References

- [`IgbInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html)
- [`IgbCalendar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html)
- [`IgbDateRangePicker`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangePicker.html)
- [`IgbDateTimeInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeInput.html)
- [`IgbDialog`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDialog.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
