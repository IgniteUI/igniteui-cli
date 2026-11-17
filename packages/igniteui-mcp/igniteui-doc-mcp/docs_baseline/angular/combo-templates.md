---
title: "Angular Combo Templates"
description: "The Ignite UI for Angular Combo Templates replace the default content of the Combo areas: the items, the group headers, the header and the footer of the list, the empty list, the toggle and the clear icons, and the input field."
keywords: "Angular Combo Templates, Ignite UI for Angular, combo item template, combo group header template, combo header template, combo footer template, combo empty template, combo toggle icon, combo clear icon, templated combo input"
license: MIT
last_updated: "2026-11-09"
mentionedTypes: ["Combo", "ComboItem", "ComboHeader", "ComboList"]
llms:
  description: "The Ignite UI for Angular Combo Templates replace the default content of the Combo areas: the items, the group headers, the header and the footer of the list, the empty list, the toggle and the clear icons, and the input field."
_tocName: Templates
---
# Combo Templates

The Ignite UI for Angular Combo Templates replace the default content of the Combo areas: the items, the group headers, the header and the footer of the list, the empty list, the toggle and the clear icons, and the input field.

The Angular Combo takes each template as an `ng-template` element with one of its template directives, placed inside the `igx-combo` element. The directives come with the `IGX_COMBO_DIRECTIVES` token, as the [Combo](./overview.md#getting-started) topic shows, together with the `igxLabel`, `igx-prefix`, `igx-suffix`, and `igx-hint` elements that template the input field.

## Live Demo

The sample shows a Destinations combo with cities grouped by region. Each switch applies one template to the combo, and the Selection list below the combo shows the selected cities.

```typescript
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { localData } from './local-data';
import { IgxComboAddItemDirective, IgxComboClearIconDirective, IgxComboComponent, IgxComboEmptyDirective, IgxComboFooterDirective, IgxComboHeaderDirective, IgxComboHeaderItemDirective, IgxComboItemDirective, IgxComboToggleIconDirective } from 'igniteui-angular/combo';
import { IgxLabelDirective, IgxPrefixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-combo-template',
    styleUrls: ['./combo-template.component.scss'],
    templateUrl: './combo-template.component.html',
    imports: [IgxComboComponent, IgxLabelDirective, IgxPrefixDirective, IgxIconComponent, IgxComboItemDirective, IgxComboHeaderItemDirective, IgxComboHeaderDirective, IgxComboFooterDirective, IgxComboAddItemDirective, IgxButtonDirective, IgxComboToggleIconDirective, IgxComboClearIconDirective, IgxComboEmptyDirective]
})
export class ComboTemplateComponent implements OnInit {
    cdr = inject(ChangeDetectorRef);

    public lData: any[];

    public ngOnInit() {
        this.lData = localData;
    }
}
```
```html
<igx-combo #templateCombo class="combo" [data]="lData" [valueKey]="'field'" [groupKey]="'region'"
           [itemsMaxHeight]="250" searchPlaceholder="Search..." [allowCustomValues]="true">
           <label igxLabel>Locations</label>
           <igx-prefix><igx-icon>pin_drop</igx-icon></igx-prefix>
    <ng-template igxComboItem let-display let-key="valueKey">
        <div class="item">
            <span class="state">{{ display[key] }} - </span>
            <span class="region">{{ display.region }}</span>
        </div>
    </ng-template>

    <ng-template igxComboHeaderItem let-display let-key="groupKey">
        <div class="header-item">Region: {{ display[key] }}</div>
    </ng-template>

    <ng-template igxComboHeader>
        <div class="header-class">State - Region</div>
    </ng-template>

    <ng-template igxComboFooter>
        <div class="footer-class">Infragistics 2018</div>
    </ng-template>

    <ng-template igxComboAddItem>
        <button igxButton="flat">
            Add Location
        </button>
    </ng-template>

    <ng-template igxComboToggleIcon let-collapsed>
        <igx-icon>{{ collapsed ? 'expand_more' : 'expand_less'}}</igx-icon>
    </ng-template>

    <ng-template igxComboClearIcon>
        <igx-icon>cancel</igx-icon>
    </ng-template>

    <ng-template igxComboEmpty>
        <span class="empty-class">No available states</span>
    </ng-template>
</igx-combo>
```
```scss
.combo {
    margin: 8px;
    width: 430px;
}

.header-item {
    text-transform: capitalize;
}

.header-class, .footer-class {
    text-align: center;
    padding: 4px;
    color: var(--ig-secondary-500);
}

.empty-class {
    margin: 8px;
}
```

## Types

The Angular Combo has a template for each area that it renders. Reference each template through its directive, and read the item and the keys of the Combo from the template context.

The snippets bind the Combo to destinations that have an `id`, a `name`, a `country`, a `countryCode`, a `region`, and a UTC `offset`, with `id` as the `valueKey`, `name` as the `displayKey`, and `region` as the `groupKey`.

### Item Template

The item template renders the content of each option in the list. By default, an option shows its `displayKey` value, and the checkbox of the option stays in front of the template content.

Use the `igxComboItem` directive. The template receives the item as its implicit value, together with the `valueKey`, the `displayKey`, and the `data` of the Combo:

```html
<igx-combo [data]="destinations" valueKey="id" displayKey="name" groupKey="region">
    <ng-template igxComboItem let-destination let-key="displayKey">
        <span class="destination">
            <img class="flag" [src]="'https://dl.infragistics.com/x/img/flags/' + destination.countryCode + '.png'" alt="" />
            {{ destination[key] }} — {{ destination.country }} · {{ destination.id }} · {{ destination.offset }}
        </span>
    </ng-template>
</igx-combo>
```

### Header Item Template

The header item template renders the header of each group when the Combo has a `groupKey`. By default, a group header shows the group value. The template receives a header record, not a data item: its `groupKey` field holds the group value, so a count of the options in the group comes from the data of the Combo, as the `citiesIn` method of the snippets does.

Use the `igxComboHeaderItem` directive. The template receives the header record as its implicit value, together with the `groupKey`, the `valueKey`, the `displayKey`, and the `data` of the Combo:

```html
<igx-combo [data]="destinations" valueKey="id" displayKey="name" groupKey="region">
    <ng-template igxComboHeaderItem let-header let-key="groupKey">
        <span class="region">
            <strong>{{ header[key] }}</strong>
            <span class="region-count">{{ citiesIn(header[key]) }} cities</span>
        </span>
    </ng-template>
</igx-combo>
```

### Header Template

The header template renders content between the search input and the list of options, such as a title of the list or an action that applies to it. The Combo renders no header by default.

Use the `igxComboHeader` directive. The snippet adds a button that selects the options that the search input shows, through the [`selectAllItems`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=selectAllItems) method:

```html
<igx-combo #combo [data]="destinations" valueKey="id" displayKey="name" groupKey="region">
    <ng-template igxComboHeader>
        <div class="list-header">
            <span>Destinations by region</span>
            <button igxButton="flat" (click)="combo.selectAllItems()">Select all</button>
        </div>
    </ng-template>
</igx-combo>
```

### Footer Template

The footer template renders content below the list of options, such as a summary of the selection or an action that applies to it. The Combo renders no footer by default.

Use the `igxComboFooter` directive. The snippet shows the number of selected items from the [`selection`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=selection) property, and clears the selection through the [`deselectAllItems`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=deselectAllItems) method:

```html
<igx-combo #combo [data]="destinations" valueKey="id" displayKey="name" groupKey="region">
    <ng-template igxComboFooter>
        <div class="list-footer">
            <span>{{ combo.selection.length }} selected</span>
            <button igxButton="flat" (click)="combo.deselectAllItems()">Clear</button>
        </div>
    </ng-template>
</igx-combo>
```

### Empty Template

The empty template renders in place of the list when the search text matches no option, or when the Combo has no data. By default, the Combo shows a message that the list is empty.

Use the `igxComboEmpty` directive. The template has no context, so read the search text from the [`searchValue`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=searchValue) property of the Combo through a template reference. When [`allowCustomValues`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=allowCustomValues) is set, the add item stays below the empty content:

```html
<igx-combo #combo [data]="destinations" valueKey="id" displayKey="name" [allowCustomValues]="true">
    <ng-template igxComboEmpty>
        <span class="empty-list">No city matches "{{ combo.searchValue }}". Add it below, or try another spelling.</span>
    </ng-template>
</igx-combo>
```

### Add Template

The add template renders the add item that the Angular Combo shows below the empty list content when [`allowCustomValues`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=allowCustomValues) is set and the search text matches no option. By default, the add item is a button with an "Add item" label. Clicking the add item, or pressing <kbd>Enter</kbd> on it, emits the cancelable [`addition`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=addition) event, adds an item whose `valueKey` and `displayKey` fields hold the search text, and selects it.

Use the `igxComboAddItem` directive, and read the search text from the [`searchValue`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=searchValue) property through a template reference:

```html
<igx-combo #combo [data]="destinations" valueKey="id" displayKey="name" [allowCustomValues]="true">
    <ng-template igxComboAddItem>
        <button igxButton="outlined">Add "{{ combo.searchValue }}" as a destination</button>
    </ng-template>
</igx-combo>
```

### Toggle Icon Template

The toggle icon template replaces the icon of the toggle button in the input field, which opens and closes the dropdown.

Use the `igxComboToggleIcon` directive. The template also receives whether the dropdown is collapsed as its implicit value, for an icon that changes with the state. Register the icon first, as the [Icon](../../layouts/icon.md) topic shows:

```html
<igx-combo [data]="destinations" valueKey="id" displayKey="name">
    <ng-template igxComboToggleIcon>
        <igx-icon family="material" name="flight"></igx-icon>
    </ng-template>
</igx-combo>
```

### Clear Icon Template

The clear icon template replaces the icon of the clear button in the input field. The Combo shows the clear button only when it has a selection.

Use the `igxComboClearIcon` directive:

```html
<igx-combo [data]="destinations" valueKey="id" displayKey="name">
    <ng-template igxComboClearIcon>
        <igx-icon>close</igx-icon>
    </ng-template>
</igx-combo>
```

### Templated Input

The input field of the Combo takes a label, content before and after its text, and a helper text below it, the way the [Input Group](../../input-group.md) does.

Add the label with the `igxLabel` directive, the content before and after the text with the `igx-prefix` and `igx-suffix` elements, and the helper text with the `igx-hint` element. The suffix content renders before the clear and the toggle buttons:

```html
<igx-combo #combo [data]="destinations" valueKey="id" displayKey="name" placeholder="Pick one or more cities">
    <label igxLabel>Destinations</label>
    <igx-prefix><igx-icon>place</igx-icon></igx-prefix>
    <igx-suffix><igx-badge [value]="combo.selection.length"></igx-badge></igx-suffix>
    <igx-hint>{{ combo.selection.length }} of {{ destinations.length }} destinations selected</igx-hint>
</igx-combo>
```

## API References

The Angular Combo API reference lists the complete API surface for the target platform.

- [`IgxComboComponent`](mcp:get_api_reference?platform=angular&component=IgxComboComponent)
- [`IgxInputGroup`](mcp:get_api_reference?platform=angular&component=IgxInputGroupComponent)

## Additional Resources

The following resources provide more Angular Combo guidance and project support:

- [Combo](./overview.md)
- [Combo Features](./features.md)
- [Combo Remote Binding](./features.md#remote-binding)
- [Single Selection Combo](./single-selection.md)

- [Combo - Design System Component](https://www.infragistics.com/products/indigo-design/help/components/combo)
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
