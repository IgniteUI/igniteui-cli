---
title: Angular Grid Column Resizing - Ignite UI for Angular
description: Start using Angular Grid Column Resizing in order to change the grid column width in an instant. Angular drag resizing has never been so easy. Try for free!
keywords: grid column resizing, igniteui for angular, infragistics
license: commercial
llms:
  description: "With deferred grid column resizing, the user will see a temporary resize indicator while the Angular drag resizing operation is in effect."
_tocName: Column Resizing
_premium: true
---
# Angular Grid Column Resizing

With deferred grid column resizing, the user will see a temporary resize indicator while the Angular drag resizing operation is in effect. The new grid column width is applied once the drag operation has ended.

## Angular Grid Column Resizing Example

```typescript
import { Component } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { DATA } from '../../data/customers';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-resizing-sample',
    styleUrls: ['./grid-resizing-sample.component.scss'],
    templateUrl: 'grid-resizing-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})

export class ResizingSampleComponent {
    public data: any[];

    public col: IgxColumnComponent;
    public pWidth: string;
    public nWidth: string;

    constructor() {
        this.data = DATA;
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
    <igx-grid [igxPreventDocumentScroll]="true" [data]="data" (columnResized)="onResize($event)" [autoGenerate]="false" height="500px" width="100%">
        <igx-column [field]="'ID'" [header]="'ID'" [resizable]="true"></igx-column>
        <igx-column [field]="'CompanyName'" [header]="'Company Name'" [resizable]="true"></igx-column>
        <igx-column [field]="'ContactName'" [header]="'Contact Name'" [resizable]="true" [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
        <igx-column [field]="'ContactTitle'" [header]="'Contact Title'" [resizable]="true"></igx-column>
        <igx-column [field]="'Address'" [header]="'Address'" [resizable]="true"></igx-column>
        <igx-column [field]="'City'" [header]="'City'" [resizable]="true"></igx-column>
        <igx-column [field]="'Region'" [header]="'Region'" [resizable]="true"></igx-column>
        <igx-column [field]="'PostalCode'" [header]="'Postal Code'" [resizable]="true"></igx-column>
        <igx-column [field]="'Phone'" [header]="'Phone'" [resizable]="true"></igx-column>
        <igx-column [field]="'Fax'" [header]="'Fax'" [resizable]="true"></igx-column>
    </igx-grid>
</div>
```
```scss
.grid__wrapper {
    padding: 16px;
}
```

**Column resizing** is also enabled per-column level, meaning that the [`IgxGrid`](mcp:get_api_reference?platform=angular&component=IgxGridComponent) can have a mix of resizable and non-resizable columns. This is done via the [`resizable`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=resizable) input of the [`igx-column`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent).

```html
<igx-column [field]="'ID'" width="100px" [resizable]="true"></igx-column>
```

You can subscribe to the [`columnResized`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=columnResized) event of the [`IgxGrid`](mcp:get_api_reference?platform=angular&component=IgxGridComponent) to implement some custom logic when a column is resized. Both, previous and new column widths, as well as the [`IgxColumn`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent) object, are exposed through the event arguments.

```html
<igx-grid [data]="data" (columnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'ID'" width="100px" [resizable]="true"></igx-column>
    <igx-column [field]="'CompanyName'" width="100px" [resizable]="true"></igx-column>
</igx-grid>
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
<igx-grid [data]="data" (columnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'ID'" width="10%" [resizable]="true"></igx-column>
    <igx-column [field]="'CompanyName'" width="100px" [resizable]="true"></igx-column>
    <igx-column [field]="'ContactTitle'" [resizable]="true"></igx-column>
</igx-grid>
```

**Note:** 
There is a slight difference in the way resizing works for columns set in pixels and percentages.

**Pixels**

Resizing columns with width in pixels works by directly adding or subtracting the horizontal amount of the mouse movement from the size of the column.

**Percentages**

When resizing columns with width in percentages, the horizontal amount of the mouse movement in pixels translates roughly to its percentage amount relative to the grid width. The columns remain responsive and any future grid resizing will still reflect on the columns as well.

## Restrict column resizing

You can also configure the minimum and maximum allowable column widths. This is done via the [`minWidth`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=minWidth) and [`maxWidth`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=maxWidth) inputs of the [`igx-column`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent). In this case the resize indicator drag operation is restricted to notify the user that the column cannot be resized outside the boundaries defined by [`minWidth`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=minWidth) and [`maxWidth`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=maxWidth).

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

Each column can be **auto sized** by double clicking the right side of the header - the column will be sized to the longest currently visible cell value, including the header itself. This behavior is enabled by default, no additional configuration is needed. However, the column will not be auto-sized in case [`maxWidth`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=maxWidth) is set on that column and the new width exceeds that [`maxWidth`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=maxWidth) value. In this case the column will be sized according to preset [`maxWidth`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=maxWidth) value.

You can also auto-size a column dynamically using the exposed [`autosize()`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=autosize) method on [`IgxColumn`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent).

```typescript
@ViewChild('grid') grid: IgxGridComponent;

let column = this.grid.columnList.filter(c => c.field === 'ID')[0];
column.autosize();
```

## Auto-size columns on initialization

Each column can be set to auto-size on initialization by setting `width` to 'auto':

```html
<igx-column width='auto'></igx-column>
```

When the column is first initialized in the view it resolves its width to the size of the longest visible cell or header. Note that cells that are outside of the visible rows are not included.
This approach is more performance optimized than auto-sizing post initialization and is recommended especially in cases where you need to auto-size a large number of columns.

```typescript
import { Component } from '@angular/core';
import { DATA } from '../../data/customers';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'grid-column-autosizing-sample',
    styleUrls: ['./grid-column-autosizing.component.scss'],
    templateUrl: 'grid-column-autosizing.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})

export class GridColumnAutosizingComponent {
    public data: any[];

    constructor() {
        this.data = DATA;
    }
}
```
```html
<div class="grid__wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" [data]="data" [autoGenerate]="false" height="500px" width="100%">
        <igx-column [field]="'ID'" [header]="'ID'" [resizable]="true" width="auto"></igx-column>
        <igx-column [field]="'CompanyName'" [header]="'Company Name'" width="auto" [resizable]="true"></igx-column>
        <igx-column [field]="'ContactName'" [header]="'Contact Name'" width="auto" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
        <igx-column [field]="'ContactTitle'" [header]="'Contact Title'" width="auto" [resizable]="true"></igx-column>
        <igx-column [field]="'Address'" [header]="'Address'" width="auto" [resizable]="true"></igx-column>
        <igx-column [field]="'City'" [header]="'City'" width="auto" [resizable]="true"></igx-column>
        <igx-column [field]="'Region'" [header]="'Region'" width="auto" [resizable]="true"></igx-column>
        <igx-column [field]="'PostalCode'" [header]="'Postal Code'" width="auto" [resizable]="true"></igx-column>
        <igx-column [field]="'Phone'" [header]="'Phone'" width="auto" [resizable]="true"></igx-column>
        <igx-column [field]="'Fax'" [header]="'Fax'" width="auto" [resizable]="true"></igx-column>
    </igx-grid>
</div>
```
```scss
.grid__wrapper {
    padding: 16px;
}
```

## Styling

To get started with the styling of the Grid column resize line, we need to import the index file, where all the theme functions and the `tokens()` mixin are exported:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

The simplest approach to achieve this is to create a new theme that extends the `grid-theme` and accepts many parameters as well as the `$resize-line-color` parameter.

``` scss
$custom-grid-theme: grid-theme(
  $resize-line-color: #0288d1
);
```

**Note:** 
Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the `palette` and `color` functions. Please refer to [`Palettes`](/themes/sass/palettes) topic for detailed guidance on how to use them.

The last step is to apply the component theme with `tokens()`:

```scss
:host {
  @include tokens($custom-grid-theme);
}
```

### Demo

```typescript
import { Component, OnInit } from '@angular/core';
import { athletesData } from '../../data/athletesData';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-resize-line-styling-sample',
    styleUrls: ['./grid-resize-line-styling-sample.scss'],
    templateUrl: './grid-resize-line-styling-sample.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})

export class GridResizeLineStylingSampleComponent implements OnInit {
    public data: any[];
    public ngOnInit() {
        this.data = athletesData;
    }
}
```

**Note:** 
The sample will not be affected by the selected global theme from `Change Theme`.

## API References
- [`IgxColumn`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent)
- [`IgxGrid`](mcp:get_api_reference?platform=angular&component=IgxGridComponent)
- `IgxGridComponent Styles`
## Additional Resources

- [Grid overview](/grid/grid)
- [Virtualization and Performance](/grid/virtualization)
- [Paging](/grid/paging)
- [Filtering](/grid/filtering)
- [Sorting](/grid/sorting)
- [Summaries](/grid/summaries)
- [Column Moving](/grid/column-moving)
- [Column Pinning](/grid/column-pinning)
- [Selection](/grid/selection)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
