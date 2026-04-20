---
title: Angular Combobox Component | Data binding combobox | Infragistics | MIT license
_description: The Ignite UI for Angular ComboBox provides a powerful input, combining features of the basic HTML input, select, filtering and custom drop-down lists. Try it for FREE
_keywords: angular combobox, angular combo component, angular combobox component, Angular UI Components, ignite ui for angular, infragistics
_license: MIT
_tocName: Combo
---

# Angular ComboBox Component Overview

The Angular ComboBox component represents a drop-down list that provides editable functionalities, allowing users to choose multiple options from a predefined list. The Ignite UI for Angular ComboBox Component also provides filtering capabilities, grouping and adding custom values to a dropdown list. It can be used as an alternative to the HTML select tag and has several out-of-the-box features such as data binding (local and remote), filtering, grouping, custom templates for items, header, and footer, custom values, and more.


## Angular ComboBox Example

In this Angular ComboBox example, you can see how users can filter items and perform selection with the provided data. In addition, the ComboBox exposes keyboard navigation and custom styling capabilities.

```typescript
import { Component, OnInit } from '@angular/core';
import { localData } from './local-data';
import { IgxComboComponent } from 'igniteui-angular/combo';

@Component({
    selector: 'app-combo-main',
    styleUrls: ['./combo-main.component.scss'],
    templateUrl: './combo-main.component.html',
    imports: [IgxComboComponent]
})

export class ComboMainComponent implements OnInit {
    public lData: any[];

    public ngOnInit() {
        this.lData = localData;
    }
}
```
```html
<igx-combo #combo class="combo" [itemsMaxHeight]="250"
    [data]="lData" [displayKey]="'field'" [valueKey]="'field'"
    placeholder="Location(s)" searchPlaceholder="Search...">
</igx-combo>
```
```scss
.combo {
    margin: 8px;
    width: 430px;
}
```

<div class="divider--half"></div>

## Angular ComboBox Features

The combobox control exposes the following features:

- Data Binding - local data and [remote data](combo-remote.md)
- [Value Binding](combo-features.md#data-binding)
- [Filtering](combo-features.md#filtering)
- [Grouping](combo-features.md#grouping)
- [Custom Values](combo-features.md#custom-values)
- [Templates](combo-templates.md)
- Integration with [Template Driven Forms](input-group.md) and [Reactive Forms](angular-reactive-form-validation.md)

## Getting Started with Ignite UI for Angular ComboBox

To get started with the Ignite UI for Angular ComboBox component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxComboModule` in your **app.module.ts** file.

```typescript
import { IgxComboModule } from 'igniteui-angular/combo';
// import { IgxComboModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [
        ...
        IgxComboModule,
        ...
    ]
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxComboComponent` as a standalone dependency, or use the [`IGX_COMBO_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/combo/src/combo/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { IGX_COMBO_DIRECTIVES } from 'igniteui-angular/combo';
// import { IGX_COMBO_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igx-combo></igx-combo>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_COMBO_DIRECTIVES]
    /* or imports: [IgxComboComponent] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Combo module or directives imported, you can start using the `igx-combo` component.

## Using the Angular ComboBox Component

After the initial setup, you can bind the [igx-combo](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcombocomponent.html) to data.

```typescript
@Component({
    selector: 'app-combo-demo',
    template: '<igx-combo [data]="cities"></igx-combo>',
    styleUrls: ['combo-demo.component.scss'],
    standalone: true,
    imports: [IGX_COMBO_DIRECTIVES]
})
export class ComboDemo implements OnInit {
    public cities: { name: string, id: string }[] = [];

    public ngOnInit() {
        this.cities = [{ name: 'London', id: 'UK01' }, { name: 'Sofia', id: 'BG01'}, ...];
    }
}
```

Our combobox is now bound to the array of cities, but we still haven't told the component which property to use for the items' text and which to use for the value. Let's do that now.

### Data value and display properties

Since the combobox is bound to an array of complex data (i.e. objects), we need to specify a property that the control will use to handle the selected items. The control exposes two `@Input` properties - [valueKey](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxComboComponent.html#valueKey) and [displayKey](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxComboComponent.html#displayKey):

- `valueKey` - _Optional, recommended for object arrays_ - Specifies which property of the data entries will be stored for the combobox's selection. If `valueKey` is omitted, the combobox value will use references to the data entries (i.e. the selection will be an array of entries from `igxCombo.data`).
- `displayKey` - _Required for object arrays_ - Specifies which property will be used for the items' text. If no value is specified for `displayKey`, the combobox will use the specified `valueKey` (if any).

In our case, we want the combobox to display the `name` of each city and the combobox value to store the `id` of each city. Therefore, we are providing these properties to the combobox's `displayKey` and `valueKey`, respectively:

```html
<igx-combo [data]="cities" displayKey="name" valueKey="id"></igx-combo>
```

> [!Note]
> When the data source is an array of primitives (e.g. `string[]`, `number[]`), **do not** specify a `valueKey` and `displayKey`. Primitive values will be used for both value and text.

### Two-Way Binding

The combobox component fully supports two-way data-binding with `[(ngModel)]` as well as usage in [template driven](https://angular.io/guide/forms) and [reactive](https://angular.io/guide/reactive-forms) forms. The combobox selection can be accessed either through two-way binding or through the [selection API](#selection-api). We can pass an array of items of the same type as the ones in the combobox's selection (based on `valueKey`) and any time one changes, the other is updated accordingly.

In the following example, the cities Sofia and London will initially be selected. Any further changes in the combobox's selection will reflect on the `selectedCities` array.

```html
<igx-combo [data]="cities" [(ngModel)]="selectedCities" displayKey="name" valueKey="id"></igx-combo>
```

```typescript
export class MyCombo {
    public cities: { name: string, id: string }[] = [
                   { name: 'Sofia', id: 'BG01' }, { name: 'London', id: 'UK01' }, ...];
    public selectedCities: string[] = ['BG01', 'UK01'];
}
```


```typescript
import { Component, ViewChild } from '@angular/core';
import { IgxComboComponent } from 'igniteui-angular/combo';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { CITIES, ICity } from './cities';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-combo-valuekey',
    templateUrl: 'combo-valuekey.component.html',
    styleUrls: ['combo-valuekey.component.scss'],
    imports: [IgxComboComponent, FormsModule, IgxButtonDirective]
})
export class ComboValueKeyComponent {
    @ViewChild('withValueKey', { read: IgxComboComponent })
    public comboValueKey: IgxComboComponent;

    public cities: ICity[] = CITIES;
    public selectedValueKey: string[] = ['UK01', 'BG01'];

    public selectFavorites() {
        this.comboValueKey.select(['UK01', 'BG01', 'JP01', 'DE01']);
    }
}
```
```html
<div class="sample-wrapper">
    <div class="combo-section">
        <igx-combo class="combo" #withValueKey [data]="cities" valueKey="id" displayKey="name" groupKey="country"
            [(ngModel)]="selectedValueKey">
        </igx-combo>
        <button igxButton="contained" (click)="selectFavorites()">Select Favorites</button>
    </div>
    <h6>Selected Cities:</h6>
    <div>{{ selectedValueKey }}</div>
</div>
```
```scss
button {
    margin: 0 8px;
}

.sample-wrapper {
    margin: 16px;
}

.combo-section {
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    margin-bottom: 16px;
}

.combo {
    width: 430px;
}

@media (max-width: 700px) {
    button {
        margin: 16px 0;
    }
}
```


Two-way binding can also be achieved without a specified `valueKey`. For example, if `valueKey` is omitted, the bound model will look like this:

```typescript
export class MyCombo {
    public cities: { name: string, id: string } [] = [
                   { name: 'Sofia', id: 'BG01' }, { name: 'London', id: 'UK01' }, ...];
    public selectedCities: { name: string, id: string } [] = [this.cities[0], this.cities[1]];
}
```


```typescript
import { Component, ViewChild } from '@angular/core';
import { IgxComboComponent } from 'igniteui-angular/combo';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxCardComponent, IgxCardHeaderComponent, IgxCardHeaderSubtitleDirective, IgxCardHeaderTitleDirective } from 'igniteui-angular/card';
import { CITIES, ICity } from './cities';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-combo-binding',
    templateUrl: 'combo-binding.component.html',
    styleUrls: ['combo-binding.component.scss'],
    imports: [IgxComboComponent, FormsModule, IgxButtonDirective, IgxCardComponent, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardHeaderSubtitleDirective]
})
export class ComboBindingComponent {
    @ViewChild('noValueKey', { read: IgxComboComponent })
    public comboNoValueKey: IgxComboComponent;

    public cities: ICity[] = CITIES;
    public selectedNoValueKey: ICity[] = [this.cities[4], this.cities[0]];

    public selectFavorites() {
        const selectedItems: ICity[] = this.cities.filter((e: ICity) => ['UK01', 'BG01', 'JP01', 'DE01'].indexOf(e.id) > -1);
        this.comboNoValueKey.select(selectedItems);
    }
}
```
```html
<div class="sample-wrapper">
  <div class="combo-section">
    <igx-combo class="combo" #noValueKey [data]="cities" displayKey="name"
      groupKey="country" [(ngModel)]="selectedNoValueKey">
    </igx-combo>
    <button igxButton="contained" (click)="selectFavorites()">Select Favorites</button>
  </div>
  <h6>Selected Cities:</h6>
  <div class="cities-container">
    @for (city of selectedNoValueKey; track city) {
      <igx-card >
        <igx-card-header>
          <h5 igxCardHeaderTitle>{{ city.name }}</h5>
          <h5 igxCardHeaderSubtitle>{{ city.country }}</h5>
          {{ city.id }}
        </igx-card-header>
      </igx-card>
    }
  </div>
</div>
```
```scss
button {
    margin: 0 8px;
}

.sample-wrapper {
    margin: 16px;
    max-height: 600px;
}

.combo-section {
    display: flex;
    justify-content: space-between;
    max-width: 630px;
    flex-flow: row wrap;
    margin-bottom: 16px;
}

.combo {
    width: 430px;
}

.cities-container {
    max-width: 630px;
    max-height: 450px;
    overflow-y: auto;

    igx-card {
        margin: 8px 8px 8px 0;
    }
}

@media (max-width: 700px) {
    button {
        margin: 16px 0;
    }
}
```


### Selection API

The combobox component exposes API that allows getting and manipulating the current selection state of the control.

One way to get the combobox's selection is via the [selection](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcombocomponent.html#selection) property. It returns an array of values which correspond to the selected items, depending on the specified [valueKey](#data-value-and-display-properties) (if any).

In our example, `selection` will return an array of the selected cities' `id`s:

```typescript
export class MyCombo {
    ...
    public selection: string[] = this.combo.selection;
}
```

Using the selection API, you can also change the combobox's selected items without user interaction with the control - via a button click, as a response to an Observable changing, etc. For example, we can implement a button that selects a set of cities, using the [select()](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcombocomponent.html#select) method:

```html
<igx-combo [data]="cities" displayKey="name" valueKey="id"></igx-combo>
<button igxButton (click)="selectFavorites()">Select Favorites</button>
```

When clicking the button, the cities London and Sofia will be added to the combobox's selection:

```typescript
export class MyExampleCombo {
    @ViewChild(IgxComboComponent, { read: IgxComboComponent, static: true })
    public combo: IgxComboComponent;
    ...
    selectFavorites(): void {
        this.combo.select(['UK01', 'BG01']);
    }
}
```

The combobox also fires an event every time its selection changes - [selectionChanging()](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxComboComponent.html#selectionChanging). The emitted event arguments, [IComboSelectionChangingEventArgs](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/icomboselectionchangingeventargs.html), contain information about the selection prior to the change, the current selection and the items that were added or removed. The event can also be cancelled, preventing the selection update with the new array of items.

Binding to the event can be done through the proper `@Output` property on the `igx-combo` tag:

```html
<igx-combo [data]="cities" displayKey="name" valueKey="id"
           (selectionChanging)="handleCityChange($event)">
</igx-combo>
```

In the following example, when a city is added or removed from the selection, a handler that updates the statistic visualization is fired:

```typescript
export class MyExampleCombo {
    ...
    handleCityChange(event: IComboSelectionChangingEventArgs): void {
        for (const item of event.added) {
            this.addToVisualization(item);
        }
        for (const item of event.removed) {
            this.removeFromVisualization(item);
        }
    }
}
```

Additionally, the combobox fires a [selectionChanged](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxComboComponent.html#selectionChanged) event after the selection is committed and the component state has been updated. The emitted event arguments, [IComboSelectionChangedEventArgs](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/icomboselectionchangedeventargs.html), contain information about the previous selection, the current selection and the items that were added or removed. Unlike `selectionChanging`, this event is not cancellable and is guaranteed to reflect the final committed selection state. When the combobox is used with `ngModel` or Angular forms, `selectionChanged` is emitted after the value change callback is invoked.

Binding to the event can be done through the proper `@Output` property on the `igx-combo` tag:

```html
<igx-combo [data]="cities" displayKey="name" valueKey="id"
           (selectionChanged)="handleCitySelectionChanged($event)">
</igx-combo>
```

In the following example, when the selection changes, the handler updates a short summary and tracks how many items were added and removed:

```typescript
export class MyExampleCombo {
    ...
    handleCitySelectionChanged(event: IComboSelectionChangedEventArgs): void {
        this.updateSelectionSummary(event.displayText, event.newSelection.length);

        for (const item of event.added) {
            this.highlightAddedCity(item);
        }

        for (const item of event.removed) {
            this.dimRemovedCity(item);
        }

        this.logSelectionTransition(event.oldSelection, event.newSelection);
    }
}
```

## Single Selection

By default, the combo control provides multiple selection. The snippet below demonstrates how to achieve single selection in the component by attaching a handler to the `selectionChanging` event:

```html
<igx-combo [data]="lData" (selectionChanging)="singleSelection($event)"></igx-combo>
```

```typescript
public singleSelection(event: IComboSelectionChangingEventArgs) {
    if (event.added.length) {
        event.newValue = event.added;
    }
}
```

> Note: It is recommended to use the [igxSimpleCombo](simple-combo.md) instead of modifying the igxCombo like it is shown above.

<div class="divider--half"></div>

## Keyboard Navigation

When combobox is closed and focused:

- `ArrowDown` or `Alt` + `ArrowDown` will open the combobox's drop down and will move focus to the search input.

- `Esc` will clear the selected value(s) while keeping focus on the combobox.

- `Tab` will move the focus to the next focusable element outside the combobox.

When combobox is opened:

- `Esc` will close the list and keep the focus on the combobox.

- `Tab` will close the list and move focus to the next focusable element.

When combobox is opened and search input is focused:

- `ArrowUp` or `Alt` + `ArrowUp` will close the combobox's drop down and will move focus to the closed combobox.

- `ArrowDown` will move focus from the search input to the first list item. If the list is empty and custom values are enabled will move it to the Add new item button.

> [!NOTE]
> Any other key stroke will be handled by the input.

When combobox is opened and list item is focused:

- `ArrowDown` will move to the next list item. If the active item is the last one in the list and custom values are enabled, the focus will be moved to the Add item button.

- `ArrowUp` will move to the previous list item. If the active item is the first one in the list, the focus will be moved back to the search input.

- `End` will move to the last list item.

- `Home` will move to the first list item.

- `Space` will select/deselect the active list item.

- `Enter` will confirm the already selected items and will close the list.

When combobox is opened, allow custom values are enabled and add item button is focused:

- `Enter` will add a new item with `valueKey` and `displayKey` equal to the text in the search input and will select the new item.

- `ArrowUp` focus will be moved back to the last list item or if the list is empty, will be moved to the search input.


## Styling

### Combo Theme Property Map

When you modify a primary property, all related dependent properties are updated automatically:

<table class="collapsible-table">
    <thead>
        <tr>
            <th>Primary Property</th>
            <th>Dependent Property</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody class="group">
        <tr class="primary">
            <td><strong>$empty-list-background</strong></td>
            <td>$empty-list-placeholder-color</td>
            <td>The combo placeholder text color.</td>
        </tr>
        <tr class="primary">
            <td><details><summary><strong>$toggle-button-background</strong></summary></details></td>
            <td>$toggle-button-foreground</td>
            <td>The combo toggle button foreground color.</td>
        </tr>
        <tr class="dependent">
            <td></td>
            <td>$toggle-button-background-focus</td>
            <td>The combo toggle button background color when focused.</td>
        </tr>
        <tr class="dependent">
            <td></td>
            <td>$toggle-button-background-focus--border</td>
            <td>The combo toggle button background color when focused (border variant).</td>
        </tr>
        <tr class="dependent">
            <td></td>
            <td>$toggle-button-foreground-filled</td>
            <td>The combo toggle button foreground color when filled.</td>
        </tr>
        <tr class="dependent">
            <td></td>
            <td>$toggle-button-background-disabled</td>
            <td>The combo toggle button background color when disabled.</td>
        </tr>
        <tr class="dependent">
            <td></td>
            <td>$toggle-button-foreground-disabled</td>
            <td>The combo toggle button foreground color when disabled.</td>
        </tr>
        <tr class="primary">
            <td><strong>$toggle-button-background-focus</strong></td>
            <td>$toggle-button-foreground-focus</td>
            <td>The combo toggle button foreground color when focused.</td>
        </tr>
        <tr class="primary">
            <td><strong>$clear-button-background-focus</strong></td>
            <td>$clear-button-foreground-focus</td>
            <td>The combo clear button foreground color when focused.</td>
        </tr>
    </tbody>
</table>


Using the [`Ignite UI for Angular Theming`](themes/index.md), we can greatly alter the combobox appearance. First, in order for us to use the functions exposed by the theme engine, we need to import the `index` file in our style file:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`combo-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-combo-theme). By setting the `$toggle-button-background`, the theme automatically determines suitable state colors and contrast foregrounds for the button. You can also specify additional parameters, such as `$search-separator-border-color`:

```scss
$custom-combo-theme: combo-theme(
  $search-separator-border-color: #1d3743,
  $toggle-button-background: #57a5cd,
);
```

The [`IgxComboComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcombocomponent.html) uses the [`IgxDropDownComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdowncomponent.html) internally as an item container. It also includes the [`IgxInputGroup`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputgroupcomponent.html) and the [`IgxCheckbox`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcheckboxcomponent.html) components. Creating new themes, that extend these components' themes, and scoping them under the respective classes will let you change the combobox styles:

```scss
$custom-drop-down-theme: drop-down-theme(
  $background-color: #57a5cd,
);

$custom-checkbox-theme: checkbox-theme(
  $border-radius: 10px,
  $fill-color: #1d3743,
  $empty-color: #1d3743,
);
```

The last step is to include the component's theme.

```scss
:host {
  @include tokens($custom-combo-theme);
  @include tokens($custom-drop-down-theme);
  @include tokens($custom-checkbox-theme);
}
```

> [!NOTE]
> The [`IgxCombo`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcombocomponent.html) component uses the [`IgxOverlay`](overlay.md) service to hold and display the combobox items list container. To properly scope your styles you might have to use an [`OverlaySetting.outlet`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html#outlet). For more details check the [`IgxOverlay Styling Guide`](overlay-styling.md). Also is necessary to use `::ng-deep` when we are styling the components.
> [!Note]
> The default `type` of the `IgxCombo` is `box` unlike the [`IgxSelect`](select.md) where it is `line`.

### Demo

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


<div class="divider--half"></div>

### Styling with Tailwind

You can style the `combo` using our custom Tailwind utility classes. Make sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

Along with the tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.

- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-combo`, `dark-combo`.

Once applied, these classes enable dynamic theme calculations. From there, you can override the generated CSS variables using `arbitrary properties`. After the colon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the [combo-theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-combo-theme). The syntax is as follows:

```html
<igx-combo
class="!light-combo
![--toggle-button-background:#99BAA6]
![--clear-button-foreground:#99BAA6]"
...></igx-combo>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your combo should look like this:

<div class="sample-container loading" style="height:410px">
    <iframe id="combo-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/lists/combo-tailwind-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

## Known Issues

- The combobox input that displays the selected items is not editable. However, due to browser specifics in FireFox, the cursor is visible.
- When the combobox is bound to an array of primitive data which contains `undefined` (i.e. `[ undefined, ...]`), `undefined` is not displayed in the dropdown. When it is bound to an array of complex data (i.e. objects) and the value used for `valueKey` is `undefined`, the item will be displayed in the dropdown, but cannot be selected.
- When the combobox is bound to a remote service and there is a predefined selection, its input will remain blank until the requested data is loaded.

> [!NOTE]
> The combobox uses `igxForOf` directive internally hence all `igxForOf` limitations are valid for the combobox. For more details see [`igxForOf Known Issues`](for-of.md#known-limitations) section.

## API References

<div class="divider--half"></div>

- [IgxComboComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcombocomponent.html)
- [IgxComboComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-combo-theme)

Additional [angular components](https://www.infragistics.com/products/ignite-ui-angular) and/or directives with relative APIs that were used:

- [IgxDropDownComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdowncomponent.html)
- [IgxInputGroupComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputgroupcomponent.html)
- [IgxCheckboxComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcheckboxcomponent.html)

## Theming Dependencies

- [IgxDropDown Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-drop-down-theme)
- [IgxIcon Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-icon-theme)
- [IgxCheckbox Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-checkbox-theme)
- [IgxOverlay Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-overlay-theme)

## Additional Resources

<div class="divider--half"></div>

- [ComboBox Features](combo-features.md)
- [ComboBox Remote Binding](combo-remote.md)
- [ComboBox Templates](combo-templates.md)
- [Template Driven Forms Integration](input-group.md)
- [Reactive Forms Integration](angular-reactive-form-validation.md)
- [Single Select ComboBox](simple-combo.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
