---
title: "Angular Single Selection Combo Component"
description: "The Ignite UI for Angular Single Selection Combo is a Combo in which users select one option and filter the searchable dropdown list by typing in the input field."
keywords: "Angular Single Selection Combo, Ignite UI for Angular, single select combo, simple combo, combobox, searchable dropdown, combo filtering"
license: MIT
last_updated: "2026-11-05"
relatedComponents: ["Combo", "Select", "Dropdown"]
mentionedTypes: ["Combo", "ComboItem", "ComboHeader", "ComboList"]
llms:
  description: "The Ignite UI for Angular Single Selection Combo is a Combo in which users select one option and filter the searchable dropdown list by typing in the input field."
_tocName: Single Selection
---
# Single Selection Combo

The Ignite UI for Angular Single Selection Combo is a Combo in which users select one option and filter the searchable dropdown list by typing in the input field.

The Angular single selection Combo is the Simple Combo, the `igx-simple-combo` component. It binds, groups, and templates its options like the Combo, and lets users type in the input field to filter the list or to enter a custom value.

**Note:** 
The Combo has two layout options: Combo with Single Select (Simple Combo) and Combo (Multiple Select).

## Live Demo

<code-view iframe-src="{environment:demosBaseUrl}/lists/simple-combo-overview" github-src="lists/simple-combo-overview" alt="Angular Single Selection Combo example with a Country combo that lists European countries in its open dropdown"></code-view>

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

The `igx-simple-combo` element renders an editable input field in an input group and its dropdown list in an overlay. It has no search input:

```text
igx-simple-combo
├─ igx-input-group
│  ├─ [igxLabel]
│  ├─ igx-prefix
│  ├─ input[igxInput][role="combobox"]          // editable, filters the list
│  ├─ igx-suffix.igx-combo__clear-button        // shown when the Combo has a value
│  ├─ igx-suffix                                // the case-sensitive icon, shown with showSearchCaseIcon
│  ├─ igx-suffix.igx-combo__toggle-button
│  └─ igx-hint
└─ igx-combo-drop-down                          // the dropdown, shown in an overlay
   └─ div.igx-drop-down__list-scroll[role="listbox"]
      └─ div.igx-combo
         ├─ [igxComboHeader] template
         ├─ div.igx-combo__content              // the options
         │  └─ igx-combo-item[role="option"]    // role="group" for the group headers
         ├─ div.igx-combo__add                  // the empty message and the add item button
         │  └─ igx-combo-add-item[role="button"] // shown with allowCustomValues
         └─ [igxComboFooter] template
```

## Getting Started

To use the Angular Single Selection Combo, follow the [Ignite UI for Angular Getting Started](../../general/getting-started.md) topic for the basic project setup, then add the component for your target platform.

If your project doesn't use Ignite UI for Angular yet, run `ng add igniteui-angular`. Then import the `IGX_SIMPLE_COMBO_DIRECTIVES` token and add it to the `imports` of your component. The token holds the [`IgxSimpleComboComponent`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent) and its template directives:

```ts
import { Component } from '@angular/core';
import { IGX_SIMPLE_COMBO_DIRECTIVES } from 'igniteui-angular/simple-combo';
// import { IGX_SIMPLE_COMBO_DIRECTIVES } from '@infragistics/igniteui-angular/simple-combo'; for licensed package

@Component({
    selector: 'app-home',
    template: `
        <igx-simple-combo [data]="countries" valueKey="id" displayKey="name" placeholder="Country"></igx-simple-combo>
    `,
    imports: [IGX_SIMPLE_COMBO_DIRECTIVES]
})
export class HomeComponent {
    public countries = [
        { id: 'BY', name: 'Belarus' },
        { id: 'BE', name: 'Belgium' },
        { id: 'BG', name: 'Bulgaria' }
    ];
}
```

## Usage

Use the Angular Single Selection Combo when users pick exactly one option from a list that they need to search, such as a country or a city.

### Type

The Simple Combo Input provides selection between a border type for a more structured perception on solid color backgrounds, and a boxed type that is most appropriate when placed on top of a vivid image to improve readability.

The Angular Simple Combo uses the box type by default. Set the [`type`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=type) input to `border` for the border type. Add the label with the `igxLabel` directive and the left icon with an `igx-prefix`:

```html
<igx-simple-combo type="border" placeholder="Select a value" [data]="options">
  <label igxLabel>Label</label>
  <igx-prefix><igx-icon>language</igx-icon></igx-prefix>
</igx-simple-combo>

<igx-simple-combo type="box" placeholder="Select a value" [data]="options">
  <label igxLabel>Label</label>
</igx-simple-combo>
```

<code-view iframe-src="{environment:demosBaseUrl}/lists/simple-combo-type" github-src="lists/simple-combo-type" alt="Angular Single Selection Combo in the border and the box types with their dropdowns open"></code-view>

### Disabled States

Set `disabled` on the Angular Single Selection Combo to show the disabled state of both the border and the box type.

```html
<igx-simple-combo type="border" [disabled]="true" placeholder="Country" [data]="countries"></igx-simple-combo>
```

<code-view iframe-src="{environment:demosBaseUrl}/lists/simple-combo-disabled" github-src="lists/simple-combo-disabled" alt="Angular Single Selection Combo in the border and the box types, enabled and disabled, with and without a value"></code-view>

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

<code-view iframe-src="{environment:demosBaseUrl}/lists/simple-combo-size" github-src="lists/simple-combo-size" alt="Angular Single Selection Combo in the small, medium, and large sizes in the border and the box types with their dropdowns open"></code-view>

### Interaction States

The Combo component supports five states for the enabled variants: Idle, Idle & Hover, Filled, Filled & Hover and Focused, as well as three validation states: Success, Warn, and Error.

Clicking the input field or the toggle opens the dropdown, and typing in the input field opens it and filters the list. To open and close the dropdown in code, use the `open`, `close`, and `toggle` methods:

```ts
@ViewChild(IgxSimpleComboComponent, { static: true })
public combo: IgxSimpleComboComponent;

public openCombo(): void {
    this.combo.open();
}
```

The following sample shows the states side by side. Because hover and focus come from the pointer and the keyboard, the sample styles the display-only combos for these states with CSS classes.

<code-view iframe-src="{environment:demosBaseUrl}/lists/simple-combo-states" github-src="lists/simple-combo-states" alt="Angular Single Selection Combo in the idle, hovered, filled, focused, and open states"></code-view>

### Validation States

Every experienced designer uses constraints wisely to limit the user input and avoid invalid states, hence the availability of validation styles. Through the available validation styles, the Combo Input is consistent with the standard [Input](../../input-group.md) and equipped for sophisticated designs that display success, warn, and error visuals.

The Angular Simple Combo takes its validation state from the form control that it is bound to, through `ngModel` or a reactive form. Set the [`valid`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=valid) property to an `IgxInputState` value to set the state in code. Put the guidance or the error message in an `igx-hint`:

```html
<igx-simple-combo type="border" [data]="countries" valueKey="id" displayKey="name" [(ngModel)]="selection" required>
  <igx-hint>Please select a different region</igx-hint>
</igx-simple-combo>
```

<code-view iframe-src="{environment:demosBaseUrl}/lists/simple-combo-validation" github-src="lists/simple-combo-validation" alt="Angular Single Selection Combo in the success, warn, and error states in the border and the box types"></code-view>

### Dropdown Size

The Dropdown used for the Combo comes with the appropriate sizing for Large, Medium and Small Combo similarly to the normal [Dropdown](../../drop-down.md) component. The dropdown takes its size from the Combo, so set the `--ig-size` variable on the Combo.

The Angular Simple Combo also exposes the [`itemHeight`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=itemHeight) and [`itemsMaxHeight`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=itemsMaxHeight) inputs for the height of the items and of the list:

```html
<igx-simple-combo [data]="countries" [itemHeight]="40" [itemsMaxHeight]="160"></igx-simple-combo>
```

The following sample shows the dropdowns only, without their input fields.

<code-view iframe-src="{environment:demosBaseUrl}/lists/simple-combo-dropdown-size" github-src="lists/simple-combo-dropdown-size" alt="Angular Single Selection Combo dropdowns in the small, medium, and large sizes"></code-view>

### Dropdown Items

The Dropdown used for the Simple Combo supports two types of items: header and single select item. Both are available in Large, Medium and Small sizes. Through headers, it is possible to organize items in groups.

Set `groupKey` to the field that holds the group of each option, and the Angular Single Selection Combo shows a header for each group. The options of the single selection mode show no checkboxes. To change the content of the items and the headers, see the [Combo Templates](./templates.md) topic.

```html
<igx-simple-combo [data]="countries" valueKey="id" displayKey="name" groupKey="region"></igx-simple-combo>
```

The following sample shows a header and an item in each size.

<code-view iframe-src="{environment:demosBaseUrl}/lists/simple-combo-dropdown-items" github-src="lists/simple-combo-dropdown-items" alt="Angular Single Selection Combo dropdown header and item in the small, medium, and large sizes"></code-view>

### Dropdown Items States

An item of the Angular Single Selection Combo dropdown is idle, hovered, or focused, and each of these states has a selected variant. The drop-down theme also has colors for a disabled item.

The following sample shows the states side by side. Because hover and focus come from the pointer and the keyboard, the sample styles the display-only items for these states with CSS classes.

<code-view iframe-src="{environment:demosBaseUrl}/lists/simple-combo-dropdown-items-states" github-src="lists/simple-combo-dropdown-items-states" alt="Angular Single Selection Combo dropdown item in the idle, hovered, focused, and disabled states, unselected and selected"></code-view>

### Data Binding

The Angular Single Selection Combo binds its options the way the Combo does: bind `data` to an array, and set `valueKey`, `displayKey`, and `groupKey` when the array holds objects. See [Data Binding](./overview.md#data-binding) in the Combo topic.

The Angular Simple Combo also binds to a remote service and loads its data on demand. Bind `data` to the loaded chunk, and handle the [`dataPreLoad`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=dataPreLoad) event to load the next chunk, as [Remote Binding](./features.md#remote-binding) in the Combo Features topic describes.

### Value and Selection

The Angular Single Selection Combo holds one selected item, and exposes it through its value and its selection API.

The Angular Simple Combo supports two-way binding with `[(ngModel)]` and works in template-driven and reactive forms. The bound value is a single item: its `valueKey` value, or the object reference when there is no `valueKey`. The [`selection`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=selection) property returns the selected item, the [`select`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=select) method selects an item, and the [`deselect`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=deselect) method clears the selection:

```html
<igx-simple-combo [data]="countries" valueKey="id" displayKey="name" [(ngModel)]="selectedCountry"></igx-simple-combo>
```

```ts
export class CountriesComponent {
    @ViewChild(IgxSimpleComboComponent, { static: true })
    public combo: IgxSimpleComboComponent;

    public selectedCountry = 'BG';

    public selectBelgium(): void {
        this.combo.select('BE');
    }

    public clear(): void {
        this.combo.deselect();
    }
}
```

The Angular Simple Combo emits [`selectionChanging`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=selectionChanging) before the selection changes, and [`selectionChanged`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=selectionChanged) after it. The event arguments hold the old and the new value, the old and the new item, and the display text of the input field, and setting `cancel` in `selectionChanging` keeps the selection:

```html
<igx-simple-combo [data]="countries" valueKey="id" displayKey="name" (selectionChanging)="onCountryChanging($event)"></igx-simple-combo>
```

```ts
public onCountryChanging(event: ISimpleComboSelectionChangingEventArgs): void {
    if (event.newValue === 'BY') {
        event.cancel = true;
    }
}
```

The `selectionChanging` event also drives a cascading scenario, in which the selection of one Simple Combo loads the data of the next one, for example a country, a region, and a city combo. Handle the `selectionChanging` event of each Simple Combo to load the data of the next one and to clear its selection:

```html
<igx-simple-combo #country
    [data]="countriesData"
    (selectionChanging)="countryChanging($event)"
    placeholder="Choose Country..."
    [(ngModel)]="selectedCountry"
    displayKey="name">
</igx-simple-combo>
<igx-simple-combo #region
    [data]="regionData"
    (selectionChanging)="regionChanging($event)"
    placeholder="Choose Region..."
    [(ngModel)]="selectedRegion"
    displayKey="name"
    [disabled]="regionData.length === 0">
</igx-simple-combo>
<igx-simple-combo #city
    [data]="citiesData"
    placeholder="Choose City..."
    [(ngModel)]="selectedCity"
    displayKey="name"
    [disabled]="citiesData.length === 0">
</igx-simple-combo>
```

```ts
export class SimpleComboCascadingComponent implements OnInit {
    public selectedCountry: Country;
    public selectedRegion: Region;
    public selectedCity: City;
    public countriesData: Country[];
    public regionData: Region[] = [];
    public citiesData: City[] = [];

    public ngOnInit(): void {
        this.countriesData = getCountries(['United States', 'Japan', 'United Kingdom']);
    }

    public countryChanging(e: ISimpleComboSelectionChangingEventArgs) {
        this.selectedCountry = e.newSelection as Country;
        this.regionData = getCitiesByCountry([this.selectedCountry?.name])
            .map(c => ({ name: c.region, country: c.country }))
            .filter((v, i, a) => a.findIndex(r => r.name === v.name) === i);
        this.selectedRegion = null;
        this.selectedCity = null;
        this.citiesData = [];
    }

    public regionChanging(e: ISimpleComboSelectionChangingEventArgs) {
        this.selectedRegion = e.newSelection as Region;
        this.citiesData = getCitiesByCountry([this.selectedCountry?.name])
            .filter(c => c.region === this.selectedRegion?.name);
        this.selectedCity = null;
    }
}
```

The [Grid with Cascading Combos](../../grid/cascading-combos.md) topic shows the same scenario in the cell editing of the Data Grid.

### Filtering

Typing in the input field of the Angular Single Selection Combo opens the dropdown and filters the list to the options that contain the text. The first match becomes the active option, so <kbd>Enter</kbd> selects it.

Set [`disableFiltering`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=disableFiltering) to keep the whole list while users type, and [`showSearchCaseIcon`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=showSearchCaseIcon) to show a button in the input field that toggles case-sensitive filtering. The [`filteringOptions`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=filteringOptions) input sets the key that the text filters by and whether the filtering is case-sensitive, and [`filterFunction`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=filterFunction) replaces the filtering with your own. When the text matches no option and the Simple Combo loses the focus, the input field is cleared:

```html
<igx-simple-combo [data]="countries" displayKey="name" [showSearchCaseIcon]="true"
                  [filteringOptions]="{ filteringKey: 'name', caseSensitive: false }">
</igx-simple-combo>
```

Set [`allowCustomValues`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=allowCustomValues) to let users enter a value that is not in the list. When the text matches no option, the dropdown shows an add item button, and <kbd>Enter</kbd> on it adds the text as a new item and selects it. The Simple Combo emits [`addition`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=addition) before it adds the item:

```html
<igx-simple-combo [data]="countries" displayKey="name" valueKey="id" [allowCustomValues]="true" (addition)="onAddition($event)"></igx-simple-combo>
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

The Angular Single Selection Combo exposes the following properties.  See the API reference for the complete type definitions.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`data`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=data) | `any[]` | — | The options of the Simple Combo. |
| [`valueKey`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=valueKey) | `string` | — | The field that identifies an option. |
| [`displayKey`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=displayKey) | `string` | — | The field that the list and the input field show. Falls back to the `valueKey`. |
| [`groupKey`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=groupKey) | `string` | — | The field that groups the options. |
| [`type`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=type) | `IgxInputGroupType` | `'box'` | The type of the input field: `box`, `border`, or `line`. |
| [`placeholder`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=placeholder) | `string` | — | The text that the input field shows when no item is selected. |
| [`disabled`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=disabled) | `boolean` | `false` | Whether the Simple Combo is disabled. |
| [`disableFiltering`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=disableFiltering) | `boolean` | `false` | Whether typing in the input field leaves the list unfiltered. |
| [`showSearchCaseIcon`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=showSearchCaseIcon) | `boolean` | `false` | Whether the input field shows the button that toggles case-sensitive filtering. |
| [`filteringOptions`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=filteringOptions) | `IComboFilteringOptions` | — | The key that the text filters by and whether the filtering is case-sensitive. |
| [`allowCustomValues`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=allowCustomValues) | `boolean` | `false` | Whether users can add the text of the input field as a new item. |
| [`disableClear`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=disableClear) | `boolean` | `false` | Whether the clear button is hidden. |
| [`itemHeight`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=itemHeight) | `number` | — | The height of the items in the list. |
| [`itemsMaxHeight`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=itemsMaxHeight) | `number` | — | The maximum height of the list. |
| [`valid`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=valid) | `IgxInputState` | `INITIAL` | The validation state of the Simple Combo. |
| [`selection`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=selection) | `any` | — | Read-only. The selected item. |
| [`value`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=value) | `any` | — | Read-only. The `valueKey` value of the selected item, or the item when there is no `valueKey`. |

## Methods

The Angular Single Selection Combo exposes the following methods.

| Method | Description |
| --- | --- |
| [`select`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=select) | Selects the item that you pass and deselects the previous one. |
| [`deselect`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=deselect) | Clears the selection. |
| [`open`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=open) | Opens the dropdown. |
| [`close`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=close) | Closes the dropdown. |
| [`toggle`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=toggle) | Opens the dropdown when it is closed, and closes it when it is open. |

## Events

The Angular Single Selection Combo emits the following events.

| Name | Description |
| --- | --- |
| [`selectionChanging`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=selectionChanging) | Emitted with [`ISimpleComboSelectionChangingEventArgs`](mcp:get_api_reference?platform=angular&component=ISimpleComboSelectionChangingEventArgs) before the selection changes. Set `cancel` to keep the selection. |
| [`selectionChanged`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=selectionChanged) | Emitted with [`ISimpleComboSelectionChangedEventArgs`](mcp:get_api_reference?platform=angular&component=ISimpleComboSelectionChangedEventArgs) after the selection is committed. |
| [`opening`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=opening) | Emitted before the dropdown opens. Cancelable. |
| [`opened`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=opened) | Emitted after the dropdown opens. |
| [`closing`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=closing) | Emitted before the dropdown closes. Cancelable. |
| [`closed`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=closed) | Emitted after the dropdown closes. |
| [`searchInputUpdate`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=searchInputUpdate) | Emitted when the text of the input field changes. |
| [`addition`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=addition) | Emitted before users add a custom value to the list. |
| [`dataPreLoad`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=dataPreLoad) | Emitted when the list scrolls to options that are not loaded yet, for remote binding. |

## Styling

The Simple Combo comes with the combined styling flexibility of its input and dropdown pieces. There are options for the input text elements' color, border style and color. For the dropdown one may change the background color, or use the various options related to the items in the Simple Combo Dropdown with their background and text colors.

Change the colors of the toggle and the clear buttons of the Angular Single Selection Combo with the following CSS variables:

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

### Sass Theming

When you modify a primary property, all related dependent properties are automatically updated to reflect the change. The primary parameter of the `combo-theme` function is `$toggle-button-background`, from which the theme derives the colors of the toggle button in all states. Create the themes of the Combo and its dropdown, and include them with the `tokens()` mixin, which emits the matching CSS variables in the scope where you include it.

```scss
@use "igniteui-angular/theming" as *;

$custom-combo-theme: combo-theme(
  $toggle-button-background: #e0e0e0
);

$custom-drop-down-theme: drop-down-theme(
  $background-color: #e6f2ff,
  $selected-item-background: #4ca7e3
);

:host {
  @include tokens($custom-combo-theme);
  @include tokens($custom-drop-down-theme);
}
```

The Angular Simple Combo shows its dropdown in an overlay. Depending on the view encapsulation and on where the overlay outlet is, a theme included under `:host` may not reach the dropdown. See the [Overlay Styling](../../overlay-styling.md) topic.

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

```typescript
import { Component, ElementRef, OnInit, inject } from '@angular/core';
import { City, getCitiesByPopulation } from '../../../data/cities15000-regions-countries';
import { IgxSimpleComboComponent } from 'igniteui-angular/simple-combo';

@Component({
    selector: 'app-simple-combo-styling',
    templateUrl: 'simple-combo-styling.component.html',
    styleUrls: ['simple-combo-styling.component.scss'],
    imports: [IgxSimpleComboComponent]
})
export class SimpleComboStylingComponent implements OnInit {
    element = inject(ElementRef);

    public cities: City[];

    ngOnInit(): void {
        this.cities = getCitiesByPopulation(10000000);
    }
}
```
```html
<div class="sample-wrapper">
    <div class="input-row">
        <igx-simple-combo
            [overlaySettings]="{ outlet: element.nativeElement }"
            [data]="cities" [displayKey]="'name'">
        </igx-simple-combo>
    </div>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$custom-simple-combo-theme: combo-theme(
  $empty-list-background: #1a5214
);

$custom-drop-down-theme: drop-down-theme(
  $background-color: #d9f5d6,
  $header-text-color: #1a5214,
  $item-text-color: #1a5214,

  $focused-item-background: #72da67,
  $focused-item-text-color: #1a5214,
  $hover-item-background: #a0e698,
  $hover-item-text-color: #1a5214,

  $selected-item-background: #a0e698,
  $selected-item-text-color: #1a5214,
  $selected-hover-item-background: #72da67,
  $selected-hover-item-text-color: #1a5214,
  $selected-focus-item-background: #72da67,
  $selected-focus-item-text-color: #1a5214,
);

:host {
  @include tokens($custom-simple-combo-theme);
  @include tokens($custom-drop-down-theme);
}
```

### Styling with Tailwind

You can style the Angular Single Selection Combo using our custom Tailwind utility classes. Make sure to [set up Tailwind](../../themes/tailwind.md) first.

Import the Ignite UI utilities in your global stylesheet:

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/utilities/material.css";
```

Use the `light-combo` or `dark-combo` class for the corresponding theme, and override the generated CSS variables with arbitrary properties:

```html
<igx-simple-combo class="!light-combo ![--toggle-button-background:#e5ebf3] ![--clear-button-foreground:#212121]">
  ...
</igx-simple-combo>
```

The exclamation mark (`!`) gives the Tailwind utility precedence over the default theme styles of the Simple Combo.

<code-view iframe-src="{environment:demosBaseUrl}/lists/simple-combo-tailwind-styling" github-src="lists/simple-combo-tailwind-styling" alt="Angular Single Selection Combo Tailwind styling example"></code-view>

## Accessibility

The Angular Single Selection Combo uses the roles of the WAI-ARIA combobox pattern: the editable input field is a `combobox` that controls a `listbox` of options, and users filter the list by typing and select an option with the keyboard.

### Keyboard Interaction

The input field of the Angular Simple Combo is a tab stop, and the focus stays in it while users type. The following keys work while the Simple Combo has the focus:

| Key | Action |
| --- | --- |
| Printable characters | In the input field, open the dropdown, filter the list, and focus the first match. |
| <kbd>Arrow Down</kbd> / <kbd>Alt</kbd> + <kbd>Arrow Down</kbd> | In the closed Simple Combo, opens the dropdown. In the open Simple Combo, moves the focus to the list: to the selected option, or to the first option. In the list, moves to the next option, and from the last option to the add item button when it is shown. |
| <kbd>Arrow Up</kbd> | In the list, moves to the previous option. From the first option, moves the focus back to the input field and selects its text. |
| <kbd>Alt</kbd> + <kbd>Arrow Up</kbd> | In the list, closes the dropdown and moves the focus to the input field. |
| <kbd>Home</kbd> / <kbd>End</kbd> | In the list, moves to the first or the last option. |
| <kbd>Space</kbd> | In the list, selects or deselects the focused option. |
| <kbd>Enter</kbd> | In the input field with a focused option that matches the text, selects it and closes the dropdown. In the list, selects the focused option, closes the dropdown, and moves the focus to the input field. On the add item button, adds the text of the input field as a new item and selects it. |
| <kbd>Backspace</kbd> / <kbd>Delete</kbd> | In the input field, clears the selection. |
| <kbd>Escape</kbd> | When the dropdown is open, closes it. When the dropdown is closed, clears the selection and keeps the focus on the input field. |
| <kbd>Tab</kbd> | When the dropdown is open, selects the focused option that matches the text, closes the dropdown, and moves the focus to the next focusable element. |

### Screen Readers / ARIA

The Angular Simple Combo renders the following roles and attributes:

| Element | Role | Attributes |
| --- | --- | --- |
| The input of the input field | `combobox` | `aria-haspopup="listbox"`, `aria-autocomplete="list"`, `aria-readonly="false"`, `aria-expanded`, `aria-controls` that points to the list, `aria-labelledby`, and `aria-label` |
| The dropdown | `listbox` | `aria-labelledby` that points to the `igxLabel` or to the `ariaLabelledBy` element |
| The container of the options | — | `aria-activedescendant` that points to the focused option |
| Each option | `option` | `aria-selected` |
| Each group header | `group` | — |
| The clear button | — | `aria-label` from the resource strings |
| The add item button | `button` | `aria-label` from the resource strings |

The input field takes its accessible name from the `igxLabel` or from the [`ariaLabelledBy`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent&member=ariaLabelledBy) input. Without them, it gets a name from the resource strings that says whether an option is selected.

### Accessibility Compliance

Infragistics documents Ignite UI for Angular accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| --- | --- |
| [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships) | The `combobox`, `listbox`, and `option` roles expose the structure, and the list is labeled by the `igxLabel` or the `ariaLabelledBy` element. |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | Typing filters the list, the arrow keys open the dropdown and move through the options, and Enter selects the active option. |
| [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap) | Tab closes the dropdown and moves the focus out of the Combo. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | The input field exposes the `combobox` role, a name from the label, and its expanded state through `aria-expanded`. Each option exposes its selected state through `aria-selected`. |

Your responsibilities:

- Give every Combo a label that names what users select. See [Type](#type).
- When you override the theme colors, keep a contrast ratio of at least 3:1 for the borders and the focus indicator, as [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast) requires.
- Show the error message in the helper text, not by color alone. See [Validation States](#validation-states).

## Known Limitations

- When the Angular Simple Combo is bound to an array of primitives that contains `undefined`, the list doesn't show `undefined`. When the `valueKey` field of an object is `undefined`, the list shows the item, but users can't select it.
- When the Angular Simple Combo is bound with `ngModel` and is `required`, the `null`, `undefined`, and `''` values can't be selected.
- When the Angular Simple Combo is bound to a remote service and has a predefined selection, the input field stays blank until the data loads.
- The list uses the [Virtual Scroll](../../layouts/virtual-scroll.md#known-limitations), so its limitations apply. The list renders only the options in view, and code that queries the DOM finds only those options.

## API References

The Angular Single Selection Combo API reference lists the complete API surface for the target platform.

- [`IgxSimpleComboComponent`](mcp:get_api_reference?platform=angular&component=IgxSimpleComboComponent)
- [`IgxDropDown`](mcp:get_api_reference?platform=angular&component=IgxDropDownComponent)
- [`IgxInputGroup`](mcp:get_api_reference?platform=angular&component=IgxInputGroupComponent)
- `combo-theme`

## Dependencies

The Angular Single Selection Combo requires a theme to apply its colors and sizes. See the framework-specific setup in [**Getting Started**](../../general/getting-started.md).

The Angular Simple Combo uses the Drop Down, the Input Group, the Icon, and the Overlay. Their themes style its parts:

- `drop-down-theme`
- `input-group-theme`
- `icon-theme`
- `overlay-theme`

## Additional Resources

The following resources provide more Angular Single Selection Combo guidance and project support:

- [Combo](./overview.md)
- [Combo Features](./features.md)
- [Combo Remote Binding](./features.md#remote-binding)
- [Combo Templates](./templates.md)
- [Grid with Cascading Combos](../../grid/cascading-combos.md)

- [Combo - Design System Component](https://www.infragistics.com/products/indigo-design/help/components/combo)
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

## Related Components

The Angular Single Selection Combo lets users search a list and select one option. Use these components when the selection works differently:

- [Combo](./overview.md) - Use the Combo when users select more than one option.
- [Select](../../select.md) - Use Select when users pick a single option from a short list that doesn't need search.
- [Dropdown](../../drop-down.md) - Use Dropdown to show a list of actions or options from a button or another element.

## FAQ

These questions cover common Angular Single Selection Combo setup, selection, and usage scenarios.

  **Q: How do I make the Combo select a single item?**

    Use the Angular Simple Combo, the `igx-simple-combo` component, instead of the Combo. The Simple Combo selects one item and lets users type in its input field to filter the list.
  
  **Q: How do I set the selected item of the Single Selection Combo?**

    Bind the Angular Simple Combo with `[(ngModel)]` or a form control to a single `valueKey` value, or call the `select` method with the item. Without a `valueKey`, the Simple Combo uses a reference to the object in its `data`.
  
  **Q: Can users enter a value that is not in the list?**

    Yes. Set `allowCustomValues` on the Angular Simple Combo, and the dropdown shows an add item button when the text matches no option. The Simple Combo adds the text as a new item and selects it.
  
  **Q: Why does typing in the Single Selection Combo not filter the list?**

    The Angular Simple Combo filters by the `displayKey` field. Check that `disableFiltering` is not set, and that `filteringOptions` or `filterFunction` match the field that the list shows.
  
  **Q: Should I use the Single Selection Combo or the Select?**

    Use the Angular Single Selection Combo when the list is long and users need to search it by typing. Use the Angular Select for a short list from which users pick an option without searching.
  

