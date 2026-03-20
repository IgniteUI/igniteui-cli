---
_tocName: Column Hiding
_premium: true
---
---title: Column Hiding in Angular Tree Grid - Ignite UI for Angular_description: Learn how to use the Column Hiding feature that allows users to change the visible state of the columns directly through the UI of the Ignite Material UI table._keywords: column hiding, ignite ui for angular, infragistics_license: commercial_canonicalLink: grid/column-hiding---# Angular Tree Grid Column HidingThe Ignite UI for Angular Tree Grid provides an [`IgxColumnActionsComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumnactionscomponent.html) with an [`IgxColumnHidingDirective`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumnhidingdirective.html) which allows users to perform column hiding directly through the user interface or by using the Angular component. The Material UI Grid has a built-in column hiding UI, which can be used through the Tree Grid's toolbar to change the visible state of the columns. In addition, developers can always define the column hiding UI as a separate component and place it anywhere they want on the page.## Angular Tree Grid Column Hiding Example```typescript
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
```<div class="divider--half"></div>## Tree Grid SetupLet's start by creating our Tree Grid and binding it to our data. We will also enable both filtering and sorting for the columns.```html<!--columnHiding.component.html--><igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" width="100%"
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
    <igx-column [field]="'Phone'" dataType="string" [sortable]="true"></igx-column></igx-tree-grid>```## Toolbar's Column Hiding UIThe built-in Column Hiding UI is placed inside an [`IgxDropDownComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdowncomponent.html) in the Tree Grid's toolbar. We can show/hide the Column Hiding UI by using this exact dropdown.For this purpose all we have to do is set both the [`IgxGridToolbarActionsComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbaractionscomponent.html) and the [`IgxGridToolbarHidingComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarhidingcomponent.html) inside of the Tree Grid. We will also add a title to our toolbar by using the [`IgxGridToolbarTitleComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbartitlecomponent.html) and a custom style for our Tree Grid's wrapper.@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {```html<!--columnHiding.component.html--><div class="grid__wrapper">
    <igx-tree-grid ...>
        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Employees</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>
        ...
    </igx-tree-grid></div>``````css/* columnHiding.component.css */.grid__wrapper {
    margin: 10px;}```}The Tree Grid provides us with some useful properties when it comes to using the toolbar's column hiding UI.By using the `igx-grid-toolbar-hiding` [`title`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarhidingcomponent.html#title) property, we will set the title that is displayed inside the dropdown button in the toolbar.@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {```html<!--columnHiding.component.html--><div class="grid__wrapper">
    <igx-tree-grid>
        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Employees</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding #hidingActionRef title="Column Hiding"></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>
    </igx-tree-grid></div>```}By using the [`columnsAreaMaxHeight`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarhidingcomponent.html#columnsAreaMaxHeight) property of the IgxGridToolbarHidingComponent, we can set the maximum height of the area that contains the column actions. This way if we have a lot of actions and not all of them can fit in the container, a scrollbar will appear, which will allow us to scroll to any action we want.```typescript// columnHiding.component.tspublic ngAfterViewInit() {        
    this.hidingActionRef.columnsAreaMaxHeight = "200px";}```In order to use the expanded set of functionalities for the column hiding UI, we can use the IgxColumnActionsComponent's [`columnsAreaMaxHeight`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxColumnActionsComponent.html#columnsAreaMaxHeight) property. This way we can use it according to our application's requirements.You can see the result of the code from above at the beginning of this article in the Angular Column Hiding Example section.## Custom Column Hiding UILet's say we want to manually define our [`IgxColumnActionsComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumnactionscomponent.html), add the [`IgxColumnHidingDirective`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumnhidingdirective.html) so that it knows what its purpose would be and put it anywhere on the page. First, however, we need to import the `IgxColumnActionsModule`.```typescript// app.module.ts...import {
    ...
    IgxColumnActionsModule } from 'igniteui-angular/grids/core';// import { ..., IgxColumnActionsModule } from '@infragistics/igniteui-angular'; for licensed package@NgModule({
    ...
    imports: [..., IgxColumnActionsModule],})export class AppModule {}```Now let's create our [`IgxColumnActionsComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumnactionscomponent.html). In our application, we will place it next to the grid (which is not the case with the toolbar's column hiding UI, where the component is inside a dropdown by design). We will also set the [`columns`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumnactionscomponent.html#columns) property of the component to the columns of our Tree Grid and include some custom styles to make our application look even better!@@if (igxName === 'IgxGrid') {```html<!--columnHiding.component.html--><div class="columnHidingContainer">
    <igx-column-actions igxColumnHiding #columnHidingUI [columns]="treeGrid.columns">
    </igx-column-actions></div><div class="gridContainer">
    <igx-tree-grid #treeGrid [data]="data" [autoGenerate]="false" width="100%" height="500px" columnWidth="200px">
        ...
    </igx-tree-grid></div>```}@@if (igxName === 'IgxTreeGrid') {```html<!--columnHiding.component.html--><div class="columnHidingContainer">
    <igx-column-actions igxColumnHiding #columnHidingUI [columns]="treeGrid.columns">
    </igx-column-actions></div><div class="gridContainer">
    <igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" width="100%" height="500px" columnWidth="200px">
        ...
    </igx-tree-grid></div>```}@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {```css/* columnHiding.component.css */.grid__wrapper {
    margin: 15px;
    display: flex;
    flex-direction: row;}.columnHidingContainer {
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
    }}.columnsOrderOptionsContainer {
    margin-top: 20px;
    margin-bottom: 20px;}.gridContainer {
    width: 100%;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    margin-left: 30px;    }```}### Add title and filter promptA couple more things we can do in order to enrich the user experience of our column hiding component is to set the [`title`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumnactionscomponent.html#title) and the [`filterColumnsPrompt`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumnactionscomponent.html#filtercolumnsprompt) properties. The [`title`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumnactionscomponent.html#title) is displayed on the top and the [`filterColumnsPrompt`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumnactionscomponent.html#filterColumnsPrompt) is the prompt text that is displayed in the filter input of our column hiding UI.```html<!--columnHiding.component.html--><div class="columnHidingContainer">
    <igx-column-actions igxColumnHiding #columnHidingUI [columns]="treeGrid.columns"
                       title="Column Hiding" filterColumnsPrompt="Type here to search">
    </igx-column-actions></div>```### Add column display order optionsWe can also allow the user to choose the display order of the columns in the column hiding UI. For this purpose we will use the [`columnDisplayOrder`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumnactionscomponent.html#columnDisplayOrder) property, which is an enumeration type property and has the following options:- **Alphabetical** (order the columns alphabetically)- **DisplayOrder** (order the columns according to the way they are displayed in the Tree Grid)Let's create a couple of nicely designed radio buttons for our options! We just have to go ahead and get the [**IgxRadio**](../radio-button.md) module.```typescript// app.module.ts...import {
    ...
    IgxRadioModule    } from 'igniteui-angular/radio';// import { ..., IgxRadioModule } from '@infragistics/igniteui-angular'; for licensed package@NgModule({
    ...
    imports: [..., IgxRadioModule],    })export class AppModule {}```Now all we have to do is bind the [`checked`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxradiocomponent.html#checked) property of both radio buttons respectively with different conditions and handle their click events.```html<!--columnHiding.component.html--><div class="columnHidingContainer">
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
    </div></div>```### Disable hiding of a columnWe can easily prevent the user from being able to hide columns through the column hiding UI by simply setting their [`disableHiding`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#disableHiding) property to true.@@if (igxName === 'IgxGrid') {```html<!--columnHiding.component.html--><div class="gridContainer">
    <igx-grid ... >
        ...
        <igx-column [field]="'ContactName'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
        <igx-column [field]="'ContactTitle'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
        ...
    </igx-grid></div>```}@@if (igxName === 'IgxTreeGrid') {```html<!--columnHiding.component.html--><div class="gridContainer">
    <igx-tree-grid ... >
        ...
        <igx-column [field]="'Name'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
        <igx-column [field]="'Title'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
        ...
    </igx-tree-grid></div>```}If all went well, this is how our column hiding UI component should look like:@@if (igxName === 'IgxGrid') {```typescript
import { Component, OnInit } from '@angular/core';
import { DATA } from '../../data/customers';
import { IgxColumnActionsComponent, IgxColumnComponent, IgxColumnHidingDirective } from 'igniteui-angular/grids/core';
import { IgxRadioComponent } from 'igniteui-angular/radio';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-column-hiding-sample',
    styleUrls: ['./grid-column-hiding-sample.component.scss'],
    templateUrl: './grid-column-hiding-sample.component.html',
    imports: [IgxColumnActionsComponent, IgxColumnHidingDirective, IgxRadioComponent, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class GridColumnHidingSampleComponent implements OnInit {

    public data: any[];

    constructor() { }

    public ngOnInit() {
        this.data = DATA;
    }
}
```
```html
<div class="grid__wrapper">
    <div class="columnHidingContainer">
        <igx-column-actions igxColumnHiding #columnHidingUI [grid]="grid" title="Column Hiding" filterColumnsPrompt="Type here to search">
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
        <igx-grid [igxPreventDocumentScroll]="true" #grid [data]="data" [autoGenerate]="false" width="100%" height="560px" columnWidth="200px"
            [allowFiltering]="true">
            <igx-column [field]="'ID'" dataType="string" [sortable]="true" [hidden]="true"></igx-column>
            <igx-column [field]="'ContactName'" dataType="string" [sortable]="true" [disableHiding]="true" [hidden]="true"></igx-column>
            <igx-column [field]="'ContactTitle'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
            <igx-column [field]="'City'" dataType="string" [sortable]="true"></igx-column>
            <igx-column [field]="'CompanyName'" dataType="string" [sortable]="true"></igx-column>
            <igx-column [field]="'Fax'" dataType="string" [sortable]="true"></igx-column>
            <igx-column [field]="'Address'" dataType="string" [sortable]="true"></igx-column>
            <igx-column [field]="'PostalCode'" dataType="string" [sortable]="true"></igx-column>
            <igx-column [field]="'Country'" dataType="string" [sortable]="true"></igx-column>
            <igx-column [field]="'Phone'" dataType="string" [sortable]="true"></igx-column>
        </igx-grid>
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
```<div class="divider--half"></div>}@@if (igxName === 'IgxTreeGrid') {```typescript
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
```<div class="divider--half"></div>}## StylingTo get started with styling the column actions component, we need to import the index file, where all the theme functions and component mixins live:```scss@use "igniteui-angular/theming" as *;// IMPORTANT: Prior to Ignite UI for Angular version 13 use:// @import '~igniteui-angular/lib/core/styles/themes/index';```By using the simplest approach, we create a new theme that extends the [`column-actions-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-column-actions-theme) and accepts the `$title-color` and the `$background-color` parameters.```scss$custom-column-actions-theme: column-actions-theme(
  $background-color: #292826,
  $title-color: #ffcd0f);```As seen, the `column-actions-theme` only controls colors for the column actions container, but does not affect the buttons, checkboxes and the input-group inside of it. Let's say we want to style the buttons as well, so we will create a new button theme:```scss$custom-button: flat-button-theme(
  $foreground: #292826, 
  $disabled-foreground: rgba(255, 255, 255, .54));```>[!NOTE]>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette) and [`color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.In this example we only changed the text-color of the flat buttons and the button disabled color, but the [`button-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-button-theme) provides way more parameters to control the button style.The last step is to **include** the component mixins, each with its respective theme:```scss:host {
  @include tokens($custom-column-actions-theme);
  
  .igx-column-actions {
    @include tokens($custom-button);
  }}```>[!NOTE]>We include the created **flat-button-theme** within `.igx-column-actions`, so that only the column hiding buttons would be styled. Otherwise other buttons in the grid would be affected too.>[!NOTE]>If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep` for the components inside the column action component (buttons, checkboxes ...etc):```scss:host {
  @include tokens($custom-column-actions-theme);

  ::ng-deep {
    .igx-column-actions {
      @include tokens($custom-button);
    }
  }}```### Demo```typescript
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

$custom-column-actions-theme: column-actions-theme(
  $background-color: steelblue,
  $title-color: gold
);

$custom-button: flat-button-theme(
  $foreground: gold,
  $disabled-foreground: black
);

:host ::ng-deep{
  @include tokens($custom-column-actions-theme);
  @include tokens($custom-button);
}
```<div class="divider--half"></div>## API ReferencesIn this article we learned how to use the built-in column hiding UI in the Tree Grid's toolbar and we defined it as a separate component as well. We introduced a UI that allows the user to choose between different column orders and we set our own custom title and filter prompt texts. We also used an additional Ignite UI for Angular component - the [**IgxRadio**](../radio-button.md) button.The column hiding UI has a few more APIs to explore, which are listed below.- [IgxColumnActionsComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumnactionscomponent.html)- [IgxColumnActionsComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-column-actions-theme)Additional components and/or directives with relative APIs that were used:[`IgxTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html) properties:- [hiddenColumnsCount](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#hiddenColumnsCount)[`IgxColumnComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html) properties:- [disableHiding](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#disablehiding)[`IgxGridToolbarComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarcomponent.html) properties:- [showProgress](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxGridToolbarComponent.html#showProgress)[`IgxGridToolbarComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarcomponent.html) components:- [IgxGridToolbarTitleComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbartitlecomponent.html)- [IgxGridToolbarActionsComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbaractionscomponent.html)[`IgxGridToolbarComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarcomponent.html) methods:[`IgxTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html) events:- [columnVisibilityChanged](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#columnVisibilityChanged)[IgxRadioComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxradiocomponent.html)Styles:- [IgxTreeGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)- [IgxRadioComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-radio-theme)## Additional Resources<div class="divider--half"></div>- [Tree Grid overview](tree-grid.md)- [Virtualization and Performance](virtualization.md)- [Filtering](filtering.md)- [Paging](paging.md)- [Sorting](sorting.md)- [Summaries](summaries.md)- [Column Pinning](column-pinning.md)- [Column Resizing](column-resizing.md)- [Selection](selection.md)* [Searching](search.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
