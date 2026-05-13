---
title: Blazor ComboBox Component – Ignite UI for Blazor
_description: Blazor Combo component provides a powerful input, combining features of the basic HTML input, select, filtering and custom drop-down lists. Try it for FREE
_keywords: Ignite UI for Blazor, UI controls, Blazor widgets, web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor ComboBox component
_license: MIT
mentionedTypes: ["Combo", "ComboItem", "ComboHeader", "ComboList"]
_tocName: Combo Box
---

# Blazor ComboBox Overview

Blazor ComboBox is a lightweight editor that enables users to easily select, filter, and group different predefined options in a provided list. The component also supports options for Blazor ComboBox keyboard navigation, templates to customize how the items, header, and footer are displayed.

The Ignite UI for Blazor ComboBox component provides a list of options from which users can make a selection. It displays all options in a virtualized list of items, meaning the ComboBox can simultaneously show thousands of records, where one or more options can be selected. Additionally, the component features case-sensitive filtering, grouping, complex data binding and more.

## Blazor ComboBox Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <IgbCombo T="string" Data="Data" ValueKey="Id" DisplayKey="Name"></IgbCombo>
</div>

@code {
    private List<City> Data;

    protected override void OnInitialized() {
        this.Data = SampleData.Cities;
    }
}
```

<div class="divider--half"></div>

## Getting Started with Blazor ComboBox

To get started with the [`IgbCombo`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html) component, first we need to register its module as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbComboModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbCombo`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

> [!WARNING]
> The [`IgbCombo`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html) component doesn't work with the standard `<form>` element. Use `Form` instead.

Then, we will bind an array of objects to the combo data source used for building the list of options.

```razor
<IgbCombo T="object" Id="basic-combo" DisplayKey="name" ValueKey="id" Data="Data" />

@code {
    private class City {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
    }

    private List<City> Data = new List<City> {
        new City {
            Id = "UK01",
            Name = "London",
            Country = "United Kingdom",
        },
        new City {
            Id = "BG01",
            Name = "Sofia",
            Country = "Bulgaria",
        },
        new City {
            Id = "US01",
            Name = "New York",
            Country = "United States",
        },
    };
}
```

### Data value and display properties

When the combo is bound to a list of complex data (i.e. objects), we need to specify a property that the control will use to handle item selection. The component exposes the following properties:

<!-- end: Blazor -->

- `T` - **required**, if [`ValueKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_ValueKey) is omitted, this should be set to "object", otherwise this needs to match the property type of [`ValueKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_ValueKey).

<!-- end: Blazor -->

- [`ValueKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_ValueKey) - **Optional**, **required** for complex data object - Determines which field of the data source will be used to make selections. If [`ValueKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_ValueKey) is omitted, the selection API will use object references to select items.
- [`DisplayKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_DisplayKey) - **Optional**, **recommended** for complex data objects - Determines which field in the data source is used as the display value. If no value is specified for [`DisplayKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_DisplayKey), the combo will use the specified [`ValueKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_ValueKey) (if any).
    In our case, we want the combo to display the `name` of each city and use the `id` field for item selection and as the underlying value for each item. Therefore, we provide these properties to the combo's [`ValueKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_ValueKey) and [`DisplayKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_DisplayKey) respectively.

> [!Note]
> When the data source consists of primitive types (e.g. `strings`, `numbers`, etc.), **do not** specify a [`ValueKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_ValueKey) and/or [`DisplayKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_DisplayKey).

### Setting Value

The ComboBox component exposes a [`Value`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_Value) getter and setter in addition to an attribute, which is also called value. You can use the value attribute to set the selected items on component initialization.

If you want to read the value, i.e. the list of currently selected items, or to update the value use the value getter and setter respectively. The value getter will return a list of all selected items as represented by the [`ValueKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_ValueKey). Likewise, if you want to update the list of selected items by using the value setter, you should provide a list of items by their [`ValueKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_ValueKey).

Example:

### Selection API

The combo component exposes APIs that allow you to change the currently selected items.

Besides selecting items from the list of options by user interaction, you can select items programmatically. This is done via the [`Select`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_Select) and [`Deselect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_Deselect) methods. You can pass an array of items to both methods. If the methods are called with no arguments all items will be selected/deselected depending on which method is called. If you have specified a [`ValueKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_ValueKey) for your combo component, then you should pass the value keys of the items you would like to select/deselect:

#### Select/deselect some items

```razor
<IgbCombo
    @ref="Combo"
    Label="Cities"
    Placeholder="Pick a city"
    Data="Data"
    ValueKey="Id"
    DisplayKey="Name">
</IgbCombo>

@code {
    private List<City> Data;
    private IgbCombo Combo;
    private object[] Cities;

    protected override void OnInitialized() {
        this.Data = SampleData.Cities;
        this.Cities = new object[] { "UK01", "UK02", "UK03", "UK04", "UK05" };
    }

    public void SelectCities() {
        this.Combo.Select(Cities);
    }

    public void DeselectCities() {
        this.Combo.Deselect(Cities);
    }
}
```

#### Select/deselect all items

```razor
@code {
    public void SelectAll() {
        this.Combo.Select(new object[] {});
    }

    public void DeselectAll() {
        this.Combo.Deselect(new object[] {});
    }
}
```

If the [`ValueKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_ValueKey) property is omitted, you will have to list the items you wish to select/deselect as objects references:

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <style>
        .button-container {
            display: flex;
            margin-top: 16px;
            gap: 8px;
        }
    </style>

    <IgbCombo 
        T="string"
        Label="Cities" 
        Placeholder="Pick a city" 
        Data="Data" 
        ValueKey="Id" 
        DisplayKey="Name"
        @ref="Combo">
    </IgbCombo>

    <div class="button-container">
        <IgbButton @onclick="SelectUKCities">Select UK Cities</IgbButton>
        <IgbButton @onclick="DeselectUKCities">Deselect UK Cities</IgbButton>
        <IgbButton @onclick="SelectAll">Select All</IgbButton>
        <IgbButton @onclick="DeselectAll">Deselect All</IgbButton>
    </div>
</div>

@code {
    private List<City> Data;
    private IgbCombo<string> Combo;
    private object[] UKCities; 

    protected override void OnInitialized() {
        this.Data = SampleData.Cities;
        this.UKCities = new object[] { "UK01", "UK02", "UK03", "UK04", "UK05" };
    }

    public void SelectUKCities() {
        this.Combo.Select(UKCities);
    }

    public void DeselectUKCities() {
        this.Combo.Deselect(UKCities);
    }

    public void SelectAll() {
        this.Combo.Select(new object[] {});
    }

    public void DeselectAll() {
        this.Combo.Deselect(new object[] {});
    }
}
```

### Validation

The Ignite UI for Blazor Combo component supports most of the [`IgbInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html) properties, such as [`Required`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_Required), [`Disabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_Disabled), [`Autofocus`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html#IgniteUI_Blazor_Controls_IgbInput_Autofocus), [`Invalid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_Invalid), etc. The component also exposes two methods bound to its validation:

- [`ReportValidity`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_ReportValidity) - checks for validity and returns true if the component satisfies the validation constraints.
- [`CheckValidity`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_CheckValidity) - a wrapper around reportValidity to comply with the native input API.

## Keyboard Navigation

When the combo component is focused and the list of options is **not visible**:

- Open the list of options using <kbd>Down/Alt</kbd> + <kbd>Down</kbd> keys.

When the combo component is focused and the list of options is **visible**:

- Using the <kbd>Down</kbd> key will activate the next item in the list.
- Using the <kbd>Up</kbd> key will activate the previous item in the list. If the first item is already active it will focus the input.
- Using the <kbd>HOME</kbd> or <kbd>END</kbd> keys will activate the first or the last item in the list.
- Using the <kbd>SPACE</kbd> key will select the active item.
- Using the <kbd>ENTER</kbd> key will select the active item and close the list of options.
- Using the <kbd>ESC</kbd> or <kbd>TAB/SHIFT</kbd> + <kbd>TAB</kbd> keys will close the list of options.

## Styling

You can change the appearance of the [`IgbCombo`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html) component and its items, by using the exposed CSS parts listed below:

| Part name            | Description                                                                     |
| -------------------- | ------------------------------------------------------------------------------- |
| `label`              | The encapsulated text label.                                                   |
| `input`              | The main input field.                                                          |
| `native-input`       | The native input of the main input field.                                      |
| `prefix`             | The prefix wrapper.                                                            |
| `suffix`             | The suffix wrapper.                                                            |
| `toggle-icon`        | The toggle icon wrapper.                                                       |
| `clear-icon`         | The clear icon wrapper.                                                        |
| `case-icon`          | A case-icon wrapper that renders content inside the suffix of the filter-input. |
| `helper-text`        | The helper text wrapper.                                                       |
| `search-input`       | The search input field.                                                        |
| `list-wrapper`       | The list of options wrapper.                                                   |
| `list`               | The list of options box.                                                       |
| `item`               | Represents each item in the list of options.                                   |
| `group-header`       | Represents each header in the list of options.                                 |
| `active`             | Appended to the item parts list when the item is active.                       |
| `selected`           | Appended to the item parts list when the item is selected.                     |
| `checkbox`           | Represents each checkbox of each list item.                                    |
| `checkbox-indicator` | Represents the checkbox indicator of each list item.                           |
| `checked`            | Appended to checkbox parts list when checkbox is checked.                      |
| `header`             | The container holding the header content.                                      |
| `footer`             | The container holding the footer content.                                      |
| `empty`              | The container holding the empty content.                                       |

Using the CSS parts we have full control over the Combo styling.

```css
igc-combo::part(search-input) {
  background-color: var(--ig-gray-100);
  border-radius: 2px;
}

igc-combo::part(input) {
  background-color: var(--ig-gray-100);
}

igc-combo::part(prefix) {
  background-color: var(--ig-secondary-50);
  color: var(--ig-primary-500);
}

igc-combo::part(toggle-icon) {
  color: var(--ig-primary-500);
}
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <IgbCombo 
        T="string"
        Label="Destinations" 
        Data="Data" 
        ValueKey="Id"
        DisplayKey="Name"
        GroupKey="Country"
        CaseSensitiveIcon>
        <span slot="helper-text">Choose the desired place</span>
        <IgbIcon @ref="locationIconRef" slot="prefix" name="place" collection="material"></IgbIcon>
    </IgbCombo>
</div>

@code {
    private List<City> Data;
    private IgbIcon locationIconRef { get; set; }
    private string placeSvg = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0z' fill='none'/><path d='M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z'/></svg>";

    protected override void OnInitialized() {
        this.Data = SampleData.Cities;
    }

    protected override void OnAfterRender(bool firstRender) {
        if (firstRender) {
            this.locationIconRef.EnsureReady().ContinueWith(new Action<Task>((e) => {
                this.locationIconRef.RegisterIconFromTextAsync("place", placeSvg, "material");
            }));
        }
    }
}
```

## API Reference

- [`IgbCombo`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html)
- [`Styling & Themes`](../../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
