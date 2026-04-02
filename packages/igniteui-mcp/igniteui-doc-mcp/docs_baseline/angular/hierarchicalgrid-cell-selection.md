---
_tocName: Cell selection
_premium: true
---
---title: Angular Hierarchical Grid Cell Selection - Ignite UI for Angular_description: Check how easy it is to use cell data selection using variety of events, rich API or mouse interactions. The Grid supports 3 modes for cell selection. Try it now!_keywords: data select, igniteui for angular, infragistics_license: commercial_canonicalLink: grid/cell-selection---# Angular Cell SelectionThe selection feature enables rich data select capabilities in the Material UI based Hierarchical Grid. Variety of events and single select actions are available thanks to the powerful API and easy to use methods. The Hierarchical Grid now supports three modes for cell selection, and you can easily switch between them by changing [`cellSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#cellSelection) property. You can disable cell selection, you can _select only one cell within the grid_ or to _select multiple cells in the grid_, which is provided as default option.
 In the Hierarchical Grid you can specify the cell selection mode on grid level. So for example in the parent grid multi-cell selection can be enabled, but in child grids cell selection mode can be single or disabled. But let's dive deeper in each of these options.## Angular Cell Selection ExampleThe sample below demonstrates the three types of Hierarchical Grid's **cell selection** behavior. Use the buttons below to enable each of the available selection modes. A brief description will be provided on each button interaction through a snackbar message box.<div class="divider--half"></div>```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxSnackbarComponent } from 'igniteui-angular/snackbar';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { GridSelectionMode, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-hierarchical-grid-cell-selection',
    styleUrls: ['./hierarchical-grid-cellSelection.component.scss'],
    templateUrl: 'hierarchical-grid-cellSelection.component.html',
    imports: [IgxButtonGroupComponent, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxRowIslandComponent, IgxSnackbarComponent, IgxIconComponent]
})
export class HierarchicalGridCellSelectionComponent implements OnInit {
    @ViewChild('hgrid', { static: true }) public hGrid: IgxHierarchicalGridComponent;
    @ViewChild(IgxSnackbarComponent, { static: true }) public snackbar: IgxSnackbarComponent;
    public data: any[];
    public selectionMode: GridSelectionMode = 'multiple';
    public selectionModeChild: GridSelectionMode = 'single';
    public selectionModes = [];
    public selectionModesChildren = [];

    constructor() { }

    public ngOnInit(): void {
        this.data = SINGERS;
        this.selectionModes = [
            { label: 'none', selected: this.selectionMode === 'none', togglable: true },
            { label: 'single', selected: this.selectionMode === 'single', togglable: true },
            { label: 'multiple', selected: this.selectionMode === 'multiple', togglable: true }
        ];
        this.selectionModesChildren = [
            { label: 'none', selected: this.selectionModeChild === 'none', togglable: true },
            { label: 'single', selected: this.selectionModeChild === 'single', togglable: true },
            { label: 'multiple', selected: this.selectionModeChild === 'multiple', togglable: true }
        ];
        this.snackbar.autoHide = false;
        this.snackbar.open();
    }

    public selectCellSelectionMode(args) {
        this.selectionMode = this.selectionModes[args.index].label;
        this.snackbar.open();
    }

    public selectCellSelectionModeChildGrid(args) {
        this.selectionModeChild = this.selectionModes[args.index].label;
        this.snackbar.open();
    }
}
```
```html
<div class="grid__wrapper">
  <div class="button-group-wrapper">
    <h6>Parent Grid cell selection mode: </h6>
    <igx-buttongroup [values]="selectionModes" (selected)="selectCellSelectionMode($event)"></igx-buttongroup>
  </div>
  <div class="button-group-wrapper">
    <h6>Child Grid cell selection mode: </h6>
    <igx-buttongroup [values]="selectionModesChildren" (selected)="selectCellSelectionModeChildGrid($event)"></igx-buttongroup>
  </div>
  <igx-hierarchical-grid [igxPreventDocumentScroll]="true" #hierarchicalGrid [data]="data" [height]="'560px'" [width]="'100%'" [cellSelection]="selectionMode" #hgrid>
    <igx-column field="Artist" [dataType]="'string'"></igx-column>
    <igx-column field="HasGrammyAward" header="Has Grammy Award?" [dataType]="'boolean'">
    </igx-column>
    <igx-column field="Debut" dataType="number"></igx-column>
    <igx-column field="GrammyNominations" header="Grammy Nominations" dataType="number" [hasSummary]="true"></igx-column>
    <igx-column field="GrammyAwards" header="Grammy Awards" dataType="number" [hasSummary]="true"></igx-column>
    <igx-row-island [height]="null" [key]="'Albums'" [cellSelection]="selectionModeChild">
      <igx-column field="Album" [dataType]="'string'"></igx-column>
      <igx-column field="LaunchDate" header="Launch Date" [dataType]="'date'"></igx-column>
      <igx-column field="BillboardReview" header="Billboard Review" dataType="number"></igx-column>
      <igx-column field="USBillboard200" header="US Billboard 200" dataType="number"></igx-column>
    </igx-row-island>
  </igx-hierarchical-grid>
</div>

<igx-snackbar #snackbar actionText="Got it. Thanks!" (clicked)="snackbar.close()">
  <div class="container">
    <igx-icon>notification_important</igx-icon>
    <div class="message-container">
      <span>Parent grid:</span>
      @if (selectionMode === 'multiple') {
        <ul>
          <li><b>This is the default selection behavior.</b></li>
          <li>Click on a cell and while pressing the mouse key perform drag action.
          </li>
          <li>Select a cell and press Shift + Arrow down key, this will start range selection as well.
          </li>
        </ul>
      }
      @if (selectionMode === 'single') {
        <ul>
          <li><b>Now you can select only one cell within the grid.</b></li>
          <li>On single cell click the previous selection state will be cleared.</li>
          <li>The mouse drag will not work and instead of selecting a cell, this will make default text
          selection.</li>
        </ul>
      }
      @if (selectionMode === 'none') {
        <ul>
          <li><b>Now you are unable to select a cell while interacting with grid UI.</b></li>
          <li>If you need to select a cell, you can use the grid API methods.</li>
        </ul>
      }
    </div>
    <div class="message-container">
      <span>Child grid:</span>
      @if (selectionModeChild === 'multiple') {
        <ul>
          <li><b>This is the default selection behavior.</b></li>
          <li>Click on a cell and while pressing the mouse key perform drag action.
          </li>
          <li>Select a cell and press Shift + Arrow down key, this will start range selection as well.
          </li>
        </ul>
      }
      @if (selectionModeChild === 'single') {
        <ul>
          <li><b>Now you can select only one cell within the grid.</b></li>
          <li>On single cell click the previous selection state will be cleared.</li>
          <li>The mouse drag will not work and instead of selecting a cell, this will make default text
          selection.</li>
        </ul>
      }
      @if (selectionModeChild === 'none') {
        <ul>
          <li><b>Now you are unable to select a cell while interacting with grid UI.</b></li>
          <li>If you need to select a cell, you can use the grid API methods.</li>
        </ul>
      }
    </div>
  </div>
</igx-snackbar>
```
```scss
.grid__wrapper {
    display: flex;
    justify-content: space-between;
    margin: 16px;
    flex-flow: column;
    align-items: flex-start;
    position: relative;
}

.button-group-wrapper {
    margin-bottom: 16px;
    > h6 {
        margin-bottom: 4px;
    }
}

.igx-snackbar {
    background: rgba(0, 0, 0, 0.7);
}

.container {
    display: flex;
    igx-icon {
        margin: 20px;
    }
}

.message-container {
    display: flex;
    flex-flow: column;
    > span {
        margin-top: 8px;
        padding-left: 20px;
    }
}
```<div class="divider--half"></div>## Selection types### Hierarchical Grid Multiple-cell SelectionThis is the default cell selection mode in both parent and child grids. Please keep in mind that you can make cell selection one grid at a time, you can not make cross grid range selection or to have a selected cells in multiple grids. Each key combination related to range selection and mouse drag functionality can be used only in the same grid.How to select cells:- By `Mouse drag` - Rectangular data selection of cells would be performed.- By `Ctrl key` press + `Mouse drag` - Multiple range selections would be performed. Any other existing cell selection will be persisted.- Instant multi-cell selection by using Shift key. Select single cell and select another single cell by holding the Shift key. Cell range between the two cells will be selected. Keep in mind that if another second cell is selected while holding `Shift key` the cell selection range will be updated based on the first selected cell position (starting point).- Keyboard multi-cell selection by using the `Arrow keys` while holding `Shift key`. Multi-cell selection range will be created based on the focused cell.- Keyboard multi-cell selection by using the `Ctrl + Arrow keys` and `Ctrl + Home/End` while holding `Shift key`. Multi-cell selection range will be created based on the focused cell.- Clicking with the `Left Mouse key` while holding `Ctrl key` will add single cell ranges into the selected cells collection.- Continuous multiple cell selection is available, by clicking with the mouse and dragging.### Hierarchical Grid Single SelectionWhen you set the `[cellSelection]="'single'"`, this allows you to have only one selected cell in the grid at a time. Also the mode `mouse drag` will not work and instead of selecting a cell, this will make default text selection.>[!NOTE]> When single cell is selected [`selected`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#selected) event is emitted, no matter if the `selection mode` is `single` or `multiple`. In multi-cell selection mode when you select a range of cells [`rangeSelected`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#rangeSelected) event is emitted.### Hierarchical Grid None selectionIf you want to disable cell selection you can just set `[cellSelection]="'none'"` property. In this mode when you click over the cell or try to navigate with keyboard, the cell is **not selected**, only the `activation style` is applied and it is going to be lost when you scroll or click over other element on the page. The only way for you to define selection is by using the API methods that are described below.## StylingThe theme engine exposes properties that allow us to style the **range of selected cells**.### Import themeTo get started with styling the selection, we need to import the `index` file, where all the theme functions and component mixins live:```scss@use "igniteui-angular/theming" as *;// IMPORTANT: Prior to Ignite UI for Angular version 13 use:// @import '~igniteui-angular/lib/core/styles/themes/index';```### Define colorsOnce done, we can make use of the [`contrast-color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-contrast-color) and [`color`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-color) functions. With them, we define the colors we would like to use for our selection range:```scss$text-color: contrast-color($color: 'primary', $variant: 900);$background-color: color($color: "primary", $variant: 900);$border-yellow: #f2c43c;```>[!NOTE]>If we don't want to use the `contrast-color` and `color` functions, we can always hardcode the color values.### Create custom themeNext we create a new theme that extends the [`grid-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme) passing our `text-color`, `background-color` and `border-yellow` variables as `$cell-selected-text-color`, `$cell-selected-background` and `$cell-active-border-color`, respectively:```scss$custom-grid-theme: grid-theme(
  $cell-selected-text-color: $text-color,
  $cell-active-border-color: $border-yellow,
  $cell-selected-background: $background-color);```### Apply themeAfterwards, all we need to do is include the mixin in our component's style (could also be in the app styles), so that our igx-hierarchical-grid uses the newly created theme instead of the default one:```scss:host {
  @include tokens($custom-grid-theme);}```With the custom theme applied, the selected grid cells are highlighted with our selected colors:### Demo```typescript
import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from '../../data/hierarchical-data';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-multi-cell-style',
    styleUrls: ['./hierarchical-grid-multi-cell-style.component.scss'],
    templateUrl: 'hierarchical-grid-multi-cell-style.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxRowIslandComponent]
})

export class HGridMultiCellStyleComponent implements OnInit {
    public localdata;
    public ngOnInit(): void {
        this.localdata = CUSTOMERS;
    }
}
```
```html
<igx-hierarchical-grid [igxPreventDocumentScroll]="true"  #hierarchicalGrid [data]="localdata" [height]="'600px'" [width]="'100%'" [allowFiltering]="true">
    <igx-column field="CustomerID"></igx-column>
    <igx-column field="CompanyName"></igx-column>
    <igx-column field="ContactName"></igx-column>
    <igx-column field="ContactTitle"></igx-column>
    <igx-column field="Address"></igx-column>
    <igx-column field="City"></igx-column>
    <igx-column field="PostalCode"></igx-column>
    <igx-column field="Country"></igx-column>
    <igx-column field="Phone"></igx-column>
    <igx-column field="Fax"></igx-column>

    <igx-row-island [height]="null" [key]="'Orders'" [autoGenerate]="false">
        <igx-column field="OrderID"></igx-column>
        <igx-column field="EmployeeID"></igx-column>
        <igx-column field="OrderDate" [dataType]="'date'"></igx-column>
        <igx-column field="RequiredDate" [dataType]="'date'"></igx-column>
        <igx-column field="ShippedDate" [dataType]="'date'"></igx-column>
        <igx-column field="ShipVia"></igx-column>
        <igx-column field="Freight"></igx-column>
        <igx-column field="ShipName"></igx-column>
        <igx-column field="ShipAddress"></igx-column>
        <igx-column field="ShipCity"></igx-column>
        <igx-column field="ShipPostalCode"></igx-column>
        <igx-column field="ShipCountry"></igx-column>
        <igx-row-island [height]="null" [key]="'OrderDetails'" [autoGenerate]="false">
            <igx-column field="ProductID"></igx-column>
            <igx-column field="UnitPrice"></igx-column>
            <igx-column field="Quantity"></igx-column>
            <igx-column field="Discount"></igx-column>
        </igx-row-island>
    </igx-row-island>

</igx-hierarchical-grid>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$text-color: contrast-color($color: 'primary', $variant: 900);
$background-color: color($color: "primary", $variant: 900);
$border-yellow: #f2c43c;

$custom-grid-theme: grid-theme(
  $cell-selected-text-color: $text-color,
  $cell-active-border-color: $border-yellow,
  $cell-selected-background: $background-color,
);

:host {
  @include tokens($custom-grid-theme);
}
```>[!NOTE]>The sample will not be affected by the selected global theme from `Change Theme`.## API References- [IgxHierarchicalGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html)_[IgxGridRow API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridrow.html)- [IgxGridCell API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html)- [IgxHierarchicalGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)## Additional Resources<div class="divider--half"></div>- [Hierarchical Grid overview](hierarchical-grid.md)- [Selection](selection.md)- [Row selection](row-selection.md)- [Filtering](filtering.md)- [Sorting](sorting.md)- [Summaries](summaries.md)- [Column Moving](column-moving.md)- [Column Pinning](column-pinning.md)- [Column Resizing](column-resizing.md)- [Virtualization and Performance](virtualization.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
