---
title: Angular Tree Grid Column Resizing - Ignite UI for Angular
_description: Start using Angular Tree Grid Column Resizing in order to change the grid column width in an instant. Angular drag resizing has never been so easy. Try for free!
_keywords: grid column resizing, igniteui for angular, infragistics
_license: commercial
_canonicalLink: grid/column-resizing
_tocName: Column Resizing
_premium: true
---
# Angular Tree Grid Column Resizing
With deferred grid column resizing, the user will see a temporary resize indicator while the Angular drag resizing operation is in effect. The new grid column width is applied once the drag operation has ended.
## Angular Tree Grid Column Resizing Example
```typescript
import { Component } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-column-resizing-sample',
    styleUrls: ['./tree-grid-column-resizing-sample.component.scss'],
    templateUrl: './tree-grid-column-resizing-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class TreeGridColumnResizingSampleComponent {
    public data: any[];

    public col: IgxColumnComponent;
    public pWidth: string;
    public nWidth: string;

    constructor() {
        this.data = generateEmployeeDetailedFlatData();
    }

    public onResize(event) {
        this.col = event.column;
        this.pWidth = event.prevWidth;
        this.nWidth = event.newWidth;
    }
}
```
```html
<div class="grid__wrapper">
    <igx-tree-grid [igxPreventDocumentScroll]="true"  [data]="data" primaryKey="ID" foreignKey="ParentID" (columnResized)="onResize($event)"
        [autoGenerate]="false" height="500px" width="100%">
        <igx-column [field]="'Name'" [header]="'Name'" dataType="string" [resizable]="true" [width]="'220px'"
            [minWidth]="'200px'" [maxWidth]="'250px'"></igx-column>
        <igx-column [field]="'Title'" [header]="'Title'" dataType="string" [resizable]="true"></igx-column>
        <igx-column [field]="'HireDate'" [header]="'Hire Date'" dataType="date" [resizable]="true"></igx-column>
        <igx-column [field]="'Age'" [header]="'Age'" dataType="number" [resizable]="true"></igx-column>
        <igx-column [field]="'Address'" [header]="'Address'" dataType="string" [resizable]="true"></igx-column>
        <igx-column [field]="'City'" [header]="'City'" dataType="string" [resizable]="true"></igx-column>
        <igx-column [field]="'Country'" [header]="'Country'" dataType="string" [resizable]="true"></igx-column>
        <igx-column [field]="'Fax'" [header]="'Fax'" dataType="string" [resizable]="true"></igx-column>
        <igx-column [field]="'PostalCode'" [header]="'Postal Code'" dataType="string" [resizable]="true"></igx-column>
        <igx-column [field]="'Phone'" [header]="'Phone'" dataType="string" [resizable]="true"></igx-column>
    </igx-tree-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 20px;
}
```
<div class="divider--half"></div>
**Column resizing** is also enabled per-column level, meaning that the [**igx-tree-grid**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html) can have a mix of resizable and non-resizable columns. This is done via the [`resizable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#resizable) input of the [`igx-column`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html).
```html
<igx-column [field]="'ID'" width="100px" [resizable]="true"></igx-column>
```
You can subscribe to the [`columnResized`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#columnResized) event of the [`igx-tree-grid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html) to implement some custom logic when a column is resized. Both, previous and new column widths, as well as the [`IgxColumnComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html) object, are exposed through the event arguments.
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" (columnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'Title'" [resizable]="true" [width]="'100px'"></igx-column>
    <igx-column [field]="'HireDate'" [resizable]="true" [width]="'100px'"></igx-column>
</igx-tree-grid>
```
```typescript
public onResize(event) {
    this.col = event.column;
    this.pWidth = event.prevWidth;
    this.nWidth = event.newWidth;
}
```
## Resizing columns in pixels/percentages
Depending on the user scenario, the column width may be defined in pixels, percentages or a mix of both. All these scenarios are supported by the Column Resizing feature. By default if a column does not have width set, it fits the available space with width set in pixels.
This means that the following configuration is possible:
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" (columnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'Title'" [resizable]="true" [width]="'10%'"></igx-column>
    <igx-column [field]="'HireDate'" [resizable]="true" [width]="'100px'"></igx-column>
    <igx-column [field]="'Age'" dataType="number" [resizable]="true"></igx-column>
</igx-tree-grid>
```
>[!NOTE]
> There is a slight difference in the way resizing works for columns set in pixels and percentages.
**Pixels**
Resizing columns with width in pixels works by directly adding or subtracting the horizontal amount of the mouse movement from the size of the column.
**Percentages**
When resizing columns with width in percentages, the horizontal amount of the mouse movement in pixels translates roughly to its percentage amount relative to the grid width. The columns remain responsive and any future grid resizing will still reflect on the columns as well.
## Restrict column resizing
You can also configure the minimum and maximum allowable column widths. This is done via the [`minWidth`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#minWidth) and [`maxWidth`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#maxWidth) inputs of the [`igx-column`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html). In this case the resize indicator drag operation is restricted to notify the user that the column cannot be resized outside the boundaries defined by [`minWidth`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#minWidth) and [`maxWidth`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#maxWidth).
```html
<igx-column [field]="'ID'" width="100px" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
```
Mixing the minimum and maximum column width value types (pixels or percentages) is allowed. If the values set for minimum and maximum are set to percentages, the respective column size will be limited to those exact sizes similar to pixels.
This means the following configurations are possible:
```html
<igx-column [field]="'ID'" width="10%" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
```
or
```html
<igx-column [field]="'ID'" width="100px" [resizable]="true"
            [minWidth]="'5%'" [maxWidth]="'15%'"></igx-column>
```
## Auto-size columns on double click
Each column can be **auto sized** by double clicking the right side of the header - the column will be sized to the longest currently visible cell value, including the header itself. This behavior is enabled by default, no additional configuration is needed. However, the column will not be auto-sized in case [`maxWidth`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#maxWidth) is set on that column and the new width exceeds that [`maxWidth`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#maxWidth) value. In this case the column will be sized according to preset [`maxWidth`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#maxWidth) value.
You can also auto-size a column dynamically using the exposed [`autosize()`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#autosize) method on [`IgxColumnComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html).
```typescript
@ViewChild('treeGrid') treeGrid: IgxTreeGridComponent;
let column = this.treeGrid.columnList.filter(c => c.field === 'ID')[0];
column.autosize();
```
## Auto-size columns on initialization
Each column can be set to auto-size on initialization by setting `width` to 'auto':
```html
<igx-column width='auto'>...
```
When the column is first initialized in the view it resolves its width to the size of the longest visible cell or header. Note that cells that are outside of the visible rows are not included.
This approach is more performance optimized than auto-sizing post initialization and is recommended especially in cases where you need to auto-size a large number of columns.
```typescript
import { Component } from '@angular/core';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'tree-grid-columnAutoSizing-sample',
    styleUrls: ['./treegrid-column-autosizing.component.scss'],
    templateUrl: './treegrid-column-autosizing.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class TreeGridColumnAutoSizingSampleComponent {
    public data: any[];

    constructor() {
        this.data = generateEmployeeDetailedFlatData();
    }

}
```
```html
<div class="grid__wrapper">
    <igx-tree-grid [igxPreventDocumentScroll]="true" [data]="data" primaryKey="ID" foreignKey="ParentID"
        [autoGenerate]="false" height="500px" width="100%">
        <igx-column [field]="'Name'" [header]="'Name'" dataType="string" [resizable]="true" [width]="'220px'"
            [minWidth]="'200px'" [maxWidth]="'250px'"></igx-column>
        <igx-column [field]="'Title'" width="auto" [header]="'Title'" dataType="string" [resizable]="true"></igx-column>
        <igx-column [field]="'HireDate'" width="auto" [header]="'Hire Date'" dataType="date" [resizable]="true"></igx-column>
        <igx-column [field]="'Age'" width="auto" [header]="'Age'" dataType="number" [resizable]="true"></igx-column>
        <igx-column [field]="'Address'" width="auto" [header]="'Address'" dataType="string" [resizable]="true"></igx-column>
        <igx-column [field]="'City' "width="auto" [header]="'City'" dataType="string" [resizable]="true"></igx-column>
        <igx-column [field]="'Country'" width="auto" [header]="'Country'" dataType="string" [resizable]="true"></igx-column>
        <igx-column [field]="'Fax'" width="auto" [header]="'Fax'" dataType="string" [resizable]="true"></igx-column>
        <igx-column [field]="'PostalCode'" width="auto" [header]="'Postal Code'" dataType="string" [resizable]="true"></igx-column>
        <igx-column [field]="'Phone'" width="auto" [header]="'Phone'" dataType="string" [resizable]="true"></igx-column>
    </igx-tree-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 20px;
}
```
<div class="divider--half"></div>
## Styling
To get started with the styling of the Tree Grid column resize line, we need to import the index file, where all the theme functions and component mixins live:
```scss
@use "igniteui-angular/theming" as *;
// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```
The simplest approach to achieve this is to create a new theme that extends the [`grid-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme) and accepts many parameters as well as the `$resize-line-color` parameter.
``` scss
$custom-grid-theme: grid-theme(
  $resize-line-color: #0288d1
);
```
>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette) and [`color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.
The last step is to **include** the component mixins with its respective theme:
```scss
:host {
  @include tokens($custom-grid-theme);
}
```
### Demo
```typescript
import { Component } from '@angular/core';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-resize-line-styling-sample',
    styleUrls: ['./tree-grid-resize-line-styling-sample.component.scss'],
    templateUrl: './tree-grid-resize-line-styling-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class TreeGridResizeLineStylingSampleComponent {
    public data: any[];

    constructor() {
        this.data = generateEmployeeDetailedFlatData();
    }
}
```
```html
<div class="grid__wrapper">
    <igx-tree-grid [igxPreventDocumentScroll]="true"  [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" height="500px"
        width="100%">
        <igx-column [field]="'Name'" [header]="'Name'" dataType="string" [resizable]="true" [width]="'220px'"
            [minWidth]="'200px'" [maxWidth]="'250px'"></igx-column>
        <igx-column [field]="'Title'" [header]="'Title'" dataType="string" [resizable]="true">
        </igx-column>
        <igx-column [field]="'HireDate'" [header]="'Hire Date'" dataType="date" [resizable]="true">
        </igx-column>
        <igx-column [field]="'Age'" [header]="'Age'" dataType="number" [resizable]="true">
        </igx-column>
        <igx-column [field]="'Address'" [header]="'Address'" dataType="string" [resizable]="true">
        </igx-column>
        <igx-column [field]="'City'" [header]="'City'" dataType="string" [resizable]="true">
        </igx-column>
        <igx-column [field]="'Country'" [header]="'Country'" dataType="string" [resizable]="true">
        </igx-column>
        <igx-column [field]="'Fax'" [header]="'Fax'" dataType="string" [resizable]="true">
        </igx-column>
        <igx-column [field]="'PostalCode'" [header]="'Postal Code'" dataType="string" [resizable]="true"
        ></igx-column>
        <igx-column [field]="'Phone'" [header]="'Phone'" dataType="string" [resizable]="true">
        </igx-column>
    </igx-tree-grid>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$custom-grid-theme: grid-theme(
  $resize-line-color: #0288d1
);

:host {
  @include tokens($custom-grid-theme);
}
```
>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.
## API References
<div class="divider--half"></div>
- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)
- [IgxTreeGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html)
- [IgxTreeGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#mixin-grid)
## Additional Resources
<div class="divider--half"></div>
- [Tree Grid overview](tree-grid.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Selection](selection.md)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
