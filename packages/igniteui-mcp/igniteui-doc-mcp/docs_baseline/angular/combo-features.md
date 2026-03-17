---
title: ComboBox Features - MIT license 
_description: Combo control exposes several of features including data and value binding, custom values, filtering, grouping, etc.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Combo components, Angular Features, Angular Combo Features, Angular Combo Data Binding, Angular Combo Value Binding, Angular Combo Data Filtering, Angular Combo Grouping, Angular Combo Custom Values
_license: MIT
_tocName: Features
---

# ComboBox Features

<p class="highlight">
The Ignite UI for Angular ComboBox control exposes several features including data and value binding, custom values, filtering, grouping, etc.
</p>

## Angular ComboBox Features Example

The following demo demonstrates some of the combobox features that are enabled/disabled at runtime:


```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxComboComponent } from 'igniteui-angular/combo';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { localData } from './local-data';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-combo',
    styleUrls: ['./combo-features.component.scss'],
    templateUrl: './combo-features.component.html',
    imports: [IgxComboComponent, IgxSwitchComponent, FormsModule]
})
export class ComboFeaturesComponent implements OnInit{
    @ViewChild('combo', { read: IgxComboComponent, static: true }) public combo: IgxComboComponent;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    public GROUP_KEY = 'region';
    public lData: any[];
    public disableFiltering = false;
    public showSearchCaseIcon = false;
    public customValues = true;
    public disabled = false;

    public ngOnInit() {
        this.lData = localData;
    }

    public handleAddition(event) { }

    public enableGroups(event) {
        this.combo.groupKey = event.checked ? this.GROUP_KEY : '';
    }
}
```
```html
<igx-combo #combo class="combo" [data]="lData" [displayKey]="'field'" [valueKey]="'field'"
    placeholder="Location(s)" searchPlaceholder="Search..." [allowCustomValues]="customValues"
    (addition)="handleAddition($event)" [disableFiltering]="disableFiltering"
    [showSearchCaseIcon]="showSearchCaseIcon" [itemsMaxHeight]="255" [disabled]="disabled">
</igx-combo>

<igx-switch [(ngModel)]="disableFiltering">Disable Filtering</igx-switch><br />
<igx-switch [disabled]="disableFiltering" [(ngModel)]="showSearchCaseIcon">Show Case-sensitive Icon</igx-switch><br />
<igx-switch [(ngModel)]="customValues">Allow Custom Values</igx-switch><br />
<igx-switch (change)="enableGroups($event)">Enable Grouping</igx-switch><br />
<igx-switch [(ngModel)]="disabled">Disable Combo</igx-switch>
```
```scss
.combo, igx-switch {
    margin: 8px;
    width: 430px;
}
```

<div class="divider--half"></div>

## Usage

### First Steps

To get started with the combobox component, first you need to import the `IgxComboModule` in your **app.module.ts** file. Our sample also uses the [igx-switch](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxswitchcomponent.html) component to toggle combobox properties' values, so we will need the `IgxSwitchModule` as well:

```typescript
import { IgxComboModule } from 'igniteui-angular/combo';
import { IgxSwitchModule } from 'igniteui-angular/switch';
// import { IgxComboModule, IgxSwitchModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [
        ...
        IgxComboModule,
        IgxSwitchModule,
        ...
    ]
})
export class AppModule {}
```

### Template Configuration

```html
<div class="combo-container">
    <igx-combo #combo [data]="lData" displayKey="field" valueKey="field"
        [allowCustomValues]="customValues"
        [disableFiltering]="disableFiltering"
        [showSearchCaseIcon]="showSearchCaseIcon"
        [disabled]="disabled">
    </igx-combo>
</div>
<div class="switch-container">
    <igx-switch [(ngModel)]="customValues">Allow Custom Values</igx-switch>
    <igx-switch (change)="enableGroups($event)">Enable Grouping</igx-switch>
    <igx-switch [(ngModel)]="disabled">Disable Combo</igx-switch>
    <igx-switch [(ngModel)]="disableFiltering">Disable Filtering</igx-switch>
    <igx-switch *ngIf="!disableFiltering" [(ngModel)]="showSearchCaseIcon">Show Case-sensitive Icon</igx-switch>
</div>
```

### Component Definition

Note that grouping is enabled/disabled by setting the [groupKey](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxComboComponent.html#groupKey) property to a corresponding data source entity or setting it to an empty string.

```typescript
    @ViewChild('combo', { read: IgxComboComponent }) public combo: IgxComboComponent;

    public disableFiltering = false;
    public showSearchCaseIcon = true;
    public customValues = true;
    public disabled = false;

    public enableGroups(event) {
        this.combo.groupKey = event.checked ? 'region' : '';
    }
```

## Features

### Data Binding

The following code snippet illustrates a basic usage of the [igx-combo](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcombocomponent.html) bound to a local data source. The [valueKey](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxComboComponent.html#valueKey) specifies which property of the data entries will be stored for the combobox's selection and the [displayKey](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxComboComponent.html#displayKey) specifies which property will be used for the combobox text:

```html
<igx-combo [data]="lData" valueKey="ProductID" displayKey="ProductName"></igx-combo>
```

```typescript
import { localData } from './local-data';

export class ComboDemo implements OnInit {
    public lData: any[];

    public ngOnInit() {
        this.lData = localData;
    }
}
```

> [!Note]
> If the `displayKey` property is omitted then the `valueKey` entity will be used instead.

Follow the [ComboBox Remote Binding topic](combo-remote.md) for more details about binding the combobox component with remote data.

### Custom Overlay Settings

The combobox component allows users to change the way a list of items is shown. This can be done by defining [Custom OverlaySettings](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html) and passing them to the [ComboBox's OverlaySettings](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxComboComponent.html#overlaySettings) input:

```typescript
export class CustomOverlayCombo {
    ...
    public customSettings: OverlaySettings = {
        positionStrategy: new GlobalPositionStrategy(
            {
                openAnimation: scaleInCenter,
                closeAnimation: scaleOutCenter
            }),
        modal: true,
        closeOnOutsideClick: true,
    };
}
```

```html
<igx-combo [data]="items" [overlaySettings]="customSettings"></igx-combo>
```

If everything is set up correctly, the combobox's list will display centered, using the [GlobalPositionStrategy](overlay-position.md#global):


```typescript
import { Component } from '@angular/core';
import { GlobalPositionStrategy, OverlaySettings } from 'igniteui-angular/core';
import { IgxComboComponent } from 'igniteui-angular/combo';
import { scaleInCenter, scaleOutCenter } from 'igniteui-angular/animations';

@Component({
    selector: 'app-combo-overlay',
    templateUrl: 'combo-overlay.component.html',
    styleUrls: ['combo-overlay.component.scss'],
    imports: [IgxComboComponent]
})
export class ComboOverlayComponent {
    public items = [{ name: 'Option 1' }, { name: 'Option 2' }, { name: 'Option 3' },
    { name: 'Option 4' }, { name: 'Option 5' }, { name: 'Option 6' },
    { name: 'Option 7' }, { name: 'Option 8' }, { name: 'Option 9' }];

    public overlaySettings: OverlaySettings = {
        positionStrategy: new GlobalPositionStrategy({ openAnimation: scaleInCenter, closeAnimation: scaleOutCenter }),
        modal: true,
        closeOnOutsideClick: true
    };
}
```
```html
<igx-combo
    placeholder="Choose option(s)"
    [data]="items"
    valueKey="name"
    displayKey="name"
    [overlaySettings]="overlaySettings">
</igx-combo>
```
```scss
.igx-combo {
    width: 430px;
    margin: 8px;
}
```


<div class="divider--half"></div>

> [!Note]
> The combobox component uses the [AutoPositionStrategy](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/autopositionstrategy.html) as a default position strategy.

### Filtering

By default, filtering in the combobox is enabled. It can be disabled by setting the [disableFiltering](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcombocomponent.html#disableFiltering) property to true.

Filtering options can be further enhanced by enabling the search case sensitivity. To display the case-sensitive icon in the search input, set the [showSearchCaseIcon](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxComboComponent.html#showSearchCaseIcon) property to true:

```html
<igx-combo [disableFiltering]="true" [showSearchCaseIcon]="true"></igx-combo>
```

<div class="divider--half"></div>

### Custom Values

The [allowCustomValues](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxComboComponent.html#allowCustomValues) property controls whether custom values can be added to the collection. If it is enabled, a missing item could be included using the UI of the combobox.

```html
<igx-combo [allowCustomValues]="true"></igx-combo>
```

<div class="divider--half"></div>

### Search Input Focus

The combobox's [autoFocusSearch](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxComboComponent.html#autoFocusSearch)  property controls if the search input should receive focus when a combobox's dropdown list is opened. By default, the property is set to `true`. When set to `false`, the focus goes to the combobox's items container. For mobile devices, this can be used to prevent the software keyboard from popping up when opening the combobox's dropdown list.

```html
<igx-combo [autoFocusSearch]="false"></igx-combo>
```

<div class="divider--half"></div>

### Disable ComboBox

You can disable a combobox using the following code:

```html
<igx-combo [disabled]="true"></igx-combo>
```

<div class="divider--half"></div>

### Grouping

Defining a combobox's `groupKey` option will group the items, according to the provided key:

```html
<igx-combo [groupKey]="'primaryKey'"></igx-combo>
```

You can set whether groups should be sorted in ascending or descending order. By default the sorting order is ascending.

```html
<igx-combo [groupSortingDirection]="groupSortingDirection"></igx-combo>
```

```typescript
...
import { SortingDirection } from 'igniteui-angular/core'
// import { SortingDirection } from '@infragistics/igniteui-angular'; for licensed package

export class ComboDemo {
    ...
    public groupSortingDirection: SortingDirection = SortingDirection.Asc;
}
```

<div class="divider--half"></div>

## API References

<div class="divider--half"></div>

- [IgxComboComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcombocomponent.html)
- [IgxComboComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-combo-theme)

Additional components and/or directives with relative APIs that were used:

- [IgxSwitchComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxswitchcomponent.html)

## Additional Resources

<div class="divider--half"></div>

- [ComboBox Component](combo.md)
- [ComboBox Remote Binding](combo-remote.md)
- [ComboBox Templates](combo-templates.md)
- [Template Driven Forms Integration](input-group.md)
- [Reactive Forms Integration](angular-reactive-form-validation.md)
- [Single Select ComboBox](simple-combo.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
