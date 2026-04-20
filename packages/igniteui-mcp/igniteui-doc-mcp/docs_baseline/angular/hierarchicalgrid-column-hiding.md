---
title: Column Hiding in Angular Hierarchical Grid - Ignite UI for Angular
_description: Learn how to use the Column Hiding feature that allows users to change the visible state of the columns directly through the UI of the Ignite Material UI table.
_keywords: column hiding, ignite ui for angular, infragistics
_license: commercial
_canonicalLink: grid/column-hiding
_tocName: Column Hiding
_premium: true
---
# Angular Hierarchical Grid Column Hiding
The Ignite UI for Angular Hierarchical Grid provides an [`IgxColumnActionsComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumnactionscomponent.html) with an [`IgxColumnHidingDirective`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumnhidingdirective.html) which allows users to perform column hiding directly through the user interface or by using the Angular component. The Material UI Grid has a built-in column hiding UI, which can be used through the Hierarchical Grid's toolbar to change the visible state of the columns. In addition, developers can always define the column hiding UI as a separate component and place it anywhere they want on the page.
## Angular Hierarchical Grid Column Hiding Example
```typescript
import { Component, OnInit } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarDirective, IgxGridToolbarHidingComponent, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-hiding',
    styleUrls: ['./hierarchical-grid-hiding.component.scss'],
    templateUrl: 'hierarchical-grid-hiding.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxGridToolbarDirective]
})

export class HGridColumnHidingSampleComponent implements OnInit {
    public localdata;

    constructor() {}

    public ngOnInit(): void {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;

}
```
```html
<div class="grid__wrapper">
<igx-hierarchical-grid [igxPreventDocumentScroll]="true"  class="hierarchicalGrid" [data]="localdata" hiddenColumnsText="Hidden" [height]="'550px'" [width]="'100%'" [rowHeight]="'65px'" [allowFiltering]="true" #hierarchicalGrid >
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>Singers</igx-grid-toolbar-title>
        <igx-grid-toolbar-actions>
            <igx-grid-toolbar-hiding title="Column Hiding"></igx-grid-toolbar-hiding>
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>

    <igx-column field="Artist" [sortable]="true"></igx-column>
    <igx-column field="Photo">
        <ng-template igxCell let-cell="cell">
            <div class="cell__inner_2">
                <img [src]="cell.value" class="photo" />
            </div>
        </ng-template>
    </igx-column>
    <igx-column field="Debut" [sortable]="true" dataType="number" [formatter]="formatter" [hidden]="true"></igx-column>
    <igx-column field="GrammyNominations" header="Grammy Nominations" [sortable]="true" dataType="number" [hidden]="true"></igx-column>
    <igx-column field="GrammyAwards" header="Grammy Awards" [sortable]="true" dataType="number"></igx-column>

    <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false" hiddenColumnsText="Hidden">
    <igx-grid-toolbar *igxGridToolbar="let childGrid">
        <igx-grid-toolbar-title>Albums</igx-grid-toolbar-title>
        <igx-grid-toolbar-actions>
            <igx-grid-toolbar-hiding title="Column Hiding"></igx-grid-toolbar-hiding>
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>

        <igx-column field="Album" [sortable]="true"></igx-column>
        <igx-column field="LaunchDate" header="Launch Date" [sortable]="true" [dataType]="'date'"></igx-column>
        <igx-column field="BillboardReview" header="Billboard Review" [sortable]="true"></igx-column>
        <igx-column field="USBillboard200" header="US Billboard 200" [sortable]="true"></igx-column>
    <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false" hiddenColumnsText="Hidden">
    <igx-grid-toolbar *igxGridToolbar="let childGrid">
        <igx-grid-toolbar-title>Songs</igx-grid-toolbar-title>
        <igx-grid-toolbar-actions>
            <igx-grid-toolbar-hiding title="Column Hiding"></igx-grid-toolbar-hiding>
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>

            <igx-column field="Number" header="No."></igx-column>
            <igx-column field="Title"></igx-column>
            <igx-column field="Released" dataType="date"></igx-column>
            <igx-column field="Genre"></igx-column>
    </igx-row-island>
    </igx-row-island>

    <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false">
        <igx-column field="Tour"></igx-column>
        <igx-column field="StartedOn" header="Started on"></igx-column>
        <igx-column field="Location"></igx-column>
        <igx-column field="Headliner"></igx-column>
    </igx-row-island>
</igx-hierarchical-grid>
</div>
```
```scss
.photo {
    vertical-align: middle;
    max-height: 62px;
}
.cell__inner_2 {
    margin: 1px
}

.grid__wrapper{
    padding: 10px;
}
```
<div class="divider--half"></div>
## Hierarchical Grid Setup
Let's start by creating our Hierarchical Grid and binding it to our data. We will also enable both filtering and sorting for the columns.
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata"
        [height]="'560px'" [width]="'100%'" columnWidth="200px" [allowFiltering]="true" #hGrid>

    <igx-column field="Artist" [sortable]="true" [disableHiding]="true"></igx-column>
    <igx-column field="Photo">
        <ng-template igxCell let-cell="cell">
            <div class="cell__inner_2">
                <img [src]="cell.value" class="photo" />
            </div>
        </ng-template>
    </igx-column>
    <igx-column field="Debut" [sortable]="true" [hidden]="true"></igx-column>
    <igx-column field="Grammy Nominations" [sortable]="true" [hidden]="true"></igx-column>
    <igx-column field="Grammy Awards" [sortable]="true"></igx-column>

    <igx-row-island [key]="'Albums'" [autoGenerate]="false" #layout1 >
        <igx-column field="Album" [sortable]="true"></igx-column>
        <igx-column field="Launch Date" [sortable]="true"></igx-column>
        <igx-column field="Billboard Review" [sortable]="true"></igx-column>
        <igx-column field="US Billboard 200" [sortable]="true"></igx-column>
        <igx-row-island [key]="'Songs'" [autoGenerate]="false">
            <igx-column field="No."></igx-column>
            <igx-column field="Title"></igx-column>
            <igx-column field="Released"></igx-column>
            <igx-column field="Genre"></igx-column>
        </igx-row-island>
    </igx-row-island>

    <igx-row-island [key]="'Tours'" [autoGenerate]="false">
        <igx-column field="Tour"></igx-column>
        <igx-column field="Started on"></igx-column>
        <igx-column field="Location"></igx-column>
        <igx-column field="Headliner"></igx-column>
    </igx-row-island>
</igx-hierarchical-grid>
```
## Toolbar's Column Hiding UI
The built-in Column Hiding UI is placed inside an [`IgxDropDownComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdowncomponent.html) in the Hierarchical Grid's toolbar. We can show/hide the Column Hiding UI by using this exact dropdown.
For this purpose all we have to do is set both the [`IgxGridToolbarActionsComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbaractionscomponent.html) and the [`IgxGridToolbarHidingComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarhidingcomponent.html) inside of the Hierarchical Grid. We will also add a title to our toolbar by using the [`IgxGridToolbarTitleComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbartitlecomponent.html) and a custom style for our Hierarchical Grid's wrapper.
```html
<!--columnHiding.component.html-->
<div class="hgrid-sample">
    <igx-hierarchical-grid class="hgrid" [data]="localdata">
    <igx-grid-toolbar>
            <igx-grid-toolbar-title>Singers</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
    ...
 </igx-hierarchical-grid>
</div>
```
```css
/* columnHiding.component.css */
.photo {
    vertical-align: middle;
    max-height: 62px;
}
.cell__inner_2 {
    margin: 1px
}
```
@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {
```html
<!--columnHiding.component.html-->
<div class="grid__wrapper">
    <igx-hierarchical-grid ...>
        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Employees</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>
        ...
    </igx-hierarchical-grid>
</div>
```
```css
/* columnHiding.component.css */
.grid__wrapper {
    margin: 10px;
}
```
}
The Hierarchical Grid provides us with some useful properties when it comes to using the toolbar's column hiding UI.
By using the `igx-grid-toolbar-hiding` [`title`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarhidingcomponent.html#title) property, we will set the title that is displayed inside the dropdown button in the toolbar.
@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {
```html
<!--columnHiding.component.html-->
<div class="grid__wrapper">
    <igx-hierarchical-grid>
        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Employees</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding #hidingActionRef title="Column Hiding"></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>
    </igx-hierarchical-grid>
</div>
```
}
```html
<div class="hgrid-sample">
    <igx-hierarchical-grid class="hgrid" [data]="localdata">
    <igx-grid-toolbar>
            <igx-grid-toolbar-title>Singers</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding #hidingActionRef title="Column Hiding"></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
 </igx-hierarchical-grid>
</div>
```
By using the [`columnsAreaMaxHeight`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarhidingcomponent.html#columnsAreaMaxHeight) property of the IgxGridToolbarHidingComponent, we can set the maximum height of the area that contains the column actions. This way if we have a lot of actions and not all of them can fit in the container, a scrollbar will appear, which will allow us to scroll to any action we want.
```typescript
// columnHiding.component.ts
public ngAfterViewInit() {        
    this.hidingActionRef.columnsAreaMaxHeight = "200px";
}
```
In order to use the expanded set of functionalities for the column hiding UI, we can use the IgxColumnActionsComponent's [`columnsAreaMaxHeight`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxColumnActionsComponent.html#columnsAreaMaxHeight) property. This way we can use it according to our application's requirements.
You can see the result of the code from above at the beginning of this article in the Angular Column Hiding Example section.
## Styling
To get started with styling the column actions component, we need to import the index file, where all the theme functions and component mixins live:
```scss
@use "igniteui-angular/theming" as *;
// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```
By using the simplest approach, we create a new theme that extends the [`column-actions-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-column-actions-theme) and accepts the `$title-color` and the `$background-color` parameters.
```scss
$custom-column-actions-theme: column-actions-theme(
  $background-color: #292826,
  $title-color: #ffcd0f
);
```
As seen, the `column-actions-theme` only controls colors for the column actions container, but does not affect the buttons, checkboxes and the input-group inside of it. Let's say we want to style the buttons as well, so we will create a new button theme:
```scss
$custom-button: flat-button-theme(
  $foreground: #292826, 
  $disabled-foreground: rgba(255, 255, 255, .54)
);
```
>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette) and [`color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.
In this example we only changed the text-color of the flat buttons and the button disabled color, but the [`button-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-button-theme) provides way more parameters to control the button style.
The last step is to **include** the component mixins, each with its respective theme:
```scss
:host {
  @include tokens($custom-column-actions-theme);
  
  .igx-column-actions {
    @include tokens($custom-button);
  }
}
```
>[!NOTE]
>We include the created **flat-button-theme** within `.igx-column-actions`, so that only the column hiding buttons would be styled. Otherwise other buttons in the grid would be affected too.
>[!NOTE]
>If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep` for the components inside the column action component (buttons, checkboxes ...etc):
```scss
:host {
  @include tokens($custom-column-actions-theme);

  ::ng-deep {
    .igx-column-actions {
      @include tokens($custom-button);
    }
  }
}
```
### Demo
```typescript
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarDirective, IgxGridToolbarHidingComponent, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-column-hiding-toolbar-style',
    styleUrls: ['./hierarchical-grid-column-hiding-toolbar-style.component.scss'],
    templateUrl: './hierarchical-grid-column-hiding-toolbar-style.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxGridToolbarDirective]
})
export class HierarchicalGridColumnHidingToolbarStyleComponent implements OnInit {
    public localdata;

    constructor() {}

    public ngOnInit(): void {
        this.localdata = SINGERS;
    }
}
```
```html
<div class="hgrid_wrapper">
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true"  class="hierarchicalGrid" [data]="localdata" hiddenColumnsText="Hidden" [height]="'540px'" [width]="'100%'" [rowHeight]="'65px'" [allowFiltering]="true" #hierarchicalGrid >
        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Singers</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding title="Column Hiding"></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>

        <igx-column field="Artist" [sortable]="true"></igx-column>
        <igx-column field="Photo">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut" [sortable]="true" dataType="number"></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations" [sortable]="true" dataType="number"></igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards" [sortable]="true" dataType="number"></igx-column>

        <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false" hiddenColumnsText="Hidden">
        <igx-grid-toolbar *igxGridToolbar="let childGrid">
            <igx-grid-toolbar-title>Albums</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding title="Column Hiding"></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>

            <igx-column field="Album" [sortable]="true"></igx-column>
            <igx-column field="LaunchDate" header="Launch Date" [sortable]="true" [dataType]="'date'"></igx-column>
            <igx-column field="BillboardReview" header="Billboard Review" [sortable]="true"></igx-column>
            <igx-column field="USBillboard200" header="US Billboard 200" [sortable]="true"></igx-column>
        <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false" hiddenColumnsText="Hidden">
        <igx-grid-toolbar *igxGridToolbar="let childGrid">
            <igx-grid-toolbar-title>Songs</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding title="Column Hiding"></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>

                <igx-column field="Number" header="No."></igx-column>
                <igx-column field="Title"></igx-column>
                <igx-column field="Released" dataType="date"></igx-column>
                <igx-column field="Genre"></igx-column>
        </igx-row-island>
        </igx-row-island>

        <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false">
            <igx-column field="Tour"></igx-column>
            <igx-column field="StartedOn" header="Started on"></igx-column>
            <igx-column field="Location"></igx-column>
            <igx-column field="Headliner"></igx-column>
        </igx-row-island>
    </igx-hierarchical-grid>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$custom-column-actions-theme: column-actions-theme(
  $background-color: #292826,
  $title-color: #ffcd0f
);

$custom-button: flat-button-theme(
  $foreground: #ffcd0f,
  $disabled-foreground: #292826
);

$dark-checkbox-theme: checkbox-theme(
  $label-color: #ffcd0f,
  $empty-color: #ffcd0f,
  $fill-color: #ffcd0f,
  $tick-color: #292826
);

:host ::ng-deep {
  @include tokens($custom-column-actions-theme);

  .igx-column-actions {
    @include tokens($custom-button);
    @include tokens($dark-checkbox-theme);
  }
}
```
<div class="divider--half"></div>
## API References
In this article we learned how to use the built-in column hiding UI in the Hierarchical Grid's toolbar.
The column hiding UI has a few more APIs to explore, which are listed below.
- [IgxColumnActionsComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumnactionscomponent.html)
- [IgxColumnActionsComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-column-actions-theme)
Additional components and/or directives with relative APIs that were used:
[`IgxHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html) properties:
- [hiddenColumnsCount](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#hiddenColumnsCount)
[`IgxColumnComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html) properties:
- [disableHiding](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#disablehiding)
[`IgxGridToolbarComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarcomponent.html) properties:
- [showProgress](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridToolbarComponent.html#showProgress)
[`IgxGridToolbarComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarcomponent.html) components:
- [IgxGridToolbarTitleComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbartitlecomponent.html)
- [IgxGridToolbarActionsComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbaractionscomponent.html)
[`IgxGridToolbarComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarcomponent.html) methods:
[`IgxHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html) events:
- [columnVisibilityChanged](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#columnVisibilityChanged)
[IgxRadioComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxradiocomponent.html)
Styles:
- [IgxHierarchicalGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
- [IgxRadioComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-radio-theme)
## Additional Resources
<div class="divider--half"></div>
- [Hierarchical Grid overview](hierarchical-grid.md)
- [Virtualization and Performance](virtualization.md)
- [Filtering](filtering.md)
- [Paging](paging.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
