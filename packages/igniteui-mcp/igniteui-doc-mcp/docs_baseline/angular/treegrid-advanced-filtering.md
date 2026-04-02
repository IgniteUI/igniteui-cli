---
_tocName: Advanced Filtering
_premium: true
---
---title: Advanced Filtering in Angular Data Grid - Ignite UI for Angular_description: Learn how to configure advanced filter of data with the Angular table. The grid advanced filtering is more convenient and engaging than ever._keywords: advanced filter, igniteui for angular, infragistics_license: commercial_canonicalLink: grid/advanced-filtering---# Angular Tree Grid Advanced FilteringThe Advanced filtering provides a dialog which allows the creation of groups with filtering conditions across all columns for any [Angular table](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/grid) like the Tree Grid.## Angular Tree Grid Advanced Filtering Example```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxColumnComponent, IgxGridToolbarComponent } from 'igniteui-angular/grids/core';
import { generateEmployeeFlatData } from '../data/employees-flat';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-advanced-filtering-sample',
    styleUrls: ['./tree-grid-advanced-filtering-sample.component.scss'],
    templateUrl: './tree-grid-advanced-filtering-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxColumnComponent]
})
export class TreeGridAdvancedFilteringSampleComponent implements OnInit {

    @ViewChild('treeGrid1', { static: true }) public treeGrid: IgxTreeGridComponent;
    public data: any[];

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
    }
}
```
```html
<div class="grid__wrapper">
    <igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid1 [data]="data" [autoGenerate]="false" primaryKey="ID" foreignKey="ParentID" [allowAdvancedFiltering]="true" height="480px" width="100%" >
        <igx-grid-toolbar></igx-grid-toolbar>

        <igx-column [field]="'Name'" dataType="string" [sortable]="true"></igx-column>
        <igx-column [field]="'Title'" dataType="string" [sortable]="true"></igx-column>
        <igx-column [field]="'Age'" dataType="number" [sortable]="true"></igx-column>
        <igx-column [field]="'HireDate'" dataType="date" [sortable]="true"></igx-column>
        <igx-column [field]="'OnPTO'" dataType="boolean" [sortable]="true"></igx-column>
    </igx-tree-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 15px;
}
```<div class="divider--half"></div>## InteractionIn order to open the advanced filtering dialog, the **Advanced Filtering** button in the grid toolbar should be clicked. The dialog is using the [`IgxQueryBuilder`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxquerybuildercomponent.html) component to generate,display and edit the filtering logic. You can have a look at the [`Query Builder topic`](../query-builder.md#getting-started-with-ignite-ui-for-angular-query-builder) for details on the interaction process.In order to filter the data once you are ready with creating the filtering conditions and groups, you should click the **Apply** button. If you have modified the advanced filter, but you don't want to preserve the changes, you should click the **Cancel** button. You could also clear the advanced filter by clicking the **Clear Filter** button.## UsageTo enable the advanced filtering, the [`allowAdvancedFiltering`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#allowAdvancedFiltering) input property should be set to `true`.```html<igx-tree-grid [data]="data" [autoGenerate]="true" [allowAdvancedFiltering]="true">
    <igx-grid-toolbar></igx-grid-toolbar></igx-tree-grid>```The advanced filtering generates a [`FilteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/filteringexpressionstree.html) which is stored in the [`advancedFilteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#advancedFilteringExpressionsTree) input property. You could use this property to set an initial state of the advanced filtering.```typescriptngAfterViewInit(): void {
    const tree = new FilteringExpressionsTree(FilteringLogic.And);
    tree.filteringOperands.push({
        fieldName: 'ID',
        condition: IgxStringFilteringOperand.instance().condition('contains'),
        searchVal: 'a',
        ignoreCase: true
    });
    const subTree = new FilteringExpressionsTree(FilteringLogic.Or);
    subTree.filteringOperands.push({
        fieldName: 'ContactTitle',
        condition: IgxStringFilteringOperand.instance().condition('doesNotContain'),
        searchVal: 'b',
        ignoreCase: true
    });
    subTree.filteringOperands.push({
        fieldName: 'CompanyName',
        condition: IgxStringFilteringOperand.instance().condition('startsWith'),
        searchVal: 'c',
        ignoreCase: true
    });
    tree.filteringOperands.push(subTree);
    
    this.treeGrid.advancedFilteringExpressionsTree = tree;}```In case you don't want to show the Tree Grid toolbar, you could use the [`openAdvancedFilteringDialog`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#openAdvancedFilteringDialog) and [`closeAdvancedFilteringDialog`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#closeAdvancedFilteringDialog) methods to open and close the advanced filtering dialog programmatically.>[!NOTE]>You can enable both the `quickFilter`/`excelStyleFilter` and the advanced filtering user interfaces in the Tree Grid. Both filtering user interfaces will work independently of one another. The final filtered result in the Tree Grid is the intersection between the results of the two filters.## External Advanced filteringAs you see the demo above the Advanced filtering dialog is hosted in an overlay on top of the Tree Grid. When the setup in the dialog is ready, the apply or close actions would hide that dialog. There is a way to make that dialog stay always visible - be used as a standalone component. In the demo below, the advanced filtering dialog is declared separately of the Tree Grid.### Demo```typescript
import { Component, OnInit } from '@angular/core';
import { ORDERS_DATA } from '../data/orders';
import { IgxAdvancedFilteringDialogComponent, IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-external-advanced-filtering',
    templateUrl: './tree-grid-external-advanced-filtering.component.html',
    styleUrls: ['./tree-grid-external-advanced-filtering.component.scss'],
    imports: [IgxAdvancedFilteringDialogComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective]
})
export class TreeGridExternalAdvancedFilteringComponent {
    public data: any[];

    public options = {
        digitsInfo: '1.2-2',
        currencyCode: 'USD'
    };
    public formatOptions = this.options;

    constructor() {
        this.data = ORDERS_DATA;
    }
}
```
```html
<div class="grid__wrapper">
  <igx-advanced-filtering-dialog [grid]="treegrid1" class="advanced-dialog">
  </igx-advanced-filtering-dialog>

  <igx-tree-grid [igxPreventDocumentScroll]="true"  #treegrid1 [data]="data" [moving]="true" [autoGenerate]="false" height="400px" [allowFiltering]="true"
    primaryKey="ID" foreignKey="ParentID">
    <igx-column field="ID" header="Order ID" [sortable]="true">
    </igx-column>
    <igx-column field="Name" header="Order Product" [sortable]="true">
    </igx-column>
    <igx-column field="Category" header="Category" [sortable]="true">
    </igx-column>
    <igx-column field="Units" header="Units" [dataType]="'number'" [sortable]="true">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [dataType]="'currency'" [pipeArgs]="formatOptions" [sortable]="true">
    </igx-column>
    <igx-column field="Price" header="Price" [dataType]="'currency'" [pipeArgs]="formatOptions" [sortable]="true">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" [sortable]="true">
    </igx-column>
    <igx-column field="Delivered" header="Delivered" [dataType]="'boolean'">
      <ng-template igxCell let-cell="cell" let-val>
        @if (val) {
          <img src="assets/images/grid/active.png" title="Delivered" alt="Delivered" />
        }
        @if (!val) {
          <img src="assets/images/grid/expired.png" title="Undelivered" alt="Undelivered" />
        }
      </ng-template>
    </igx-column>
  </igx-tree-grid>
</div>
```
```scss
.grid__wrapper {
    display: flex;
    flex-flow: column;
    margin: 15px;
    align-items: stretch;
}

.advanced-dialog {
    margin-bottom: 2px;
    height: 325px;
    overflow-y: auto;
}
```### UsageIt's super easy to configure the advanced filtering to work outside of the Tree Grid. All you need to do is to create the dialog and set its [`grid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbaradvancedfilteringcomponent.html#grid) property:```html<igx-advanced-filtering-dialog [grid]="treegrid1"></igx-advanced-filtering-dialog>```You can also see how our [drag and drop App Builder™](https://www.infragistics.com/products/appbuilder) can streamline the entire design-to-Angular-code story.<div class="divider--half"></div>## StylingTo get started with styling the Advanced Filtering dialog, we need to import the `index` file, where all the theme functions and component mixins live:```scss@use "igniteui-angular/theming" as *;// IMPORTANT: Prior to Ignite UI for Angular version 13 use:// @import '~igniteui-angular/lib/core/styles/themes/index';```Since the Advanced Filtering dialog uses the [`IgxQueryBuilder`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxquerybuildercomponent.html) component, you can use the [`query-builder-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#query-builder-theme) to style it. To style the header title, you can create a custom theme that extends the [`query-builder-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#query-builder-theme) and set the `$header-foreground` parameter.```scss$custom-query-builder: query-builder-theme(
  $header-foreground: #512da8);```>[!NOTE]>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette) and [`color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.The last step is to **include** the component theme in our application.```scss$custom-query-builder: query-builder-theme(
  $header-foreground: #512da8,
  $color-expression-group-and:  #eb0000,
  $color-expression-group-or: #0000f3,
  $subquery-header-background: var(--ig-gray-300),
  $subquery-border-color: var(--ig-warn-500),
  $subquery-border-radius: rem(4px));igx-advanced-filtering-dialog {
  @include tokens($custom-query-builder);}```>[!NOTE]>We include the created **query-builder-theme** within `igx-advanced-filtering-dialog`, so that this custom theme will affect only the query builder nested in the advanced filtering dialog. Otherwise other query builder components in the application would be affected too.>[!NOTE]>If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:```scss$custom-query-builder: query-builder-theme(
  $header-foreground: #512da8,
  $color-expression-group-and:  #eb0000,
  $color-expression-group-or: #0000f3,
  $subquery-header-background: var(--ig-gray-300),
  $subquery-border-color: var(--ig-warn-500),
  $subquery-border-radius: rem(4px));:host {
  ::ng-deep {
    igx-advanced-filtering-dialog {
      @include tokens($custom-query-builder);
    }
  }}```### Demo```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxColumnComponent, IgxGridToolbarComponent } from 'igniteui-angular/grids/core';
import { generateEmployeeFlatData } from '../data/employees-flat';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-advanced-filtering-style',
    styleUrls: ['./tree-grid-advanced-filtering-style.component.scss'],
    templateUrl: './tree-grid-advanced-filtering-style.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxColumnComponent]
})
export class TreeGridAdvancedFilteringStyleComponent implements OnInit {

    @ViewChild('treeGrid1', { static: true }) public treeGrid: IgxTreeGridComponent;
    public data: any[];

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
    }
}
```
```html
<igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid1 [data]="data" [autoGenerate]="false" primaryKey="ID" foreignKey="ParentID" [allowAdvancedFiltering]="true" height="480px" width="100%" >
    <igx-grid-toolbar></igx-grid-toolbar>

    <igx-column [field]="'Name'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Title'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Age'" dataType="number" [sortable]="true"></igx-column>
    <igx-column [field]="'HireDate'" dataType="date" [sortable]="true"></igx-column>
    <igx-column [field]="'OnPTO'" dataType="boolean" [sortable]="true"></igx-column>
</igx-tree-grid>
```
```scss
@use "igniteui-angular/theming" as *;

$custom-query-builder: query-builder-theme(
  $header-foreground: #512da8,
  $color-expression-group-and:  #eb0000,
  $color-expression-group-or: #0000f3,
  $subquery-header-background: var(--ig-gray-300),
  $subquery-border-color: var(--ig-warn-500),
  $subquery-border-radius: rem(4px)
);

:host {
  igx-advanced-filtering-dialog {
    @include tokens($custom-query-builder);
  }
}
```>[!NOTE]>The sample will not be affected by the selected global theme from `Change Theme`.<div class="divider--half"></div>## API References<div class="divider--half"></div>- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)- [IgxTreeGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html)- [IgxTreeGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)## Additional Resources<div class="divider--half"></div>- [Tree Grid overview](tree-grid.md)- [Filtering](filtering.md)- [Excel Style Filtering](excel-style-filtering.md)- [Virtualization and Performance](virtualization.md)- [Paging](paging.md)- [Sorting](sorting.md)- [Summaries](summaries.md)- [Column Moving](column-moving.md)- [Column Pinning](column-pinning.md)- [Column Resizing](column-resizing.md)- [Selection](selection.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
