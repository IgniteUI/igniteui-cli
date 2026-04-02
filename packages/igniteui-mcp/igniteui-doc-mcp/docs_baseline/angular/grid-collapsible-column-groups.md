---
_tocName: Collapsible Column Groups
_premium: true
---
---title: Collapsible Column Groups in Angular Data Grid - Infragistics_description: Take advantage of the capability to show\hide smaller and concise set of data with the use of collapsible column groups in our Angular Data Grid. Try it now!_keywords: collapsible column headers, ignite ui for angular, infragistics_license: commercial---# Collapsible Column Groups in Angular Data GridMulti-column headers allow you to have multiple levels of nested columns and column groups. They also provide the ability to mark each column group as **collapsible**. **Collapsible multi-column headers** make it possible to collapse/expand, i.e. to show and hide the nested headers under the current one, which will give you a shortened/summarized information for example.## Angular Grid Collapsible Column Groups Overview Example```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellTemplateDirective, IgxCollapsibleIndicatorTemplateDirective, IgxColumnComponent, IgxColumnGroupComponent } from 'igniteui-angular/grids/core';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';
import { INVOICE_DATA } from '../../data/invoiceData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-grid-collapsible-column-groups',
    styleUrls: ['./grid-collapsible-column-groups.component.scss'],
    templateUrl: './grid-collapsible-column-groups.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnGroupComponent, IgxCollapsibleIndicatorTemplateDirective, IgxIconComponent, IgxTooltipTargetDirective, IgxTooltipDirective, IgxColumnComponent, IgxCellTemplateDirective, DatePipe]
})
export class GridCollapsibleColumnGroupsComponent implements OnInit {

    @ViewChild('grid', { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;
    public data;

    public ngOnInit() {
        this.data = INVOICE_DATA;
        for (const item of this.data) {
            const names = item.CustomerName.split(' ');
            item.FirstName = names[0];
            item.LastName = names[names.length - 1];
            item.FullAddress = `${item.Address}, ${item.City}, ${item.Country}`;
        }
    }
}
```
```html
<div class="wrapper theme">
  <div class="sample-content">
    <div class="sample-column">
      <igx-grid [igxPreventDocumentScroll]="true" #grid [data]="data" height="550px">
        <igx-column-group header="Customer Information" [collapsible]="true">
          <ng-template igxCollapsibleIndicator let-column="column">
            <igx-icon [attr.draggable]="false" #target="tooltipTarget" [igxTooltipTarget]="tooltipRef"[showDelay]="0" [hideDelay]="0">{{column.expanded ? 'expand_more' : 'chevron_right'}} </igx-icon>
            <div #tooltipRef="tooltip" igxTooltip>
              @if (column.expanded) {
                <span>The column is expanded! Click here to collapse</span>
              }
              <span [hidden]="column.expanded">The column is collapsed! Click here to expand</span>
            </div>
          </ng-template>
          <igx-column field="CustomerName" header="Fullname" [dataType]="'string'" [visibleWhenCollapsed]="true"></igx-column>
          <igx-column field="CustomerID" header="Customer ID" [dataType]="'string'" [visibleWhenCollapsed]="false"></igx-column>
          <igx-column field="FirstName" header="First Name" [dataType]="'string'" [visibleWhenCollapsed]="false">
          </igx-column>
          <igx-column field="LastName" header="Last Name" [dataType]="'string'" [visibleWhenCollapsed]="false">
          </igx-column>
          <igx-column-group header="Customer Address" [collapsible]="true" [expanded]="false">
            <ng-template igxCollapsibleIndicator let-column="column">
              <igx-icon [attr.draggable]="false" #target="tooltipTarget" [igxTooltipTarget]="tooltipRef" [showDelay]="0" [hideDelay]="0">{{column.expanded ? 'expand_more' : 'chevron_right'}} </igx-icon>
              <div #tooltipRef="tooltip" igxTooltip>
                @if (column.expanded) {
                  <span>The column is expanded! Click here to collapse</span>
                }
                <span [hidden]="column.expanded">The column is collapsed! Click here to expand</span>
              </div>
            </ng-template>
            <igx-column field="FullAddress" header="Full Address" [width]="'250px'" [dataType]="'string'" [sortable]="true" [visibleWhenCollapsed]="true">
            </igx-column>
            <igx-column field="Country" header="Country" [dataType]="'string'" [sortable]="true" [visibleWhenCollapsed]="false">
            </igx-column>
            <igx-column field="City" header="City" [dataType]="'string'" [sortable]="true"[visibleWhenCollapsed]="false">
            </igx-column>
            <igx-column field="Address" header="Address" [dataType]="'string'" [sortable]="true" [visibleWhenCollapsed]="false">
            </igx-column>
            <igx-column field="PostalCode" header="Postal Code" [dataType]="'string'" [sortable]="true" [visibleWhenCollapsed]="false">
            </igx-column>
          </igx-column-group>
        </igx-column-group>
        <igx-column field="ShipperName" header="Shipper Name" [dataType]="'string'" [sortable]="true">
        </igx-column>
        <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" [sortable]="true">
          <ng-template igxCell let-cell="cell" let-val>
            {{val | date:'dd/MM/yyyy'}}
          </ng-template>
        </igx-column>
        <igx-column-group header="Product Details" [collapsible]="true" [expanded]="false">
          <ng-template igxCollapsibleIndicator let-column="column">
            <igx-icon [attr.draggable]="false" #target="tooltipTarget" [igxTooltipTarget]="tooltipRef" [showDelay]="0" [hideDelay]="0">{{column.expanded ? 'expand_more' : 'chevron_right'}} </igx-icon>
            <div #tooltipRef="tooltip" igxTooltip>
              @if (column.expanded) {
                <span>The column is expanded! Click here to collapse</span>
              }
              <span [hidden]="column.expanded">The column is collapsed! Click here to expand</span>
            </div>
          </ng-template>
          <igx-column field="ProductName" header="Name" [dataType]="'string'" [sortable]="true"
            [filterable]="false">
          </igx-column>
          <igx-column field="UnitPrice" header="Unit Price" dataType="number" [sortable]="true"[filterable]="false">
          </igx-column>
          <igx-column field="ProductID" header="ID" [dataType]="'string'" [sortable]="true" [visibleWhenCollapsed]="true"
            [filterable]="false">
          </igx-column>
          <igx-column field="Quantity" header="Quantity" dataType="number" [sortable]="true" [filterable]="false" [visibleWhenCollapsed]="false">
          </igx-column>
          <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [sortable]="true" [visibleWhenCollapsed]="false">
          </igx-column>
        </igx-column-group>
      </igx-grid>
    </div>
  </div>
</div>
```
```scss
igx-grid {
    --ig-size: var(--ig-size-medium);
}
```<div class="divider--half"></div>## SetupTo get started with the IgxGrid and the **Collapsible multi-column headers** , first you need to install Ignite UI for Angular by typing the following command:```cmdng add igniteui-angular```For a complete introduction to the Ignite UI for Angular, read the [_getting started_](../general/getting-started.md) topic.The next step is to import the `IgxGridModule` in the app.module.ts file. Also, we strongly suggest that you take a brief look at [_multi-column groups_](./multi-column-headers.md) topic, to see more detailed information on how to setup the column groups in your grid.## Usage_Collapsible Column Groups_ is a part of the multi-column headers feature which provides a way to collapse/expand a column group to a smaller set of data. When a column group is collapsed, a subset of the columns will be shown to the end-user and the other child columns of the group will hide. Each collapsed/expanded column can be bound to the grid data source, or it may be unbound, thus calculated.In order to define a column group as `collapsible`, you need to set the property to `[collapsible]="true"` and also keep in mind that you need to define the property `visibleWhenCollapsed` to at least two child columns: at least one column must be visible when the group is collapsed (`[visibleWhenCollapsed]="true"`) and at least one column must be hidden when the group is expanded (`[visibleWhenCollapsed]="false"`), otherwise the **collapsible functionality will be disabled**. If  `visibleWhenCollapsed` is not specified for some of the child columns, then this column will be always visible no matter whether the parent state is expanded or collapsed.So let's see the markup below:```html<igx-column-group header="Customer Information" [collapsible]="true"> <!-- Initially the column groups will be expanded--->
    <!--The column below will be visible when its parent is collapsed-->
    <igx-column field="CustomerName" header="Fullname" [dataType]="'string'" [visibleWhenCollapsed]="true"></igx-column>
    <!--The three columns below will be visible when its parent is expanded-->
    <igx-column field="CustomerID" header="Customer ID" [dataType]="'string'" [visibleWhenCollapsed]="false"></igx-column>
    <igx-column field="FirstName" header="First Name" [dataType]="'string'" [visibleWhenCollapsed]="false">
    </igx-column>
    <igx-column field="LastName" header="Last Name" [dataType]="'string'" [visibleWhenCollapsed]="false">
    </igx-column>
    <igx-column-group header="Customer Address"> <!--This column visibility will not be changed based on parent expand/collapsed state-->
        <igx-column field="Country" header="Country" [dataType]="'string'" [sortable]="true">
        </igx-column>
        <igx-column field="City" header="City" [dataType]="'string'" [sortable]="true">
        </igx-column>
    </igx-column-group></igx-column-group>```And now let's sum up: every child column has three states:- Can be always visible, no matter the expanded state of its parent;- Can be visible, when its parent is collapsed;- Can be hidden, when its parent is collapsed;The initial state of the column group which is specified as collapsible is `[expanded]="true"`. But you can easily change this behavior by setting the property `[expanded]="false"`.## Expand/Collapse indicator templateDefault expand indicator for the igxGrid is the following:

 <img class="responsive-img" src="../../images/general/expand_indicator.png" alt="Expand Indicator" style="width: 450px; height: 130px"/>Default collapse indicator for the igxGrid is the following:<img class="responsive-img" src="../../images/general/collapsed_indicator.png" alt="Collapsed Indicator" style="width: 400px; height: 130px"/>Also, if you need to change the default expand/collapse indicator, we provide two easy ways to do so - via an input property or through a directive.### Using an input propertyYou can define custom expand/collapse template and provide it to each of the collapsible column groups using **collapsibleIndicatorTemplate** input property. Check the markup below:```html<ng-template #indTemplate let-column="column">
    <igx-icon [attr.draggable]="false" >{{column.expanded ? 'remove' : 'add'}} </igx-icon></ng-template><igx-column-group header="Customer Information" [collapsible]="true" [collapsibleIndicatorTemplate]="indTemplate">
    <igx-column field="CustomerName" header="Fullname" [dataType]="'string'" [visibleWhenCollapsed]="true"></igx-column>
    <igx-column field="CustomerID" header="Customer ID" [dataType]="'string'" [visibleWhenCollapsed]="false"></igx-column>
    <igx-column-group header="Customer Address" [collapsible]="true" [collapsibleIndicatorTemplate]="indTemplate">
        <igx-column field="Country" header="Country" [dataType]="'string'" [sortable]="true" [visibleWhenCollapsed]="true"></igx-column>
        <igx-column field="City" header="City" [dataType]="'string'" [sortable]="true" [visibleWhenCollapsed]="false"></igx-column>
    </igx-column-group></igx-column-group>```### Using igxCollapsibleIndicator directiveAnother way to achieve this behavior is to use the igxCollapsibleIndicator directive as shown in the example below:```html<igx-column-group header="Customer Information" [collapsible]="true">
    <ng-template igxCollapsibleIndicator let-column="column">
        <igx-icon [attr.draggable]="false">{{column.expanded ? 'remove' : 'add'}} </<igx-icon>
    </ng-template>
    <igx-column field="CustomerName" header="Fullname" [dataType]="'string'" [visibleWhenCollapsed]="true"></igx-column>
    <igx-column field="CustomerID" header="Customer ID" [dataType]="'string'" [visibleWhenCollapsed]="false"></igx-column>
    <igx-column-group header="Customer Address" [collapsible]="true">
        <igx-column field="Country" header="Country" [dataType]="'string'" [sortable]="true" [visibleWhenCollapsed]="true"></igx-column>
        <igx-column field="City" header="City" [dataType]="'string'" [sortable]="true" [visibleWhenCollapsed]="false"></igx-column>
    </igx-column-group></igx-column-group>```> [!Note]> Please keep in mind that initially collapse group option takes precedence over column hidden - If you declared your column to be hidden using the property> hidden and you have a group defined where the same column should be shown, the column will be shown.## API References<div class="divider--half"></div>- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)- [IgxGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)- [IgxGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#mixin-grid)## Additional Resources<div class="divider--half"></div>- [Grid overview](grid.md)- [Virtualization and Performance](virtualization.md)- [Paging](paging.md)- [Filtering](filtering.md)- [Sorting](sorting.md)- [Summaries](summaries.md)- [Column Moving](column-moving.md)- [Column Pinning](column-pinning.md)- [Selection](selection.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
