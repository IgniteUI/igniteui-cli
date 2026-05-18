---
title: Blazor Select Component – Ignite UI for Blazor
_description: Ignite UI for Blazor Select component
_keywords: Ignite UI for Blazor, UI controls, Blazor widgets, web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor Select components, Blazor Select controls
_license: MIT
mentionedTypes: ["Select"]
_tocName: Select
---

# Blazor Select

The Ignite UI for Blazor Select component allows a single selection from a list of items, placed in a dropdown. This form control offers a quick items list navigation, including selection, based on a single or multiple characters match.

## Blazor Select Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <IgbSelect>
        <IgbSelectItem Value="orange">Orange</IgbSelectItem>
        <IgbSelectItem Value="appple">Apple</IgbSelectItem>
        <IgbSelectItem Value="banana">Banana</IgbSelectItem>
        <IgbSelectItem Value="mango">Mango</IgbSelectItem>
    </IgbSelect>
</div>

@code { }
```

<div class="divider--half"></div>

## Usage

Before using the [`IgbSelect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelect.html) component, you need to register it together with its additional components:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbSelectModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbSelect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelect.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

> [!Note]
> Please note that the select header and group components are not mandatory unless you want to use them.

To start using the component add the [`IgbSelect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelect.html) along with a list of [`IgbSelectItem`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelectItem.html)'s to choose from:

```razor
<IgbSelect>
    <IgbSelectItem Value="orange">Orange</IgbSelectItem>
    <IgbSelectItem Value="apple">Apple</IgbSelectItem>
    <IgbSelectItem Value="banana">Banana</IgbSelectItem>
    <IgbSelectItem Value="mango">Mango</IgbSelectItem>
</IgbSelect>
```

### Select

The [`IgbSelect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelect.html) component can be used inside a `Form` component, thus it exposes a `Name` property to be registered with. It also has a [`Label`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelect.html#IgniteUI_Blazor_Controls_IgbSelect_Label), and [`Placeholder`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelect.html#IgniteUI_Blazor_Controls_IgbSelect_Placeholder) properties. The [`Outlined`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelect.html#IgniteUI_Blazor_Controls_IgbSelect_Outlined) property is used for styling purposes only when it comes to the Material theme. Except for the default slot, the component provides a few other slots including `header`, `footer`, `helper-text`, `prefix`, `suffix`, and `toggle-icon`. The component size can be changed using the `--ig-size` CSS variable.

### Item

The [`IgbSelectItem`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelectItem.html) component allows the users to declaratively specify a list of options to be used by the [`IgbSelect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelect.html) control. Each item provides a [`Value`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelect.html#IgniteUI_Blazor_Controls_IgbSelect_Value) property that represents the data it carries upon selection. The [`IgbSelectItem`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelectItem.html) has a default slot which allows you to specify the text content of the item. This text content will be used as value in case the [`Value`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelect.html#IgniteUI_Blazor_Controls_IgbSelect_Value) property is not present on the [`IgbSelectItem`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelectItem.html). You could also provide custom content to be rendered before or after the [`IgbSelectItem`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelectItem.html) content using the `prefix` and `suffix` slots. You could predefine a selected item by setting the `Selected` property. You could also disable some or all items via the [`Disabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelect.html#IgniteUI_Blazor_Controls_IgbSelect_Disabled) property.

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <IgbSelect>
        <IgbSelectItem>
            <IgbIcon @ref="IconRef" slot="prefix" name="hotel" collection="material"></IgbIcon>
            Hotel
        </IgbSelectItem>
        <IgbSelectItem disabled>
            <IgbIcon slot="prefix" name="grocery" collection="material"></IgbIcon>
            Grocery
        </IgbSelectItem>
        <IgbSelectItem selected>
            <IgbIcon slot="prefix" name="restaurant" collection="material"></IgbIcon>
            Restaurant
        </IgbSelectItem>
    </IgbSelect>
</div>

@code {
    private IgbIcon IconRef { get; set; }
    private string hotelSvg = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4zm2 8h-8V9h6c1.1 0 2 .9 2 2v4z'/></svg>";
    private string grocerySvg = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-1.45-5c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6z'/></svg>";
    private string restaurantSvg = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M16 6v8h3v8h2V2c-2.76 0-5 2.24-5 4zm-5 3H9V2H7v7H5V2H3v7c0 2.21 1.79 4 4 4v9h2v-9c2.21 0 4-1.79 4-4V2h-2v7z'/></svg>";

    protected override async Task OnAfterRenderAsync(bool firstRender) {
        if(firstRender) {
            await this.IconRef.EnsureReady();
            await this.IconRef.RegisterIconFromTextAsync("hotel", hotelSvg, "material");
            await this.IconRef.RegisterIconFromTextAsync("grocery", grocerySvg, "material");
            await this.IconRef.RegisterIconFromTextAsync("restaurant", restaurantSvg, "material");
        }
    }
}
```

### Header

You can use the [`IgbSelectHeader`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelectHeader.html) to provide a header for a group of items.

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <IgbSelect>
        <IgbSelectHeader>Tasks</IgbSelectHeader>
        <IgbSelectItem Value="spec" Selected>Specification</IgbSelectItem>
        <IgbSelectItem Value="implement">Implementation</IgbSelectItem>
        <IgbSelectItem Value="test" Disabled>Testing</IgbSelectItem>
        <IgbSelectItem Value="docs">Documentation</IgbSelectItem>
    </IgbSelect>
</div>

@code { }
```

```razor
<IgbSelect>
    <IgbSelectHeader>Tasks</IgbSelectHeader>
</IgbSelect>
```

### Group

Multiple [`IgbSelectItem`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelectItem.html)s can be placed between the opening and closing brackets of an [`IgbSelectGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelectGroup.html) component so that users can visually group them together. The [`IgbSelectGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelectGroup.html) can be labelled via its `label` slot and disabled via its [`Disabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelectGroup.html#IgniteUI_Blazor_Controls_IgbSelectGroup_Disabled) property.

> [!Note]
> Keep in mind that if a select group is disabled, you cannot enable separate items of it.

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <IgbSelect>
        <IgbSelectGroup>
            <span slot="label">Europe</span>

            <IgbSelectItem>
              <IgbIcon @ref="IconRef" slot="prefix" name="place" collection="material"></IgbIcon>
              Germany
              <span slot="suffix">DE</span>
            </IgbSelectItem>

            <IgbSelectItem>
              <IgbIcon slot="prefix" name="place" collection="material"></IgbIcon>
              France
              <span slot="suffix">FR</span>
            </IgbSelectItem>

            <IgbSelectItem>
              <IgbIcon slot="prefix" name="place" collection="material"></IgbIcon>
              Spain
              <span slot="suffix">ES</span>
            </IgbSelectItem>
        </IgbSelectGroup>

        <IgbSelectGroup disabled>
            <span slot="label">Asia</span>

            <IgbSelectItem>
              <IgbIcon slot="prefix" name="place" collection="material"></IgbIcon>
              China
              <span slot="suffix">CN</span>
            </IgbSelectItem>

            <IgbSelectItem>
              <IgbIcon slot="prefix" name="place" collection="material"></IgbIcon>
              Japan
              <span slot="suffix">JP</span>
            </IgbSelectItem>

            <IgbSelectItem>
              <IgbIcon slot="prefix" name="place" collection="material"></IgbIcon>
              India
              <span slot="suffix">IN</span>
            </IgbSelectItem>

            <IgbSelectItem>
              <IgbIcon slot="prefix" name="place" collection="material"></IgbIcon>
              Thailand
              <span slot="suffix">TH</span>
            </IgbSelectItem>
        </IgbSelectGroup>

        <IgbSelectGroup>
            <span slot="label">North America</span>

            <IgbSelectItem>
              <IgbIcon slot="prefix" name="place" collection="material"></IgbIcon>
              USA
              <span slot="suffix">US</span>
            </IgbSelectItem>

            <IgbSelectItem>
              <IgbIcon slot="prefix" name="place" collection="material"></IgbIcon>
              Canada
              <span slot="suffix">CA</span>
            </IgbSelectItem>

            <IgbSelectItem>
              <IgbIcon slot="prefix" name="place" collection="material"></IgbIcon>
              Mexico
              <span slot="suffix">MX</span>
            </IgbSelectItem>
        </IgbSelectGroup>

    </IgbSelect>
</div>

@code {
    private IgbIcon IconRef { get; set; }
    private string placeSvg = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0z' fill='none'/><path d='M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z'/></svg>";

    protected override async Task OnAfterRenderAsync(bool firstRender) {
        if(firstRender) {
            await this.IconRef.EnsureReady();
            await this.IconRef.RegisterIconFromTextAsync("place", placeSvg, "material");
        }
    }
}
```

```razor
<IgbSelect>
    <IgbSelectGroup>
        <span slot="label">Europe</span>

        <IgbSelectItem>
          <IgbIcon @ref="IconRef" slot="prefix" name="place" collection="material"></IgbIcon>
          Germany
          <span slot="suffix">DE</span>
        </IgbSelectItem>

        <IgbSelectItem>
          <IgbIcon slot="prefix" name="place" collection="material"></IgbIcon>
          France
          <span slot="suffix">FR</span>
        </IgbSelectItem>

        <IgbSelectItem>
          <IgbIcon slot="prefix" name="place" collection="material"></IgbIcon>
          Spain
          <span slot="suffix">ES</span>
        </IgbSelectItem>
    </IgbSelectGroup>
</IgbSelect>
```

## Validation

In addition, the [`IgbSelect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelect.html) supports most of the [`IgbInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html) properties, such as [`Required`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelect.html#IgniteUI_Blazor_Controls_IgbSelect_Required), [`Disabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelect.html#IgniteUI_Blazor_Controls_IgbSelect_Disabled), [`Autofocus`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html#IgniteUI_Blazor_Controls_IgbInput_Autofocus), etc. The component also exposes a method bound to its validation:

- `reportValidity` - checks for validity and focuses the component if invalid.

## Keyboard Navigation

When the select is focused and the list of options is **not visible**:

- Open the [`Select`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html#IgniteUI_Blazor_Controls_IgbInput_Select) using the <kbd>ALT</kbd> + <kbd>↑</kbd> <kbd>↓</kbd> combination or by clicking on the <kbd>SPACE</kbd> or the <kbd>ENTER</kbd> key.
- Close the [`Select`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html#IgniteUI_Blazor_Controls_IgbInput_Select) using the <kbd>ALT</kbd> + <kbd>↑</kbd> or <kbd>↓</kbd> combination or any of the <kbd>ENTER</kbd>, <kbd>SPACE</kbd>, <kbd>ESC</kbd> or [`IgbTab`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTab.html) keys.
- Using the <kbd>←</kbd> <kbd>→</kbd> keys will select the previous item in the list.
- Using the <kbd>↑</kbd> <kbd>↓</kbd> keys will select the next item in the list.
- Using the <kbd>HOME</kbd> or <kbd>END</kbd> keys will select the first or last item in the list.
- Typing characters will query the list of items and select the one that most closely matches the current user input.

When the select is focused and the list of options is **visible**:

- Using the <kbd>ENTER</kbd> or <kbd>SPACE</kbd> keys will select an item and close the list.
- Using the <kbd>←</kbd> <kbd>→</kbd> keys will activate the previous item in the list.
- Using the <kbd>↑</kbd> <kbd>↓</kbd> keys will activate the next item in the list.
- Using the <kbd>HOME</kbd> or <kbd>END</kbd> keys will activate the first or last item in the list.

> [!Note]
> The [`IgbSelect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelect.html) component supports only **single** selection of items.

## API Reference

- [`IgbSelect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelect.html)
- [`IgbSelectItem`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelectItem.html)
- [`IgbSelectHeader`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelectHeader.html)
- [`IgbSelectGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelectGroup.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
