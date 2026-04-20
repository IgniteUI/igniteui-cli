---
title: Angular Multi-column Headers - Ignite UI for Angular
_description: Start grouping column headers by placing them under a common hierarchical header with the help of Ignite UI for Angular grid and combine them into multi headers.
_keywords: column headers, ignite ui for angular, infragistics
_license: commercial
_tocName: Multi-column Headers
_premium: true
---
# Angular Grid Multi-column Headers Overview
[`IgxGrid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html) supports `multi-column headers` which allows you to group columns by placing them under a common multi headers. Each multi-column headers group could be a representation of combinations between other groups or columns within the Material UI grid.
## Angular Grid Multi-column Headers Overview Example
```typescript
import { Component, ViewChild } from '@angular/core';
import { GridSelectionMode, IgxColumnComponent, IgxColumnGroupComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { DATA } from '../../data/customers';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-multi-column-headers',
    styleUrls: ['multi-column-headers.scss'],
    templateUrl: 'multi-column-headers.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnGroupComponent, IgxButtonDirective]
})
export class GridMultiColumnHeadersComponent {

    @ViewChild(IgxGridComponent, { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;
    public data = DATA;
    public selectionMode: GridSelectionMode = 'none';
    public pinGroup() {
        const firstColumnGroup = this.grid.columnList.filter((c) => c.header === 'General Information')[0];
        firstColumnGroup.pinned = !firstColumnGroup.pinned;
    }

    public hideGroup() {
        const firstColumnGroup = this.grid.columnList.filter((c) => c.header === 'General Information')[0];
        firstColumnGroup.hidden = !firstColumnGroup.hidden;
    }
}
```
The declaration of `Multi-column header` could be achieved by wrapping a set of columns into [`igx-column-group`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html) component with [`header`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html#header) title passed.
```html
<igx-grid [data]="data" [allowFiltering]="true">
    <igx-column-group header="Contact Information">
        <igx-column sortable="true" resizable="true" field="Phone"></igx-column>
        <igx-column sortable="true" resizable="true" field="Fax"></igx-column>
        <igx-column sortable="true" resizable="true" field="PostalCode"></igx-column>
    </igx-column-group>
</igx-grid>
```
For achieving `n-th` level of nested headers, the declaration above should be followed. So by nesting [`igx-column-group`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html) leads to the desired result.
```html
<igx-grid [data]="data" [allowFiltering]="true" [moving]="true">
    <igx-column-group header="General Information">
        <igx-column sortable="true" resizable="true" field="CompanyName"></igx-column>
        <igx-column-group header="Person Details">
            <igx-column [pinned]="false" sortable="true" resizable="true" field="ContactName"></igx-column>
            <igx-column sortable="true" resizable="true" field="ContactTitle"></igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-grid>
```
Every [`igx-column-group`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html) supports [`moving`](column-moving.md), [`pinning`](column-pinning.md) and [`hiding`](column-hiding.md).
> [!NOTE]
> When there is a set of columns and column groups, pinning works only for top level column parents. More specifically pinning per nested `column groups` or `columns` is not allowed. <br />
> Please note that when using Pinning with Multi-Column Headers, the entire Group gets pinned. <br />
> Moving between `columns` and `column groups` is allowed only when they are at the same level in the hierarchy and both are in the same `group`. <br />
> When `columns/column-groups` are not wrapped by current `group` which means they are **top level** `columns`, moving is allowed between whole visible columns.
```html
<igx-grid [data]="data" [allowFiltering]="true" [moving]="true">
    <igx-column-group [pinned]="true" header="General Information">
        <igx-column sortable="true" resizable="true" field="CompanyName"></igx-column>
    </igx-column-group>
    <igx-column sortable="true" resizable="true" field="Phone"></igx-column>
    <igx-column sortable="true" resizable="true" field="Fax"></igx-column>
    <igx-column sortable="true" resizable="true" field="PostalCode"></igx-column>
</igx-grid>
```
## Multi-column Header Template
Each of the column groups of the grid can be templated separately. The column group expects `ng-template` tag decorated with the `igxHeader` directive.
The `ng-template` is provided with the column group object as a context.
```html
...
<igx-column-group header="General Information">
    <ng-template igxHeader let-columnGroup>
        {{ columnGroup.header | uppercase }}
    </ng-template>
    ...
</igx-column-group>
...
```
If you want to re-use a single template for several column groups, you could set the [`headerTemplate`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html#headertemplate) property of the column group like this:
```html
<ng-template #columnGroupHeaderTemplate let-columnGroup>
    {{ columnGroup.header | uppercase }}
</ng-template>
...
<igx-column-group header="General Information" [headerTemplate]="columnGroupHeaderTemplate">
    ...
</igx-column-group>
<igx-column-group header="Address Information" [headerTemplate]="columnGroupHeaderTemplate">
    ...
</igx-column-group>
...
```
> [!NOTE]
> If a column header is retemplated and the grid moving is enabled, you have to set the **draggable** attribute of corresponding column to **false** on the templated elements, so that you can handle any of the events that are applied!
```html
<ng-template igxHeader>
    <igx-icon [attr.draggable]="false" (click)="onClick()"></igx-icon>
</ng-template>
```
The following sample demonstrates how to implement collapsible column groups using header templates.
```typescript
import { Component, ViewChild } from '@angular/core';
import { GridSelectionMode, IgxColumnComponent, IgxColumnGroupComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { DATA } from '../../data/customers';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-multi-column-header-template',
    styleUrls: ['multi-column-header-template.scss'],
    templateUrl: 'multi-column-header-template.html',
    imports: [IgxIconComponent, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnGroupComponent]
})
export class GridMultiColumnHeaderTemplateComponent {

    @ViewChild(IgxGridComponent, { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;
    public data: any[] = DATA;
    public columnGroupStates = new Map<IgxColumnGroupComponent, boolean>();
    public selectionMode: GridSelectionMode = 'multiple';

    constructor() {
        for (const item of this.data) {
            item.Location = `${item.Address}, ${item.City}, ${item.Country}`;
        }
    }

    public toggleColumnGroup(columnGroup: IgxColumnGroupComponent) {
        const columns = columnGroup.childColumns;

        if (columnGroup.header === 'General Information') {
            const col = columns[1];
            col.hidden = !col.hidden;
        } else if (columnGroup.header === 'Address Information') {
            for (const col of columns) {
                col.hidden = !col.hidden;
            }
        }

        this.columnGroupStates.set(columnGroup, !this.columnGroupStates.get(columnGroup));
    }
}
```
## Styling
To get started with styling the sorting behavior, we need to import the `index` file, where all the theme functions and component mixins live:
```scss
@use "igniteui-angular/theming" as *;
// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```
Following the simplest approach, we create a new theme that extends the [`grid-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme) and accepts the `$header-background`, `$header-text-color`, `$header-border-width`, `$header-border-style` and `$header-border-color` parameters.
```scss
$custom-theme: grid-theme(
  $header-background: #e0f3ff,
  $header-text-color: #e41c77,
  $header-border-width: 1px,
  $header-border-style: solid,
  $header-border-color: rgba(0, 0, 0, 0.08)
);
```
>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette) and [`color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.
The last step is to **include** the component mixins:
```scss
:host {
  @include tokens($custom-theme);
}
```
### Demo
```typescript
import { Component, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxColumnComponent, IgxColumnGroupComponent } from 'igniteui-angular/grids/core';
import { DATA } from '../../data/customers';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-multi-column-headers-styling',
    styleUrls: ['./multi-column-headers-styling.component.scss'],
    templateUrl: './multi-column-headers-styling.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnGroupComponent]
})
export class GridMultiColumnHeadersStylingComponent {

    @ViewChild(IgxGridComponent, { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;
    public data = DATA;
}
```
```html
<div class="grid__wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" #grid height="470px" [data]="data">
        <igx-column field="ID"></igx-column>
        <igx-column-group header="General Information">
            <igx-column field="CompanyName"></igx-column>
            <igx-column-group header="Personal Details">
                <igx-column field="ContactName"></igx-column>
                <igx-column field="ContactTitle"></igx-column>
            </igx-column-group>
        </igx-column-group>
        <igx-column-group header="Address Information">
            <igx-column-group header="Location">
                <igx-column field="Country"></igx-column>
                <igx-column field="Region"></igx-column>
                <igx-column field="City"></igx-column>
                <igx-column field="Address"></igx-column>
            </igx-column-group>
            <igx-column-group header="Contact Information">
                <igx-column field="Phone"></igx-column>
                <igx-column field="Fax"></igx-column>
                <igx-column field="PostalCode"></igx-column>
            </igx-column-group>
        </igx-column-group>
        <igx-column-group header="Address Information">
            <igx-column-group header="Location">
                <igx-column field="Country"></igx-column>
                <igx-column field="Region"></igx-column>
                <igx-column field="City"></igx-column>
                <igx-column field="Address"></igx-column>
            </igx-column-group>
            <igx-column-group header="Contact Information">
                <igx-column field="Phone"></igx-column>
                <igx-column field="Fax"></igx-column>
                <igx-column field="PostalCode"></igx-column>
            </igx-column-group>
        </igx-column-group>
        <igx-column-group header="Contact Information">
            <igx-column field="Phone"></igx-column>
            <igx-column field="Fax"></igx-column>
            <igx-column field="PostalCode"></igx-column>
        </igx-column-group>
    </igx-grid>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$custom-theme: grid-theme(
  $header-background: #e0f3ff,
  $header-text-color: #e41c77,
  $header-border-width: 1px,
  $header-border-style: solid,
  $header-border-color: rgba(0, 0, 0, 0.08)
);

:host {
  @include tokens($custom-theme);
}
```
>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.
## API References
<div class="divider--half"></div>
- [IgxGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)
- [IgxGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
- [IgxColumnGroupComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html)
<div class="divider--half"></div>
## Additional Resources
<div class="divider--half"></div>
- [Grid overview](grid.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
* [Group by](groupby.md)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
