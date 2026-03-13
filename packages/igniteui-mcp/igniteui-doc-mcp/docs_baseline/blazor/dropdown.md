---
title: Blazor Dropdown List Component | Ignite UI for Blazor
_description: With Blazor Dropdown List component you can add interactivity and see styling options to a scrollable list of items in your app. Try it now. Blazor now.
_keywords: Blazor, UI controls, web widgets, UI widgets, Blazor Dropdown Component, Infragistics
_license: MIT
mentionedTypes: ["Dropdown", "DropdownItem", "DropdownHeader", "DropdownGroup"]
_tocName: Dropdown
---

# Blazor Dropdown List Component - Overview

Feature-rich, the Blazor Dropdown list offers out-of-the-box filtering, accessibility, preselected values, flexible data binding, grouping, UI customization, and more. What this component practically does is to effectively and easily replace HTML select tags, enabling users to quickly choose a non-editable value from a predefined set of several options.

The Ignite UI for Blazor Dropdown component displays an toggle list of predefined values and allows users to easily select a single option item with a click. It can be quickly configured to act as a Blazor dropdown menu or you can simply use it to deliver more useful visual information by grouping data. Also, with grouping you can use both flat and hierarchical data.

With our component, you get all the functions and customization options you need for your project – styling customizations, Blazor Dropdown placement options, templates and ability to change what and how is displayed in the header, footer, body, list, etc.

## Blazor Dropdown Example

The following Blazor Dropdown List example demonstrates the use of simple interactive Blazor Dropdown menu in action with three basic options to choose from. See how it works.

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample center">
    <IgbDropdown>
        <IgbButton slot="target">Option</IgbButton>
        <IgbDropdownItem>Option 1</IgbDropdownItem>
        <IgbDropdownItem>Option 2</IgbDropdownItem>
        <IgbDropdownItem>Option 3</IgbDropdownItem>
    </IgbDropdown>
</div>

@code {


}
```


## How to use the Dropdown List with Ignite UI for Blazor

<!-- Blazor -->

Before using the [`IgbDropdown`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDropdown.html), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbDropdownModule));
```

### Target

The Blazor Dropdown list is positioned relatively to its target. The `target` slot allows you to provide a built-in component which toggles the `open` property on click. In some cases you would want to use an external target or use another event to toggle the opening of the Dropdown. You can achieve this using the [`Show`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseComboBoxLike.html#IgniteUI_Blazor_Controls_IgbBaseComboBoxLike_Show), [`Hide`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseComboBoxLike.html#IgniteUI_Blazor_Controls_IgbBaseComboBoxLike_Hide) and [`Toggle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseComboBoxLike.html#IgniteUI_Blazor_Controls_IgbBaseComboBoxLike_Toggle) methods which allow you to provide the target as a parameter. By default, the Dropdown list uses `absolute` CSS position. You will need to set the [`IgbPositionStrategy`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbPositionStrategy.html) of the Blazor Dropdown to `fixed` when the target element is inside a fixed container, but the Dropdown is not. The Dropdown list is automatically sized based on its content, if you want the list to have the same width as the target, you should set the [`SameWidth`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDropdown.html#IgniteUI_Blazor_Controls_IgbDropdown_SameWidth) property to `true`.

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample center">
    <div class="options horizontal">
       <IgbButton style="margin-right: 20px;" @onclick=OnClick>Toggle Dropdown</IgbButton>

       <IgbDropdown @ref="DropDownRef" KeepOpenOnOutsideClick="true" PositionStrategy="DropdownPositionStrategy.Fixed">
           <IgbButton @ref="ButtonRef" slot="target" style="margin-right: 20px;">Dropdown</IgbButton>

           <IgbDropdownItem>Option 1</IgbDropdownItem>
           <IgbDropdownItem>Option 2</IgbDropdownItem>
           <IgbDropdownItem>Option 3</IgbDropdownItem>
       </IgbDropdown>
    </div>
</div>

@code {

    IgbDropdown DropDownRef { get; set; }
    IgbButton ButtonRef { get; set; }

    private void OnClick(MouseEventArgs e)
    {
        this.DropDownRef.Toggle();
    }
}
```


### Position

The preferred placement of the Blazor Dropdown can be set using the [`Placement`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDropdown.html#IgniteUI_Blazor_Controls_IgbDropdown_Placement) property. The default placement of the Dropdown is `bottom-start`. The [`Flip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDropdown.html#IgniteUI_Blazor_Controls_IgbDropdown_Flip) property determines whether the placement should be flipped if there is not enough space to display the Dropdown at the specified placement. The distance from the Blazor Dropdown list to its target can be specified using the [`Distance`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDropdown.html#IgniteUI_Blazor_Controls_IgbDropdown_Distance) property.

```razor
@using IgniteUI.Blazor.Controls


<style>
    igc-dropdown::part(list) {
        height: 200px;
    }

    .center {
        align-items: center;
        justify-content: center;
    }
</style>

<div class="container sample center">
    <IgbDropdown @ref="DropDownRef" Distance="5" Change=OnChange Placement=@placement>
        <IgbButton slot="target">Option</IgbButton>
            <IgbDropdownItem Value="Top">@PopoverPlacement.Top</IgbDropdownItem>
            <IgbDropdownItem Value="TopStart">@PopoverPlacement.TopStart</IgbDropdownItem>
            <IgbDropdownItem Value="TopEnd">@PopoverPlacement.TopEnd</IgbDropdownItem>
            <IgbDropdownItem Value="Bottom">@PopoverPlacement.Bottom</IgbDropdownItem>
            <IgbDropdownItem Value="BottomStart">@PopoverPlacement.BottomStart</IgbDropdownItem>
            <IgbDropdownItem Value="BottomEnd">@PopoverPlacement.BottomEnd</IgbDropdownItem>
            <IgbDropdownItem Value="Left">@PopoverPlacement.Left</IgbDropdownItem>
            <IgbDropdownItem Value="LeftStart">@PopoverPlacement.LeftStart</IgbDropdownItem>
            <IgbDropdownItem Value="LeftEnd">@PopoverPlacement.LeftEnd</IgbDropdownItem>
            <IgbDropdownItem Value="Right">@PopoverPlacement.Right</IgbDropdownItem>
            <IgbDropdownItem Value="RightStart">@PopoverPlacement.RightStart</IgbDropdownItem>
            <IgbDropdownItem Value="RightEnd">@PopoverPlacement.RightEnd</IgbDropdownItem>
    </IgbDropdown>
</div>

    @code {

    IgbDropdown DropDownRef { get; set; }
    PopoverPlacement placement { get; set; }

    private void OnChange(IgbDropdownItemComponentEventArgs e)
    {
        Console.WriteLine(e.Detail.Value);

        switch (e.Detail.Value)
        {
            case "Top":
                placement = PopoverPlacement.Top;
                break;
            case "TopStart":
                placement = PopoverPlacement.TopStart;
                break;
            case "TopEnd":
                placement = PopoverPlacement.TopEnd;
                break;
            case "Bottom":
                placement = PopoverPlacement.Bottom;
                break;
            case "BottomStart":
                placement = PopoverPlacement.BottomStart;
                break;
            case "BottomEnd":
                placement = PopoverPlacement.BottomEnd;
                break;
            case "Left":
                placement = PopoverPlacement.Left;
                break;
            case "LeftStart":
                placement = PopoverPlacement.LeftStart;
                break;
            case "LeftEnd":
                placement = PopoverPlacement.LeftEnd;
                break;
            case "Right":
                placement = PopoverPlacement.Right;
                break;
            case "RightStart":
                placement = PopoverPlacement.RightStart;
                break;
            case "RightEnd":
                placement = PopoverPlacement.RightEnd;
                break;
            default:
                Console.WriteLine("Unknown placement value");
                break;
        }
    }
}
```


### Selection

The [`IgbDropdown`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDropdown.html) emits the `Change` event when the user selects an item. The [`Select`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDropdown.html#IgniteUI_Blazor_Controls_IgbDropdown_Select) method of the Dropdown allows you to select an item by its index or value.

### Item

The [`IgbDropdownItem`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDropdownItem.html) represents a selectable item in the Dropdown list. You could predefine a selected item by setting the [`Selected`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseOptionLike.html#IgniteUI_Blazor_Controls_IgbBaseOptionLike_Selected) property. You could also disable an item so that it can't be selected using the [`Disabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseOptionLike.html#IgniteUI_Blazor_Controls_IgbBaseOptionLike_Disabled) property. The [`IgbDropdownItem`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDropdownItem.html) has a default slot which allows you to specify the content of the item. You could also provide custom content to be rendered before or after the content using the `prefix` and `suffix` slots. The [`Value`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseOptionLike.html#IgniteUI_Blazor_Controls_IgbBaseOptionLike_Value) property allows you to provide a custom value to an item. If the [`Value`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseOptionLike.html#IgniteUI_Blazor_Controls_IgbBaseOptionLike_Value) is not set, it resolves to the text content of the item.

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample center">
    <IgbDropdown>
        <IgbButton slot="target">Category</IgbButton>
        <IgbDropdownItem>
            <IgbIcon @ref=HotelIcon slot="prefix" IconName="hotel-icon" Collection="material"></IgbIcon>
            Hotel
        </IgbDropdownItem>
        <IgbDropdownItem Disabled="true">
            <IgbIcon @ref=GroceryIcon slot="prefix" IconName="grocery-icon" Collection="material"></IgbIcon>
            Grocery
        </IgbDropdownItem>
        <IgbDropdownItem Selected="true">
            <IgbIcon @ref=RestaurantIcon slot="prefix" IconName="restaurant-icon" Collection="material"></IgbIcon>
            Restaurant
        </IgbDropdownItem>
    </IgbDropdown>
</div>

@code {

    IgbIcon HotelIcon { get; set; }
    IgbIcon GroceryIcon { get; set; }
    IgbIcon RestaurantIcon { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && this.HotelIcon != null)
        {
            await this.HotelIcon.EnsureReady();
            //hotel-icon
            string hotelIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4zm2 8h-8V9h6c1.1 0 2 .9 2 2v4z'/></svg>";
            await this.HotelIcon.RegisterIconFromTextAsync("hotel-icon", hotelIcon, "material");
        }

        if (firstRender && this.GroceryIcon != null)
        {
            await this.GroceryIcon.EnsureReady();
            //grocery-icon
            string groceryIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-1.45-5c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6z'/></svg>";
            await this.GroceryIcon.RegisterIconFromTextAsync("grocery-icon", groceryIcon, "material");
        }

        if (firstRender && this.RestaurantIcon != null)
        {
            await this.RestaurantIcon.EnsureReady();
            //restaurant-icon
            string restaurantIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M16 6v8h3v8h2V2c-2.76 0-5 2.24-5 4zm-5 3H9V2H7v7H5V2H3v7c0 2.21 1.79 4 4 4v9h2v-9c2.21 0 4-1.79 4-4V2h-2v7z'/></svg>";
            await this.RestaurantIcon.RegisterIconFromTextAsync("restaurant-icon", restaurantIcon, "material");
        }
    }
}
```


### Header

You could use the [`IgbDropdownHeader`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDropdownHeader.html) to provide a header for a group of items.

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample center">
    <IgbDropdown>
        <IgbButton slot="target">Phone Settings</IgbButton>
        <IgbDropdownHeader>
            <span>Mode</span>
        </IgbDropdownHeader>
        <IgbDropdownItem Selected="true">Ring
            <IgbIcon @ref=RingIcon slot="prefix" IconName="ring-icon" Collection="material"></IgbIcon>
        </IgbDropdownItem>
        <IgbDropdownItem>Vibrate
            <IgbIcon @ref=VibrateIcon slot="prefix" IconName="vibrate-icon" Collection="material"></IgbIcon>
        </IgbDropdownItem>
        <IgbDropdownItem>Silent
            <IgbIcon @ref=SilentIcon slot="prefix" IconName="silent-icon" Collection="material"></IgbIcon>
        </IgbDropdownItem>
    </IgbDropdown>
</div>

@code {

    IgbIcon RingIcon { get; set; }
    IgbIcon VibrateIcon { get; set; }
    IgbIcon SilentIcon { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && this.RingIcon != null)
        {
            await this.RingIcon.EnsureReady();
            //ring-icon
            string ringIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zM7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42z'/></svg>";
            await this.RingIcon.RegisterIconFromTextAsync("ring-icon", ringIcon, "material");
        }

        if (firstRender && this.VibrateIcon != null)
        {
            await this.VibrateIcon.EnsureReady();
            //vibrate-icon
            string vibrateIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M0 15h2V9H0v6zm3 2h2V7H3v10zm19-8v6h2V9h-2zm-3 8h2V7h-2v10zM16.5 3h-9C6.67 3 6 3.67 6 4.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5zM16 19H8V5h8v14z'/></svg>";
            await this.VibrateIcon.RegisterIconFromTextAsync("vibrate-icon", vibrateIcon, "material");
        }

        if (firstRender && this.SilentIcon != null)
        {
            await this.SilentIcon.EnsureReady();
            //silent-icon
            string silentIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm0-15.5c2.49 0 4 2.02 4 4.5v.1l2 2V11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.24.06-.47.15-.69.23l1.64 1.64c.18-.02.36-.05.55-.05zM5.41 3.35L4 4.76l2.81 2.81C6.29 8.57 6 9.74 6 11v5l-2 2v1h14.24l1.74 1.74 1.41-1.41L5.41 3.35zM16 17H8v-6c0-.68.12-1.32.34-1.9L16 16.76V17z'/></svg>";
            await this.SilentIcon.RegisterIconFromTextAsync("silent-icon", silentIcon, "material");
        }
    }
}
```


### Group

The Blazor Dropdown's items can also be grouped using the [`IgbDropdownGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDropdownGroup.html), making it easier for users to differentiate separate categories. See it in action in this Blazor Dropdown List example:

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample center">
    <IgbDropdown>
        <IgbButton slot="target">Countries</IgbButton>
        <IgbDropdownGroup>
            <span slot="label">Europe</span>
            <IgbDropdownItem>
                <IgbIcon @ref=LocationIcon slot="prefix" IconName="drop-icon" Collection="material"></IgbIcon>
              Germany
              <span slot="suffix">DE</span>
            </IgbDropdownItem>
            <IgbDropdownItem>
                <IgbIcon @ref=LocationIcon slot="prefix" IconName="drop-icon" Collection="material"></IgbIcon>
              France
              <span slot="suffix">FR</span>
            </IgbDropdownItem>
            <IgbDropdownItem>
                <IgbIcon @ref=LocationIcon slot="prefix" IconName="drop-icon" Collection="material"></IgbIcon>
              Spain
              <span slot="suffix">DE</span>
              </IgbDropdownItem>
        </IgbDropdownGroup>

        <IgbDropdownGroup>
            <span slot="label">North America</span>
            <IgbDropdownItem>
                <IgbIcon @ref=LocationIcon slot="prefix" IconName="drop-icon" Collection="material"></IgbIcon>
              USA
              <span slot="suffix">US</span>
            </IgbDropdownItem>
            <IgbDropdownItem>
                <IgbIcon @ref=LocationIcon slot="prefix" IconName="drop-icon" Collection="material"></IgbIcon>
              Canada
              <span slot="suffix">CA</span>
            </IgbDropdownItem>
            <IgbDropdownItem>
                <IgbIcon @ref=LocationIcon slot="prefix" IconName="drop-icon" Collection="material"></IgbIcon>
              Mexico
              <span slot="suffix">MX</span>
              </IgbDropdownItem>
        </IgbDropdownGroup>

    </IgbDropdown>
</div>

@code {

    private IgbIcon LocationIcon { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && this.LocationIcon != null)
        {
            await this.LocationIcon.EnsureReady();
            //drop-icon
            string dropIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0z' fill='none'/><path d='M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z'/></svg>";
            await this.LocationIcon.RegisterIconFromTextAsync("drop-icon", dropIcon, "material");
        }
    }
}
```


### Scroll Strategy

The [`ScrollStrategy`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDropdown.html#IgniteUI_Blazor_Controls_IgbDropdown_ScrollStrategy) property determines the behavior of the component during scrolling the container of the target element. The default value is `scroll` which means that the Dropdown will be scrolled with its target. Setting the property to `block` will block the scrolling if the Dropdown is opened. You could also set the property to `close` which means that the Dropdown will be closed automatically on scroll.

### Keep Open

By default, the Dropdown is closed automatically when the user clicks outside of it or selects an item. You could prevent this behavior using the [`KeepOpenOnOutsideClick`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseComboBoxLike.html#IgniteUI_Blazor_Controls_IgbBaseComboBoxLike_KeepOpenOnOutsideClick) and [`KeepOpenOnSelect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbBaseComboBoxLike.html#IgniteUI_Blazor_Controls_IgbBaseComboBoxLike_KeepOpenOnSelect) properties.

## Styling

You can change the appearance of the Dropdown and its items, by using the exposed CSS parts. The [`IgbDropdown`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDropdown.html) exposes `base` and `list` parts, the [`IgbDropdownItem`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDropdownItem.html) exposes `prefix`, `content` and `suffix` parts and the [`IgbDropdownGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDropdownGroup.html) exposes `label` part.

```css
igc-dropdown::part(list) {
  height: 220px;
}

igc-dropdown-item[selected] {
  background: var(--ig-success-300);
}

igc-dropdown-group::part(label) {
  display: flex;
  justify-content: center;
}
```

```razor
@using IgniteUI.Blazor.Controls


<style>
igc-dropdown::part(list) {
    height: 220px;
}

igc-dropdown-item[selected] {
    background: #28a745;
}

igc-dropdown-group::part(label) {
    display: flex;
    justify-content: center;
}
</style>

<div class="container sample center">
    <IgbDropdown>
        <IgbButton slot="target">Countries</IgbButton>
        <IgbDropdownGroup>
            <span slot="label">Europe</span>
            <IgbDropdownItem>
                <IgbIcon @ref=LocationIcon slot="prefix" IconName="drop-icon" Collection="material"></IgbIcon>
              Germany
              <span slot="suffix">DE</span>
            </IgbDropdownItem>
            <IgbDropdownItem>
                <IgbIcon @ref=LocationIcon slot="prefix" IconName="drop-icon" Collection="material"></IgbIcon>
              France
              <span slot="suffix">FR</span>
            </IgbDropdownItem>
            <IgbDropdownItem Selected="true">
                <IgbIcon @ref=LocationIcon slot="prefix" IconName="drop-icon" Collection="material"></IgbIcon>
              Spain
              <span slot="suffix">DE</span>
              </IgbDropdownItem>
        </IgbDropdownGroup>

        <IgbDropdownGroup>
            <span slot="label">North America</span>
            <IgbDropdownItem>
                <IgbIcon @ref=LocationIcon slot="prefix" IconName="drop-icon" Collection="material"></IgbIcon>
              USA
              <span slot="suffix">US</span>
            </IgbDropdownItem>
            <IgbDropdownItem>
                <IgbIcon @ref=LocationIcon slot="prefix" IconName="drop-icon" Collection="material"></IgbIcon>
              Canada
              <span slot="suffix">CA</span>
            </IgbDropdownItem>
            <IgbDropdownItem>
                <IgbIcon @ref=LocationIcon slot="prefix" IconName="drop-icon" Collection="material"></IgbIcon>
              Mexico
              <span slot="suffix">MX</span>
              </IgbDropdownItem>
        </IgbDropdownGroup>

    </IgbDropdown>
</div>

@code {

    private IgbIcon LocationIcon { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && this.LocationIcon != null)
        {
            await this.LocationIcon.EnsureReady();
            //drop-icon
            string dropIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0z' fill='none'/><path d='M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z'/></svg>";
            await this.LocationIcon.RegisterIconFromTextAsync("drop-icon", dropIcon, "material");
        }
    }
}
```


## API Reference

- [`IgbDropdown`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDropdown.html)
- [`IgbDropdownItem`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDropdownItem.html)
- [`IgbDropdownHeader`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDropdownHeader.html)
- [`IgbDropdownGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDropdownGroup.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
