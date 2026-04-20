---
title: Editing Rows in Angular Data Grid - Ignite UI for Angular
_description: Want to enable row editing in Angular Data Grid? Need a powerful API for CRUD operations? Try our Ignite UI for Angular Data Grid rows editing component!
_keywords: row editing, igniteui for angular, infragistics
_license: commercial
_tocName: Row Editing
_premium: true
---
# Angular Grid Row Editing
The Grid provides a convenient way to perform data manipulations through inline editing and a powerful API for Angular CRUD operations. Click on a row and press **Enter key** or simply double click with the mouse on the row that needs to be modified.
## Angular Grid Row Editing Example
The following sample demonstrates how to enable row editing in the Grid. Changing a cell value and then clicking or navigating to another cell on the same row won't  update the row value until confirmed by using the **Done** button, or discarded by using **Cancel** button.
```typescript
import { Component } from '@angular/core';
import { DATA } from '../../data/nwindData';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellEditorTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxInputDirective, IgxInputGroupComponent } from 'igniteui-angular/input-group';
import { IgxFocusDirective } from 'igniteui-angular/directives';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-grid-row-edit',
    styleUrls: [`grid-row-editing-sample.component.scss`],
    templateUrl: 'grid-row-editing-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellEditorTemplateDirective, IgxInputGroupComponent, FormsModule, IgxInputDirective, IgxFocusDirective]
})
export class GridRowEditSampleComponent {
    public data: any[] = DATA;
}
```
```html
<div class="sample-wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" #gridRowEdit [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px" [rowEditable]="true">
        <igx-column field="ProductID" header="Product ID"></igx-column>
        <igx-column field="ReorderLevel" header="ReorderLever" dataType="number"></igx-column>
        <igx-column field="ProductName" header="ProductName" [dataType]="'string'"></igx-column>
        <igx-column field="UnitsInStock" header="UnitsInStock" dataType="number">
            <!--The following template can be omitted (grid handles this internally) but it is here as an example of custom cell editor.-->
            <ng-template igxCellEditor let-cell="cell">
                <igx-input-group>
                    <input igxInput [igxFocus]='true' name="units" [(ngModel)]="cell.editValue" style="color: black" />
                </igx-input-group>
            </ng-template>
        </igx-column>
        <igx-column field="OrderDate" [dataType]="'date'"></igx-column>
        <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'"></igx-column>
    </igx-grid>
</div>
```
```scss
.sample-wrapper {
    margin: 0 auto;
    padding: 16px;
}
```
<div class="divider--half"></div>
> [!NOTE]
> When a row is in edit mode, then clicking on a cell on another row will act like the Done button is pressed - submit all the changes of the previous row. If the new cell that gets focus is editable, then the new row also enters edit mode, while if the cell is not editable, then only the previous row exits edit mode.
## Row Editing Usage
To get started import the `IgxGridModule` in the **app.module.ts** file:
```typescript
// app.module.ts
...
import { IgxGridModule } from 'igniteui-angular';
@NgModule({
    ...
    imports: [..., IgxGridModule],
    ...
})
export class AppModule {}
```
Then define a Grid with bound data source and [`rowEditable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowEditable) set to true:
```html
<igx-grid [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px" [rowEditable]="true">
    <igx-column field="ProductID" header="Product ID" editable="false"></igx-column>
    <igx-column field="ReorderLevel" header="ReorderLever" [dataType]="'number'"></igx-column>
    <igx-column field="ProductName" header="ProductName" [dataType]="'string'"></igx-column>
    <igx-column field="UnitsInStock" header="UnitsInStock" [dataType]="'number'">
        <ng-template igxCellEditor let-cell="cell">
            <input name="units" [(ngModel)]="cell.value" style="color: black" />
        </ng-template>
    </igx-column>
    <igx-column field="OrderDate" [dataType]="'date'"></igx-column>
    <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'"></igx-column>
</igx-grid>
```
> [!NOTE]
> Setting primary key is mandatory for row editing operations.
> [!NOTE]
> It's not needed to enable editing for individual columns. Using the [`rowEditable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowEditable) property in the Grid, will mean that all rows, with defined `field` property, excluding primary one, will be editable. If you want to disable editing for specific column, then you set the [`editable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#editable) column's input to `false`.
```typescript
import { Component, ViewChild } from '@angular/core';
import { data } from './data';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
// import { IgxGridComponent } from '@infragistics/igniteui-angular'; for licensed package
@Component({
    selector: 'app-grid-row-edit',
    styleUrls: [`grid-row-editing-sample.component.css`],
    templateUrl: 'grid-row-editing-sample.component.html'
})
export class GridRowEditSampleComponent {
    @ViewChild('gridRowEdit', { read: IgxGridComponent }) public gridRowEdit: IgxGridComponent;

    public data: any[];

    constructor() {
        this.data = data;
    }
}
```
> [!NOTE]
> The Grid uses internally a provider [`IgxBaseTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbasetransactionservice.html) that holds pending cell changes, until row state submitted or cancelled.
## Positioning
- Default position of the overlay will be below the row that is in edit mode
- If there is no space below the row then overlay will appear above the row.
- Once shown - top or bottom, overlay will maintain this position during scrolling, until the overlay is closed.
## Behavior
- If row is in edit mode, then editing will continue, if a cell from the same row is clicked.
- Clicking "Done" button will finish row editing and will submit changes either to the data source, or to a transaction if available. In addition row will exit edit mode.
- Clicking "Cancel" button will revert all current changes in the row and row will exit edit mode.
- If row is in edit mode, then clicking a cell from another row will finish the current row edit and will submit new row changes (the same behavior clicking "Done" button). If the new cell that gets focus is editable, then the new row also enters edit mode, while if the cell is not editable, then only the previous row exits edit mode.
- If row is in edit mode and Grid is scrolled so that row goes outside the visible area, the latter will be still in edit mode. When Grid is scrolled, so that the row is visible again, the row will be still in edit mode. When clicked outside the Grid, the cell will also stay in edit mode.
- When perform _sorting_, _filtering_, _searching_ and _hiding_ operations, will revert all current changes in the row and row will exit edit mode.
- When perform _paging_, _resizing_, _pinning_ and _moving_ operations, will exit edit mode and will submit latest value.
- Each modified cell gets edited style until row edit is finished. This is the behavior, when Grid is not provided with transactions. When transactions are available - then cell edit style is applied until all the changes are committed.
## Keyboard Navigation
- `Enter` and `F2` enters row edit mode
- `Esc` exits row edit mode and doesn't submit any of the cell changes, made while the row was in edit mode.
- `Tab` move focus from one editable cell in the row to the next and from the right-most editable cell to the CANCEL and DONE buttons. Navigation from DONE button goes to the left-most editable cell within the currently edited row.
## Feature Integration
- Any data changing operation will terminate row editing operations and will submit current row changes. This will include operations like sorting, changing grouping and filtering criteria, paging, etc.
- Summaries will be updated after row edit is finished. Same is valid for the other features like sorting, filtering, etc.
- Expanding and collapsing grouped rows will not terminate editing for the current row.
## Customizing Row Editing Overlay
### Customizing Text
Customizing the text of the row editing overlay is possible using the `igxRowEditTextDirective`.
The `rowChangesCount` property is exposed and it holds the count of the changed cells.
```html
<ng-template igxRowEditText let-rowChangesCount>
 Changes: {{rowChangesCount}}
</ng-template>
 ```
### Customizing Buttons
Customizing the buttons of the row editing overlay is possible using the `igxRowEditActionsDirective`.
If you want the buttons to be part of the keyboard navigation, then each on of them should have the `igxRowEditTabStopDirective`.

 ```html
 <ng-template igxRowEditActions let-endRowEdit>
 <button igxButton igxRowEditTabStop (click)="endRowEdit(false)">Cancel</button>
 <button igxButton igxRowEditTabStop (click)="endRowEdit(true)">Apply</button>
</ng-template>
 ```
## Styling
Using the [Ignite UI for Angular Theme Library](../themes/index.md), we can greatly alter the Row Editing overlay.
The Row Editing overlay is a composite element - its UI is comprised of a couple of other components:
    - [`igx-banner`](../banner.md) in order to render its contents
    - [`igx-button`](../button.md)s are rendered in the default template (for the `Done` and `Cancel` buttons).
In the below example, we will make use of those two components' styling options, [`button styling`](../button.md#styling) & [`banner-styling`](../banner.md#styling), to customize the experience of our IgxGrid's Row Editing.
We will also style the current cell's editor and background to make it more distinct. You can learn more about cell styling in the [Cell Styling section](cell-editing.md#styling).
### Import theme
The easiest way to style the Row Editing banner is to define styles in our `app`'s global style file (typically `styles.scss`).
The first thing we need to do is import the `themes/index` file - this gives us access to all the powerful tools of the Ignite UI for Angular Sass framework:
```scss
@use "igniteui-angular/theming" as *;
// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```
Once we've imported the themes file, we can create custom themes.
#### Define the theme
We can now define a custom [`banner theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-banner-theme) that will affect our Row Editing background and make use of one of the predefined palettes namely `$purple-palette` :
```scss
$banner-theme: banner-theme(
  $banner-background: #e3e3e3,
  $banner-message-color: color($purple-palette, "secondary", 600)
);
```
Here we are using `my-banner-palette` in conjunction with [`igx-color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) (exposed by the theme library) for generating our colors.
### Include the theme
All we have to do now is apply the theme with a Sass `@include` statement. We pass our newly defined `$banner-theme` through the [`tokens mixin`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#mixin-tokens):
```scss
:host {
  @include tokens($banner-theme);
}
```
### Component styles
Since the Row Editing overlay makes use of a lot of other components' themes, styling it via the global styles can affect other parts of our application (e.g. banners, buttons, etc.). The best way to prevent that is to scope the banner theme to the style file of the specific component it's applied to.
>[!NOTE]
>If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to penetrate this encapsulation using `::ng-deep` in order to style the grid Row Editing Overlay.
```scss
// custom.component.scss
:host {
  ::ng-deep {
    @include tokens($banner-theme);
  }
}
```
With the above syntax, our custom banner theme properly applies to the grid's Row Editing overlay.
### Custom Templates
To further customize our Row Editing overlay, we can pass a custom template so we can style the `Done` and `Cancel` buttons separately:
```html
<!-- in component.html -->
<igx-grid>
    <ng-template igxRowEditActions let-endRowEdit>
        <div class="custom-buttons">
            <button igxIconButton="flat" class="custom-button" igxRowEditTabStop (click)="endRowEdit(false)">
                <igx-icon>clear</igx-icon>
            </button>
            <button igxIconButton="flat" class="custom-button" igxRowEditTabStop (click)="endRowEdit(true)">
                <igx-icon>check</igx-icon>
            </button>
        </div>
    </ng-template>
</igx-grid>
```
After we've defined our custom buttons, we can make use of the [`flat-icon-button-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-flat-icon-button-theme) to style them. You can learn more about `igx-icon-button` styling in the [Icon Button Styling documentation](../icon-button.md#icon-button-styling). We can create a custom theme for our `Done` and `Cancel`:
```scss
// custom.component.scss
...
$button-theme: flat-icon-button-theme(
  $palette: $purple-palette
);
...
.custom-buttons {
  @include tokens($button-theme);
}
```
We scope our `@include` statement in `.custom-buttons` so that it is only applied to the `Done`and `Cancel` buttons.
### Demo
After styling the banner and buttons, we also define a custom style for [the cell in edit mode](cell-editing.md#styling). The result of all the combined styles can be seen below:
```typescript
import { Component } from '@angular/core';
import { DATA } from '../../data/nwindData';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellEditorTemplateDirective, IgxColumnComponent, IgxRowEditActionsDirective, IgxRowEditTabStopDirective, IgxRowEditTextDirective } from 'igniteui-angular/grids/core';
import { IgxInputDirective, IgxInputGroupComponent } from 'igniteui-angular/input-group';
import { IgxFocusDirective, IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-grid-row-edit-style',
    styleUrls: [`grid-row-editing-style.component.scss`],
    templateUrl: 'grid-row-editing-style.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellEditorTemplateDirective, IgxInputGroupComponent, FormsModule, IgxInputDirective, IgxFocusDirective, IgxRowEditTextDirective, IgxRowEditActionsDirective, IgxIconButtonDirective, IgxRowEditTabStopDirective, IgxIconComponent]
})
export class GridRowEditStyleComponent {
    public data: any[];

    constructor() {
        this.data = DATA;
    }
}
```
```html
<div class="sample-wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" #gridRowEdit [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px" [rowEditable]="true">
        <igx-column field="ProductID" header="Product ID"></igx-column>
        <igx-column field="ReorderLevel" header="ReorderLever" [dataType]="'number'"></igx-column>
        <igx-column field="ProductName" header="ProductName" [dataType]="'string'"></igx-column>
        <igx-column field="UnitsInStock" header="UnitsInStock" [dataType]="'number'">
            <!--The following template can be omitted (grid handles this internally) but it is here as an example of custom cell editor.-->
            <ng-template igxCellEditor let-cell="cell">
                <igx-input-group>
                    <input igxInput type="number" [igxFocus]='true' name="units" [(ngModel)]="cell.editValue" style="color: black" />
                </igx-input-group>
            </ng-template>
        </igx-column>
        <igx-column field="OrderDate" [dataType]="'date'"></igx-column>
        <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'"></igx-column>
        <ng-template igxRowEditText let-rowChangesCount>
            <span class="changes"> Changes: {{rowChangesCount}}</span>

        </ng-template>
        <ng-template igxRowEditActions let-endRowEdit>
            <div class="custom-buttons">
                <button igxIconButton="flat" class="custom-button" igxRowEditTabStop (click)="endRowEdit(false)">
                    <igx-icon>clear</igx-icon>
                </button>
                <button igxIconButton="flat" class="custom-button" igxRowEditTabStop (click)="endRowEdit(true)">
                    <igx-icon>check</igx-icon>
                </button>
            </div>
        </ng-template>
    </igx-grid>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$banner-theme: banner-theme(
    $banner-background: #e3e3e3,
    $banner-message-color: color($purple-palette, "secondary", 600),
);
$banner-theme: banner-theme(
    $banner-background: #494949,
    $banner-message-color: #ffcd0f,
);

$icon-button-theme: flat-icon-button-theme(
    $foreground: #ffcd0f,
    $hover-foreground: #ffffff
);

:host {
    @include tokens($banner-theme);
    @include tokens($icon-button-theme);
}

igx-grid {
    @include palette($purple-palette);
}
```
<div class="divider--half"></div>
>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.
## Known Issues and Limitations
- When the grid has no `primaryKey` set and remote data scenarios are enabled (when paging, sorting, filtering, scrolling trigger requests to a remote server to retrieve the data to be displayed in the grid), a row will lose the following state after a data request completes:
  - Row Selection
  - Row Expand/collapse
  - Row Editing
  - Row Pinning
## API References
- [rowEditable](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowEditable)
- [onRowEditEnter](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#onRowEditEnter)
- [onRowEdit](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#onRowEdit)
- [rowEditDone](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rowEditDone)
- [onRowEditCancel](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#onRowEditCancel)
- [endEdit](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#endEdit)
- [field](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#field)
- [editable](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#editable)
- [primaryKey](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#primaryKey)
- [IgxGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)
## Additional Resources
<div class="divider--half"></div>
- [Build CRUD operations with igxGrid](../general/how-to/how-to-perform-crud.md)
- [Grid Overview](grid.md)
- [Grid Editing](editing.md)
- [Grid Transactions](batch-editing.md)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
