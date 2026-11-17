---
title: "Blazor Single Selection Combo Component"
description: "The Ignite UI for Blazor Single Selection Combo is a Combo in which users select one option and filter the searchable dropdown list by typing in the input field."
keywords: "Blazor Single Selection Combo, Ignite UI for Blazor, single select combo, simple combo, combobox, searchable dropdown, combo filtering"
license: MIT
last_updated: "2026-11-05"
relatedComponents: ["Combo", "Select", "Dropdown"]
mentionedTypes: ["Combo", "ComboItem", "ComboHeader", "ComboList"]
llms:
  description: "The Ignite UI for Blazor Single Selection Combo is a Combo in which users select one option and filter the searchable dropdown list by typing in the input field."
_tocName: Single Selection
---
# Single Selection Combo

The Ignite UI for Blazor Single Selection Combo is a Combo in which users select one option and filter the searchable dropdown list by typing in the input field.

Set [`singleSelect`](mcp:get_api_reference?platform=blazor&component=IgbComboModule&member=singleSelect) on the Blazor Combo to switch it to single selection. The input field becomes editable and filters the list as users type, the search input of the dropdown is hidden, and the options show no checkboxes.

**Note:** 
The Combo has two layout options: Combo with Single Select (Simple Combo) and Combo (Multiple Select).

## Live Demo



## Anatomy

The Simple Combo has two pieces: an Input containing the current selection or a placeholder, and a Dropdown that is shown in order to select an option from a predefined dropdown list.

**Single Selection Combo anatomy:** The Simple Combo has two pieces: an Input containing the current selection or a placeholder, and a Dropdown that is shown in order to select an option from a predefined dropdown list.

<style>{`
  .combo-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .combo-anatomy .igd-anatomy__image {
    max-width: 801px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Input Container:</strong> displays the value and input elements<br />
<strong>2. Label (optional):</strong> text that describes what the user should select<br />
<strong>3. Left Icon(optional):</strong> an optional leading icon that adds context to the field<br />
<strong>4. Hint Text:</strong> helper text shown below the field for extra guidance<br />
<strong>5. Placeholder Text:</strong> default text shown when no value is selected<br />
<strong>6. Toggle:</strong> used to open or close the options list<br />
<strong>7. Dropdown Header:</strong> used to group or describe the dropdown options<br />
<strong>8. Selected Item:</strong> selected Item from the Dropdown List<br />
<strong>9. Dropdown List:</strong> displays the list of selectable options</span>

In the single selection mode, the `igc-combo` element renders an editable input field, hides the search input of the dropdown, and renders the options without checkboxes:

```text
igc-combo[single-select]
└─ #shadow-root
   ├─ igc-popover
   │  ├─ igc-input#target[slot="anchor"]            // the editable input field, exported as the "input" part
   │  │  ├─ slot[name="prefix"]
   │  │  ├─ span[part="clear-icon"]                  // shown when the Combo has a value
   │  │  ├─ slot[name="suffix"]
   │  │  └─ span[part="toggle-icon"]
   │  └─ div[part="list-wrapper"]                    // the dropdown
   │     ├─ div[part="filter-input"][hidden]         // the search input is hidden
   │     ├─ div[part="header"]
   │     │  └─ slot[name="header"]
   │     ├─ igc-virtual-scroll#dropdown[part="list"][role="listbox"]
   │     │  ├─ igc-combo-header[part="group-header"] // one for each group
   │     │  └─ igc-combo-item[part="item"][hide-checkbox] // one for each option
   │     ├─ div[part="empty"]                        // shown when the list has no options
   │     │  └─ slot[name="empty"]
   │     └─ div[part="footer"]
   │        └─ slot[name="footer"]
   └─ igc-validator[part="helper-text"]              // the helper text and the validation messages
```

## Getting Started

To use the Blazor Single Selection Combo, follow the [Ignite UI for Blazor Getting Started](../../general-getting-started.md) topic for the basic project setup, then add the component for your target platform.

The single selection mode is a mode of the Combo, so the package, the registration, and the theme CSS are the ones of the [Combo](./overview.md#getting-started).

Register the Ignite UI for Blazor services:

```csharp
// in Program.cs file

builder.Services.AddIgniteUIBlazor();
```

Registering [`IgbComboModule`](mcp:get_api_reference?platform=blazor&component=IgbComboModule), the client resource module of the [`IgbCombo<T>`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E), is **optional**: the component loads its resources when it first renders. See [Component Modules](../../general-getting-started.md#component-modules).

Then link the theme CSS file in the app's host page, and render the Combo with `SingleSelect`:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

```razor
<IgbCombo T="string" SingleSelect="true" Data="Countries" ValueKey="Id" DisplayKey="Name" Label="Country" />

@code {
    private class Country
    {
        public string Id { get; set; }
        public string Name { get; set; }
    }

    private List<Country> Countries = new()
    {
        new Country { Id = "BY", Name = "Belarus" },
        new Country { Id = "BE", Name = "Belgium" },
        new Country { Id = "BG", Name = "Bulgaria" }
    };
}
```

## Usage

Use the Blazor Single Selection Combo when users pick exactly one option from a list that they need to search, such as a country or a city.

### Type

The Simple Combo Input provides selection between a border type for a more structured perception on solid color backgrounds, and a boxed type that is most appropriate when placed on top of a vivid image to improve readability.

The Blazor Combo uses the box type by default. Set `outlined` for the border type. The box type is a style of the Material theme: in the Bootstrap, Fluent, and Indigo themes, both types look the same.

```razor
<IgbCombo T="object" SingleSelect="true" Outlined="true" Label="Label" Placeholder="Select a value" />
<IgbCombo T="object" SingleSelect="true" Label="Label" Placeholder="Select a value" />
```

Add the label with the `label` property, and the left icon in the `prefix` slot. Register the icon first, as described in the [Icon](../../layouts/icon.md) topic.



### Disabled States

Set `disabled` on the Blazor Single Selection Combo to show the disabled state of both the border and the box type.

```razor
<IgbCombo T="object" SingleSelect="true" Outlined="true" Disabled="true" Placeholder="Country" />
```



### Size

The Combo is available in three sizes: Large, Medium and Small. The Dropdown automatically adjusts its dimensions to match the selected size variant. Set the size with the `--ig-size` CSS variable:

```css
.small {
  --ig-size: var(--ig-size-small);
}

.large {
  --ig-size: var(--ig-size-large);
}
```

The Blazor Combo is medium by default.



### Interaction States

The Combo component supports five states for the enabled variants: Idle, Idle & Hover, Filled, Filled & Hover and Focused, as well as three validation states: Success, Warn, and Error.

Clicking the input field or the toggle opens the dropdown, and typing in the input field opens it and filters the list. To open and close the dropdown in code, use the `Open` parameter or the `ShowAsync`, `HideAsync`, and `ToggleAsync` methods:

```razor
<IgbCombo T="string" @ref="Combo" SingleSelect="true" Data="Countries" ValueKey="Id" DisplayKey="Name" />

@code {
    private IgbCombo<string> Combo;

    private async Task OpenAsync() => await Combo.ShowAsync();
}
```

The following sample shows the states side by side. Because hover and focus come from the pointer and the keyboard, the sample styles the display-only combos for these states with CSS classes.



### Validation States

Every experienced designer uses constraints wisely to limit the user input and avoid invalid states, hence the availability of validation styles. Through the available validation styles, the Combo Input is consistent with the standard [Input](../input.md) and equipped for sophisticated designs that display success, warn, and error visuals.

The Blazor Combo is form-associated. Set `required` to require a selected item, and `invalid` to show the error state. Put the guidance or the error message in the `helper-text` slot. In the single selection mode, the form value is the `valueKey` value of the selected item. The Combo has no built-in success or warn state, so the sample styles these two states with CSS classes.

```razor
<IgbCombo T="object" SingleSelect="true" Outlined="true" Required="true" Invalid="true" Placeholder="Country">
    <span slot="helper-text">Please select a different region</span>
</IgbCombo>
```



### Dropdown Size

The Dropdown used for the Combo comes with the appropriate sizing for Large, Medium and Small Combo similarly to the normal [Dropdown](../dropdown.md) component. The dropdown takes its size from the Combo, so set the `--ig-size` variable on the Combo.

The following sample shows the dropdowns only, without their input fields.



### Dropdown Items

The Dropdown used for the Simple Combo supports two types of items: header and single select item. Both are available in Large, Medium and Small sizes. Through headers, it is possible to organize items in groups.

Set `groupKey` to the field that holds the group of each option, and the Blazor Single Selection Combo shows a header for each group. The options of the single selection mode show no checkboxes. To change the content of the items and the headers, see the [Combo Templates](./templates.md) topic.

```razor
<IgbCombo T="string" SingleSelect="true" ValueKey="Id" DisplayKey="Name" GroupKey="Region" Data="Countries" />
```

The following sample shows a header and an item in each size.



### Dropdown Items States

An item of the Blazor Single Selection Combo dropdown is idle, hovered, or focused, and each of these states has a selected variant. The drop-down theme also has colors for a disabled item.

The following sample shows the states side by side. Because hover and focus come from the pointer and the keyboard, the sample styles the display-only items for these states with CSS classes.



### Data Binding

The Blazor Single Selection Combo binds its options the way the Combo does: bind `data` to an array, and set `valueKey`, `displayKey`, and `groupKey` when the array holds objects. See [Data Binding](./overview.md#data-binding) in the Combo topic.

### Value and Selection

The Blazor Single Selection Combo holds one selected item, and exposes it through its value and its selection API.

The `value` holds the selected item as an array with one element: its `valueKey` value, or the object reference when there is no `valueKey`. Set it to select an item when the Combo first renders. The `select` method selects a single item and deselects the previous one, so pass one item; the `deselect` method deselects it. Called without an item, `select` clears the selection in the single selection mode:

```razor
<IgbCombo T="string" @ref="Combo" SingleSelect="true" Data="Countries" ValueKey="Id" DisplayKey="Name" />

@code {
    private IgbCombo<string> Combo;

    public void SelectBulgaria() => Combo.Select(new object[] { "BG" });

    public void DeselectBulgaria() => Combo.Deselect(new object[] { "BG" });
}
```

The Combo emits `Change` before the user changes the selection. Its detail holds the new value, the changed items, and the type of the change, and canceling it keeps the selection.

### Filtering

Typing in the input field of the Blazor Single Selection Combo opens the dropdown and filters the list to the options that contain the text. The first match becomes the active option, so <kbd>Enter</kbd> selects it.

Set `disableFiltering` to keep the whole list while users type. The `filteringOptions` object sets the key that the text filters by, and whether the filtering is case-sensitive and matches diacritics. When the text matches no option and the Combo loses the focus, the input field is cleared.

```razor
<IgbCombo T="string" SingleSelect="true" DisableFiltering="false" Data="Countries" ValueKey="Id" DisplayKey="Name" />
```

### Do/Don't

When using the Simple Combo, its input and dropdown should have the same width and their left and right borders should match. Regarding how the dropdown is shown when the Simple Combo is focused, you should always show it on top of the content that follows the Simple Combo triggering its display. Combos don't push content like expansion panels do.

<Fragment slot="do">

Align the dropdown with the input so both have the same width and matching left and right borders.

</Fragment>
<Fragment slot="dont">

Avoid a dropdown that is narrower than the input or shifted out of alignment, as it breaks the visual connection between the two.

</Fragment>

## Properties

The Blazor Single Selection Combo exposes the following properties. The single selection mode is a mode of the Combo, so the [Combo](./overview.md#properties) topic lists the complete set. See the API reference for the complete type definitions.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`SingleSelect`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=SingleSelect) | `bool` | `false` | Whether users select a single item and filter the list from the input field. |
| [`Data`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=Data) | `object` | — | The options of the Combo. |
| [`ValueKey`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=ValueKey) | `string` | — | The field that identifies an option. |
| [`DisplayKey`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=DisplayKey) | `string` | — | The field that the list and the input field show. Falls back to the `ValueKey`. |
| [`GroupKey`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=GroupKey) | `string` | — | The field that groups the options. |
| [`Value`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=Value) | `T[]` | — | The selected item, as an array with one element. |
| [`Label`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=Label) | `string` | — | The label of the Combo. |
| [`Placeholder`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=Placeholder) | `string` | — | The text that the input field shows when no item is selected. |
| [`Outlined`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=Outlined) | `bool` | `false` | Whether the Combo uses the border type. |
| [`Open`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=Open) | `bool` | `false` | Whether the dropdown is open. |
| [`Disabled`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=Disabled) | `bool` | `false` | Whether the Combo is disabled. |
| [`Required`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=Required) | `bool` | `false` | Whether the Combo requires a selected item to be valid. |
| [`Invalid`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=Invalid) | `bool` | `false` | Whether the Combo shows its invalid state. |
| [`DisableFiltering`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=DisableFiltering) | `bool` | `false` | Whether typing in the input field leaves the list unfiltered. |
| [`DisableClear`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=DisableClear) | `bool` | `false` | Whether the clear button is hidden. |

## Methods

The Blazor Single Selection Combo exposes the following methods.

| Method | Description |
| --- | --- |
| [`Select`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=Select) | Selects the item that you pass and deselects the previous one. Clears the selection when you pass an empty array. |
| [`Deselect`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=Deselect) | Deselects the item that you pass. |
| [`ShowAsync`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=ShowAsync) | Opens the dropdown. |
| [`HideAsync`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=HideAsync) | Closes the dropdown. |
| [`ToggleAsync`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=ToggleAsync) | Opens the dropdown when it is closed, and closes it when it is open. |

## Events

The Blazor Single Selection Combo emits the following events.

| Name | Description |
| --- | --- |
| [`Change`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=Change) | Emitted before the user changes the selection. The event detail holds the new value, the changed items, and the type of the change. Cancel the event to keep the selection. |
| [`Opening`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=Opening) | Emitted before the user opens the dropdown. Cancelable. |
| [`Opened`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=Opened) | Emitted after the dropdown opens on a user action. |
| [`Closing`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=Closing) | Emitted before the user closes the dropdown. Cancelable. |
| [`Closed`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E&member=Closed) | Emitted after the dropdown closes on a user action. |

## Styling

The Simple Combo comes with the combined styling flexibility of its input and dropdown pieces. There are options for the input text elements' color, border style and color. For the dropdown one may change the background color, or use the various options related to the items in the Simple Combo Dropdown with their background and text colors.

Change the colors of the toggle and the clear buttons of the Blazor Single Selection Combo with the following CSS variables:

| Variable | What it changes |
| --- | --- |
| `--ig-combo-toggle-button-background` | The background of the toggle button. |
| `--ig-combo-toggle-button-foreground` | The icon color of the toggle button. |
| `--ig-combo-toggle-button-foreground-filled` | The icon color of the toggle button when the Combo has a value. |
| `--ig-combo-toggle-button-background-focus` | The background of the toggle button when the Combo is focused. |
| `--ig-combo-toggle-button-foreground-focus` | The icon color of the toggle button when the Combo is focused. |
| `--ig-combo-toggle-button-background-disabled` | The background of the toggle button when the Combo is disabled. |
| `--ig-combo-toggle-button-foreground-disabled` | The icon color of the toggle button when the Combo is disabled. |
| `--ig-combo-clear-button-background` | The background of the clear button. |
| `--ig-combo-clear-button-foreground` | The icon color of the clear button. |
| `--ig-combo-empty-list-placeholder-color` | The color of the text that the empty list shows. |

The input field takes its colors from the `--ig-input-group-*` variables and the dropdown from the `--ig-drop-down-*` variables, so you can set all of them on the Combo. The single selection mode shows no checkboxes, so the `--ig-checkbox-*` variables have no effect.

The `igc-combo` element exposes the following CSS parts in the single selection mode:

| Part | What it styles |
| --- | --- |
| `input` | The input field. |
| `native-input` | The native input of the input field. |
| `label` | The label. |
| `prefix` | The container of the `prefix` slot. |
| `suffix` | The container of the `suffix` slot. |
| `toggle-icon` | The toggle button. `filled` is added when the Combo has a value. |
| `clear-icon` | The clear button. |
| `helper-text` | The helper text. |
| `list-wrapper` | The dropdown. |
| `header` | The container of the `header` slot. |
| `list` | The list of options. |
| `group-header` | Each group header in the list. |
| `item` | Each option in the list. `active` and `selected` are added to the active and the selected options. |
| `empty` | The container of the `empty` slot. |
| `footer` | The container of the `footer` slot. |

### Sass Theming

When you modify a primary property, all related dependent properties are automatically updated to reflect the change. The primary parameter of the `combo-theme` function is `$toggle-button-background`, from which the theme derives the colors of the toggle button in all states. Create the themes of the Combo and its dropdown, and include them with the `tokens()` mixin, which emits the matching CSS variables in the scope where you include it.

The Sass functions come from the `igniteui-theming` package. See the [Theming](../../themes/overview.md) topic for the Sass setup.

```scss
@use "igniteui-theming" as *;

$custom-combo-theme: combo-theme(
  $toggle-button-background: #e0e0e0
);

$custom-drop-down-theme: drop-down-theme(
  $background-color: #e6f2ff,
  $selected-item-background: #4ca7e3
);

:root {
  @include tokens($custom-combo-theme);
  @include tokens($custom-drop-down-theme);
}
```

### CSS Variables

Set the CSS variables on a Combo or on a container when you need local styling without a Sass build step:

```css
.styled-combo {
  --ig-input-group-border-color: #1377d5;
  --ig-combo-toggle-button-background: #e0e0e0;
  --ig-drop-down-background-color: #e6f2ff;
  --ig-drop-down-selected-item-background: #4ca7e3;
}
```

Use the CSS parts for other styles:

```css
igc-combo::part(group-header) {
  color: #005dcc;
}

igc-combo::part(item selected) {
  color: #000;
}
```



### Styling with Tailwind

You can style the Blazor Single Selection Combo using our custom Tailwind utility classes. Make sure to [set up Tailwind](../../themes/tailwind.md) first.

Set the `--ig-combo-*`, `--ig-input-group-*`, and `--ig-drop-down-*` CSS variables with Tailwind arbitrary properties:

```razor
<IgbCombo T="object" SingleSelect="true" Class="[--ig-input-group-border-color:#a9b8cc] [--ig-combo-toggle-button-background:#e5ebf3] [--ig-drop-down-background-color:#f3f6fa]" />
```



## Accessibility

The Blazor Single Selection Combo uses the roles of the WAI-ARIA combobox pattern: the editable input field is a `combobox` that controls a `listbox` of options, and users filter the list by typing and select an option with the keyboard.

### Keyboard Interaction

The input field of the Blazor Single Selection Combo is a tab stop, and the focus stays in it while users type. The following keys work while the Combo has the focus:

| Key | Action |
| --- | --- |
| Printable characters | In the input field, open the dropdown, filter the list, and activate the first match. |
| <kbd>Arrow Down</kbd> / <kbd>Alt</kbd> + <kbd>Arrow Down</kbd> | In the input field, opens the dropdown, moves the focus to the list, and activates the first option. In the list, activates the next option. |
| <kbd>Arrow Up</kbd> | In the input field, closes the dropdown. In the list, activates the previous option. From the first option, closes the dropdown and moves the focus to the input field. |
| <kbd>Home</kbd> / <kbd>End</kbd> | In the list, activates the first or the last option. |
| <kbd>Space</kbd> | In the list, selects the active option, or deselects it when it is selected. |
| <kbd>Enter</kbd> | With an active option, selects it, closes the dropdown, and moves the focus to the input field with its text selected. |
| <kbd>Escape</kbd> | When the dropdown is open, closes it and moves the focus to the input field. When the dropdown is closed, clears the selection. |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | When the dropdown is open, selects the active option, closes the dropdown, and moves the focus to the next or the previous focusable element. |

A disabled Combo ignores these keys.

### Screen Readers / ARIA

The Blazor Single Selection Combo renders the following roles and attributes:

| Element | Role | Attributes |
| --- | --- | --- |
| The input field | `combobox` | `aria-haspopup="listbox"`, `aria-expanded`, `aria-disabled`, `aria-controls` that points to the list, and, with a helper text, `aria-describedby` that points to it |
| The `list` part | `listbox` | `aria-multiselectable="false"`, `aria-labelledby` that points to the input field, and `aria-activedescendant` that points to the active option |
| Each `item` part | `option` | `aria-selected`, `aria-posinset`, and `aria-setsize` |
| The `clear-icon` part | `button` | `aria-label` from the resource strings |

The Blazor Single Selection Combo also behaves as follows for assistive technology:

- The input field takes its accessible name from the `label`. Without a label, it gets a name from the resource strings that says whether an option is selected.
- The input field is editable, and the text that users type is the filter of the list.
- The active option is announced through `aria-activedescendant` while the focus stays in the list.
- The content of the closed dropdown is `inert`.

### Accessibility Compliance

Infragistics documents Ignite UI for Blazor accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| --- | --- |
| [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships) | The `combobox`, `listbox`, and `option` roles expose the structure, and the list is labeled by the input field. |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | Typing filters the list, the arrow keys open the dropdown and move through the options, and Enter selects the active option. |
| [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap) | Tab closes the dropdown and moves the focus out of the Combo. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | The input field exposes the `combobox` role, a name from the label, and its expanded state through `aria-expanded`. Each option exposes its selected state through `aria-selected`. |

Your responsibilities:

- Give every Combo a label that names what users select. See [Type](#type).
- When you override the theme colors, keep a contrast ratio of at least 3:1 for the borders and the focus indicator, as [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast) requires.
- Show the error message in the helper text, not by color alone. See [Validation States](#validation-states).

## Known Limitations

- The single selection mode hides the search input of the dropdown, so `placeholderSearch`, `caseSensitiveIcon`, and `autofocusList` have no effect.
- The Blazor Combo doesn't add custom values. When the text in the input field matches no option, the Combo clears the input field when it loses the focus.

## API References

The Blazor Single Selection Combo API reference lists the complete API surface for the target platform.

- [`IgbCombo<T>`](mcp:get_api_reference?platform=blazor&component=IgbCombo%3CT%3E)

## Dependencies

The Blazor Single Selection Combo requires a theme to apply its colors and sizes. See the framework-specific setup in [**Getting Started**](../../general-getting-started.md).

The Blazor Combo and the components that you place in its slots, such as the Icon, load their modules when they first render. See [Component Modules](../../general-getting-started.md#component-modules).

## Additional Resources

The following resources provide more Blazor Single Selection Combo guidance and project support:

- [Combo](./overview.md)
- [Combo Features](./features.md)
- [Combo Templates](./templates.md)

- [Combo - Design System Component](https://www.infragistics.com/products/indigo-design/help/components/combo)
- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

## Related Components

The Blazor Single Selection Combo lets users search a list and select one option. Use these components when the selection works differently:

- [Combo](./overview.md) - Use the Combo when users select more than one option.
- [Select](../select.md) - Use Select when users pick a single option from a short list that doesn't need search.
- [Dropdown](../dropdown.md) - Use Dropdown to show a list of actions or options from a button or another element.

## FAQ

These questions cover common Blazor Single Selection Combo setup, selection, and usage scenarios.

  **Q: How do I make the Combo select a single item?**

    Set `singleSelect` on the Blazor Combo. The Combo then selects one item at a time, lets users type in its input field to filter the list, and hides the search input and the checkboxes of the dropdown.
  
  **Q: How do I set the selected item of the Single Selection Combo?**

    Set the `value` of the Blazor Combo to an array with the `valueKey` value of the item, or call the `select` method with the item. Without a `valueKey`, the Blazor Combo uses a reference to the object in its `data`.
  
  **Q: Can users enter a value that is not in the list?**

    No. The Blazor Combo selects options from its `data` only. When the text in the input field matches no option, the Combo clears the input field when it loses the focus.
  
  **Q: Why does typing in the Single Selection Combo not filter the list?**

    The Blazor Combo filters by the `displayKey` field, or by the `filterKey` of its `filteringOptions`. Check that `disableFiltering` is not set, and that the key names a field of the options.
  
  **Q: Should I use the Single Selection Combo or the Select?**

    Use the Blazor Single Selection Combo when the list is long and users need to search it by typing. Use the Blazor Select for a short list from which users pick an option without searching.
  

