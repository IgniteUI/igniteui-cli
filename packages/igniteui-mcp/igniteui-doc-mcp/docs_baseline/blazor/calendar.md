---
title: Blazor Calendar Component - Ignite UI for Blazor
_description: With Blazor Calendar Component, users can create intuitive calendars for applications to display date information using three different selection modes. Try it Now
_keywords: Blazor Calendar, Ignite UI for Blazor, Infragistics
_license: MIT
mentionedTypes: ["Calendar", "DateRangeType", "DateRangeDescriptor"]
_tocName: Calendar
---

# Blazor Calendar Overview

The Ignite UI for Blazor Calendar component is lightweight and easy to configure. It is used for showing dates and weekdays. It is also the best way for providing monthly or yearly views to end-users. The Ignite UI for Blazor Calendar control lets you restrict the minimum and maximum date ranges that people can navigate through.

The Ignite UI for Ignite UI for Blazor Calendar provides an easy and intuitive way for displaying date information. It packs different features like single or multiple date selection modes, highlight and select date range, keyboard navigation, enabling week numbers, size and spacing options, and more.

## Blazor Calendar Example

The following Blazor [`IgbCalendar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html) component example shows a basic calendar with a single day selection mode. See how it works or inspect the code behind.

<div class="divider--half"></div>

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div style="width: 25rem; border: 1px solid gainsboro;">
        <IgbCalendar />
    </div>
</div>

@code {

}
```

## How To Create a Calendar in Blazor with Ignite UI

Before using the [`IgbCalendar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbCalendarModule));
```

You will also need to link an additional CSS file to apply the styling to the Ignite UI for Blazor [`IgbCalendar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

For a complete introduction to the Ignite UI for Blazor, read the [**Getting Started**](../general-getting-started.md) topic.

The simplest way to start using the Ignite UI for Blazor [`IgbCalendar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html) is as follows:

```razor
<IgbCalendar />
```

### Selection Modes

Users can choose from three different selection modes - single selection, multiple selection or range selection. By default, the Ignite UI for Blazor [`IgbCalendar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html) is using single selection mode but you can change it by setting the [`Selection`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendarBase.html#IgniteUI_Blazor_Controls_IgbCalendarBase_Selection) property as shown in this example.

```razor
<IgbCalendar Selection="@CalendarSelection.Multiple" />
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div style="width: 25rem; border: 1px solid gainsboro;">
        <IgbCalendar Selection="@CalendarSelection.Multiple"/>
    </div>
</div>

@code {

}
```

### Range Selection

Following the same approach, we can switch [`Selection`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendarBase.html#IgniteUI_Blazor_Controls_IgbCalendarBase_Selection) to range mode:

```razor
<IgbCalendar Selection="@CalendarSelection.Range" />
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div style="width: 25rem; border: 1px solid gainsboro;">
        <IgbCalendar Selection="@CalendarSelection.Range" />
    </div>
</div>

@code {

}
```

### Active View and Date

The Ignite UI for Blazor Calendar component allows you to switch between three different views: days, months and years. The [`ActiveView`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html#IgniteUI_Blazor_Controls_IgbCalendar_ActiveView) property of the component reflects the current view. By default, the Calendar displays the current date when loaded initially. You could modify this by setting the [`ActiveDate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html#IgniteUI_Blazor_Controls_IgbCalendar_ActiveDate) property. The [`ActiveDate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html#IgniteUI_Blazor_Controls_IgbCalendar_ActiveDate) property also reflects the changes of the currently visible date made by the end user.

### Header Options

By default, the Ignite UI for Blazor Calendar component renders a header area which contains information about the selected dates. You could hide the header by setting the `HasHeader` property to **false**. You could also configure `vertical` or `horizontal` orientation of the header using the [`HeaderOrientation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html#IgniteUI_Blazor_Controls_IgbCalendar_HeaderOrientation) property.

> [!Note]
> Please note that the Ignite UI for Blazor Calendar header is not rendered when the [`Selection`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendarBase.html#IgniteUI_Blazor_Controls_IgbCalendarBase_Selection) is set to multiple.

> [!Note]
> Please note that the Ignite UI for Blazor Calendar DOM properties use `camelCase` naming while their corresponding HTML attributes are using `kebab-case`. For example the [`HeaderOrientation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html#IgniteUI_Blazor_Controls_IgbCalendar_HeaderOrientation) property corresponds to the `header-orientation` attribute.

The Ignite UI for Blazor Calendar component exposes a `title` slot which allows you to customize the title of the header.

```razor
 <IgbCalendar HeaderOrientation="@CalendarHeaderOrientation.Vertical" HasHeader="true">
    <span slot="title">Trip dates</span>
 </IgbCalendar>
```

The following sample demonstrates the above configuration:

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div style="width: 31.25rem; border: 1px solid gainsboro;">
        <IgbCalendar Selection="@CalendarSelection.Range" HeaderOrientation="@CalendarHeaderOrientation.Vertical" HasHeader="true">
            <span slot="title">Trip dates</span>
        </IgbCalendar>
    </div>
</div>

@code {

}
```

### Disabled dates

In some cases you would want to have disabled dates in the Calendar which can't be selected by the end user. This functionality is achieved by using the [`DisabledDates`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendarBase.html#IgniteUI_Blazor_Controls_IgbCalendarBase_DisabledDates) property. The [`DisabledDates`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendarBase.html#IgniteUI_Blazor_Controls_IgbCalendarBase_DisabledDates) property is an array of [`IgbDateRangeDescriptor`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangeDescriptor.html) objects. Each descriptor has a `Type` and optionally a [`DateRange`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangeDescriptor.html#IgniteUI_Blazor_Controls_IgbDateRangeDescriptor_DateRange) which is an array of `Date` objects.

These are the available options for the `Type` property:

- `After` - disables the dates after the first date in the [`DateRange`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangeDescriptor.html#IgniteUI_Blazor_Controls_IgbDateRangeDescriptor_DateRange)
- `Before` - disables the dates before the first date in the [`DateRange`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangeDescriptor.html#IgniteUI_Blazor_Controls_IgbDateRangeDescriptor_DateRange)
- `Between` - disables the dates between the first and the second date in the [`DateRange`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangeDescriptor.html#IgniteUI_Blazor_Controls_IgbDateRangeDescriptor_DateRange)
- `Specific` - disables the dates specified in the [`DateRange`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangeDescriptor.html#IgniteUI_Blazor_Controls_IgbDateRangeDescriptor_DateRange) array
- `Weekdays` - disables all weekdays
- `Weekends` - disables all weekends

Let's create a sample that is disabling the dates between the 3rd and the 8th of the current month:

```razor
    <IgbCalendar DisabledDates="@DisabledDateDescriptor" />

    @code {
    public IgbDateRangeDescriptor[] DisabledDateDescriptor { get; set; }

    protected override void OnInitialized()
    {
        var today = DateTime.Today;

        DateTime[] range = new DateTime[] { new DateTime(today.Year, today.Month, 3), new DateTime(today.Year, today.Month, 8) };

        IgbDateRangeDescriptor dateDescriptor = new IgbDateRangeDescriptor() { DateRange = range, RangeType = DateRangeType.Specific };

        this.DisabledDateDescriptor = new IgbDateRangeDescriptor[] { dateDescriptor };
    }
}
```

These configurations should have the following result:

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div style="border: 1px solid gainsboro;">
        <IgbCalendar @ref="CalendarRef" DisabledDates="@DisabledDateDescriptor" />
    </div>
</div>

@code {
    public IgbCalendar CalendarRef { get; set; }

    public IgbDateRangeDescriptor[] DisabledDateDescriptor { get; set; }

    protected override void OnInitialized()
    {
        var today = DateTime.Today;

        DateTime[] range = new DateTime[] { new DateTime(today.Year, today.Month, 3), new DateTime(today.Year, today.Month, 8) };

        IgbDateRangeDescriptor dateDescriptor = new IgbDateRangeDescriptor() { DateRange = range, RangeType = DateRangeType.Specific };

        this.DisabledDateDescriptor = new IgbDateRangeDescriptor[] { dateDescriptor };

    }
}
```

### Special dates

The [`SpecialDates`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendarBase.html#IgniteUI_Blazor_Controls_IgbCalendarBase_SpecialDates) property is using almost the same configuration principles as the [`DisabledDates`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendarBase.html#IgniteUI_Blazor_Controls_IgbCalendarBase_DisabledDates). The special dates have a highlighted look and feel and unlike the disabled ones can be selected.

Let's add some special dates to our Calendar. In order to do this, we will create a [`IgbDateRangeDescriptor`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangeDescriptor.html) and pass the dates between the 3rd and the 8th of the current month:

```razor
<IgbCalendar SpecialDates="@CalendarSpecialDates"/>

@code {

    private IgbDateRangeDescriptor[] CalendarSpecialDates { get; set; }

    protected override void OnInitialized()
    {
        DateTime today = DateTime.Today;
        IgbDateRangeDescriptor specialDates = new IgbDateRangeDescriptor()
        {
            DateRange = new[] { new DateTime(today.Year, today.Month, 3), new DateTime(today.Year, today.Month, 8) },
            RangeType = DateRangeType.Between
        };

        this.CalendarSpecialDates = new IgbDateRangeDescriptor[] { specialDates };
    }
}

```

The following demo illustrates a Calendar with a vacation request option:

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div style="width: 25rem; border: 1px solid gainsboro;">
        <IgbCalendar SpecialDates="@CalendarSpecialDates"/>
    </div>
</div>

@code {

    private IgbDateRangeDescriptor[] CalendarSpecialDates { get; set; }

    protected override void OnInitialized()
    {
        DateTime today = DateTime.Today;
        IgbDateRangeDescriptor specialDates = new IgbDateRangeDescriptor()
        {
            DateRange = new[] { new DateTime(today.Year, today.Month, 3), new DateTime(today.Year, today.Month, 8) },
            RangeType = DateRangeType.Between
        };

        this.CalendarSpecialDates = new IgbDateRangeDescriptor[] { specialDates };
    }
}
```

### Week numbers

You can use the [`ShowWeekNumbers`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendarBase.html#IgniteUI_Blazor_Controls_IgbCalendarBase_ShowWeekNumbers) property to show the week numbers of the Calendar component. You can do this by using its corresponding boolean attribute `show-week-numbers` like this:

```razor
<IgbCalendar ShowWeekNumbers="true" />
```

The following demo illustrates a Calendar with enabled week numbers:

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div style="width: 400px; border: 1px solid gainsboro;">
        <IgbCalendar ShowWeekNumbers="true"></IgbCalendar>
    </div>
</div>

@code {

}
```

### Multiple Months

Using the [`VisibleMonths`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html#IgniteUI_Blazor_Controls_IgbCalendar_VisibleMonths) property, you can display more than one month when the Calendar is in `days` view. When multiple months are displayed, you can configure whether you want to stack them vertically or horizontally by using the [`Orientation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html#IgniteUI_Blazor_Controls_IgbCalendar_Orientation) property. By default, the [`Orientation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html#IgniteUI_Blazor_Controls_IgbCalendar_Orientation) property is set to `horizontal`.

The Calendar displays leading and trailing dates from the previous and the next months. You could hide these dates by setting the [`HideOutsideDays`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html#IgniteUI_Blazor_Controls_IgbCalendar_HideOutsideDays) property to **true** or using its corresponding boolean attribute [`HideOutsideDays`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html#IgniteUI_Blazor_Controls_IgbCalendar_HideOutsideDays).

```razor
<IgbCalendar VisibleMonths="2" HideOutsideDays="true" />
```

The following sample demonstrates the multiple months configuration:

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div style="width: 37.5rem; border: 1px solid gainsboro;">
        <IgbCalendar VisibleMonths="2" HideOutsideDays="true"/>
    </div>
</div>

@code {

}
```

### Size

You could control the size and spacing of the calendar inner elements using the `--ig-size` CSS variable. The default size of the component is large.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbRadioGroup Alignment="@ContentOrientation.Horizontal">
        <IgbRadio name="size" Value="Small" label-position="after" Change="OnRadioOptionClick">Small</IgbRadio>
        <IgbRadio name="size" Value="Medium" label-position="after" Checked="true" Change="OnRadioOptionClick">Medium</IgbRadio>
        <IgbRadio name="size" Value="Large" label-position="after" Change="OnRadioOptionClick">Large</IgbRadio>
    </IgbRadioGroup>

    <div style="width: 25rem; border: 1px solid gainsboro;">
        <IgbCalendar class="@CalendarSize"/>
    </div>
</div>

@code {
    private string CalendarSize = "size-medium";

    public void OnRadioOptionClick(IgbRadioChangeEventArgs e)
    {
        this.CalendarSize = $"size-{e.Detail.Value.ToLower()}";
    }
}
```

### Events

The Calendar component emits the `Change` event when the selected dates are changed by the end user. You can subscribe to the event like this:

```razor
<IgbCalendar Change="@OnCalendarChange" />

@code {
    public void OnCalendarChange(IgbComponentDataValueChangedEventArgs args)
    {

    }
}
```

## Keyboard navigation

If you traverse the page using the <kbd>TAB</kbd> key you should keep in mind that based on [W3 accessability recommendations](https://www.w3.org/TR/wai-aria-practices/#layoutGrid) the [`IgbCalendar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html) introduces the following tab stops:

- Month selection button
- Year selection button
- Previous button
- Next button
- Active date element

When a **day/month/year** in the [`IgbCalendar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html) component is focused, use:

- <kbd>PAGE UP</kbd> key to move to the previous month/year/years page.
- <kbd>PAGE DOWN</kbd> key to move to the next month/year/years page.
- <kbd>HOME</kbd> key to focus the first day of the current month/first month in view/first year in view.
- <kbd>END</kbd> key to focus the last day of the current month/last month in view/last year in view.
- <kbd>Arrow</kbd> keys to navigate through the days/months/years. Navigating before the first item and after the last item will switch the view to the next/previous month/year/years page.

When a **day** inside the `days` view is focused, use:

- <kbd>SHIFT</kbd> + <kbd>PAGE UP</kbd> keys to move to the previous year.
- <kbd>SHIFT</kbd> + <kbd>PAGE DOWN</kbd> keys to move to the next year.
- <kbd>SPACE</kbd> or <kbd>ENTER</kbd> key to select the currently focused day.

When a **month** inside the `months` view is focused, use:

- <kbd>SPACE</kbd> or <kbd>ENTER</kbd> key to change the [`ActiveDate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html#IgniteUI_Blazor_Controls_IgbCalendar_ActiveDate) to the currently focused month and switch to `days` view.

When an **year** inside the `years` view is focused, use:

- <kbd>SPACE</kbd> or <kbd>ENTER</kbd> key to change the [`ActiveDate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html#IgniteUI_Blazor_Controls_IgbCalendar_ActiveDate) to the currently focused year and switch to `months` view.

When the **previous** or the **next** buttons (in the subheader) are focused, use:

- <kbd>SPACE</kbd> or <kbd>ENTER</kbd> key to switch to the previous/next month/year/years page.

When the **month** button (in the subheader) is focused, use:

- <kbd>SPACE</kbd> or <kbd>ENTER</kbd> key to switch to `months` view.

When the **year** button (in the subheader) is focused, use:

- <kbd>SPACE</kbd> or <kbd>ENTER</kbd> key to switch to `years` view.

## Styling

The [`IgbCalendar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html) component exposes CSS parts for almost all of its inner elements. The following table lists all of the exposed CSS parts:

|Name|Description|
|--|--|
| `header` | The header element. |
| `header-title` | The header title element. |
| `header-date` | The header date element. |
| `content` | The content element which contains the views and navigation elements. |
| `navigation` | The navigation container element. |
| `months-navigation` | The months navigation button element. |
| `years-navigation` | The years navigation button element. |
| `years-range` | The years range element. |
| `navigation-buttons` | The navigation buttons container. |
| `navigation-button` | Previous/next navigation button. |
| `days-view-container` | The days view container element. |
| `days-view` | Days view element. |
| `months-view` | The months view element. |
| `years-view` | The years view element. |
| `days-row` | Days row element. |
| `label` | Week header label element. |
| `week-number` | Week number element. |
| `week-number-inner` | Week number inner element. |
| `date` | Date element. |
| `date-inner` | Date inner element. |
| `first` | The first selected date element. |
| `last` | The last selected date element. |
| `inactive` | Inactive date element. |
| `hidden` | Hidden date element. |
| `weekend` | Weekend date element. |
| `range` | Range selected element. |
| `special` | Special date element. |
| `disabled` | Disabled date element. |
| `single` | Single selected date element. |
| `preview` | Range selection preview date element. |
| `month` | Month element. |
| `month-inner` | Month inner element. |
| `year` | Year element. |
| `year-inner` | Year inner element. |
| `selected` | Indicates selected state. Applies to date, month and year elements. |
| `current` | Indicates current state. Applies to date, month and year elements. |

Using these CSS parts we can customize thе appearance of the [`IgbCalendar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html) component like this:

```css
igc-calendar::part(date-inner selected),
igc-calendar::part(month-inner selected),
igc-calendar::part(year-inner selected),
igc-calendar::part(month-inner selected):focus,
igc-calendar::part(year-inner selected):focus {
  background: var(--ig-primary-500);
  border-color: var(--ig-primary-800);
}

igc-calendar::part(date-inner selected):hover,
igc-calendar::part(month-inner selected):hover,
igc-calendar::part(year-inner selected):hover {
  background: var(--ig-primary-500);
  border-color: var(--ig-primary-800);
}

igc-calendar::part(label),
igc-calendar::part(navigation-button),
igc-calendar::part(months-navigation):hover,
igc-calendar::part(months-navigation):focus,
igc-calendar::part(years-navigation):hover,
igc-calendar::part(years-navigation):focus {
  color: var(--ig-primary-300);
}

igc-calendar::part(navigation-button):hover,
igc-calendar::part(navigation-button):focus {
  color: var(--ig-primary-800);
}
```

The following sample demonstrates the above CSS configuration:

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <style>
        igc-calendar::part(date-inner selected),
        igc-calendar::part(month-inner selected),
        igc-calendar::part(year-inner selected),
        igc-calendar::part(month-inner selected):focus,
        igc-calendar::part(year-inner selected):focus {
            background: #446418;
            border-color: #446418;
        }

        igc-calendar::part(date-inner selected):hover,
        igc-calendar::part(month-inner selected):hover,
        igc-calendar::part(year-inner selected):hover {
            background: #7d9b5d;
            border-color: #7d9b5d;
        }

        igc-calendar::part(label),
        igc-calendar::part(navigation-button),
        igc-calendar::part(months-navigation):hover,
        igc-calendar::part(months-navigation):focus,
        igc-calendar::part(years-navigation):hover,
        igc-calendar::part(years-navigation):focus {
            color: #7d9b5d;
        }

        igc-calendar::part(navigation-button):hover,
        igc-calendar::part(navigation-button):focus {
            color: #446418;
        }
    </style>
    <div>
        <IgbCalendar />
    </div>
</div>

@code {

}
```

## API References

- [`IgbCalendar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html)
- [`IgbRadio`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadio.html)
- [`IgbRadioGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadioGroup.html)
- [`ActiveDate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html#IgniteUI_Blazor_Controls_IgbCalendar_ActiveDate)
- [`ActiveView`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCalendar.html#IgniteUI_Blazor_Controls_IgbCalendar_ActiveView)
- [`IgbDateRangeDescriptor`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangeDescriptor.html)
- [`DateRange`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateRangeDescriptor.html#IgniteUI_Blazor_Controls_IgbDateRangeDescriptor_DateRange)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
