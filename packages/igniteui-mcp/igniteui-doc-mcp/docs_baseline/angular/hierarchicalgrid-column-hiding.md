---
title: Column Hiding in Angular Hierarchical Grid - Ignite UI for Angular
description: Learn how to use the Column Hiding feature that allows users to change the visible state of the columns directly through the UI of the Ignite Material UI table.
keywords: column hiding, ignite ui for angular, infragistics
license: commercial
_canonicalLink: grid/column-hiding
llms:
  description: "The Ignite UI for Angular Hierarchical Grid provides a ColumnActions component with a ColumnHidingDirective which allows users to perform column hiding directly through the user interface or by using the Angular component."
_tocName: Column Hiding
_premium: true
---
# Angular Hierarchical Grid Column Hiding

The Ignite UI for Angular Hierarchical Grid provides an [`IgxColumnActions`](mcp:get_api_reference?platform=angular&component=IgxColumnActionsComponent) with an [`IgxColumnHidingDirective`](mcp:get_api_reference?platform=angular&component=IgxColumnHidingDirective) which allows users to perform column hiding directly through the user interface or by using the Angular component. The Material UI Grid has a built-in column hiding UI, which can be used through the Hierarchical Grid's toolbar to change the visible state of the columns. In addition, developers can always define the column hiding UI as a separate component and place it anywhere they want on the page.

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

The built-in Column Hiding UI is placed inside an [`IgxDropDown`](mcp:get_api_reference?platform=angular&component=IgxDropDownComponent) in the Hierarchical Grid's toolbar. We can show/hide the Column Hiding UI by using this exact dropdown.
For this purpose all we have to do is set both the [`IgxGridToolbarActions`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarActionsComponent) and the [`IgxGridToolbarHiding`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarHidingComponent) inside of the Hierarchical Grid. We will also add a title to our toolbar by using the [`IgxGridToolbarTitle`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarTitleComponent) and a custom style for our Hierarchical Grid's wrapper.

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

The Hierarchical Grid provides us with some useful properties when it comes to using the toolbar's column hiding UI.
By using the `igx-grid-toolbar-hiding` [`title`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarHidingComponent&member=title) property, we will set the title that is displayed inside the dropdown button in the toolbar.

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

By using the [`columnsAreaMaxHeight`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarHidingComponent&member=columnsAreaMaxHeight) property of the IgxGridToolbarHidingComponent, we can set the maximum height of the area that contains the column actions. This way if we have a lot of actions and not all of them can fit in the container, a scrollbar will appear, which will allow us to scroll to any action we want.

```typescript
// columnHiding.component.ts

public ngAfterViewInit() {        
    this.hidingActionRef.columnsAreaMaxHeight = "200px";
}
```

In order to use the expanded set of functionalities for the column hiding UI, we can use the IgxColumnActionsComponent's [`columnsAreaMaxHeight`](mcp:get_api_reference?platform=angular&component=IgxColumnActionsComponent&member=columnsAreaMaxHeight) property. This way we can use it according to our application's requirements.

You can see the result of the code from above at the beginning of this article in the Angular Column Hiding Example section.

## Styling

To get started with styling the column actions component, we need to import the index file, where all the theme functions and the `tokens()` mixin are exported:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

By using the simplest approach, we create a new theme that extends the `column-actions-theme` and accepts the `$title-color` and the `$background-color` parameters.

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

**Note:** 
Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the `palette` and `color` functions. Please refer to [`Palettes`](/themes/sass/palettes) topic for detailed guidance on how to use them.

In this example we only changed the text-color of the flat buttons and the button disabled color, but the `button-theme` provides way more parameters to control the button style.

The last step is to apply each component theme with `tokens()`:

```scss
:host {
  @include tokens($custom-column-actions-theme);
  
  .igx-column-actions {
    @include tokens($custom-button);
  }
}
```

**Note:** 
We include the created **flat-button-theme** within `.igx-column-actions`, so that only the column hiding buttons would be styled. Otherwise other buttons in the grid would be affected too.

**Note:** 
In some component templates, Emulated View Encapsulation can still prevent the generated token declarations from reaching nested Ignite UI elements. If the theme does not take effect, use `::ng-deep` as shown below or move the theme to a global stylesheet.


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

$background: #292826;
$foreground: #ffcd0f;

$custom-column-actions-theme: column-actions-theme(
    $background: $background,
    $title-color: $foreground,
);

$custom-flat-button: flat-button-theme(
    $foreground: $foreground,
);

$custom-checkbox-theme: checkbox-theme(
    $label-color: $foreground,
    $empty-color: $foreground,
    $fill-color: $foreground,
    $tick-color: $background,
);

$input-group-theme: input-group-theme(
    $box-background: $background,
    $idle-bottom-line-color: $foreground,
);

:host ::ng-deep {
    .igx-column-actions {
        @include tokens($custom-column-actions-theme);

        igx-input-group {
            @include tokens($input-group-theme);
        }

        igx-checkbox {
            @include tokens($custom-checkbox-theme);
        }

        .igx-button--flat {
            @include tokens($custom-flat-button);
        }
    }
}
```

## API References

In this article we learned how to use the built-in column hiding UI in the Hierarchical Grid's toolbar.

The column hiding UI has a few more APIs to explore, which are listed below.
- [`IgxColumnActions`](mcp:get_api_reference?platform=angular&component=IgxColumnActionsComponent)
- `IgxColumnActionsComponent Styles`
Additional components and/or directives with relative APIs that were used:
[`IgxHierarchicalGrid`](mcp:get_api_reference?platform=angular&component=IgxHierarchicalGridComponent) properties:
- [`hiddenColumnsCount`](mcp:get_api_reference?platform=angular&component=IgxHierarchicalGridComponent&member=hiddenColumnsCount)
[`IgxColumn`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent) properties:
- [`disableHiding`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=disablehiding)
[`IgxGridToolbar`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarComponent) properties:
- [`showProgress`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarComponent&member=showProgress)
[`IgxGridToolbar`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarComponent) components:
- [`IgxGridToolbarTitle`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarTitleComponent)
- [`IgxGridToolbarActions`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarActionsComponent)
[`IgxGridToolbar`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarComponent) methods:
[`IgxHierarchicalGrid`](mcp:get_api_reference?platform=angular&component=IgxHierarchicalGridComponent) events:
- [`columnVisibilityChanged`](mcp:get_api_reference?platform=angular&component=IgxHierarchicalGridComponent&member=columnVisibilityChanged)
[`IgxRadio`](mcp:get_api_reference?platform=angular&component=IgxRadioComponent)
Styles:
- `IgxHierarchicalGridComponent Styles`
- `IgxRadioComponent Styles`
## Additional Resources

- [Hierarchical Grid overview](/hierarchicalgrid/hierarchical-grid)
- [Virtualization and Performance](/hierarchicalgrid/virtualization)
- [Filtering](/hierarchicalgrid/filtering)
- [Paging](/hierarchicalgrid/paging)
- [Sorting](/hierarchicalgrid/sorting)
- [Summaries](/hierarchicalgrid/summaries)
- [Column Pinning](/hierarchicalgrid/column-pinning)
- [Column Resizing](/hierarchicalgrid/column-resizing)
- [Selection](/hierarchicalgrid/selection)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
