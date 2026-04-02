---
_tocName: Multi-column Headers
_premium: true
---
---title: Angular Multi-column Headers - Ignite UI for Angular_description: Start grouping column headers by placing them under a common hierarchical header with the help of Ignite UI for Angular grid and combine them into multi headers._keywords: column headers, ignite ui for angular, infragistics_license: commercial_canonicalLink: grid/multi-column-headers---# Angular Hierarchical Grid Multi-column Headers Overview[`IgxHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html) supports `multi-column headers` which allows you to group columns by placing them under a common multi headers. Each multi-column headers group could be a representation of combinations between other groups or columns within the Material UI grid.## Angular Hierarchical Grid Multi-column Headers Overview Example```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxColumnComponent, IgxColumnGroupComponent } from 'igniteui-angular/grids/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { CUSTOMERS } from '../../data/hierarchical-data';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-multi-column',
    styleUrls: ['./hierarchical-grid-multi-column.component.scss'],
    templateUrl: 'hierarchical-grid-multi-column.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnGroupComponent, IgxRowIslandComponent, IgxButtonDirective]
})

export class HGridMultiHeadersSampleComponent implements OnInit {
    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata;

    constructor() {

    }
    public ngOnInit(): void {
        this.localdata = CUSTOMERS;
    }

    public pinGroup() {
        const firstColumnGroup = this.hierarchicalGrid.columnList.filter((c) => c.header === 'General Information')[0];
        firstColumnGroup.pinned = !firstColumnGroup.pinned;
    }

    public hideGroup() {
        const firstColumnGroup = this.hierarchicalGrid.columnList.filter((c) => c.header === 'General Information')[0];
        firstColumnGroup.hidden = !firstColumnGroup.hidden;
    }

}
```
```html
<div class="grid__wrapper">
<igx-hierarchical-grid [igxPreventDocumentScroll]="true"  #hierarchicalGrid [data]="localdata" [height]="'480px'" [moving]="true" [width]="'100%'" [allowFiltering]="true">
    <igx-column field="CustomerID" [sortable]="true" [resizable]="true"></igx-column>
    <igx-column-group [pinned]="false" header="General Information">
        <igx-column field="CompanyName" [sortable]="true" [resizable]="true"></igx-column>
        <igx-column-group header="Personal Details">
            <igx-column field="ContactName" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="ContactTitle" [sortable]="true" [resizable]="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
    <igx-column-group header="Address Information">
        <igx-column-group header="Location">
            <igx-column field="Address" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="City" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="PostalCode" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="Country" [sortable]="true" [resizable]="true"></igx-column>
        </igx-column-group>
        <igx-column-group header="Contact Information">
            <igx-column field="Phone" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="Fax" [sortable]="true" [resizable]="true"></igx-column>
        </igx-column-group>
    </igx-column-group>

    <igx-row-island [height]="null" [key]="'Orders'" [autoGenerate]="false" [moving]="true">
        <igx-column-group header="Order Information">
            <igx-column-group header="Order Details">
                <igx-column field="OrderID" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="EmployeeID" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="OrderDate" [sortable]="true" [resizable]="true" [dataType]="'date'"></igx-column>
                <igx-column field="RequiredDate" [sortable]="true" [resizable]="true" [dataType]="'date'"></igx-column>
            </igx-column-group>
            <igx-column-group header="General Shipping Information">
                <igx-column field="ShippedDate" [sortable]="true" [resizable]="true" [dataType]="'date'"></igx-column>
                <igx-column field="ShipVia" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="Freight" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="ShipName" [sortable]="true" [resizable]="true"></igx-column>
            </igx-column-group>
            <igx-column-group header="Shipping Location">
                <igx-column field="ShipAddress" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="ShipCity" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="ShipPostalCode" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="ShipCountry" [sortable]="true" [resizable]="true"></igx-column>
            </igx-column-group>
        </igx-column-group>
        <igx-row-island [height]="null" [key]="'OrderDetails'" [autoGenerate]="false">
                <igx-column field="ProductID" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="UnitPrice" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="Quantity" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="Discount" [sortable]="true" [resizable]="true"></igx-column>
        </igx-row-island>
    </igx-row-island>

</igx-hierarchical-grid>

<section class="button-section">
    <button igxButton="contained" (click)="pinGroup()">Pin first group</button>
    <button igxButton="contained" (click)="hideGroup()">Hide first group</button>
</section>
</div>
```
```scss
.grid__wrapper {
    --ig-size: var(--ig-size-small);
    margin: 16px;
}

.igx-button--contained {
    margin-right: 5px;
}
```The declaration of `Multi-column header` could be achieved by wrapping a set of columns into [`igx-column-group`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html) component with [`header`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html#header) title passed.```html<igx-hierarchical-grid [data]="localdata" [moving]="true" [allowFiltering]="true">
    <igx-column field="CustomerID" sortable="true" resizable="true"></igx-column>
    <igx-column-group header="Address Information">
        <igx-column-group header="Location">
            <igx-column field="Address" sortable="true" resizable="true"></igx-column>
            <igx-column field="City" sortable="true" resizable="true"></igx-column>
            <igx-column field="PostalCode" sortable="true" resizable="true"></igx-column>
            <igx-column field="Country" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
        <igx-column-group header="Contact Information">
            <igx-column field="Phone" sortable="true" resizable="true"></igx-column>
            <igx-column field="Fax" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
    </igx-column-group></igx-hierarchical-grid>```For achieving `n-th` level of nested headers, the declaration above should be followed. So by nesting [`igx-column-group`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html) leads to the desired result.```html<igx-hierarchical-grid [data]="localdata" [allowFiltering]="true" [moving]="true">
    <igx-column field="CustomerID" sortable="true" resizable="true"></igx-column>
    <igx-column-group pinned]="false" header="General Information">
        <igx-column field="CompanyName" sortable="true" resizable="true"></igx-column>
        <igx-column-group header="Person Details">
            <igx-column field="ContactName" sortable="true" resizable="true"></igx-column>
            <igx-column field="ContactTitle" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
    </igx-column-group></igx-hierarchical-grid>```Every [`igx-column-group`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html) supports [`moving`](column-moving.md), [`pinning`](column-pinning.md) and [`hiding`](column-hiding.md).> [!NOTE]> When there is a set of columns and column groups, pinning works only for top level column parents. More specifically pinning per nested `column groups` or `columns` is not allowed. <br />> Please note that when using Pinning with Multi-Column Headers, the entire Group gets pinned. <br />> Moving between `columns` and `column groups` is allowed only when they are at the same level in the hierarchy and both are in the same `group`. <br />> When `columns/column-groups` are not wrapped by current `group` which means they are **top level** `columns`, moving is allowed between whole visible columns.```html<igx-hierarchical-grid [data]="localdata" [allowFiltering]="true" [moving]="true">
    <igx-column field="CustomerID" sortable="true" resizable="true"></igx-column>
    <igx-column-group [pinned]="false" header="General Information">
        <igx-column field="CompanyName" sortable="true" resizable="true"></igx-column>
        <igx-column-group header="Person Details">
            <igx-column field="ContactName" sortable="true" resizable="true"></igx-column>
            <igx-column field="ContactTitle" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
    ...</igx-hierarchical-grid>```## Multi-column Header TemplateEach of the column groups of the grid can be templated separately. The column group expects `ng-template` tag decorated with the `igxHeader` directive.The `ng-template` is provided with the column group object as a context.```html...<igx-column-group header="General Information">
    <ng-template igxHeader let-columnGroup>
        {{ columnGroup.header | uppercase }}
    </ng-template>
    ...</igx-column-group>...```If you want to re-use a single template for several column groups, you could set the [`headerTemplate`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html#headertemplate) property of the column group like this:```html<ng-template #columnGroupHeaderTemplate let-columnGroup>
    {{ columnGroup.header | uppercase }}</ng-template>...<igx-column-group header="General Information" [headerTemplate]="columnGroupHeaderTemplate">
    ...</igx-column-group><igx-column-group header="Address Information" [headerTemplate]="columnGroupHeaderTemplate">
    ...</igx-column-group>...```> [!NOTE]> If a column header is retemplated and the grid moving is enabled, you have to set the **draggable** attribute of corresponding column to **false** on the templated elements, so that you can handle any of the events that are applied!```html<ng-template igxHeader>
    <igx-icon [attr.draggable]="false" (click)="onClick()"></igx-icon></ng-template>```The following sample demonstrates how to implement collapsible column groups using header templates.```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxColumnComponent, IgxColumnGroupComponent } from 'igniteui-angular/grids/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { CUSTOMERS } from '../../data/hierarchical-data';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-multi-column-template',
    styleUrls: ['./hierarchical-grid-multi-column-template.component.scss'],
    templateUrl: 'hierarchical-grid-multi-column-template.component.html',
    imports: [IgxIconComponent, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnGroupComponent, IgxRowIslandComponent]
})

export class HGridMultiHeaderTemplateSampleComponent implements OnInit {
    @ViewChild('hierarchicalGrid', { read: IgxHierarchicalGridComponent, static: true})
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    public localData: any[];
    public columnGroupStates = new Map<IgxColumnGroupComponent, boolean>();

    constructor() {
    }

    public ngOnInit(): void {
        this.localData = CUSTOMERS;
        for (const item of this.localData) {
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
        } else {
            for (let i = 1; i < columns.length; i++) {
                const col = columns[i];
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

    <igx-hierarchical-grid [igxPreventDocumentScroll]="true"  #hierarchicalGrid [data]="localData" [moving]="true" [height]="'500px'" [width]="'100%'" [allowFiltering]="true">
        <igx-column field="CustomerID" [sortable]="true" [resizable]="true"></igx-column>
        <igx-column-group [pinned]="false" header="General Information" [headerTemplate]="columnGroupTemplate">
            <igx-column field="CompanyName" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column-group header="Personal Details">
                <igx-column field="ContactName" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="ContactTitle" [sortable]="true" [resizable]="true"></igx-column>
            </igx-column-group>
        </igx-column-group>
        <igx-column-group header="Address Information" [headerTemplate]="columnGroupTemplate">
            <igx-column [sortable]="true" [resizable]="true" field="Location" [hidden]="true"></igx-column>
            <igx-column [sortable]="true" [resizable]="true" field="Phone" [hidden]="true"></igx-column>
            <igx-column-group header="Location">
                <igx-column field="Address" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="City" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="PostalCode" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="Country" [sortable]="true" [resizable]="true"></igx-column>
            </igx-column-group>
            <igx-column-group header="Contact Information">
                <igx-column field="Phone" [sortable]="true" [resizable]="true"></igx-column>
                <igx-column field="Fax" [sortable]="true" [resizable]="true"></igx-column>
            </igx-column-group>
        </igx-column-group>

        <igx-row-island [height]="null" [key]="'Orders'" [autoGenerate]="false" [moving]="true">
            <igx-column-group header="Order Information">
                <igx-column-group header="Order Details" [headerTemplate]="columnGroupTemplate">
                    <igx-column field="OrderID" [sortable]="true" [resizable]="true"></igx-column>
                    <igx-column field="EmployeeID" [sortable]="true" [resizable]="true"></igx-column>
                    <igx-column field="OrderDate" [sortable]="true" [resizable]="true" [dataType]="'date'"></igx-column>
                    <igx-column field="RequiredDate" [sortable]="true" [resizable]="true" [dataType]="'date'"></igx-column>
                </igx-column-group>
                <igx-column-group header="General Shipping Information" [headerTemplate]="columnGroupTemplate">
                    <igx-column field="ShippedDate" [sortable]="true" [resizable]="true" [dataType]="'date'"></igx-column>
                    <igx-column field="ShipVia" [sortable]="true" [resizable]="true"></igx-column>
                    <igx-column field="Freight" [sortable]="true" [resizable]="true"></igx-column>
                    <igx-column field="ShipName" [sortable]="true" [resizable]="true"></igx-column>
                </igx-column-group>
                <igx-column-group header="Shipping Location" [headerTemplate]="columnGroupTemplate">
                    <igx-column field="ShipAddress" [sortable]="true" [resizable]="true"></igx-column>
                    <igx-column field="ShipCity" [sortable]="true" [resizable]="true"></igx-column>
                    <igx-column field="ShipPostalCode" [sortable]="true" [resizable]="true"></igx-column>
                    <igx-column field="ShipCountry" [sortable]="true" [resizable]="true"></igx-column>
                </igx-column-group>
            </igx-column-group>
            <igx-row-island [height]="null" [key]="'OrderDetails'" [autoGenerate]="false">
                    <igx-column field="ProductID" [sortable]="true" [resizable]="true"></igx-column>
                    <igx-column field="UnitPrice" [sortable]="true" [resizable]="true"></igx-column>
                    <igx-column field="Quantity" [sortable]="true" [resizable]="true"></igx-column>
                    <igx-column field="Discount" [sortable]="true" [resizable]="true"></igx-column>
            </igx-row-island>
        </igx-row-island>

    </igx-hierarchical-grid>
</div>
```
```scss
.grid__wrapper {
    --ig-size: var(--ig-size-small);
    margin: 16px;
}

.column-group-template__container {
    display: flex;
    align-items: center;
}

.column-group-template__icon {
    cursor: pointer;
}
```## StylingTo get started with styling the sorting behavior, we need to import the `index` file, where all the theme functions and component mixins live:```scss@use "igniteui-angular/theming" as *;// IMPORTANT: Prior to Ignite UI for Angular version 13 use:// @import '~igniteui-angular/lib/core/styles/themes/index';```Following the simplest approach, we create a new theme that extends the [`grid-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme) and accepts the `$header-background`, `$header-text-color`, `$header-border-width`, `$header-border-style` and `$header-border-color` parameters.```scss$custom-theme: grid-theme(
  $header-background: #e0f3ff,
  $header-text-color: #e41c77,
  $header-border-width: 1px,
  $header-border-style: solid,
  $header-border-color: rgba(0, 0, 0, 0.08));```>[!NOTE]>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette) and [`color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.The last step is to **include** the component mixins:```scss:host {
  @include tokens($custom-theme);}```### Demo```typescript
import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from '../../data/hierarchical-data';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxColumnComponent, IgxColumnGroupComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-multi-column-styling',
    styleUrls: ['./hierarchical-grid-multi-column-styling.component.scss'],
    templateUrl: 'hierarchical-grid-multi-column-styling.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnGroupComponent, IgxRowIslandComponent]
})

export class HGridMultiHeadersStylingComponent implements OnInit {
    public localdata;

    constructor() {

    }
    public ngOnInit(): void {
        this.localdata = CUSTOMERS;
    }
}
```
```html
<div class="grid__wrapper">
<igx-hierarchical-grid [igxPreventDocumentScroll]="true"  #hierarchicalGrid [data]="localdata" [height]="'470px'" [width]="'100%'">
    <igx-column field="CustomerID"></igx-column>
    <igx-column-group header="General Information">
        <igx-column field="CompanyName"></igx-column>
        <igx-column-group header="Personal Details">
            <igx-column field="ContactName"></igx-column>
            <igx-column field="ContactTitle"></igx-column>
        </igx-column-group>
    </igx-column-group>
    <igx-column-group header="Address Information">
        <igx-column-group header="Location">
            <igx-column field="Address"></igx-column>
            <igx-column field="City"></igx-column>
            <igx-column field="PostalCode"></igx-column>
            <igx-column field="Country"></igx-column>
        </igx-column-group>
        <igx-column-group header="Contact Information">
            <igx-column field="Phone"></igx-column>
            <igx-column field="Fax"></igx-column>
        </igx-column-group>
    </igx-column-group>

    <igx-row-island [height]="null" [key]="'Orders'" [autoGenerate]="false">
        <igx-column-group header="Order Information">
            <igx-column-group header="Order Details">
                <igx-column field="OrderID"></igx-column>
                <igx-column field="EmployeeID"></igx-column>
                <igx-column field="OrderDate" [dataType]="'date'"></igx-column>
                <igx-column field="RequiredDate" [dataType]="'date'"></igx-column>
            </igx-column-group>
            <igx-column-group header="General Shipping Information">
                <igx-column field="ShippedDate" [dataType]="'date'"></igx-column>
                <igx-column field="ShipVia"></igx-column>
                <igx-column field="Freight"></igx-column>
                <igx-column field="ShipName"></igx-column>
            </igx-column-group>
            <igx-column-group header="Shipping Location">
                <igx-column field="ShipAddress"></igx-column>
                <igx-column field="ShipCity"></igx-column>
                <igx-column field="ShipPostalCode"></igx-column>
                <igx-column field="ShipCountry"></igx-column>
            </igx-column-group>
        </igx-column-group>
        <igx-row-island [height]="null" [key]="'OrderDetails'" [autoGenerate]="false">
                <igx-column field="ProductID"></igx-column>
                <igx-column field="UnitPrice"></igx-column>
                <igx-column field="Quantity"></igx-column>
                <igx-column field="Discount"></igx-column>
        </igx-row-island>
    </igx-row-island>

</igx-hierarchical-grid>
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
```>[!NOTE]>The sample will not be affected by the selected global theme from `Change Theme`.## API References<div class="divider--half"></div>- [IgxHierarchicalGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html)- [IgxHierarchicalGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)- [IgxColumnGroupComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumngroupcomponent.html)<div class="divider--half"></div>## Additional Resources<div class="divider--half"></div>- [Hierarchical Grid overview](hierarchical-grid.md)- [Virtualization and Performance](virtualization.md)- [Paging](paging.md)- [Filtering](filtering.md)- [Sorting](sorting.md)- [Summaries](summaries.md)- [Column Resizing](column-resizing.md)- [Selection](selection.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
