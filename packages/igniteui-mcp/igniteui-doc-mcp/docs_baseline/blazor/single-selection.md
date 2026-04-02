---
title: Blazor ComboBox Component – Ignite UI for Blazor
_description: Blazor Combo component provides a powerful input, combining features of the basic HTML input, select, filtering and custom drop-down lists. Try it for FREE
_keywords: Ignite UI for Blazor, UI controls, Blazor widgets, web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor ComboBox component
_license: MIT
mentionedTypes: ["Combo", "SingleSelect", "ComboItem", "ComboHeader", "ComboList"]
_tocName: Single Selection
---

# Blazor Single Selection ComboBox

The Blazor `ComboBox` supports single-selection mode and quick filtering of the list of items via the main input prompt. Users can quickly type in the item they are looking for and be presented with a list of options. Upon pressing the enter key, the first highlighted match will be selected.

## Blazor Single Selection Example

To enable single-selection and quick filtering, set the [`SingleSelect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_SingleSelect) property on the [`IgbCombo`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html). The user experience and keyboard navigation will mostly stay the same, but instead of having to type in your search query into a special filtering box above the list of options, the main input box will be used.

```razor
<IgbCombo SingleSelect></IgbCombo>
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <style>
        .options {
            display: flex;
            flex-direction: column;
            margin-top: 12px; 
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
        GroupKey="@Group"
        Disabled="@Disabled"
        SingleSelect>
    </IgbCombo>

    <div class="options">
        <IgbSwitch Change="@OnGroupClick">Enable Grouping</IgbSwitch>
        <IgbSwitch Change="@OnDisableClick">Disable Combo</IgbSwitch>
    </div>
</div>

@code {
    private List<City> Data;
    private string Group = "";
    private bool Disabled = false;

    protected override void OnInitialized() {
        this.Data = SampleData.Cities;
    }

    public void OnGroupClick(IgbCheckboxChangeEventArgs e) {
        IgbSwitch sw = e.Parent as IgbSwitch;
        this.Group = sw.Checked ? "Country" : "";
    }

    public void OnDisableClick(IgbCheckboxChangeEventArgs e) {
        IgbSwitch sw = e.Parent as IgbSwitch;
        this.Disabled = sw.Checked;
    }
}
```


<div class="divider--half"></div>

## Selection API

The selection API for a ComboBox with the [`SingleSelect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_SingleSelect) property applied mostly remains the same, however, there are some important differences compared to ComboBoxes that don't have this property set.

The main difference is that only one item can be selected at any time. For example, if you have specified a [`ValueKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_ValueKey) for your combo component, passing more than one item to the [`Select`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_Select)/[`Deselect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_Deselect) methods will have no effect. This also means that any previously selected items will automatically get deselected upon making a new selection.

Here's how to select/deselect an item programmatically in a single selection combo.

### Selecting items

```razor
<IgbCombo SingleSelect @ref="Combo"></IgbCombo>

@code {
    private IgbCombo Combo;

    this.Combo.Select(new object[] { "UK01" });
}
```

To deselect an item without making a new selection, call the [`Deselect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_Deselect) method.

#### Deselecting items

```razor
<IgbCombo SingleSelect @ref="Combo"></IgbCombo>

@code {
    private IgbCombo Combo;

    this.Combo.Deselect(new object[] { "UK01" });
}
```

## Disabled features

Naturally, some configuration options will have no effect in a single selection ComboBox.

### Placeholder

Assigning a value to the [`PlaceholderSearch`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_PlaceholderSearch) property will yield no result since the filtering input that usually is placed above the list of options will not be present in a single selection ComboBox.

### Auto-focusing the list of options

Setting the [`AutofocusList`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_AutofocusList) option on a single selection ComboBox will also have no effect.

## Keyboard Navigation

The keyboard navigation should behave the same as with a non-single selection ComboBox, except for the fact that now the main input plays the role of a filtering prompt and so all keyboard actions that apply to the filtering/search input are moved to the main input prompt.

## Other Features

All other features will behave the same as in a non-single selection ComboBox component.

## API Reference

- [`IgbCombo`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
