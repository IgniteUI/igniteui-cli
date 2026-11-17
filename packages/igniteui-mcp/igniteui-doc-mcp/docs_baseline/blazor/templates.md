---
title: "Blazor Combo Templates"
description: "The Ignite UI for Blazor Combo Templates replace the default content of the Combo areas: the items, the group headers, the header and the footer of the list, the empty list, the toggle and the clear icons, and the input field."
keywords: "Blazor Combo Templates, Ignite UI for Blazor, combo item template, combo group header template, combo header template, combo footer template, combo empty template, combo toggle icon, combo clear icon, templated combo input"
license: MIT
last_updated: "2026-11-09"
mentionedTypes: ["Combo", "ComboItem", "ComboHeader", "ComboList"]
llms:
  description: "The Ignite UI for Blazor Combo Templates replace the default content of the Combo areas: the items, the group headers, the header and the footer of the list, the empty list, the toggle and the clear icons, and the input field."
_tocName: Templates
---
# Combo Templates

The Ignite UI for Blazor Combo Templates replace the default content of the Combo areas: the items, the group headers, the header and the footer of the list, the empty list, the toggle and the clear icons, and the input field.

The Blazor Combo renders its items and group headers through JavaScript template functions that the [`ItemTemplateScript`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=ItemTemplateScript) and [`GroupHeaderTemplateScript`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=GroupHeaderTemplateScript) parameters reference by name, and takes the content of the other areas through its slots. Use a `<span>` for simple text or symbols, and an [Icon](../../layouts/icon.md) for icons. The `header` and `footer` slots also accept the `<header>` and `<footer>` elements.

## Live Demo

The sample shows a Destinations combo with cities grouped by region. Each switch applies one template to the combo, and the Selection list below the combo shows the selected cities.

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <IgbCombo 
        @bind-Value="selectedCities"
        Data="Data" 
        ValueKey="Id" 
        DisplayKey="Name"
        GroupKey="Country"
        ItemTemplateScript="ComboItemTemplate"
        GroupHeaderTemplateScript="ComboGroupHeaderTemplate">
        <header slot="header">
            Header content goes here
        </header>
        <IgbIcon @ref="@iconRef" name="clear" slot="clear-icon"></IgbIcon>
        <IgbIcon name="down" slot="toggle-icon"></IgbIcon>
        <footer slot="footer">
            Footer content goes here
        </footer>
    </IgbCombo>
</div>

@code {
    private List<City> Data;
    private string[] selectedCities = [];
    private IgbIcon iconRef { get; set; }
    private string toggleIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M7 10l5 5 5-5z'/></svg>";
    private string clearIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>";

    protected override void OnInitialized() {
        this.Data = SampleData.Cities;
    }

    protected override void OnAfterRender(bool firstRender) {
        if (firstRender) {
            this.iconRef.EnsureReady().ContinueWith(new Action<Task>((e) => {
                this.iconRef.RegisterIconFromTextAsync("down", toggleIcon, "default");
                this.iconRef.RegisterIconFromTextAsync("clear", clearIcon, "default");
            }));
        }
    }
}
```

## Types

The Blazor Combo has a template for each area that it renders. The following sections show the property or the slot that takes each template.

The snippets bind the Combo to destinations that have an `id`, a `name`, a `country`, a `countryCode`, a `region`, and a UTC `offset`, with `id` as the `valueKey`, `name` as the `displayKey`, and `region` as the `groupKey`. The Blazor snippets use the same fields in Pascal case: `Id`, `Name`, `Country`, `CountryCode`, `Region`, and `Offset`.

### Item Template

The item template renders the content of each option in the list. By default, an option shows its `displayKey` value, and the checkbox of the option stays in front of the template content.

The item and the group header templates render inside the shadow DOM of the Combo, where the styles of the page don't reach. Style their containers through the `item` and `group-header` CSS parts, and lay out their content with inline styles. The Combo lays out each root element of a template as a block, so wrap the content of a template in a single element.

Define the template in a JavaScript file under `wwwroot`, for example `templates.js`. The template is a function that receives the item and returns a template made with the `html` tag of `igTemplating`, and `igRegisterScript` registers it under the name that the Combo references:

```js
const html = window.igTemplating.html;

const itemTemplate = ({ item }) => html`
    <span>
        <img src="https://dl.infragistics.com/x/img/flags/${item.CountryCode}.png" alt="" style="width: 1.25rem;" />
        ${item.Name} — ${item.Country} · ${item.Id} · ${item.Offset}
    </span>
`;

igRegisterScript("ComboItemTemplate", itemTemplate, false);
```

Include the file in `wwwroot/index.html`. The script calls `igRegisterScript` while the page loads, so include `app.bundle.js` before the Blazor script:

```html
<body>
    <script src="_content/IgniteUI.Blazor/app.bundle.js"></script>
    <script src="_framework/blazor.webassembly.js"></script>
    <script src="templates.js"></script>
</body>
```

Then set the [`ItemTemplateScript`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=ItemTemplateScript) parameter to the name of the template:

```razor
<IgbCombo T="string" Data="Destinations" ValueKey="Id" DisplayKey="Name" GroupKey="Region" ItemTemplateScript="ComboItemTemplate" />
```

### Header Item Template

The header item template renders the header of each group when the Combo has a `groupKey`. By default, a group header shows the group value. The template receives a header record, not a data item: its `groupKey` field holds the group value, so a count of the options in the group comes from the data of the Combo, as the `citiesIn` method of the snippets does.

Register the template in `templates.js`, and set the [`GroupHeaderTemplateScript`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=GroupHeaderTemplateScript) parameter to its name:

```js
const groupHeaderTemplate = ({ item }) => html`
    <span style="display: flex; gap: 0.5rem; width: 100%;">
        <strong>${item.Region}</strong>
        <span style="margin-inline-start: auto;">${citiesIn(item.Region)} cities</span>
    </span>
`;

igRegisterScript("ComboGroupHeaderTemplate", groupHeaderTemplate, false);
```

```razor
<IgbCombo T="string" Data="Destinations" ValueKey="Id" DisplayKey="Name" GroupKey="Region" GroupHeaderTemplateScript="ComboGroupHeaderTemplate" />
```

### Header Template

The header template renders content between the search input and the list of options, such as a title of the list or an action that applies to it. The Combo renders no header by default.

Pass the content to the `header` slot. The snippet adds a button that selects all options by setting the bound value to the `Id` values of all destinations:

```razor
<IgbCombo @bind-Value="SelectedDestinations" Data="Destinations" ValueKey="Id" DisplayKey="Name" GroupKey="Region">
    <header slot="header" class="list-header">
        <span>Destinations by region</span>
        <IgbButton Variant="ButtonVariant.Flat" @onclick="SelectAll">Select all</IgbButton>
    </header>
</IgbCombo>

@code {
    private string[] SelectedDestinations { get; set; } = [];

    private void SelectAll() => SelectedDestinations = Destinations.Select(d => d.Id).ToArray();
}
```

### Footer Template

The footer template renders content below the list of options, such as a summary of the selection or an action that applies to it. The Combo renders no footer by default.

Pass the content to the `footer` slot. The snippet shows the number of selected items from the bound value, and clears the selection by setting it to an empty array:

```razor
<IgbCombo @bind-Value="SelectedDestinations" Data="Destinations" ValueKey="Id" DisplayKey="Name" GroupKey="Region">
    <footer slot="footer" class="list-footer">
        <span>@SelectedDestinations.Length selected</span>
        <IgbButton Variant="ButtonVariant.Flat" @onclick="() => SelectedDestinations = []">Clear</IgbButton>
    </footer>
</IgbCombo>
```

### Empty Template

The empty template renders in place of the list when the search text matches no option, or when the Combo has no data. By default, the Combo shows a message that the list is empty.

Pass the content to the `empty` slot:

```razor
<IgbCombo T="string" Data="Destinations" ValueKey="Id" DisplayKey="Name" GroupKey="Region">
    <span slot="empty" class="empty-list">No city matches your search. Try another spelling.</span>
</IgbCombo>
```

### Toggle Icon Template

The toggle icon template replaces the icon of the toggle button in the input field, which opens and closes the dropdown.

Pass the icon to the `toggle-icon` slot. The slot content shows both when the dropdown is closed and when it is open. Register the icon first, as the [Icon](../../layouts/icon.md) topic shows:

```razor
<IgbCombo T="string" Data="Destinations" ValueKey="Id" DisplayKey="Name">
    <IgbIcon slot="toggle-icon" @ref="IconRef" IconName="flight" Collection="material" />
</IgbCombo>

@code {
    private IgbIcon IconRef { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && this.IconRef != null)
        {
            await this.IconRef.EnsureReady();
            await this.IconRef.RegisterIconFromTextAsync("flight", FlightIcon, "material");
        }
    }
}
```

### Clear Icon Template

The clear icon template replaces the icon of the clear button in the input field. The Combo shows the clear button only when it has a selection, and hides it when `disableClear` is set.

Pass the icon to the `clear-icon` slot:

```razor
<IgbCombo T="string" Data="Destinations" ValueKey="Id" DisplayKey="Name">
    <IgbIcon slot="clear-icon" IconName="close" Collection="material" />
</IgbCombo>
```

### Templated Input

The input field of the Combo takes a label, content before and after its text, and a helper text below it, the way the [Input](../input.md) does.

Set the `Label` parameter, pass the content before and after the text to the `prefix` and `suffix` slots, and the helper text to the `helper-text` slot. The `suffix` slot renders after the clear icon and before the toggle icon:

```razor
<IgbCombo @bind-Value="SelectedDestinations" Data="Destinations" ValueKey="Id" DisplayKey="Name" Label="Destinations" Placeholder="Pick one or more cities">
    <IgbIcon slot="prefix" IconName="place" Collection="material" />
    <IgbBadge slot="suffix">@SelectedDestinations.Length</IgbBadge>
    <span slot="helper-text">@SelectedDestinations.Length of @Destinations.Count destinations selected</span>
</IgbCombo>
```

## API References

The Blazor Combo API reference lists the complete API surface for the target platform.

- [`IgbCombo<T>`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E)

## Additional Resources

The following resources provide more Blazor Combo guidance and project support:

- [Combo](./overview.md)
- [Combo Features](./features.md)
- [Single Selection Combo](./single-selection.md)

- [Combo - Design System Component](https://www.infragistics.com/products/indigo-design/help/components/combo)
- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
