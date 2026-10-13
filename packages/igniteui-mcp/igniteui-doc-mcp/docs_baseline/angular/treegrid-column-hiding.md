---
title: Column Hiding in Angular Tree Grid - Ignite UI for Angular
description: Learn how to use the Column Hiding feature that allows users to change the visible state of the columns directly through the UI of the Ignite Material UI table.
keywords: column hiding, ignite ui for angular, infragistics
license: commercial
_canonicalLink: grid/column-hiding
llms:
  description: "The Ignite UI for Angular Tree Grid provides a ColumnActions component with a ColumnHidingDirective which allows users to perform column hiding directly through the user interface or by using the Angular component."
_tocName: Column Hiding
_premium: true
---
# Angular Tree Grid Column Hiding

The Ignite UI for Angular Tree Grid provides an [`IgxColumnActions`](mcp:get_api_reference?platform=angular&component=IgxColumnActionsComponent) with an [`IgxColumnHidingDirective`](mcp:get_api_reference?platform=angular&component=IgxColumnHidingDirective) which allows users to perform column hiding directly through the user interface or by using the Angular component. The Material UI Grid has a built-in column hiding UI, which can be used through the Tree Grid's toolbar to change the visible state of the columns. In addition, developers can always define the column hiding UI as a separate component and place it anywhere they want on the page.

## Angular Tree Grid Column Hiding Example

```typescript
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarHidingComponent, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-column-hiding-toolbar-sample',
    styleUrls: ['./tree-grid-column-hiding-toolbar-sample.component.scss'],
    templateUrl: './tree-grid-column-hiding-toolbar-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxColumnComponent]
})
export class TreeGridColumnHidingToolbarSampleComponent implements OnInit {

    public data: any[];

    constructor() { }

    public ngOnInit() {
        this.data = generateEmployeeDetailedFlatData();
    }
}
```
```html
<div class="grid__wrapper">
    <igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" width="100%"
        height="560px" columnWidth="200px" hiddenColumnsText="Hidden" [allowFiltering]="true">
        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Employees</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding title="Column Hiding"></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>

        </igx-grid-toolbar>

        <igx-column [field]="'Name'" dataType="string" [sortable]="true"></igx-column>
        <igx-column [field]="'ID'" dataType="number" [sortable]="true"></igx-column>
        <igx-column [field]="'Title'" dataType="string" [sortable]="true"></igx-column>
        <igx-column [field]="'HireDate'" dataType="date" [sortable]="true"></igx-column>
        <igx-column [field]="'Age'" dataType="number" [sortable]="true"></igx-column>
        <igx-column [field]="'Address'" dataType="string" [sortable]="true"></igx-column>
        <igx-column [field]="'City'" dataType="string" [sortable]="true"></igx-column>
        <igx-column [field]="'Country'" dataType="string" [sortable]="true"></igx-column>
        <igx-column [field]="'Fax'" dataType="string" [sortable]="true"></igx-column>
        <igx-column [field]="'PostalCode'" dataType="string" [sortable]="true"></igx-column>
        <igx-column [field]="'Phone'" dataType="string" [sortable]="true"></igx-column>
    </igx-tree-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 10px;
}
```

## Tree Grid Setup

Let's start by creating our Tree Grid and binding it to our data. We will also enable both filtering and sorting for the columns.

```html
<!--columnHiding.component.html-->

<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" width="100%"
    height="560px" columnWidth="200px" [allowFiltering]="true">
    <igx-column [field]="'Name'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
    <igx-column [field]="'ID'" dataType="number" [sortable]="true"></igx-column>
    <igx-column [field]="'Title'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
    <igx-column [field]="'HireDate'" dataType="date" [sortable]="true" [hidden]="true"></igx-column>
    <igx-column [field]="'Age'" dataType="number" [sortable]="true" [hidden]="true"></igx-column>
    <igx-column [field]="'Address'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'City'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Country'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Fax'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'PostalCode'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Phone'" dataType="string" [sortable]="true"></igx-column>
</igx-tree-grid>
```

## Toolbar's Column Hiding UI

The built-in Column Hiding UI is placed inside an [`IgxDropDown`](mcp:get_api_reference?platform=angular&component=IgxDropDownComponent) in the Tree Grid's toolbar. We can show/hide the Column Hiding UI by using this exact dropdown.
For this purpose all we have to do is set both the [`IgxGridToolbarActions`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarActionsComponent) and the [`IgxGridToolbarHiding`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarHidingComponent) inside of the Tree Grid. We will also add a title to our toolbar by using the [`IgxGridToolbarTitle`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarTitleComponent) and a custom style for our Tree Grid's wrapper.

```html
<!--columnHiding.component.html-->

<div class="grid__wrapper">
    <igx-tree-grid ...>
        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Employees</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>
        ...
    </igx-tree-grid>
</div>
```

```css
/* columnHiding.component.css */

.grid__wrapper {
    margin: 10px;
}
```

The Tree Grid provides us with some useful properties when it comes to using the toolbar's column hiding UI.
By using the `igx-grid-toolbar-hiding` [`title`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarHidingComponent&member=title) property, we will set the title that is displayed inside the dropdown button in the toolbar.

```html
<!--columnHiding.component.html-->

<div class="grid__wrapper">
    <igx-tree-grid>
        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Employees</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding #hidingActionRef title="Column Hiding"></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>
    </igx-tree-grid>
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

## Custom Column Hiding UI

Let's say we want to manually define our [`IgxColumnActions`](mcp:get_api_reference?platform=angular&component=IgxColumnActionsComponent), add the [`IgxColumnHidingDirective`](mcp:get_api_reference?platform=angular&component=IgxColumnHidingDirective) so that it knows what its purpose would be and put it anywhere on the page. First, however, we need to import the `IgxColumnActionsModule`.

```typescript
// app.module.ts

...

    ...
    IgxColumnActionsModule 
} from 'igniteui-angular/grids/core';
// import { ..., IgxColumnActionsModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxColumnActionsModule],
})
export class AppModule {}
```

Now let's create our [`IgxColumnActions`](mcp:get_api_reference?platform=angular&component=IgxColumnActionsComponent). In our application, we will place it next to the grid (which is not the case with the toolbar's column hiding UI, where the component is inside a dropdown by design). We will also set the [`columns`](mcp:get_api_reference?platform=angular&component=IgxColumnActionsComponent&member=columns) property of the component to the columns of our Tree Grid and include some custom styles to make our application look even better!

```html
<!--columnHiding.component.html-->

<div class="columnHidingContainer">
    <igx-column-actions igxColumnHiding #columnHidingUI [columns]="treeGrid.columns">
    </igx-column-actions>
</div>
<div class="gridContainer">
    <igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" width="100%" height="500px" columnWidth="200px">
        ...
    </igx-tree-grid>
</div>
```

```css
/* columnHiding.component.css */

.grid__wrapper {
    margin: 15px;
    display: flex;
    flex-direction: row;
}

.columnHidingContainer {
    min-width: 250px;
    height: 560px;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px gray;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 2px rgba(50, 50, 50, 0.25);
    igx-column-actions {
        height: 460px;
    }
}

.columnsOrderOptionsContainer {
    margin-top: 20px;
    margin-bottom: 20px;
}

.gridContainer {
    width: 100%;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    margin-left: 30px;    
}
```

### Add title and filter prompt

A couple more things we can do in order to enrich the user experience of our column hiding component is to set the [`title`](mcp:get_api_reference?platform=angular&component=IgxColumnActionsComponent&member=title) and the [`filterColumnsPrompt`](mcp:get_api_reference?platform=angular&component=IgxColumnActionsComponent&member=filtercolumnsprompt) properties. The [`title`](mcp:get_api_reference?platform=angular&component=IgxColumnActionsComponent&member=title) is displayed on the top and the [`filterColumnsPrompt`](mcp:get_api_reference?platform=angular&component=IgxColumnActionsComponent&member=filterColumnsPrompt) is the prompt text that is displayed in the filter input of our column hiding UI.

```html
<!--columnHiding.component.html-->

<div class="columnHidingContainer">
    <igx-column-actions igxColumnHiding #columnHidingUI [columns]="treeGrid.columns"
                       title="Column Hiding" filterColumnsPrompt="Type here to search">
    </igx-column-actions>
</div>
```

### Add column display order options

We can also allow the user to choose the display order of the columns in the column hiding UI. For this purpose we will use the [`columnDisplayOrder`](mcp:get_api_reference?platform=angular&component=IgxColumnActionsComponent&member=columnDisplayOrder) property, which is an enumeration type property and has the following options:

- **Alphabetical** (order the columns alphabetically)
- **DisplayOrder** (order the columns according to the way they are displayed in the Tree Grid)

Let's create a couple of nicely designed radio buttons for our options! We just have to go ahead and get the [**IgxRadio**](/radio-button) module.

```typescript
// app.module.ts

...

    ...
    IgxRadioModule    
} from 'igniteui-angular/radio';
// import { ..., IgxRadioModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxRadioModule],    
})
export class AppModule {}
```

Now all we have to do is bind the [`checked`](mcp:get_api_reference?platform=angular&component=IgxRadioComponent&member=checked) property of both radio buttons respectively with different conditions and handle their click events.

```html
<!--columnHiding.component.html-->

<div class="columnHidingContainer">
    ...
    <div class="columnsOrderOptionsContainer">
        <igx-radio [checked]="columnHidingUI.columnDisplayOrder === 'Alphabetical'"
                   (click)="columnHidingUI.columnDisplayOrder = 'Alphabetical'">
            Alphabetical order
        </igx-radio>
        <igx-radio [checked]="columnHidingUI.columnDisplayOrder === 'DisplayOrder'"
                   (click)="columnHidingUI.columnDisplayOrder = 'DisplayOrder'">
            Display order
        </igx-radio>
    </div>
</div>
```

### Disable hiding of a column

We can easily prevent the user from being able to hide columns through the column hiding UI by simply setting their [`disableHiding`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=disableHiding) property to true.

```html
<!--columnHiding.component.html-->

<div class="gridContainer">
    <igx-tree-grid ... >
        ...
        <igx-column [field]="'Name'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
        <igx-column [field]="'Title'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
        ...
    </igx-tree-grid>
</div>
```

If all went well, this is how our column hiding UI component should look like:

```typescript
import { Component, OnInit } from '@angular/core';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { IgxColumnActionsComponent, IgxColumnComponent, IgxColumnHidingDirective } from 'igniteui-angular/grids/core';
import { IgxRadioComponent } from 'igniteui-angular/radio';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-column-hiding-sample',
    styleUrls: ['./tree-grid-column-hiding-sample.component.scss'],
    templateUrl: './tree-grid-column-hiding-sample.component.html',
    imports: [IgxColumnActionsComponent, IgxColumnHidingDirective, IgxRadioComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class TreeGridColumnHidingSampleComponent implements OnInit {

    public data: any[];

    constructor() { }

    public ngOnInit() {
        this.data = generateEmployeeDetailedFlatData();
    }
}
```
```html
<div class="grid__wrapper">
    <div class="columnHidingContainer">
        <igx-column-actions igxColumnHiding #columnHidingUI [grid]="treeGrid" title="Column Hiding" filterColumnsPrompt="Type here to search">
        </igx-column-actions>
        <div class="columnsOrderOptionsContainer">
            <igx-radio [checked]="columnHidingUI.columnDisplayOrder === 'Alphabetical'" (click)="columnHidingUI.columnDisplayOrder = 'Alphabetical'">
                Alphabetical order
            </igx-radio>
            <igx-radio [checked]="columnHidingUI.columnDisplayOrder === 'DisplayOrder'" (click)="columnHidingUI.columnDisplayOrder = 'DisplayOrder'">
                Display order
            </igx-radio>
        </div>
    </div>
    <div class="gridContainer">
        <igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" width="100%"
            height="560px" columnWidth="200px" [allowFiltering]="true">
            <igx-column [field]="'Name'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
            <igx-column [field]="'ID'" dataType="number" [sortable]="true"></igx-column>
            <igx-column [field]="'Title'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
            <igx-column [field]="'HireDate'" dataType="date" [sortable]="true" [hidden]="true"></igx-column>
            <igx-column [field]="'Age'" dataType="number" [sortable]="true" [hidden]="true"></igx-column>
            <igx-column [field]="'Address'" dataType="string" [sortable]="true"></igx-column>
            <igx-column [field]="'City'" dataType="string" [sortable]="true"></igx-column>
            <igx-column [field]="'Country'" dataType="string" [sortable]="true"></igx-column>
            <igx-column [field]="'Fax'" dataType="string" [sortable]="true"></igx-column>
            <igx-column [field]="'PostalCode'" dataType="string" [sortable]="true"></igx-column>
            <igx-column [field]="'Phone'" dataType="string" [sortable]="true"></igx-column>
        </igx-tree-grid>
    </div>
</div>
```
```scss
.grid__wrapper {
    margin: 15px;
    display: flex;
    flex-direction: row;    
}

.columnHidingContainer {
    min-width: 250px;
    height: 560px;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px gray;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 2px rgba(50, 50, 50, 0.25);
    igx-column-actions {
        height: 460px;
    }
}

.columnsOrderOptionsContainer {
    margin-top: 20px;
    margin-bottom: 20px;
}

.gridContainer {
    width: 100%;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    margin-left: 30px;    
}
```

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
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarHidingComponent, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-column-hiding-toolbar-style',
    styleUrls: ['./tree-grid-column-hiding-toolbar-style.component.scss'],
    templateUrl: './tree-grid-column-hiding-toolbar-style.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxColumnComponent]
})
export class TreeGridColumnHidingToolbarStyleComponent implements OnInit {

    public data: any[];

    constructor() { }

    public ngOnInit() {
        this.data = generateEmployeeDetailedFlatData();
    }
}
```
```html
<div class="grid__wrapper">
    <igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" width="100%"
        height="560px" columnWidth="200px" hiddenColumnsText="Hidden" [allowFiltering]="true">
        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Employees</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding title="Column Hiding"></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>

        <igx-column [field]="'Name'" dataType="string" [sortable]="true"></igx-column>
        <igx-column [field]="'ID'" dataType="number" [sortable]="true"></igx-column>
        <igx-column [field]="'Title'" dataType="string" [sortable]="true"></igx-column>
        <igx-column [field]="'HireDate'" dataType="date" [sortable]="true"></igx-column>
        <igx-column [field]="'Age'" dataType="number" [sortable]="true"></igx-column>
        <igx-column [field]="'Address'" dataType="string" [sortable]="true"></igx-column>
        <igx-column [field]="'City'" dataType="string" [sortable]="true"></igx-column>
        <igx-column [field]="'Country'" dataType="string" [sortable]="true"></igx-column>
        <igx-column [field]="'Fax'" dataType="string" [sortable]="true"></igx-column>
        <igx-column [field]="'PostalCode'" dataType="string" [sortable]="true"></igx-column>
        <igx-column [field]="'Phone'" dataType="string" [sortable]="true"></igx-column>
    </igx-tree-grid>
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

In this article we learned how to use the built-in column hiding UI in the Tree Grid's toolbar and we defined it as a separate component as well. We introduced a UI that allows the user to choose between different column orders and we set our own custom title and filter prompt texts. We also used an additional Ignite UI for Angular component - the [**IgxRadio**](/radio-button) button.

The column hiding UI has a few more APIs to explore, which are listed below.
- [`IgxColumnActions`](mcp:get_api_reference?platform=angular&component=IgxColumnActionsComponent)
- `IgxColumnActionsComponent Styles`
Additional components and/or directives with relative APIs that were used:
[`IgxTreeGrid`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent) properties:
- [`hiddenColumnsCount`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=hiddenColumnsCount)
[`IgxColumn`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent) properties:
- [`disableHiding`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent&member=disablehiding)
[`IgxGridToolbar`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarComponent) properties:
- [`showProgress`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarComponent&member=showProgress)
[`IgxGridToolbar`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarComponent) components:
- [`IgxGridToolbarTitle`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarTitleComponent)
- [`IgxGridToolbarActions`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarActionsComponent)
[`IgxGridToolbar`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarComponent) methods:
[`IgxTreeGrid`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent) events:
- [`columnVisibilityChanged`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=columnVisibilityChanged)
[`IgxRadio`](mcp:get_api_reference?platform=angular&component=IgxRadioComponent)
Styles:
- `IgxTreeGridComponent Styles`
- `IgxRadioComponent Styles`
## Additional Resources

- [Tree Grid overview](/treegrid/tree-grid)
- [Virtualization and Performance](/treegrid/virtualization)
- [Filtering](/treegrid/filtering)
- [Paging](/treegrid/paging)
- [Sorting](/treegrid/sorting)
- [Summaries](/treegrid/summaries)
- [Column Pinning](/treegrid/column-pinning)
- [Column Resizing](/treegrid/column-resizing)
- [Selection](/treegrid/selection)

- [Searching](/treegrid/search)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
