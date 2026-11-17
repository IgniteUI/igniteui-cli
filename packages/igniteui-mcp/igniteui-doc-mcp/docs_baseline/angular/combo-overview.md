---
title: "Angular Combo Component"
description: "The Ignite UI for Angular Combo combines an input field with a searchable dropdown list, so users can filter the options by typing and select one or more items."
keywords: "Angular Combo, Ignite UI for Angular, combobox, multi-select dropdown, searchable dropdown, combo filtering, combo grouping"
license: MIT
last_updated: "2026-11-03"
relatedComponents: ["Select", "Dropdown"]
mentionedTypes: ["Combo", "ComboItem", "ComboHeader", "ComboList"]
llms:
  description: "The Ignite UI for Angular Combo is a component that combines an input field with a searchable dropdown list, letting users filter the options by typing and select one or more items."
_tocName: Combo
---
# Combo

The Ignite UI for Angular Combo is a component that combines an input field with a searchable dropdown list, letting users filter the options by typing and select one or more items.

The Angular Combo is the `igx-combo` component. It shows its options in a virtualized dropdown list and supports filtering, grouping, custom values, and two-way binding with Angular forms.

## Live Demo

<code-view iframe-src="{environment:demosBaseUrl}/lists/combo-overview" github-src="lists/combo-overview" alt="Angular Combo example with a Locations combo that lists the cities of Bulgaria in its open dropdown"></code-view>

## Anatomy

The Combo combines an input field with a searchable dropdown list, letting users filter the options by typing and select one or more items.

**Combo anatomy:** The Combo combines an input field with a searchable dropdown list, letting users filter the options by typing and select one or more items.

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
<strong>7. Search Input:</strong> allows users to filter the list by typing<br />
<strong>8. Dropdown Header:</strong> used to group or describe the dropdown options<br />
<strong>9. Selected Item:</strong> selected Item from the Dropdown List<br />
<strong>10. Dropdown List:</strong> displays the list of selectable options</span>

The `igx-combo` element renders its input field in an input group and its dropdown list in an overlay:

```text
igx-combo
├─ igx-input-group
│  ├─ [igxLabel]
│  ├─ igx-prefix
│  ├─ input[igxInput][role="combobox"]          // read-only, shows the selected items
│  ├─ igx-suffix.igx-combo__clear-button        // shown when the Combo has a value
│  ├─ igx-suffix.igx-combo__toggle-button
│  └─ igx-hint
└─ igx-combo-drop-down                          // the dropdown, shown in an overlay
   └─ div.igx-drop-down__list-scroll[role="listbox"]
      └─ div.igx-combo
         ├─ div.igx-combo__search               // hidden with disableFiltering
         │  └─ input[igxInput][role="searchbox"]
         ├─ [igxComboHeader] template
         ├─ div.igx-combo__content              // the options
         │  └─ igx-combo-item[role="option"]    // role="group" for the group headers
         ├─ div.igx-combo__add                  // the empty message and the add item button
         │  └─ igx-combo-add-item[role="button"] // shown with allowCustomValues
         └─ [igxComboFooter] template
```

## Getting Started

To use the Angular Combo, follow the [Ignite UI for Angular Getting Started](../../general/getting-started.md) topic for the basic project setup, then add the component for your target platform.

If your project doesn't use Ignite UI for Angular yet, run `ng add igniteui-angular`. Then import the `IGX_COMBO_DIRECTIVES` token and add it to the `imports` of your component. The token holds the [`IgxComboComponent`](mcp:get_api_reference?platform=angular&component=IgxComboComponent) and its template directives:

```ts
import { Component } from '@angular/core';
import { IGX_COMBO_DIRECTIVES } from 'igniteui-angular/combo';
// import { IGX_COMBO_DIRECTIVES } from '@infragistics/igniteui-angular/combo'; for licensed package

@Component({
    selector: 'app-home',
    template: `
        <igx-combo [data]="cities" valueKey="id" displayKey="name" placeholder="Cities"></igx-combo>
    `,
    imports: [IGX_COMBO_DIRECTIVES]
})
export class HomeComponent {
    public cities = [
        { id: 'BG01', name: 'Sofia' },
        { id: 'BG02', name: 'Plovdiv' },
        { id: 'BG03', name: 'Varna' }
    ];
}
```

## Usage

Use the Angular Combo when users pick one or more options from a long list and need to search it, such as a list of cities or countries.

### Type

The Combo Input provides selection between a border type for a more structured perception on solid color backgrounds, and a boxed type that is most appropriate when placed on top of a vivid image to improve readability.

The Angular Combo uses the box type by default. Set the [`type`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=type) input to `border` for the border type. Add the label with the `igxLabel` directive and the left icon with an `igx-prefix`:

```html
<igx-combo type="border" placeholder="Select a value" [data]="options">
  <label igxLabel>Label</label>
  <igx-prefix><igx-icon>language</igx-icon></igx-prefix>
</igx-combo>

<igx-combo type="box" placeholder="Select a value" [data]="options">
  <label igxLabel>Label</label>
</igx-combo>
```

<code-view iframe-src="{environment:demosBaseUrl}/lists/combo-type" github-src="lists/combo-type" alt="Angular Combo in the border and the box types with their dropdowns open"></code-view>

### Disabled States

Set `disabled` on the Angular Combo to show the disabled state of both the border and the box type.

```html
<igx-combo type="border" [disabled]="true" placeholder="Country" [data]="countries"></igx-combo>
```

<code-view iframe-src="{environment:demosBaseUrl}/lists/combo-disabled" github-src="lists/combo-disabled" alt="Angular Combo in the border and the box types, enabled and disabled, with and without a value"></code-view>

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

<code-view iframe-src="{environment:demosBaseUrl}/lists/combo-size" github-src="lists/combo-size" alt="Angular Combo in the small, medium, and large sizes in the border and the box types with their dropdowns open"></code-view>

### Interaction States

The Combo component supports five states for the enabled variants: Idle, Idle & Hover, Filled, Filled & Hover and Focused, as well as three validation states: Success, Warn, and Error.

Clicking the input field or the toggle opens the dropdown. To open and close the dropdown in code, use the `open`, `close`, and `toggle` methods:

```ts
@ViewChild(IgxComboComponent, { static: true })
public combo: IgxComboComponent;

public openCombo(): void {
    this.combo.open();
}
```

The following sample shows the states side by side. Because hover and focus come from the pointer and the keyboard, the sample styles the display-only combos for these states with CSS classes.

<code-view iframe-src="{environment:demosBaseUrl}/lists/combo-states" github-src="lists/combo-states" alt="Angular Combo in the idle, hovered, filled, focused, and open states"></code-view>

### Validation States

Every experienced designer uses constraints wisely to limit the user input and avoid invalid states, hence the availability of validation styles. Through the available validation styles, the Combo Input is consistent with the standard [Input](../../input-group.md) and equipped for sophisticated designs that display success, warn, and error visuals.

The Angular Combo takes its validation state from the form control that it is bound to, through `ngModel` or a reactive form. Set the [`valid`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=valid) property to an `IgxInputState` value to set the state in code. Put the guidance or the error message in an `igx-hint`:

```html
<igx-combo type="border" [data]="countries" valueKey="id" displayKey="name" [(ngModel)]="selection" required>
  <igx-hint>Please select a different region</igx-hint>
</igx-combo>
```

<code-view iframe-src="{environment:demosBaseUrl}/lists/combo-validation" github-src="lists/combo-validation" alt="Angular Combo in the success, warn, and error states in the border and the box types"></code-view>

### Dropdown Size

The Dropdown used for the Combo comes with the appropriate sizing for Large, Medium and Small Combo similarly to the normal [Dropdown](../../drop-down.md) component. The dropdown takes its size from the Combo, so set the `--ig-size` variable on the Combo.

The Angular Combo also exposes the [`itemHeight`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=itemHeight) and [`itemsMaxHeight`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=itemsMaxHeight) inputs for the height of the items and of the list:

```html
<igx-combo [data]="countries" [itemHeight]="40" [itemsMaxHeight]="160"></igx-combo>
```

The following sample shows the dropdowns only, without their input fields.

<code-view iframe-src="{environment:demosBaseUrl}/lists/combo-dropdown-size" github-src="lists/combo-dropdown-size" alt="Angular Combo dropdowns in the small, medium, and large sizes"></code-view>

### Dropdown Search Input

The dropdown of the Angular Combo contains a search input that filters the options as users type.

Set the text of the empty search input with [`searchPlaceholder`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=searchPlaceholder), show a button that toggles case-sensitive filtering with [`showSearchCaseIcon`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=showSearchCaseIcon), and hide the search input with [`disableFiltering`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=disableFiltering). The [`filteringOptions`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=filteringOptions) input sets the key that the search filters by and whether the filtering is case-sensitive:

```html
<igx-combo [data]="cities" displayKey="name" searchPlaceholder="Search cities" [showSearchCaseIcon]="true"
           [filteringOptions]="{ filteringKey: 'name', caseSensitive: false }">
</igx-combo>
```

The following sample shows the search input only. Because its states come from the pointer and the keyboard, the sample styles the display-only search inputs with CSS classes.

<code-view iframe-src="{environment:demosBaseUrl}/lists/combo-search-input" github-src="lists/combo-search-input" alt="Angular Combo search input in the idle, hovered, disabled, filled, and focused states"></code-view>

### Data Binding

The Angular Combo builds its list of options from the array that you bind to `data`. When the array holds objects, set the keys that the Combo uses:

- [`valueKey`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=valueKey) - the field that identifies an option. The value and the selection of the Combo use it. When you omit it, the Combo uses references to the objects.
- [`displayKey`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=displayKey) - the field that the list and the input field show. When you omit it, the Combo uses the `valueKey`.
- [`groupKey`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=groupKey) - the field that groups the options. Each group gets a header, and [`groupSortingDirection`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=groupSortingDirection) sorts the groups. See [Grouping](./features.md#grouping) in the Combo Features topic.

To bind to data that loads from a remote service, see [Remote Binding](./features.md#remote-binding) in the Combo Features topic.

When the array holds primitive values, such as strings or numbers, don't set the `valueKey` and the `displayKey`. The Combo uses the values themselves.

### Value and Selection

The Angular Combo exposes its selected items through its value, and methods that select and deselect items in code.

The Angular Combo supports two-way binding with `[(ngModel)]` and works in template-driven and reactive forms. The [`selection`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=selection) property returns the selected items, and the [`select`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=select), [`deselect`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=deselect), [`selectAllItems`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=selectAllItems), and [`deselectAllItems`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=deselectAllItems) methods change it:

```html
<igx-combo [data]="cities" displayKey="name" valueKey="id" [(ngModel)]="selectedCities"></igx-combo>
```

```ts
export class CitiesComponent {
    @ViewChild(IgxComboComponent, { static: true })
    public combo: IgxComboComponent;

    public selectedCities: string[] = ['BG01', 'UK01'];

    public selectFavorites(): void {
        this.combo.select(['UK01', 'BG01']);
    }
}
```

The Angular Combo emits [`selectionChanging`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=selectionChanging) before the selection changes, which you can cancel, and [`selectionChanged`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=selectionChanged) after the selection is committed.

To let users select a single item and type in the input field, use the [Simple Combo](./single-selection.md).

### Do/Don't

When using the Combo, its input and dropdown should have the same width and their left and right borders should match. Regarding how the dropdown is shown when the Combo is focused, you should always show it on top of the content that follows the Combo triggering its display. Combos don't push content like expansion panels do.

<Fragment slot="do">

Align the dropdown with the input so both have the same width and matching left and right borders.

</Fragment>
<Fragment slot="dont">

Avoid a dropdown that is narrower than the input or shifted out of alignment, as it breaks the visual connection between the two.

</Fragment>

## Properties

The Angular Combo exposes the following properties. See the API reference for the complete type definitions.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`data`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=data) | `any[]` | — | The options of the Combo. |
| [`valueKey`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=valueKey) | `string` | — | The field that identifies an option. |
| [`displayKey`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=displayKey) | `string` | — | The field that the list and the input field show. Falls back to the `valueKey`. |
| [`groupKey`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=groupKey) | `string` | — | The field that groups the options. |
| [`type`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=type) | `IgxInputGroupType` | `'box'` | The type of the input field: `box`, `border`, or `line`. |
| [`placeholder`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=placeholder) | `string` | — | The text that the input field shows when no item is selected. |
| [`searchPlaceholder`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=searchPlaceholder) | `string` | — | The text that the empty search input shows. |
| [`disabled`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=disabled) | `boolean` | `false` | Whether the Combo is disabled. |
| [`disableFiltering`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=disableFiltering) | `boolean` | `false` | Whether the search input is hidden. |
| [`showSearchCaseIcon`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=showSearchCaseIcon) | `boolean` | `false` | Whether the search input shows the button that toggles case-sensitive filtering. |
| [`filteringOptions`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=filteringOptions) | `IComboFilteringOptions` | — | The key that the search filters by and whether the filtering is case-sensitive. |
| [`allowCustomValues`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=allowCustomValues) | `boolean` | `false` | Whether users can add the text of the search input as a new item. |
| [`disableClear`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=disableClear) | `boolean` | `false` | Whether the clear button is hidden. |
| [`autoFocusSearch`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=autoFocusSearch) | `boolean` | `true` | Whether the search input takes the focus when the dropdown opens. |
| [`itemHeight`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=itemHeight) | `number` | — | The height of the items in the list. |
| [`itemsMaxHeight`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=itemsMaxHeight) | `number` | — | The maximum height of the list. |
| [`valid`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=valid) | `IgxInputState` | `INITIAL` | The validation state of the Combo. |
| [`selection`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=selection) | `any[]` | — | Read-only. The selected items. |

## Methods

The Angular Combo exposes the following methods.

| Method | Description |
| --- | --- |
| [`select`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=select) | Selects the items that you pass. Pass `true` as the second argument to clear the current selection first. |
| [`deselect`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=deselect) | Deselects the items that you pass. |
| [`selectAllItems`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=selectAllItems) | Selects all items. Pass `true` to ignore the current filter. |
| [`deselectAllItems`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=deselectAllItems) | Deselects all items. Pass `true` to ignore the current filter. |
| [`open`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=open) | Opens the dropdown. |
| [`close`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=close) | Closes the dropdown. |
| [`toggle`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=toggle) | Opens the dropdown when it is closed, and closes it when it is open. |

## Events

The Angular Combo emits the following events.

| Name | Description |
| --- | --- |
| [`selectionChanging`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=selectionChanging) | Emitted with [`IComboSelectionChangingEventArgs`](mcp:get_api_reference?platform=angular&component=IComboSelectionChangingEventArgs) before the selection changes. Set `cancel` to keep the selection. |
| [`selectionChanged`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=selectionChanged) | Emitted with [`IComboSelectionChangedEventArgs`](mcp:get_api_reference?platform=angular&component=IComboSelectionChangedEventArgs) after the selection is committed. |
| [`opening`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=opening) | Emitted before the dropdown opens. Cancelable. |
| [`opened`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=opened) | Emitted after the dropdown opens. |
| [`closing`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=closing) | Emitted before the dropdown closes. Cancelable. |
| [`closed`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=closed) | Emitted after the dropdown closes. |
| [`searchInputUpdate`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=searchInputUpdate) | Emitted when the text of the search input changes. |
| [`addition`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=addition) | Emitted before users add a custom value to the list. |

## Styling

The Combo comes with the combined styling flexibility of its input and dropdown pieces. There are options for the input text elements' color, border style and color. For the dropdown one may change the background color, or use the various options related to the items in the Combo Dropdown, such as the Search Input and the items with their background and text colors.

Change the colors of the toggle and the clear buttons of the Angular Combo with the following CSS variables:

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
| `--ig-combo-search-separator-border-color` | The color of the line between the search input and the list. |
| `--ig-combo-empty-list-placeholder-color` | The color of the text that the empty list shows. |

The input field takes its colors from the `--ig-input-group-*` variables, the dropdown from the `--ig-drop-down-*` variables, and the checkboxes of the items from the `--ig-checkbox-*` variables, so you can set all of them on the Combo.

### Sass Theming

When you modify a primary property, all related dependent properties are automatically updated to reflect the change. The primary parameter of the `combo-theme` function is `$toggle-button-background`, from which the theme derives the colors of the toggle button in all states. Create the themes of the Combo, its dropdown, and its checkboxes, and include them with the `tokens()` mixin, which emits the matching CSS variables in the scope where you include it.

```scss
@use "igniteui-angular/theming" as *;

$custom-combo-theme: combo-theme(
  $toggle-button-background: #e0e0e0
);

$custom-drop-down-theme: drop-down-theme(
  $background-color: #e6f2ff
);

$custom-checkbox-theme: checkbox-theme(
  $fill-color: #005dcc,
  $empty-color: #005dcc
);

:host {
  @include tokens($custom-combo-theme);
  @include tokens($custom-drop-down-theme);
  @include tokens($custom-checkbox-theme);
}
```

The Angular Combo shows its dropdown in an overlay. Depending on the view encapsulation and on where the overlay outlet is, a theme included under `:host` may not reach the dropdown. See the [Overlay Styling](../../overlay-styling.md) topic.

### CSS Variables

Set the CSS variables on a Combo or on a container when you need local styling without a Sass build step:

```css
.styled-combo {
  --ig-input-group-border-color: #1377d5;
  --ig-combo-toggle-button-background: #e0e0e0;
  --ig-drop-down-background-color: #e6f2ff;
  --ig-drop-down-selected-item-background: #4ca7e3;
  --ig-checkbox-fill-color: #005dcc;
}
```

```typescript
import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { IComboSelectionChangingEventArgs, IgxComboComponent } from 'igniteui-angular/combo';
import { IgxToastComponent } from 'igniteui-angular/toast';
import { VerticalAlignment } from 'igniteui-angular/core';
import { getHeroWeaponsData, IHeroWeapon } from '../../../data/heroData';

@Component({
    selector: 'app-combo',
    styleUrls: ['./combo-styling.component.scss'],
    templateUrl: './combo-styling.component.html',
    imports: [IgxComboComponent, IgxToastComponent]
})
export class ComboStylingComponent implements OnInit {
    elem = inject(ElementRef);

    @ViewChild('loadToast', { read: IgxToastComponent, static: true })
    public loadToast: IgxToastComponent;

    public weaponsData: IHeroWeapon[] = [];

    public ngOnInit() {
        this.weaponsData = getHeroWeaponsData();
    }

    public setWeaponsLimit(event: IComboSelectionChangingEventArgs) {
        this.loadToast.positionSettings.verticalDirection = VerticalAlignment.Middle;
        // this.loadToast.autoHide = true;

        if (event.newValue.length > 2) {
            event.cancel = true;
            this.loadToast.open('Choose only two items');
        }
    }
}
```
```html
<div class="control-wrapper">
    <igx-combo [width]="'430px'" [data]="weaponsData" [displayKey]="'field'" [valueKey]="'field'" [overlaySettings]="{outlet: elem}"
        [groupKey]="'weaponRange'" placeholder="Pick up two weapons" searchPlaceholder="Search..."
        [itemsMaxHeight]="255" (selectionChanging)="setWeaponsLimit($event)">
    </igx-combo>

    <igx-toast #loadToast [displayTime]="1200"></igx-toast>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$custom-drop-down-theme: drop-down-theme(
  $background-color: #57a5cd,
);

$custom-combo-theme: combo-theme(
  $search-separator-border-color: #1d3743,
  $toggle-button-background: #57a5cd,
);

$custom-checkbox-theme: checkbox-theme(
  $border-radius: 10px,
  $fill-color: #1d3743,
  $empty-color: #1d3743,
);

:host {
    @include tokens($custom-drop-down-theme);
    @include tokens($custom-combo-theme);
    @include tokens($custom-checkbox-theme);
}
```

### Styling with Tailwind

You can style the Angular Combo using our custom Tailwind utility classes. Make sure to [set up Tailwind](../../themes/tailwind.md) first.

Import the Ignite UI utilities in your global stylesheet:

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/utilities/material.css";
```

Use the `light-combo` or `dark-combo` class for the corresponding theme, and override the generated CSS variables with arbitrary properties:

```html
<igx-combo class="!light-combo ![--toggle-button-background:#e5ebf3] ![--clear-button-foreground:#212121]">
  ...
</igx-combo>
```

The exclamation mark (`!`) gives the Tailwind utility precedence over the default theme styles of the Combo.

```typescript
import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { IComboSelectionChangingEventArgs, IgxComboComponent } from 'igniteui-angular/combo';
import { IgxToastComponent } from 'igniteui-angular/toast';
import { VerticalAlignment } from 'igniteui-angular/core';
import { getHeroWeaponsData, IHeroWeapon } from '../../../data/heroData';

@Component({
    selector: 'app-combo-tailwind-styling',
    styleUrls: ['./combo-tailwind-styling.component.scss'],
    templateUrl: './combo-tailwind-styling.component.html',
    imports: [IgxComboComponent, IgxToastComponent]
})
export class ComboTailwindStylingComponent implements OnInit {
    elem = inject(ElementRef);

    @ViewChild('loadToast', { read: IgxToastComponent, static: true })
    public loadToast: IgxToastComponent;

    public weaponsData: IHeroWeapon[] = [];

    public ngOnInit() {
        this.weaponsData = getHeroWeaponsData();
    }

    public setWeaponsLimit(event: IComboSelectionChangingEventArgs) {
        this.loadToast.positionSettings.verticalDirection = VerticalAlignment.Middle;
        // this.loadToast.autoHide = true;

        if (event.newValue.length > 2) {
            event.cancel = true;
            this.loadToast.open('Choose only two items');
        }
    }
}
```
```html
<div class="control-wrapper">
    <igx-combo class="!light-combo ![--toggle-button-background:#99BAA6] ![--clear-button-foreground:#99BAA6]" [width]="'430px'" [data]="weaponsData" [displayKey]="'field'" [valueKey]="'field'" [overlaySettings]="{outlet: elem}"
        [groupKey]="'weaponRange'" placeholder="Pick up two weapons" searchPlaceholder="Search..."
        [itemsMaxHeight]="255" (selectionChanging)="setWeaponsLimit($event)">
    </igx-combo>

    <igx-toast #loadToast [displayTime]="1200"></igx-toast>
</div>
```
```scss
.control-wrapper {
  padding: 8px;
}
```

## Accessibility

The Angular Combo uses the roles of the WAI-ARIA combobox pattern: the input field is a `combobox` that controls a `listbox` of options, and users open the list, move through it, and select options with the keyboard.

### Keyboard Interaction

The input field of the Angular Combo is a tab stop. The following keys work while the Combo has the focus:

| Key | Action |
| --- | --- |
| <kbd>Arrow Down</kbd> / <kbd>Alt</kbd> + <kbd>Arrow Down</kbd> | In the closed Combo, opens the dropdown and moves the focus to the search input. In the search input, moves the focus to the first option, or to the add item button when the list is empty and custom values are allowed. In the list, moves to the next option, and from the last option to the add item button when it is shown. |
| <kbd>Arrow Up</kbd> / <kbd>Alt</kbd> + <kbd>Arrow Up</kbd> | In the search input, closes the dropdown and moves the focus to the Combo. In the list, moves to the previous option. From the first option, moves the focus back to the search input, or closes the dropdown and moves the focus to the Combo when there is no search input. |
| <kbd>Home</kbd> / <kbd>End</kbd> | In the list, moves to the first or the last option. |
| <kbd>Space</kbd> | In the list, selects or deselects the active option. |
| <kbd>Enter</kbd> | In the list, confirms the selection and closes the dropdown. On the add item button, adds the text of the search input as a new item and selects it. |
| <kbd>Escape</kbd> | When the dropdown is open, closes it and keeps the focus on the Combo. When the dropdown is closed, clears the selection. |
| <kbd>Tab</kbd> | Closes the dropdown and moves the focus to the next focusable element. |

### Screen Readers / ARIA

The Angular Combo renders the following roles and attributes:

| Element | Role | Attributes |
| --- | --- | --- |
| The input of the input field | `combobox` | `aria-haspopup="listbox"`, `aria-expanded`, `aria-controls` that points to the list, `aria-labelledby`, and `aria-label` |
| The search input | `searchbox` | `aria-autocomplete="list"` and `aria-label="search"` |
| The dropdown | `listbox` | `aria-labelledby` that points to the `igxLabel` or to the `ariaLabelledBy` element |
| The container of the options | — | `aria-multiselectable="true"` and `aria-activedescendant` that points to the active option |
| Each option | `option` | `aria-selected` |
| Each group header | `group` | — |
| The add item button | `button` | `aria-label` from the resource strings |

The input field takes its accessible name from the `igxLabel` or from the [`ariaLabelledBy`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=ariaLabelledBy) input. Without them, it gets a name from the resource strings that says whether options are selected.

### Accessibility Compliance

Infragistics documents Ignite UI for Angular accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| --- | --- |
| [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships) | The `combobox`, `listbox`, and `option` roles expose the structure, and the list is labeled by the `igxLabel` or the `ariaLabelledBy` element. |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | The arrow keys open the dropdown and move through the options, and Space selects the active option. |
| [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap) | Tab closes the dropdown and moves the focus out of the Combo. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | The input field exposes the `combobox` role, a name from the label, and its expanded state through `aria-expanded`. Each option exposes its selected state through `aria-selected`. |

Your responsibilities:

- Give every Combo a label that names what users select. See [Type](#type).
- When you override the theme colors, keep a contrast ratio of at least 3:1 for the borders and the focus indicator, as [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast) requires.
- Show the error message in the helper text, not by color alone. See [Validation States](#validation-states).

## Known Limitations

- The input field that shows the selected items isn't editable. In Firefox, the cursor is visible in it.
- When the Angular Combo is bound to an array of primitives that contains `undefined`, the list doesn't show `undefined`. When the `valueKey` field of an object is `undefined`, the list shows the item, but users can't select it.
- When the Angular Combo is bound to a remote service and has a predefined selection, the input field stays blank until the data loads.
- The list uses the [Virtual Scroll](../../layouts/virtual-scroll.md#known-limitations), so its limitations apply. The list renders only the options in view, and code that queries the DOM finds only those options.

## API References

The Angular Combo API reference lists the complete API surface for the target platform.

- [`IgxComboComponent`](mcp:get_api_reference?platform=angular&component=IgxComboComponent)
- [`IgxDropDown`](mcp:get_api_reference?platform=angular&component=IgxDropDownComponent)
- [`IgxInputGroup`](mcp:get_api_reference?platform=angular&component=IgxInputGroupComponent)
- [`IgxCheckbox`](mcp:get_api_reference?platform=angular&component=IgxCheckboxComponent)
- `combo-theme`

## Dependencies

The Angular Combo requires a theme to apply its colors and sizes. See the framework-specific setup in [**Getting Started**](../../general/getting-started.md).

The Angular Combo uses the Drop Down, the Input Group, the Checkbox, the Icon, and the Overlay. Their themes style its parts:

- `drop-down-theme`
- `input-group-theme`
- `checkbox-theme`
- `icon-theme`
- `overlay-theme`

## Additional Resources

The following resources provide more Angular Combo guidance and project support:

- [Combo Features](./features.md)
- [Combo Remote Binding](./features.md#remote-binding)
- [Combo Templates](./templates.md)

- [Combo - Design System Component](https://www.infragistics.com/products/indigo-design/help/components/combo)
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

## Related Components

The Angular Combo lets users search a list and select one or more options. Use these components when the selection works differently:

- [Select](../../select.md) - Use Select when users pick a single option from a short list that doesn't need search.
- [Dropdown](../../drop-down.md) - Use Dropdown to show a list of actions or options from a button or another element.
- [Simple Combo](./single-selection.md) - Use Simple Combo when users select a single item and can type in the input field to filter the list or enter a custom value.

## FAQ

These questions cover common Angular Combo setup, selection, and usage scenarios.

  **Q: How do I set the selected items of the Combo?**

    Bind the Angular Combo with `[(ngModel)]` or a form control to an array of `valueKey` values, or call the `select` method with the items. Without a `valueKey`, the Angular Combo uses references to the objects in its `data`.
  
  **Q: Can the Combo allow only one selected item?**

    The Angular Combo always allows multiple selection. Use the Simple Combo when users must select a single item; it also lets users type in the input field to filter the list.
  
  **Q: How do I group the options of the Combo?**

    Set the `groupKey` of the Angular Combo to the field that holds the group of each option. The Angular Combo shows a header for each group and sorts the groups.
  
  **Q: Should I use the Combo or the Select?**

    Use the Angular Combo when the list is long, users need to search it, or they select more than one option. Use the Angular Select for a short list from which users pick a single option without searching.
  

