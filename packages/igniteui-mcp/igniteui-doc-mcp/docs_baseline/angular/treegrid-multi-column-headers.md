---
title: Angular Multi-column Headers - Ignite UI for Angular
_description: SStart grouping column headers by placing them under a common hierarchical header with the help of Ignite UI for Angular grid and combine them into multi headers.
_keywords: column headers, ignite ui for angular, infragistics
_license: commercial
_canonicalLink: grid/multi-column-headers
_tocName: Multi-column Headers
_premium: true
---
# Angular Tree Grid Multi-column Headers Overview
[`IgxTreeGrid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html) supports `multi-column headers` which allows you to group columns by placing them under a common multi headers. Each multi-column headers group could be a representation of combinations between other groups or columns within the Material UI grid.
## Angular Tree Grid Multi-column Headers Overview Example
```typescript
import { Component, ViewChild } from '@angular/core';
import { GridSelectionMode, IgxColumnComponent, IgxColumnGroupComponent } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-multi-column-headers-sample',
    styleUrls: ['./tree-grid-multi-column-headers-sample.component.scss'],
    templateUrl: './tree-grid-multi-column-headers-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnGroupComponent, IgxButtonDirective]
})
export class TreeGridMultiColumnHeadersSampleComponent {

    @ViewChild(IgxTreeGridComponent, { read: IgxTreeGridComponent, static: true })
    public treeGrid: IgxTreeGridComponent;
    public data = generateEmployeeDetailedFlatData();
    public selectionMode: GridSelectionMode = 'none';

    public pinUnpinGroup() {
        const firstColumnGroup = this.treeGrid.columnList.filter((c) => c.header === 'General Information')[0];
        firstColumnGroup.pinned = !firstColumnGroup.pinned;
    }

    public showHideGroup() {
        const firstColumnGroup = this.treeGrid.columnList.filter((c) => c.header === 'General Information')[0];
        firstColumnGroup.hidden = !firstColumnGroup.hidden;
    }
}
```
```html
<div class="grid__wrapper">
    <igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid [data]="data" primaryKey="ID" [moving]="true" foreignKey="ParentID" [rowSelection]="selectionMode" height="480px"
        [allowFiltering]="true" width="100%">
        <igx-column field="Name" dataType="string" [sortable]="true" [resizable]="true" width="200px"></igx-column>
        <igx-column-group [pinned]="false" header="General Information">
            <igx-column field="HireDate" dataType="date" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column-group header="Personal Details">
                <igx-column field="ID" dataType="number" [resizable]="true" [filterable]="false"></igx-column>
                <igx-column field="Title" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="Age" dataType="number" [sortable]="true" [resizable]="true"></igx-column>
            </igx-column-group>
        </igx-column-group>
        <igx-column-group header="Address Information">
            <igx-column-group header="Location">
                <igx-column field="Country" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="City" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="Address" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
            </igx-column-group>
            <igx-column-group header="Contact Information">
                <igx-column field="Phone" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="Fax" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="PostalCode" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
            </igx-column-group>
        </igx-column-group>
        <igx-column-group header="Address Information">
            <igx-column-group header="Location">
                <igx-column field="Country" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="City" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="Address" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
            </igx-column-group>
            <igx-column-group header="Contact Information">
                <igx-column field="Phone" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="Fax" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="PostalCode" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
            </igx-column-group>
        </igx-column-group>
        <igx-column-group header="Contact Information">
            <igx-column field="Phone" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="Fax" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="PostalCode" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
        </igx-column-group>
    </igx-tree-grid>

    <section class="button-section">
        <button igxButton="contained" (click)="pinUnpinGroup()">Pin/Unpin 'General Information' group</button>
        <button igxButton="contained" (click)="showHideGroup()">Show/Hide 'General Information' group</button>
    </section>
</div>
```
```scss
.grid__wrapper {
    --ig-size: var(--ig-size-small);
    margin: 10px;
}

.igx-button--contained {
    margin-right: 5px;
}
```
The declaration of `Multi-column header` could be achieved by wrapping a set of columns into [`igx-column-group`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html) component with [`header`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html#header) title passed.
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID">
    <igx-column-group header="Contact Information">
        <igx-column field="Phone" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
        <igx-column field="Fax" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
        <igx-column field="PostalCode" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
    </igx-column-group>
</igx-tree-grid>
```
For achieving `n-th` level of nested headers, the declaration above should be followed. So by nesting [`igx-column-group`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html) leads to the desired result.
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [moving]="true">
    <igx-column-group [pinned]="false" header="General Information">
        <igx-column field="HireDate" dataType="date" [sortable]="true" [resizable]="true"></igx-column>
        <igx-column-group header="Person Details">
            <igx-column field="ID" dataType="number" [resizable]="true" [filterable]="false"></igx-column>
            <igx-column field="Title" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="Age" dataType="number" [sortable]="true" [resizable]="true"></igx-column>
        </igx-column-group>            
    </igx-column-group>
</igx-tree-grid>
```
Every [`igx-column-group`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html) supports [`moving`](column-moving.md), [`pinning`](column-pinning.md) and [`hiding`](column-hiding.md).
> [!NOTE]
> When there is a set of columns and column groups, pinning works only for top level column parents. More specifically pinning per nested `column groups` or `columns` is not allowed. <br />
> Please note that when using Pinning with Multi-Column Headers, the entire Group gets pinned. <br />
> Moving between `columns` and `column groups` is allowed only when they are at the same level in the hierarchy and both are in the same `group`. <br />
> When `columns/column-groups` are not wrapped by current `group` which means they are **top level** `columns`, moving is allowed between whole visible columns.
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [moving]="true">
    <igx-column-group header="Contact Information">
        <igx-column field="Phone" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
    </igx-column-group>
    <igx-column field="Name" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
    <igx-column field="Title" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
    <igx-column field="Age" dataType="number" [sortable]="true" [resizable]="true"></igx-column>
</igx-tree-grid>
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
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-multi-column-header-template-sample',
    styleUrls: ['./tree-grid-multi-column-header-template-sample.component.scss'],
    templateUrl: './tree-grid-multi-column-header-template-sample.component.html',
    imports: [IgxIconComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnGroupComponent]
})
export class TreeGridMultiColumnHeaderTemplateSampleComponent {

    @ViewChild(IgxTreeGridComponent, { read: IgxTreeGridComponent, static: true })
    public treeGrid: IgxTreeGridComponent;
    public data: any[] = generateEmployeeDetailedFlatData();
    public columnGroupStates = new Map<IgxColumnGroupComponent, boolean>();
    public selectionMode: GridSelectionMode = 'none';
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
```html
<div class="grid__wrapper">
    <ng-template #columnGroupTemplate let-col>
        <div class="column-group-template__container">
            <igx-icon [attr.draggable]="false"
                      (click)="toggleColumnGroup(col)"
                      class="column-group-template__icon">
                      {{columnGroupStates.get(col) ? 'expand_more' : 'expand_less'}}</igx-icon>
            {{col.header}}
        </div>
    </ng-template>

    <igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid [data]="data" primaryKey="ID" [moving]="true" foreignKey="ParentID" [rowSelection]="selectionMode" height="520px"
        [allowFiltering]="true" width="100%">
        <igx-column field="Name" dataType="string" [sortable]="true" [resizable]="true" width="200px"></igx-column>
        <igx-column-group [pinned]="false" header="General Information" [headerTemplate]="columnGroupTemplate">
            <igx-column field="HireDate" dataType="date" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column-group header="Personal Details">
                <igx-column field="ID" dataType="number" [resizable]="true" [filterable]="false"></igx-column>
                <igx-column field="Title" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="Age" dataType="number" [sortable]="true" [resizable]="true"></igx-column>
            </igx-column-group>
        </igx-column-group>
        <igx-column-group header="Address Information" [headerTemplate]="columnGroupTemplate">
            <igx-column [sortable]="true" [resizable]="true" field="Location" [hidden]="true"></igx-column>
            <igx-column [sortable]="true" [resizable]="true" field="Phone" [hidden]="true"></igx-column>
            <igx-column-group header="Location">
                <igx-column field="Country" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="City" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="Address" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
            </igx-column-group>
            <igx-column-group header="Contact Information">
                <igx-column field="Phone" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="Fax" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="PostalCode" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
            </igx-column-group>
        </igx-column-group>
    </igx-tree-grid>
</div>
```
```scss
.grid__wrapper {
    --ig-size: var(--ig-size-small);
    margin: 10px;
}

.column-group-template__container {
    display: flex;
    align-items: center;
}

.column-group-template__icon {
    cursor: pointer;
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
import { Component } from '@angular/core';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxColumnComponent, IgxColumnGroupComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-multi-column-headers-styling',
    styleUrls: ['./tree-grid-multi-column-headers-styling.component.scss'],
    templateUrl: './tree-grid-multi-column-headers-styling.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnGroupComponent]
})
export class TreeGridMultiColumnHeadersStylingComponent {

    public data = generateEmployeeDetailedFlatData();
}
```
```html
<div class="grid__wrapper">
    <igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" height="480px" width="100%">
        <igx-column field="Name" dataType="string" width="200px"></igx-column>
        <igx-column-group header="General Information">
            <igx-column field="HireDate" dataType="date"></igx-column>
            <igx-column-group header="Personal Details">
                <igx-column field="ID" dataType="number"></igx-column>
                <igx-column field="Title" dataType="string"></igx-column>
                <igx-column field="Age" dataType="number"></igx-column>
            </igx-column-group>
        </igx-column-group>
        <igx-column-group header="Address Information">
            <igx-column-group header="Location">
                <igx-column field="Country" dataType="string"></igx-column>
                <igx-column field="City" dataType="string"></igx-column>
                <igx-column field="Address" dataType="string"></igx-column>
            </igx-column-group>
            <igx-column-group header="Contact Information">
                <igx-column field="Phone" dataType="string"></igx-column>
                <igx-column field="Fax" dataType="string"></igx-column>
                <igx-column field="PostalCode" dataType="string"></igx-column>
            </igx-column-group>
        </igx-column-group>
        <igx-column-group header="Address Information">
            <igx-column-group header="Location">
                <igx-column field="Country" dataType="string"></igx-column>
                <igx-column field="City" dataType="string"></igx-column>
                <igx-column field="Address" dataType="string"></igx-column>
            </igx-column-group>
            <igx-column-group header="Contact Information">
                <igx-column field="Phone" dataType="string"></igx-column>
                <igx-column field="Fax" dataType="string"></igx-column>
                <igx-column field="PostalCode" dataType="string"></igx-column>
            </igx-column-group>
        </igx-column-group>
        <igx-column-group header="Contact Information">
            <igx-column field="Phone" dataType="string"></igx-column>
            <igx-column field="Fax" dataType="string"></igx-column>
            <igx-column field="PostalCode" dataType="string"></igx-column>
        </igx-column-group>
    </igx-tree-grid>
</div>
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
- [IgxTreeGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html)
- [IgxTreeGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
- [IgxColumnGroupComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html)
<div class="divider--half"></div>
## Additional Resources
<div class="divider--half"></div>
- [Tree Grid overview](tree-grid.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
