---
title: Multi-select Hierarchical Drop Down- Ignite UI for Angular - MIT license 
_description: Learn how to create a multi-select tree-style hierarchical drop-down with Ignite UI.
_keywords: Multi-select drop-down, hierarchical selection, ignite ui for angular, infragistics
_license: MIT
_tocName: Multi-select Hierarchical Drop Down
---

# Multi-select Hierarchical Drop Down

The following samples demonstrate how to create a multi-select hierarchical drop-down that allows the user to select single or multiple options from a tree-style hierarchical drop-down list.

## Topic Overview

For the drop-down list we will use the [IgxDropDownComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdowncomponent.html) as well as the [IgxToggleActionDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtoggleactiondirective.html) to open/close the drop-down.

To visualize the hierarchical data in the drop-down, you can use either the [IgxTreeComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreecomponent.html) or the [IgxTreeGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html).

The [`IgxChipComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipcomponent.html) is used to display the selected items.

## Selection

To display selected nodes/rows from the list use the [`IgxChipComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipcomponent.html) by handling the events that notify of selection changes and populate the `selectedNodes` / `selectedRows` array. This can be done by subscribing to the IgxTreeComponent's [`nodeSelection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreecomponent.html#nodeSelection) event and to the IgxTreeGridComponent's [`rowSelectionChanging`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#rowSelectionChanging) event.

To remove the chip from the DOM and deselect the item from the tree/grid, you have to handle the IgxChipComponent's [`remove`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipcomponent.html#remove) event.

Additionally, a way to prevent the drop-down from closing on chip deletion would be to check the event's composite path for an `igx-chip` node and then cancel the event in the `IgxDropDownComponent`'s [`closing`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdowncomponent.html#closing) event handler.

### Demo

```typescript
import { AfterViewInit, Component, DoCheck, OnInit, ViewChild, ElementRef, PLATFORM_ID, inject } from '@angular/core';
import { IBaseChipEventArgs, IgxChipComponent, IgxChipsAreaComponent } from 'igniteui-angular/chips';
import { IgxDropDownComponent, IgxDropDownItemNavigationDirective } from 'igniteui-angular/drop-down';
import { ITreeNodeSelectionEvent, IgxTreeComponent, IgxTreeNodeComponent } from 'igniteui-angular/tree';
import { ConnectedPositioningStrategy, OverlaySettings } from 'igniteui-angular/core';
import { IgxButtonDirective, IgxToggleActionDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { COUNTRIES } from './countries';
import { isPlatformBrowser } from '@angular/common';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-dropdown-tree-hierarchical-selection',
    styleUrls: ['./dropdown-tree-hierarchical-selection.component.scss'],
    templateUrl: './dropdown-tree-hierarchical-selection.component.html',
    imports: [IgxButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxIconComponent, IgxChipsAreaComponent, IgxChipComponent, IgxDropDownComponent, IgxTreeComponent, IgxTreeNodeComponent]
})
export class DropdownTreeHierarchicalSelectionComponent implements OnInit, DoCheck, AfterViewInit {
    private platformId = inject(PLATFORM_ID);

    @ViewChild(IgxTreeComponent, { static: true }) public igxTree: IgxTreeComponent;
    @ViewChild(IgxDropDownComponent, { static: true }) public igxDropDown: IgxDropDownComponent;
    @ViewChild('button', { static: true }) public igxButton: ElementRef;

    public countries!: any[];
    public selectedNodes!: any[];

    public ngOnInit(): void {
        this.countries = COUNTRIES;
    }

    public ngAfterViewInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            requestAnimationFrame(() => {
                this._overlaySettings.target = this.igxButton.nativeElement;
                this.igxDropDown.open(this._overlaySettings);
            });
        }
    }

    public ngDoCheck(){
        this.selectedNodes = this.igxTree.nodes?.filter(node => node.selected == true);
    }

    public onNodeSelection(args: ITreeNodeSelectionEvent) {
        this.selectedNodes = args.newSelection;
    }

    public chipRemoved(event: IBaseChipEventArgs) {
        this.selectedNodes = this.selectedNodes.filter((node) => {
            if (node.data.ID === event.owner.id){
                this.igxTree.deselectAll([node]);
            }
            return node.data.ID !== event.owner.id;
        });
    }

    public _overlaySettings: OverlaySettings = {
        modal: false,
        positionStrategy: new ConnectedPositioningStrategy(),
        closeOnOutsideClick: false
    };


}
```
```html
<button class="button" #button igxButton="contained" [igxToggleAction]="countriesDropDown"
  [igxDropDownItemNavigation]="countriesDropDown">
  Countries<igx-icon fontSet="material">expand_more</igx-icon>
</button>
<div class="chip-container">
  <igx-chips-area>
    @for (node of selectedNodes; track node) {
      <igx-chip [id]="node.data.ID" [removable]="true" (remove)="chipRemoved($event)">{{node.data.Name}}</igx-chip>
    }
  </igx-chips-area>
</div>

<igx-drop-down #countriesDropDown [height]="'400px'" [width]="'250px'">
  <igx-tree #igxTree selection="BiState" (nodeSelection)="onNodeSelection($event)">
    @for (country of countries; track country) {
      <igx-tree-node [data]="country" [expanded]="true" [selected]="true">
        {{ country.Name }}
        @for (city of country.Cities; track city) {
          <igx-tree-node [data]="city">
            {{ city.Name }}
          </igx-tree-node>
        }
      </igx-tree-node>
    }
  </igx-tree>
</igx-drop-down>
```
```scss
.chip-container{
    width : 500px;
    overflow: auto;
    border: 1px solid #ccc;
    background-color: #FFFBFA;
    display: inline-flex;
    margin-left:10px;
}
igx-chip {
    margin-right: 5px;
    margin-bottom: 5px;
}

.button {
    width: 250px;
    border: #ccc;
}
```

```typescript
import { AfterViewInit, Component, ElementRef, OnInit, PLATFORM_ID, ViewChild, inject } from '@angular/core';
import { IBaseChipEventArgs, IgxChipComponent, IgxChipsAreaComponent } from 'igniteui-angular/chips';
import { IgxDropDownComponent, IgxDropDownItemNavigationDirective } from 'igniteui-angular/drop-down';
import { ConnectedPositioningStrategy, OverlaySettings } from 'igniteui-angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IRowSelectionEventArgs, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxButtonDirective, IgxToggleActionDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { EMPLOYEE_DATA } from './nested-employee-data';
import { isPlatformBrowser } from '@angular/common';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-dropdown-tree-grid-hierarchical-selection',
    styleUrls: ['./dropdown-tree-grid-hierarchical-selection.component.scss'],
    templateUrl: './dropdown-tree-grid-hierarchical-selection.component.html',
    imports: [IgxButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxIconComponent, IgxChipsAreaComponent, IgxChipComponent, IgxDropDownComponent, IgxTreeGridComponent, IgxColumnComponent]
})
export class DropdownTreeGridHierarchicalSelectionComponent implements OnInit, AfterViewInit {
    private platformId = inject(PLATFORM_ID);

    @ViewChild('treeGrid', { static: true })
    public igxTreeGrid: IgxTreeGridComponent;
    @ViewChild(IgxDropDownComponent, { static: true }) public igxDropDown: IgxDropDownComponent;
    @ViewChild('button', { static: true }) public igxButton: ElementRef;

    public employees!: any[];
    public selectedRows!: any[];

    public ngOnInit(): void {
        this.employees = EMPLOYEE_DATA;

        this.igxTreeGrid.selectRows([1,4], true);
        this.selectedRows = [];
        this.igxTreeGrid.selectedRows.forEach((row) => this.selectedRows.push(this.employees.find(employee => employee.ID == row)));
    }
    public ngAfterViewInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            requestAnimationFrame(() => {
                this._overlaySettings.target = this.igxButton.nativeElement;
                this.igxDropDown.open(this._overlaySettings);
            });
        }
     }
    public onRowSelectionChanging(args: IRowSelectionEventArgs, grid: IgxTreeGridComponent) {
        this.selectedRows = [];
        args.newSelection.forEach((val) => this.selectedRows.push(grid.getRowData(val.ID)));
      }

    public chipRemoved(event: IBaseChipEventArgs) {
        this.selectedRows = this.selectedRows.filter((row) => {
            if (row.ID === event.owner.id){
                this.igxTreeGrid.deselectRows([row.ID]);
            }
            return row.ID !== event.owner.id;
        });
    }

    public _overlaySettings: OverlaySettings = {
        modal: false,
        positionStrategy: new ConnectedPositioningStrategy(),
        closeOnOutsideClick: false
    };
}
```
```html
<button #button igxButton="contained" [igxToggleAction]="employeesDropDown" [igxDropDownItemNavigation]="employeesDropDown">
  Employees<igx-icon fontSet="material">expand_more</igx-icon>
</button>
<div class="chip-container">
  <igx-chips-area>
    @for (row of selectedRows; track row) {
      <igx-chip [id]="row.ID" [removable]="true" (remove)="chipRemoved($event)">{{row.Name}}</igx-chip>
    }
  </igx-chips-area>
</div>

<igx-drop-down #employeesDropDown [width]="'300px'">
  <igx-tree-grid #treeGrid igxPreventDocumentScroll [data]="employees" childDataKey="Employees" primaryKey="ID"
    width="100%" height="400px" [autoGenerate]="false" [expansionDepth]="1" [rowSelection]="'multiple'"
    (rowSelectionChanging)="onRowSelectionChanging($event, treeGrid)">
    <igx-column field="Name" dataType="string"></igx-column>
  </igx-tree-grid>
</igx-drop-down>
```
```scss
.chip-container{
    width : 500px;
    overflow: auto;
    border: 1px solid #ccc;
    background-color: #FFFBFA;
    display: inline-flex;
    margin-left:10px;
}
igx-chip {
    margin-right: 5px;
    margin-bottom: 5px;
}
button {
    width: 300px;
    border: #ccc;
}
```

>[!NOTE]
>To display the Dropdown component opened initially, it is recommended to set the open method as a callback of the requestAnimationFrame method. This will ensure that the DOM tree is repainted and all elements are correctly positioned.

## API References

- [IgxDropDownComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdowncomponent.html)
- [IgxChipComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipcomponent.html)
- [IgxChipsAreaComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipsareacomponent.html)
- [IgxTreeComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreecomponent.html)
- [IgxTreeNodeComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreenodecomponent.html)
- [IgxTreeGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html)

## Additional Resources

<div class="divider--half"></div>

- [Drop Down overview](drop-down.md)
- [Chip overview](chip.md)
- [Tree overview](tree.md)
- [Tree Grid overview](treegrid/tree-grid.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
