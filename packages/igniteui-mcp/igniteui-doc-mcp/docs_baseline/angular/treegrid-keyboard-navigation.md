---
title: Angular Tree Grid Keyboard Navigation - Ignite UI for Angular
_description: Learn how to use Tree Grid Keyboard Navigation with Ignite UI for Angular. With Keyboard interaction, users can quickly navigate between cells, rows, and columns.
_keywords: keyboard navigation, ignite ui for angular, infragistics
_license: commercial
_canonicalLink: grid/keyboard-navigation
_tocName: Keyboard navigation
_premium: true
---
# Angular Tree Grid Keyboard Navigation

 Keyboard navigation in the **IgxTreeGrid** provides a rich variety of keyboard interactions for the user. It enhances the accessibility of the **IgxTreeGrid** and allows to navigate through any type of elements inside (cell, row, column header, toolbar, footer, etc.). This functionality is enabled by default, and the developer has the option to override any of the default behaviors in an easy way.
The tabulations of the IgxTreeGrid has been reduced so that the navigation is compliant with W3C accessibility standards and convenient to use.
Currently, the IgxTreeGrid introduces the following tab stops:
- **GroupBy or Toolbar area** (if enabled);
- **IgxTreeGrid header**;
- **IgxTreeGrid body**;
- **Column summaries** (if enabled);
- **IgxTreeGrid paginator** (if enabled);
>[!NOTE]
> Due to this change, navigating between the cells with <kbd>tab</kbd> and <kbd>Shift + Tab</kbd> is no longer supported in the IgxTreeGrid.
> Pressing the <kbd>Tab</kbd> key now goes through the tab stops in the following order: **GroupBy** / **Toolbar** -> **Headers** -> **Body** -> **Summaries** -> **Footer / Paginator**.
>[!NOTE]
> Exposing any **focusable** element into the **IgxTreeGrid** body via template may introduce **side effects** in the keyboard navigation, since the default
> browser behavior is not prevented. It is the developer's responsibility to prevent or modify it appropriately.
## Header Navigation
A full _keyboard navigation_ support in the **IgxTreeGrid** header is now introduced. Column headers can be easily traversed with the arrow keys. Additionally, there are a number of key combinations that trigger actions on the columns like **filtering**, **sorting**, **grouping** and etc.
When the **IgxTreeGrid** header container is focused, the following key combinations are available:
### Key Combinations
- <kbd>Arrow Up</kbd> navigates one cell up in the headers (no looping). Available only when Multi-row Layout (MRL) or Multi-column Headers (MCH) are defined
- <kbd>Arrow Down</kbd> navigates one cell down in the headers (no wrapping). Available only when Multi-row Layout (MRL) or Multi-column Headers (MCH) are defined
- <kbd>Arrow Left</kbd> navigates one cell left (no looping)
- <kbd>Arrow Right</kbd> navigates one cell right (no wrapping between lines)
- <kbd>Ctrl + Arrow Left</kbd> navigates to the leftmost cell in the row; if MRL or MCH are enabled, navigates to the leftmost cell at the same level
- <kbd>Home</kbd> navigates to the leftmost cell in  the row; if MRL or MCH are enabled, navigates to the leftmost cell at the same level
- <kbd>Ctrl + Arrow Right</kbd> navigates to the rightmost cell in row; if MRL or MCH are enabled, navigates to the rightmost cell at the same level
- <kbd>End</kbd> navigates to the rightmost cell in row; if MRL or MCH are enabled, navigates to the rightmost cell at the same level
- <kbd>Alt + L</kbd> opens Advanced Filtering dialog if Advanced Filtering is enabled
- <kbd>Ctrl + Shift + L</kbd> opens the Excel Style Filter dialog or the default (row) filter if the column is filterable
- <kbd>Ctrl + Arrow Up</kbd> sorts the active column header in ASC order. If the column is already sorted in ASC, sorting state is cleared
- <kbd>Ctrl + Arrow Down</kbd> sorts the active column header in DSC order. If the column is already sorted in DSC, sorting state is cleared
- <kbd>Space</kbd> selects the column; If the column is already selected, selection is cleared
@@if (igxName === "IgxGrid") { - <kbd>Shift + Alt + Arrow Left</kbd> groups the column, if the column is marked as groupable
- <kbd>Shift + Alt + Arrow Right</kbd> ungroups the column, if the column is marked as groupable
- <kbd>Alt + Arrow Left</kbd> or <kbd>Alt + Arrow Up</kbd> collapses the column group header, if the header is not already collapsed
- <kbd>Alt + Arrow Right</kbd> or `Alt + Arrow Down</kbd> expands the column group header, if the header is not already expanded}
## Body navigation
When the **IgxTreeGrid** body is focused, the following key combinations are available:
### Key Combination
- <kbd>Arrow Up</kbd>- navigates one cell up (no wrapping)
- <kbd>Arrow Down</kbd> navigates one cell down (no wrapping)
- <kbd>Arrow Left</kbd> navigates one cell left (no wrapping between lines)
- <kbd>Arrow Right</kbd> - navigates one cell right (no wrapping between lines)
- <kbd>Ctrl + Arrow Left</kbd> navigates to the leftmost cell in the row
- <kbd>Ctrl + Arrow Right</kbd> navigates to the rightmost cell in the row
- <kbd>Ctrl + Arrow Up</kbd> navigates to the first cell in the column
- <kbd>Ctrl + Arrow Down</kbd> navigates to the last cell in the column
- <kbd>Home</kbd> navigates to the leftmost cell in the row
- <kbd>End</kbd> navigates to the rightmost cell in the row
- <kbd>Ctrl + Home</kbd> navigates to the top leftmost data cell in the grid
- <kbd>Ctrl + End</kbd> navigates to the bottom rightmost data cell in the grid
- <kbd>Page Up</kbd> scrolls one page (view port) up
- <kbd>Page Down</kbd> scrolls one page (view port) down
- <kbd>Enter</kbd> enters edit mode
- <kbd>F2</kbd> enters edit mode
- <kbd>Esc</kbd> exits edit mode
- <kbd>Tab</kbd> available only if there is a cell in edit mode; moves the focus to the next editable cell in the row; after reaching the last cell in the row, moves te focus to the first editable cell in the next row. When **Row Editing** is enabled, moves the focus from the right-most editable cell to the **CANCEL** and **DONE** buttons, and from **DONE** button to the left-most editable cell in the row
- <kbd>Shift + Tab</kbd> - available only if there is a cell in edit mode; moves the focus to the previous editable cell in the row; after reaching the first cell in the row, moves the focus to the last editable cell in the previous row. When **Row Editing** is enabled, moves the focus from the right-most editable cell to **CANCEL** and **DONE** buttons, and from **DONE** button to the right-most editable cell in the row
- <kbd>Space</kbd> - selects the row, if <kbd>Row Selection</kbd> is enabled
- <kbd>Alt + Arrow Left</kbd> or <kbd>Alt + Arrow Up</kbd> - @@if (igxName === "IgxGrid") {over Group Row - collapses the group} @@if (igxName === "IgxHierarchicalGrid") {collapses the row island} @@if (igxName === "IgxTreeGrid") {collapses the current node}
- <kbd>Alt + Arrow Right</kbd> or <kbd>Alt + Arrow Down</kbd> - @@if (igxName === "IgxGrid") {over Group Row - expands the group} @@if (igxName === "IgxHierarchicalGrid") {expands the row island } @@if (igxName === "IgxTreeGrid") {expands the current node}
 @@if (igxName === "IgxGrid") {- <kbd>Alt + Arrow Left</kbd> or <kbd>Alt + Arrow Up</kbd> - over Master Detail Row - collapses the details view
- <kbd>Alt + Arrow Right</kbd> or <kbd>Alt + Arrow Down</kbd> - over Master Detail Row - expands the details view}
 @@if (igxName === "IgxGrid") {- <kbd>Space</kbd> - over Group Row - selects all rows in the group, if <kbd>rowSelection</kbd> property is set to multiple}
Practice all of the above mentioned actions in the demo sample below. Focus any navigable grid element and a list with some of the available actions for the element will be shown to guide you through.
## Demo
@@if (igxName === "IgxGrid") {
```typescript
/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-shadow */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { CellType, IActiveNodeChangeEventArgs, IgxColumnComponent, IgxColumnGroupComponent, IgxGridDetailTemplateDirective, IgxGridToolbarComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxEmptyListTemplateDirective, IgxListComponent, IgxListItemComponent, IgxListLineSubTitleDirective, IgxListLineTitleDirective } from 'igniteui-angular/list';
import { SortingDirection } from 'igniteui-angular/core';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DATA } from '../../data/customers';
import { NgClass } from '@angular/common';

enum GridSection {
    THEAD = 'igx-grid__thead-wrapper',
    TBODY = 'igx-grid__tbody-content',
    FOOTER = 'igx-grid__tfoot'
}

enum ItemAction {
    Filterable,
    Sortable,
    Selectable,
    Groupable,
    Collapsible,
    Expandable,
    Editable,
    Always
}

enum ElementTags {
    GROUPBY_ROW = 'IGX-GRID-GROUPBY-ROW',
    COLUMN_GROUP = 'IGX-COLUMN-GROUP'
}

class Item {
    public title: string;
    public subTitle: string;
    public action: ItemAction;
    public active = false;

    private _completed: boolean;

    public constructor(title: string, subTitle: string, completed: boolean, itemAction?: ItemAction) {
        this.title = title;
        this.subTitle = subTitle;
        this.completed = completed;
        this.action = itemAction;

        if (itemAction === ItemAction.Always) {
            this.active = true;
        }
    }

    public set completed(value: boolean) {
        if (this.active || (!value && !this.completed)) {
            this._completed = value;
        }
    }

    public get completed() {
        return this._completed;
    }
}

class KeyboardHandler {
    private _collection: Item[];
    private _section: GridSection;

    public constructor(colleciton: Item[], section: GridSection) {
        this._collection = colleciton;
        this._section = section;
    }

    public set collection(collection: Item[]) {
        this._collection = collection;
    }

    public get collection() {
        return this._collection;
    }

    public set gridSection(section: GridSection) {
        this._section = section;
    }

    public get gridSection() {
        return this._section;
    }

    public enableActionItems(action: ItemAction[]) {
        this.resetCollection();
        action.forEach(element => {
            this._collection
                .filter(e => e.action === element)
                .map(e => e.active = true);
        });
    }

    public resetCollection() {
        this._collection.forEach(e => {
            if (e.action !== ItemAction.Always) {
                e.active = false;
            }
        });
    }

    public selectItem(idx: number) {
        this._collection[idx].completed = true;
    }

    public deselectItem(idx: number) {
        this._collection[idx].completed = false;
    }
}

const theadKeyCombinations = [
    new Item('space key', 'select column', false, ItemAction.Selectable),
    new Item('ctrl + arrow up/down', 'sorts the column asc/desc', false, ItemAction.Sortable),
    new Item('shift + alt + arrow left/right', 'group/ungroup the active column', false, ItemAction.Groupable),
    new Item('alt + arrow left/right/up/down', 'expand/collapse active multi column header',
        false, ItemAction.Collapsible),
    new Item('ctrl + shift + l', 'opens the excel style filtering', false, ItemAction.Filterable),
    new Item('alt + l', 'opens the advanced filtering', false, ItemAction.Filterable)
];

const tbodyKeyCombinations: Item[] = [
    new Item('enter', 'enter in edit mode', false, ItemAction.Editable),
    new Item('alt + arrow left/up', 'collapse master details row', false, ItemAction.Collapsible),
    new Item('alt + arrow right/down', 'expand master details row', false, ItemAction.Collapsible),
    new Item('alt + arrow right/left', 'expand/collapse the group row', false, ItemAction.Expandable),
    new Item('ctrl + Home/End', 'navigates to the upper-left/bottom-right cell', false, ItemAction.Always)
];

const summaryCombinations: Item[] = [
    new Item('ArrowLeft', 'navigates one summary cell left', false, ItemAction.Always),
    new Item('ArrowRight', 'navigates one summary cell right', false, ItemAction.Always),
    new Item('Home', 'navigates to the first summary cell', false, ItemAction.Always),
    new Item('End', 'navigates to the last summary cell', false, ItemAction.Always)
];

@Component({
    selector: 'grid-keyboardnav',
    templateUrl: './grid-keyboardnav-sample.component.html',
    styleUrls: ['grid-keyboardnav-sample.component.scss'],
    animations: [
        trigger('toggle', [
            state('selected', style({
                color: '#4eb862'
            })),
            state('deselected', style({
                color: 'black'
            })),
            transition('deselected => selected', [
                animate('.3s')
            ]),
            transition('selected => deselected', [
                animate('.3s')
            ])
        ]),
        trigger('load', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('.3s', style({ opacity: .4 }))
            ])
        ])
    ],
    imports: [IgxGridComponent, IgxPaginatorComponent, IgxGridToolbarComponent, IgxGridDetailTemplateDirective, IgxColumnGroupComponent, IgxColumnComponent, IgxListComponent, IgxListItemComponent, NgClass, IgxListLineTitleDirective, IgxListLineSubTitleDirective, IgxCheckboxComponent, IgxEmptyListTemplateDirective]
})
export class GridKeyboardnavGuide implements OnInit, OnDestroy {
    private cdr = inject(ChangeDetectorRef);


    @ViewChild(IgxGridComponent, { static: true })
    public grid: IgxGridComponent;

    @ViewChild(IgxListComponent, { static: true })
    public listref: IgxListComponent;

    public get keyboardCollection() {
        return this._keyboardHandler.collection;
    }

    public get headerList() {
        return this._keyboardHandler.gridSection === GridSection.THEAD ?
            'HEADER COMBINATIONS' : this._keyboardHandler.gridSection === GridSection.TBODY ?
                'BODY COMBITNATIONS' : this._keyboardHandler.gridSection === GridSection.FOOTER ?
                    'SUMMARY COMBINATIONS' : '';
    }

    private _destroyer = new Subject<void>();
    private _keyboardHandler = new KeyboardHandler([], GridSection.THEAD);


    public onActiveNodeChange(evt: IActiveNodeChangeEventArgs) {
        if (this.grid.crudService.cell) {
            return;
        }
        const gridSection = evt.row < 0 ? GridSection.THEAD : evt.row === this.grid.dataView.length ?
            GridSection.FOOTER : GridSection.TBODY;
        this.changeCombinationsCollection(gridSection);
        this.toggleHeaderCombinations(evt);
        this.toggleBodyCombinations(evt);
    }

    public ngOnInit() {
        this.grid.data = DATA;
        for (const item of this.grid.data) {
            const names = item.CompanyName.split(' ');
            item.FirstName = names[0];
            item.LastName = names[names.length - 1];
            item.FullAddress = `${item.Address}, ${item.City}, ${item.Country}`;
            item.PersonelDetails = `${item.ContactTitle}: ${item.ContactName}`;
            item.CompanysAnnualProfit = (100000 + (Math.random() * Math.floor(1000000))).toFixed(0);
        }

        this.grid.groupingExpansionStateChange.pipe(takeUntil(this._destroyer))
            .subscribe(() => {
                if (this._keyboardHandler.gridSection === GridSection.TBODY) {
                    this._keyboardHandler.selectItem(3);
                }
            });

        this.grid.columnSelectionChanging.pipe(takeUntil(this._destroyer))
            .subscribe((args) => {
                const evt = args.event;
                if (evt.type === 'keydown') {
                    this._keyboardHandler.selectItem(0);
                }
            });

        this.grid.rowToggle.pipe(takeUntil(this._destroyer))
            .subscribe((args) => {
                const evt = args.event as KeyboardEvent;
                if (evt.type !== 'keydown') {
                    return;
                }
                return evt.code === 'ArrowLeft' || evt.code === 'ArrowUp' ? this._keyboardHandler.selectItem(1) :
                    this._keyboardHandler.selectItem(2);
            });

        this.grid.groupingExpressions = [
            { fieldName: 'ContactTitle', dir: SortingDirection.Asc }
        ];

        this.listref.itemClicked.pipe(takeUntil(this._destroyer))
            .subscribe((args) => {
                args.event.stopPropagation();
            });

    }

    public ngOnDestroy() {
        this._destroyer.next();
    }

    public gridKeydown(evt) {
        const key = evt.key.toLowerCase();
        if (key === 'tab') { return; }
        if (this._keyboardHandler.gridSection === GridSection.FOOTER) {
            switch (key) {
                case 'end':
                    this._keyboardHandler.selectItem(3);
                    break;
                case 'home':
                    this._keyboardHandler.selectItem(2);
                    break;
                case 'arrowleft':
                    this._keyboardHandler.selectItem(0);
                    break;
                case 'arrowright':
                    this._keyboardHandler.selectItem(1);
                    break;
                default:
                    break;
            }
            return;
        }

        const activeNode = this.grid.navigation.activeNode;
        if (this._keyboardHandler.gridSection === GridSection.THEAD) {
            if (key === 'l' && evt.altKey) {
                this._keyboardHandler.selectItem(5);
                return;
            }
            const col = this.grid.visibleColumns.find
                (c => c.visibleIndex === activeNode.column && c.level === activeNode.level);
            if (key === 'l' && evt.ctrlKey && evt.shiftKey && col && !col.columnGroup && col.filterable) {
                this._keyboardHandler.selectItem(4);
            }

            if ((key === 'arrowleft' || key === 'arrowright') && evt.altKey && evt.shiftKey &&
                col && !col.columnGroup && col.groupable) {
                this._keyboardHandler.selectItem(2);
            }

            if ((key === 'arrowup' || key === 'arrowdown') && evt.ctrlKey) {
                if (col && !col.columnGroup && col.sortable) {
                    this._keyboardHandler.selectItem(1);
                }
            }
        }

        if (this._keyboardHandler.gridSection === GridSection.TBODY) {
            if (key === 'enter') {
                const columnName = this.grid.getColumnByVisibleIndex(activeNode.column).field;
                const cell = this.grid.getCellByColumn(activeNode.row, columnName);

                if (cell && cell.column.editable && cell.editMode) {
                    this._keyboardHandler.selectItem(0);
                }
            }
            if ((key === 'end' || key === 'home') && evt.ctrlKey) {
                this._keyboardHandler.selectItem(4);
                this.cdr.detectChanges();
            }
        }
    }

    public expandChange() {
        if (!this._keyboardHandler.collection.length) {
            return;
        }

        this._keyboardHandler.selectItem(3);
    }

    public onCheckChange(evt, idx) {
        evt.checked ? this._keyboardHandler.selectItem(idx) : this._keyboardHandler.deselectItem(idx);
    }

    public toggleHeaderCombinations(activeNode) {
        if (this._keyboardHandler.gridSection !== GridSection.THEAD) {
            return;
        }
        const currColumn = this.grid.columnList
            .find(c => c.visibleIndex === activeNode.column && c.level === activeNode.level);

        const actions = this.extractColumnActions(currColumn);
        this._keyboardHandler.enableActionItems(actions);
    }

    public toggleBodyCombinations(activeNode) {
        const rowRef = this.grid.getRowByIndex(activeNode.row);
        if (this._keyboardHandler.gridSection !== GridSection.TBODY || !rowRef) {
            return;
        }

        if (rowRef.isGroupByRow) {
            this._keyboardHandler.enableActionItems([ItemAction.Expandable]);
        } else {
            const cell = this.grid.getCellByColumn(activeNode.row,
                this.grid.columnList.find((col) => col.visibleIndex === activeNode.column).field);
            this.toggleCellCombinations(cell);
        }

    }

    public toggleCellCombinations(cell?: CellType) {
        const actions = this.extractCellActions(cell);
        this._keyboardHandler.enableActionItems(actions);
    }

    public changeCombinationsCollection(gridSection: GridSection) {
        switch (gridSection) {
            case GridSection.THEAD:
                this._keyboardHandler.collection = theadKeyCombinations;
                break;
            case GridSection.TBODY:
                this._keyboardHandler.collection = tbodyKeyCombinations;
                break;
            case GridSection.FOOTER:
                this._keyboardHandler.collection = summaryCombinations;
                break;
            default:
                this._keyboardHandler.collection = [];
                return;
        }
        this._keyboardHandler.gridSection = gridSection;
    }

    public extractColumnActions(col: IgxColumnComponent | IgxColumnGroupComponent) {
        const res = [];
        if (col.sortable) {
            res.push(ItemAction.Sortable);
        }

        if (col.filterable && !col.columnGroup) {
            res.push(ItemAction.Filterable);
        }

        if (col.collapsible) {
            res.push(ItemAction.Collapsible);
        }

        if (col.groupable) {
            res.push(ItemAction.Groupable);
        }

        if (col.selectable) {
            res.push(ItemAction.Selectable);
        }

        return res;
    }

    public extractCellActions(cell: CellType) {
        const res = [];
        if (cell.editable) {
            res.push(ItemAction.Editable);
        }

        res.push(ItemAction.Collapsible);
        return res;
    }
}
```
```html
<div class="sample">
  <div class="grid_wrapper">
    <igx-grid height="450px" width="100%" [allowFiltering]="true" [filterMode]="'excelStyleFilter'"
      summaryCalculationMode="rootLevelOnly" columnSelection="single" [allowAdvancedFiltering]="true" [moving]="true"
      (keydown)="gridKeydown($event)" (activeNodeChange)="onActiveNodeChange($event)">
      <igx-paginator></igx-paginator>
      @if (false) {
        <igx-grid-toolbar></igx-grid-toolbar>
      }

      <ng-template igxGridDetail let-dataItem>
        @if (dataItem.CompanysAnnualProfit) {
          <div>
            <header>Annual Profit:</header>
            <span>{{dataItem.CompanysAnnualProfit}}</span>
          </div>
        }
      </ng-template>
      <igx-column-group header="General Information">
        <igx-column field="CompanyName" [hasSummary]="true" [groupable]="true" [editable]="true" [sortable]="true" [selectable]="false"></igx-column>
        <igx-column-group header="Personel Details" [collapsible]="true"
          dataType="string" [expanded]="true" (expandedChange)="expandChange()">
          <igx-column field="PersonelDetails" [width]="'250px'" [groupable]="true"
          [selectable]="false"[visibleWhenCollapsed]="true" [sortable]="true"></igx-column>
          <igx-column field="ContactName" [groupable]="true" [visibleWhenCollapsed]="false" [selectable]="false"
          [hasSummary]="true" [sortable]="true" [groupable]="true" [editable]="true"></igx-column>
          <igx-column field="ContactTitle" [visibleWhenCollapsed]="false" [sortable]="true" [groupable]="true" [editable]="true"></igx-column>
        </igx-column-group>
      </igx-column-group>
      <igx-column-group header="Address Information">
        <igx-column-group header="Location" [collapsible]="true" [expanded]="false" (expandedChange)="expandChange()">
          <igx-column field="FullAddress" header="Full Address" [width]="'250px'" [visibleWhenCollapsed]="true"
          [dataType]="'string'" [visibleWhenCollapsed]="true" [sortable]="true"></igx-column>
          <igx-column field="Country" [groupable]="true" [selectable]="false" [visibleWhenCollapsed]="false" [hasSummary]="true" [sortable]="true" [editable]="true"></igx-column>
          <igx-column field="Region" [groupable]="true" [visibleWhenCollapsed]="false" [sortable]="true" [groupable]="true" [editable]="true"></igx-column>
          <igx-column field="City" [groupable]="true" [selectable]="false" [visibleWhenCollapsed]="false" [hasSummary]="true" [groupable]="true" [editable]="true"></igx-column>
          <igx-column field="Address" [visibleWhenCollapsed]="false"></igx-column>
        </igx-column-group>
        <igx-column-group header="Contact Information">
          <igx-column field="Phone" [groupable]="true" [editable]="true" [selectable]="false"></igx-column>
          <igx-column field="Fax" [editable]="true"></igx-column>
          <igx-column field="PostalCode"></igx-column>
        </igx-column-group>
      </igx-column-group>
    </igx-grid>
  </div>
  <div class="list-sample">
    <igx-list>
      @if (keyboardCollection.length > 0) {
        <igx-list-item [isHeader]="true">{{ headerList }}</igx-list-item>
      }
      @for (c of keyboardCollection; track c; let idx = $index) {
        <igx-list-item @load [ngClass]="{ 'active': c.active, 'disabled': !c.active}" [@toggle]="c.completed ? 'selected' : 'deselected'">
          <h4 igxListLineTitle>{{ c.title }}</h4>
          <p igxListLineSubTitle>{{ c.subTitle }}</p>
          <igx-checkbox [disabled]="!c.active" [checked]="c.completed" (change)="onCheckChange($event, idx)"></igx-checkbox>
        </igx-list-item>
      }
      <ng-template igxEmptyList>
        <span class="empty-list">
          <h6>Use the native navigation of the browser until you reach some of the following grid sections below:</h6>
          <ul>
            <li>Header</li>
            <li>Body</li>
            <li>Summary</li>
          </ul>
          <h6>When reached, an <b>action list</b> will be shown.</h6>
        </span>
      </ng-template>
    </igx-list>
  </div>
</div>
```
```scss
@use '../../../variables' as *;

$my-color: color($color: 'success');

$custom-checkbox-theme: checkbox-theme(
    $fill-color: $my-color,
    $border-radius: 10px
);

.list-sample ::ng-deep {
    @include checkbox($custom-checkbox-theme);
}

.sample {
    display: flex;

    .grid_wrapper {
        --ig-size: var(--ig-size-small);
        padding-left: 15px;
        padding-top: 15px;
        width: 75%;
    }


    .list-sample {
        padding-top: 15px;
        width: 20%;

        .disabled {
            opacity: .4;
        }

        .active {
            opacity: 1;
        }

        igx-list {
            .igx-list__item-line-title, .igx-list__item-line-subtitle {
                font-size: 13px;
            }

            height: 450px;
            box-shadow: elevation(2);
        }

        .empty-list {
            opacity: 1;
            h6 {
                padding: 15px;
                font-size: 15px;
            }

            ul {
                li {
                    font-size: 13px;
                }
                margin-left: 15px;
                font-weight: 400;
            }
        }
    }
}
```
<div class="divider--half"></div>
}
@@if (igxName === "IgxHierarchicalGrid") {
```typescript
/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-shadow */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { CellType, IgxColumnComponent, IgxColumnGroupComponent, IgxGridToolbarComponent, IgxGridToolbarDirective } from 'igniteui-angular/grids/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxEmptyListTemplateDirective, IgxListComponent, IgxListItemComponent, IgxListLineSubTitleDirective, IgxListLineTitleDirective } from 'igniteui-angular/list';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CUSTOMERS } from '../../data/hierarchical-data';
import { NgClass } from '@angular/common';

enum GridSection {
    THEAD = 'igx-grid__thead-wrapper',
    TBODY = 'igx-grid__tbody-content',
    FOOTER = 'igx-grid__tfoot'
}

enum ItemAction {
    Filterable,
    Sortable,
    Selectable,
    Groupable,
    Collapsible,
    Expandable,
    Editable,
    Always
}

enum ElementTags {
    GROUPBY_ROW = 'IGX-GRID-GROUPBY-ROW',
    COLUMN_GROUP = 'IGX-COLUMN-GROUP'
}

class Item {
    public title: string;
    public subTitle: string;
    public action: ItemAction;
    public active = false;

    private _completed: boolean;

    public constructor(title: string, subTitle: string, completed: boolean, itemAction?: ItemAction) {
        this.title = title;
        this.subTitle = subTitle;
        this.completed = completed;
        this.action = itemAction;

        if (itemAction === ItemAction.Always) {
            this.active = true;
        }
    }

    public set completed(value: boolean) {
        if (this.active || (!value && !this.completed)) {
            this._completed = value;
        }
    }

    public get completed() {
        return this._completed;
    }
}

class KeyboardHandler {
    private _collection: Item[];
    private _section: GridSection;

    public constructor(colleciton: Item[], section: GridSection) {
        this._collection = colleciton;
        this._section = section;
    }

    public set collection(collection: Item[]) {
        this._collection = collection;
    }

    public get collection() {
        return this._collection;
    }

    public set gridSection(section: GridSection) {
        this._section = section;
    }

    public get gridSection() {
        return this._section;
    }

    public enableActionItems(action: ItemAction[]) {
        this.resetCollection();
        action.forEach(element => {
            this._collection
            .filter(e => e.action === element)
            .map(e => e.active = true);
        });
    }

    public resetCollection() {
        this._collection.forEach(e => {
            if (e.action !== ItemAction.Always) {
                e.active = false;
            }
        });
    }

    public selectItem(idx: number) {
        this._collection[idx].completed = true;
    }

    public deselectItem(idx: number) {
        this._collection[idx].completed = false;
    }
}

const theadKeyCombinations = [
    new Item('space key', 'select column', false, ItemAction.Selectable),
    new Item('ctrl + arrow up/down', 'sorts the column asc/desc', false, ItemAction.Sortable),
    new Item('alt + arrow left/right/up/down', 'expand/collapse active multi column header',
        false,
        ItemAction.Collapsible),
    new Item('alt + l', 'opens the advanced filtering', false, ItemAction.Filterable),
    new Item('ctrl + shift + l', 'opens the excel style filtering', false, ItemAction.Filterable)
];

const tbodyKeyCombinations: Item[] = [
    new Item('enter', 'enter in edit mode', false, ItemAction.Editable),
    new Item('alt + arrow left/up', 'collapse row island row', false, ItemAction.Collapsible),
    new Item('alt + arrow right/down', 'expand row island row', false, ItemAction.Collapsible),
    new Item('ctrl + Home/End', 'navigates to the upper-left/bottom-right cell', false, ItemAction.Always)
];

const summaryCombinations: Item[] = [
    new Item('ArrowLeft', 'navigates one summary cell right', false, ItemAction.Always),
    new Item('ArrowRight', 'navigates one summary cell left', false, ItemAction.Always),
    new Item('Home', 'navigates to the first summary cell', false, ItemAction.Always),
    new Item('End', 'navigates to the last summary cell', false, ItemAction.Always)
];

@Component({
    selector: 'grid-keyboardnav',
    templateUrl: './hgrid-keyboard-guide.component.html',
    styleUrls: ['hgrid-keyboard-guide.component.scss'],
    animations: [
        trigger('toggle', [
            state('selected', style({
                color: '#4eb862'
            })),
            state('deselected', style({
                color: 'black'
            })),
            transition('deselected => selected', [
                animate('.3s')
            ]),
            transition('selected => deselected', [
                animate('.3s')
            ])
        ]),
        trigger('load', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('.3s', style({ opacity: .4 }))
            ])
        ])
    ],
    imports: [IgxHierarchicalGridComponent, IgxPaginatorComponent, IgxGridToolbarComponent, IgxColumnComponent, IgxColumnGroupComponent, IgxRowIslandComponent, IgxGridToolbarDirective, IgxListComponent, IgxListItemComponent, NgClass, IgxListLineTitleDirective, IgxListLineSubTitleDirective, IgxCheckboxComponent, IgxEmptyListTemplateDirective]
})
export class HGridKeyboardnavGuide implements OnInit, OnDestroy {
    private cdr = inject(ChangeDetectorRef);


    @ViewChild(IgxHierarchicalGridComponent, { static: true })
    public hGrid: IgxHierarchicalGridComponent;

    @ViewChild(IgxListComponent, { static: true })
    public listref: IgxListComponent;

    public get keyboardCollection() {
        return this.keyboardHandler.collection;
    }

    public get headerList() {
        return this.keyboardHandler.gridSection === GridSection.THEAD ?
            'HEADER COMBINATIONS' : this.keyboardHandler.gridSection === GridSection.TBODY ?
            'BODY COMBITNATIONS' : this.keyboardHandler.gridSection === GridSection.FOOTER ?
            'SUMMARY COMBINATIONS' : '';
    }

    public gridTarget: GridUnderManagement;

    private _destroyer = new Subject<void>();
    private keyboardHandler = new KeyboardHandler([], GridSection.THEAD);

    public onActiveNodeChange(evt) {
        if (this.hGrid.crudService.cell) {
            return;
        }
        const grid = evt.owner || this.hGrid;
        const gridSection = evt.row < 0 ? GridSection.THEAD : evt.row === grid.dataView.length ? GridSection.FOOTER : GridSection.TBODY;
        this.changeKeyboardCollection(gridSection);
        this.gridTarget.toggleHeaderCombinations(evt);
        this.gridTarget.toggleBodyCombinations(evt);
    }

    public ngOnInit() {
        this.hGrid.data = CUSTOMERS;
        for (const item of this.hGrid.data) {
            const names = item.CompanyName.split(' ');
            item.FirstName = names[0];
            item.LastName = names[names.length - 1];
            item.FullAddress = `${item.Address}, ${item.City}, ${item.Country}`;
            item.PersonelDetails = `${item.ContactTitle}: ${item.ContactName}`;
            item.CompanysAnnualProfit = (100000 + (Math.random() * Math.floor(1000000))).toFixed(0);
        }

        this.gridTarget = new GridUnderManagement(this.hGrid, this.keyboardHandler, this._destroyer, this.cdr);
        this.gridTarget.subscribe();

        this.listref.itemClicked.pipe(takeUntil(this._destroyer))
            .subscribe((args) => {
                args.event.stopPropagation();
            });
    }

    public ngOnDestroy() {
        this._destroyer.next();
    }

    public expandChange() {
        if (!this.keyboardHandler.collection.length) {
            return;
        }

        this.keyboardHandler.selectItem(2);
    }

    public onCheckChange(evt, idx) {
        evt.checked ? this.keyboardHandler.selectItem(idx) : this.keyboardHandler.deselectItem(idx);
    }

    public changeKeyboardCollection(gridSection: GridSection) {
        switch (gridSection) {
            case GridSection.THEAD:
                this.keyboardHandler.collection = theadKeyCombinations;
                break;
            case GridSection.TBODY:
                this.keyboardHandler.collection = tbodyKeyCombinations;
                break;
            case GridSection.FOOTER:
                this.keyboardHandler.collection = summaryCombinations;
                break;
            default:
                this.keyboardHandler.collection = [];
                return;
        }
        this.keyboardHandler.gridSection = gridSection;
    }

    public onGridCreated(evt) {
        fromEvent(evt.grid.elementRef.nativeElement, 'click').pipe(takeUntil(this._destroyer))
            .subscribe(() => {
                this.gridTarget = new GridUnderManagement(evt.grid, this.keyboardHandler, this._destroyer, this.cdr);
                this.gridTarget.subscribe();
            });

        fromEvent(evt.grid.elementRef.nativeElement, 'focus').pipe(takeUntil(this._destroyer))
            .subscribe(() => {
                this.gridTarget = new GridUnderManagement(evt.grid, this.keyboardHandler, this._destroyer, this.cdr);
                this.gridTarget.subscribe();
            });

        fromEvent((evt.grid as IgxHierarchicalGridComponent).tbody.nativeElement, 'focus')
            .pipe(takeUntil(this._destroyer)).subscribe(() => {
                this.gridTarget = new GridUnderManagement(evt.grid, this.keyboardHandler, this._destroyer, this.cdr);
                this.gridTarget.subscribe();
            });
    }

    public gridKeydown(evt) {
        const key = evt.key.toLowerCase();
        if (this.keyboardHandler.gridSection === GridSection.FOOTER) {
            switch (key) {
                case 'end':
                    this.keyboardHandler.selectItem(3);
                    break;
                case 'home':
                    this.keyboardHandler.selectItem(2);
                    break;
                case 'arrowleft':
                    this.keyboardHandler.selectItem(0);
                    break;
                case 'arrowright':
                    this.keyboardHandler.selectItem(1);
                    break;
                default:
                    break;
            }
            return;
        }
        const activeNode = this.gridTarget.hGrid.navigation.activeNode;
        if (this.keyboardHandler.gridSection === GridSection.THEAD) {
            if (key === 'l' && evt.altKey) {
                this.keyboardHandler.selectItem(3);
                return;
            }
            const col = this.gridTarget.hGrid.visibleColumns.find
                (c => c.visibleIndex === activeNode.column && c.level === activeNode.level);
            if (key === 'l' && evt.ctrlKey && evt.shiftKey && col && !col.columnGroup && col.filterable) {
                this.keyboardHandler.selectItem(4);
            }

            if ((key === 'arrowup' || key === 'arrowdown') && evt.ctrlKey && col && !col.columnGroup && col.sortable) {
                this.keyboardHandler.selectItem(1);
            }
        }

        if (this.keyboardHandler.gridSection === GridSection.TBODY) {
            if (key === 'enter') {
                const columnName = this.gridTarget.hGrid.getColumnByVisibleIndex(activeNode.column).field;
                const cell = this.gridTarget.hGrid.getCellByColumn(activeNode.row, columnName);
                if (cell && cell.column.editable && cell.editMode) {
                    this.keyboardHandler.selectItem(0);
                }
            }
            if ((evt.code === 'End' || evt.code === 'Home') && evt.ctrlKey) {
                this.keyboardHandler.selectItem(3);
            }
        }
    }
}

export class GridUnderManagement {
    public hGrid: IgxHierarchicalGridComponent;
    public destroyer = new Subject<void>();
    public keyboardHandler: KeyboardHandler;
    public cdr: ChangeDetectorRef;

    constructor(hGrid: IgxHierarchicalGridComponent, keyboardHandler: KeyboardHandler,
                destroyer: Subject<void>, cdr: ChangeDetectorRef) {
        this.hGrid = hGrid;
        this.keyboardHandler = keyboardHandler;
        this.destroyer = destroyer;
        this.cdr = cdr;
    }

    public subscribe() {
        this.hGrid.columnSelectionChanging.pipe(takeUntil(this.destroyer))
            .subscribe((args) => {
                const evt = args.event;
                if (evt.type === 'keydown') {
                    this.keyboardHandler.selectItem(0);
                }
            });

        this.hGrid.rowToggle.pipe(takeUntil(this.destroyer))
            .subscribe((args) => {
                const evt = args.event as KeyboardEvent;
                if (!evt || evt.type !== 'keydown') {
                    return;
                }

                return evt.code === 'ArrowLeft' || evt.code === 'ArrowUp' ? this.keyboardHandler.selectItem(1) :
                    this.keyboardHandler.selectItem(2);
            });
    }

    public toggleHeaderCombinations(activeNode) {
        if (this.keyboardHandler.gridSection !== GridSection.THEAD || activeNode.column === undefined || activeNode.level === undefined) {
            return;
        }
        const grid = activeNode.owner || this.hGrid;
        const currColumn = grid.columnList
            .find(c => c.visibleIndex === activeNode.column && c.level === activeNode.level);

        const actions = this.extractColumnActions(currColumn);
        this.keyboardHandler.enableActionItems(actions);
    }

    public toggleBodyCombinations(activeNode) {
        const grid = activeNode.owner || this.hGrid;
        const rowRef = grid.getRowByIndex(activeNode.row);
        if (this.keyboardHandler.gridSection !== GridSection.TBODY || !rowRef) {
            return;
        }

        if (rowRef.isGroupByRow) {
            this.keyboardHandler.enableActionItems([ItemAction.Expandable]);
        } else {
            const cell = grid.getCellByColumn(activeNode.row,
                grid.columnList.find((col) => col.visibleIndex === activeNode.column).field);
            this.toggleCellCombinations(cell);
        }

    }

    public toggleCellCombinations(cell?: CellType) {
        if (this.keyboardHandler.gridSection !== GridSection.TBODY || !cell) {
            return;
        }

        const actions = this.extractCellActions(cell);
        this.keyboardHandler.enableActionItems(actions);
    }

    public extractColumnActions(col: IgxColumnComponent | IgxColumnGroupComponent) {
        const res = [];
        if (col.sortable) {
            res.push(ItemAction.Sortable);
        }

        if (col.filterable && !col.columnGroup) {
            res.push(ItemAction.Filterable);
        }

        if (col.collapsible) {
            res.push(ItemAction.Collapsible);
        }

        if (col.groupable) {
            res.push(ItemAction.Groupable);
        }

        if (col.selectable) {
            res.push(ItemAction.Selectable);
        }

        return res;
    }

    public extractCellActions(cell: CellType) {
        const res = [];
        if (cell.editable) {
            res.push(ItemAction.Editable);
        }

        res.push(ItemAction.Collapsible);
        return res;
    }
}
```
```html
<div class="sample">
  <div class="grid_wrapper">
    <igx-hierarchical-grid height="570px" width="100%" [allowAdvancedFiltering]="true"
      columnSelection="multiple" [allowFiltering]="true" [filterMode]="'excelStyleFilter'"
      (keydown)="gridKeydown($event)" (activeNodeChange)="onActiveNodeChange($event)">
      <igx-paginator></igx-paginator>
      @if (false) {
        <igx-grid-toolbar></igx-grid-toolbar>
      }

      <igx-column field="CustomerID" [filterable]="true" [sortable]="true" [editable]="true"></igx-column>
      <igx-column-group header="General Information">
        <igx-column field="CompanyName" [sortable]="true"></igx-column>
        <igx-column-group  header="Personal Details">
          <igx-column field="ContactName" [filterable]="true" [hasSummary]="true" [editable]="true"></igx-column>
          <igx-column field="ContactTitle" [sortable]="true"></igx-column>
        </igx-column-group>
      </igx-column-group>
      <igx-column-group header="Address Information">
        <igx-column-group header="Location" [collapsible]="true" [expanded]="false" (expandedChange)="expandChange()">
          <igx-column field="FullAddress" header="Full Address" [width]="'250px'" [visibleWhenCollapsed]="true"
          [dataType]="'string'" [sortable]="true" [editable]="true"></igx-column>
          <igx-column [visibleWhenCollapsed]="false" field="Address"  [selectable]="false" [filterable]="true"></igx-column>
          <igx-column [visibleWhenCollapsed]="false" field="City" [sortable]="true"></igx-column>
          <igx-column [visibleWhenCollapsed]="false" field="PostalCode" [selectable]="false" [filterable]="true" [hasSummary]="true"></igx-column>
          <igx-column [visibleWhenCollapsed]="false" field="Country" [selectable]="false"></igx-column>
        </igx-column-group>
        <igx-column-group header="Contact Information">
          <igx-column field="Phone" [filterable]="true"></igx-column>
          <igx-column field="Fax"></igx-column>
        </igx-column-group>
      </igx-column-group>

      <igx-row-island [height]="null" [key]="'Orders'" [autoGenerate]="false" columnSelection="multiple" (gridCreated)="onGridCreated($event)" (activeNodeChange)="onActiveNodeChange($event)" [allowAdvancedFiltering]="true" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
        <igx-grid-toolbar *igxGridToolbar="let childGrid"></igx-grid-toolbar>

        <igx-column-group header="Order Information">
          <igx-column-group header="Order Details">
            <igx-column [editable]="true" [sortable]="true" field="OrderID"></igx-column>
            <igx-column [editable]="true" [sortable]="true" field="EmployeeID"></igx-column>
            <igx-column [editable]="true" [sortable]="true" field="OrderDate"  [dataType]="'date'" [hasSummary]="true"></igx-column>
            <igx-column [editable]="true" field="RequiredDate"  [dataType]="'date'"></igx-column>
          </igx-column-group>
          <igx-column-group header="General Shipping Information">
            <igx-column field="ShippedDate" [dataType]="'date'"></igx-column>
            <igx-column field="ShipVia" [selectable]="false"></igx-column>
            <igx-column field="Freight" [selectable]="false"></igx-column>
            <igx-column field="ShipName" [hasSummary]="true"></igx-column>
          </igx-column-group>
          <igx-column-group header="Shipping Location">
            <igx-column field="ShipAddress"></igx-column>
            <igx-column field="ShipCity"></igx-column>
            <igx-column field="ShipPostalCode"></igx-column>
            <igx-column field="ShipCountry"></igx-column>
          </igx-column-group>
        </igx-column-group>
        <igx-row-island [height]="null" [key]="'OrderDetails'" [autoGenerate]="false" columnSelection="single" (gridCreated)="onGridCreated($event)" [allowAdvancedFiltering]="true" [allowFiltering]="true" [filterMode]="'excelStyleFilter'" (activeNodeChange)="onActiveNodeChange($event)">
          <igx-grid-toolbar *igxGridToolbar="let childGrid"></igx-grid-toolbar>

          <igx-column [editable]="true" [sortable]="true" field="ProductID" ></igx-column>
          <igx-column [editable]="true" [sortable]="true" field="UnitPrice"></igx-column>
          <igx-column [editable]="true" [sortable]="true" field="Quantity" [selectable]="false"></igx-column>
          <igx-column [editable]="true" field="Discount" [hasSummary]="true"></igx-column>
        </igx-row-island>
      </igx-row-island>
    </igx-hierarchical-grid>
  </div>
  <div class="list-sample">
    <igx-list>
      @if (keyboardCollection.length > 0) {
        <igx-list-item [isHeader]="true">{{headerList}}</igx-list-item>
      }
      @for (c of keyboardCollection; track c; let idx = $index) {
        <igx-list-item @load [ngClass]="{ 'active': c.active, 'disabled': !c.active}" [@toggle]="c.completed ? 'selected' : 'deselected'">
          <h4 igxListLineTitle>{{ c.title }}</h4>
          <p igxListLineSubTitle>{{ c.subTitle }}</p>
          <igx-checkbox [disabled]="!c.active" [checked]="c.completed" (change)="onCheckChange($event, idx)"></igx-checkbox>
        </igx-list-item>
      }
      <ng-template igxEmptyList>
        <span class="empty-list">
          <h6>Use the native navigation of the browser until you reach some of the following grid sections below:</h6>
          <ul>
            <li>Header</li>
            <li>Body</li>
            <li>Summary</li>
          </ul>
          <h6>When reached, an <b>action list</b> will be shown.</h6>
        </span>
      </ng-template>
    </igx-list>
  </div>
</div>
```
```scss
@use '../../../variables' as *;

$my-color: color($color: 'success');

$custom-checkbox-theme: checkbox-theme(
    $fill-color: $my-color,
    $border-radius: 10px
);

.list-sample {
    @include tokens($custom-checkbox-theme);
}

.sample {
    display: flex;


    .grid_wrapper {
        --ig-size: var(--ig-size-small);
        padding-left: 15px;
        padding-top: 15px;
        width: 75%;
    }

    .list-sample {
        padding-top: 15px;
        width: 20%;

        .disabled {
            opacity: .4;
        }

        .active {
            opacity: 1;
        }

        igx-list {
            .igx-list__item-line-title, .igx-list__item-line-subtitle {
                font-size: 13px;
            }

            height: 570px;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2),
            0 1px 1px 0 rgba(0, 0, 0, 0.14),
            0 2px 1px -1px rgba(0, 0, 0, 0.12);
        }

        .empty-list {
            opacity: 1;
            h6 {
                padding: 15px;
                font-size: 15px;
            }

            ul {
                li {
                    font-size: 13px;
                }
                margin-left: 15px;
                font-weight: 400;
            }
        }
    }
}
```
<div class="divider--half"></div>
}
@@if (igxName === "IgxTreeGrid") {
```typescript
/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @typescript-eslint/naming-convention */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CellType, IActiveNodeChangeEventArgs, IgxCellTemplateDirective, IgxColumnComponent, IgxColumnGroupComponent, IgxGridToolbarComponent } from 'igniteui-angular/grids/core';
import { IgxEmptyListTemplateDirective, IgxListComponent, IgxListItemComponent, IgxListLineSubTitleDirective, IgxListLineTitleDirective } from 'igniteui-angular/list';
import { IgxOverlayService } from 'igniteui-angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { NgClass } from '@angular/common';

// eslint-disable-next-line no-shadow
enum GridSection {
    THEAD = 'igx-grid__thead-wrapper',
    TBODY = 'igx-grid__tbody-content',
    FOOTER = 'igx-grid__tfoot'
}

// eslint-disable-next-line no-shadow
enum ItemAction {
    Filterable,
    Sortable,
    Selectable,
    Groupable,
    Collapsible,
    Expandable,
    Editable,
    Always
}

// eslint-disable-next-line no-shadow
enum ElementTags {
    GROUPBY_ROW = 'IGX-GRID-GROUPBY-ROW',
    COLUMN_GROUP = 'IGX-COLUMN-GROUP'
}

class Item {
    public title: string;
    public subTitle: string;
    public action: ItemAction;
    public active = false;

    private _completed: boolean;

    public constructor(title: string, subTitle: string, completed: boolean, ítemAction?: ItemAction) {
        this.title = title;
        this.subTitle = subTitle;
        this.completed = completed;
        this.action = ítemAction;

        if (ítemAction === ItemAction.Always) {
            this.active = true;
        }
    }

    public set completed(value: boolean) {
        if (this.active || (!value && !this.completed)) {
            this._completed = value;
        }
    }

    public get completed() {
        return this._completed;
    }
}
class KeyboardHandler {
    private _collection: Item[];
    private _section: GridSection;

    public constructor(colleciton: Item[], section: GridSection) {
        this._collection = colleciton;
        this._section = section;
    }

    public set collection(collection: Item[]) {
        this._collection = collection;
    }

    public get collection() {
        return this._collection;
    }

    public set gridSection(section: GridSection) {
        this._section = section;
    }

    public get gridSection() {
        return this._section;
    }

    public enableActionItems(action: ItemAction[]) {
        this.resetCollection();
        action.forEach(element => {
            this._collection
                .filter(e => e.action === element)
                .map(e => e.active = true);
        });
    }

    public resetCollection() {
        this._collection.forEach(e => {
            if (e.action !== ItemAction.Always) {
                e.active = false;
            }
        });
    }

    public selectItem(idx: number) {
        if (!this._collection.length) {
            return;
        }

        this._collection[idx].completed = true;
    }

    public deselectItem(idx: number) {
        if (!this._collection.length) {
            return;
        }
        this._collection[idx].completed = false;
    }
}

const theadKeyCombinations = [
    new Item('space key', 'select column', false, ItemAction.Selectable),
    new Item('ctrl + arrow up/down', 'sorts the column asc/desc', false, ItemAction.Sortable),
    new Item('alt + arrow left/right/up/down', 'expand/collapse active multi column header',
        false,
        ItemAction.Collapsible),
    new Item('ctrl + shift + l', 'opens the excel style filtering', false, ItemAction.Filterable),
    new Item('alt + l', 'opens the advanced filtering', false, ItemAction.Filterable)
];

const tbodyKeyCombinations: Item[] = [
    new Item('enter', 'enter in edit mode', false, ItemAction.Editable),
    new Item('alt + arrow left/up', 'collapse row', false, ItemAction.Collapsible),
    new Item('alt + arrow right/down', 'expand row', false, ItemAction.Collapsible),
    new Item('ctrl + Home/End', 'navigates to the upper-left/bottom-right cell', false, ItemAction.Always)
];

const summaryCombinations: Item[] = [
    new Item('ArrowLeft', 'navigates one summary cell right', false, ItemAction.Always),
    new Item('ArrowRight', 'navigates one summary cell left', false, ItemAction.Always),
    new Item('Home', 'navigates to the first summary cell', false, ItemAction.Always),
    new Item('End', 'navigates to the last summary cell', false, ItemAction.Always)
];

@Component({
    selector: 'app-grid-keyboardnav',
    templateUrl: './tgrid-keyboardnav-guide.component.html',
    styleUrls: ['tgrid-keyboardnav-guide.component.scss'],
    animations: [
        trigger('toggle', [
            state('selected', style({
                color: '#4eb862'
            })),
            state('deselected', style({
                color: 'black'
            })),
            transition('deselected => selected', [
                animate('.3s')
            ]),
            transition('selected => deselected', [
                animate('.3s')
            ])
        ]),
        trigger('load', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('.3s', style({ opacity: .4 }))
            ])
        ])
    ],
    imports: [IgxTreeGridComponent, IgxPaginatorComponent, IgxGridToolbarComponent, IgxColumnComponent, IgxColumnGroupComponent, IgxCellTemplateDirective, IgxListComponent, IgxListItemComponent, NgClass, IgxListLineTitleDirective, IgxListLineSubTitleDirective, IgxCheckboxComponent, IgxEmptyListTemplateDirective]
})
export class TGridKeyboardnavGuide implements OnInit, OnDestroy {
    private cdr = inject(ChangeDetectorRef);
    private _overlay = inject(IgxOverlayService);

    @ViewChild(IgxTreeGridComponent, { static: true })
    public tgrid: IgxTreeGridComponent;

    @ViewChild(IgxListComponent, { static: true })
    public listref: IgxListComponent;
    public data;

    public get keyboardCollection() {
        return this._keyboardHandler.collection;
    }

    public get headerList() {
        return this._keyboardHandler.gridSection === GridSection.THEAD ?
            'HEADER COMBINATIONS' : this._keyboardHandler.gridSection === GridSection.TBODY ?
                'BODY COMBITNATIONS' : this._keyboardHandler.gridSection === GridSection.FOOTER ?
                    'SUMMARY COMBINATIONS' : '';
    }

    private _destroyer = new Subject<void>();
    private _keyboardHandler = new KeyboardHandler([], GridSection.THEAD);

    public onActiveNodeChange(evt: IActiveNodeChangeEventArgs) {
        if (this.tgrid.crudService.cell) {
            return;
        }

        const gridSection = evt.row < 0 ? GridSection.THEAD : evt.row === this.tgrid.dataView.length ?
            GridSection.FOOTER : GridSection.TBODY;
        this.changeKeyboardCollection(gridSection);
        this.toggleHeaderCombinations(evt);
        this.toggleBodyCombinations(evt);
    }

    public ngOnInit() {
        this.data = generateEmployeeDetailedFlatData();
        this.tgrid.columnSelectionChanging.pipe(takeUntil(this._destroyer))
            .subscribe((args) => {
                const evt = args.event;
                if (evt.type === 'keydown') {
                    this._keyboardHandler.selectItem(0);
                }
            });

        this.tgrid.rowToggle.pipe(takeUntil(this._destroyer))
            .subscribe((args) => {
                const evt = args.event as KeyboardEvent;
                if (evt.type !== 'keydown') {
                    return;
                }

                return evt.code === 'ArrowLeft' || evt.code === 'ArrowUp' ? this._keyboardHandler.selectItem(1) :
                    this._keyboardHandler.selectItem(2);
            });

        this.listref.itemClicked.pipe(takeUntil(this._destroyer))
            .subscribe((args) => {
                args.event.stopPropagation();
            });
    }

    public ngOnDestroy() {
        this._destroyer.next();
    }

    public expandChange() {
        if (!this._keyboardHandler.collection.length) {
            return;
        }

        this._keyboardHandler.selectItem(2);
    }

    public onCheckChange(evt, idx) {
        evt.checked ? this._keyboardHandler.selectItem(idx) : this._keyboardHandler.deselectItem(idx);
    }

    public changeKeyboardCollection(gridSection: GridSection) {
        switch (gridSection) {
            case GridSection.THEAD:
                this._keyboardHandler.collection = theadKeyCombinations;
                break;
            case GridSection.TBODY:
                this._keyboardHandler.collection = tbodyKeyCombinations;
                break;
            case GridSection.FOOTER:
                this._keyboardHandler.collection = summaryCombinations;
                break;
            default:
                this._keyboardHandler.collection = [];
                return;
        }
        this._keyboardHandler.gridSection = gridSection;
    }

    public gridKeydown(evt) {
        const key = evt.key.toLowerCase();
        if (key === 'tab') { return; }
        if (this._keyboardHandler.gridSection === GridSection.FOOTER) {
            switch (key) {
                case 'end':
                    this._keyboardHandler.selectItem(3);
                    break;
                case 'home':
                    this._keyboardHandler.selectItem(2);
                    break;
                case 'arrowleft':
                    this._keyboardHandler.selectItem(0);
                    break;
                case 'arrowright':
                    this._keyboardHandler.selectItem(1);
                    break;
                default:
                    break;
            }
            return;
        }
        const activeNode = this.tgrid.navigation.activeNode;
        if (this._keyboardHandler.gridSection === GridSection.THEAD) {
            if (key === 'l' && evt.altKey) {
                this._keyboardHandler.selectItem(4);
                return;
            }
            const col = this.tgrid.visibleColumns.find
                (c => c.visibleIndex === activeNode.column && c.level === activeNode.level);
            if (key === 'l' && evt.ctrlKey && evt.shiftKey && col && !col.columnGroup && col.filterable) {
                this._keyboardHandler.selectItem(3);
            }

            if ((key === 'arrowup' || key === 'arrowdown') && evt.ctrlKey && col && !col.columnGroup && col.sortable) {
                this._keyboardHandler.selectItem(1);
            }
        }

        if (this._keyboardHandler.gridSection === GridSection.TBODY) {
            if (key === 'enter') {
                const columnName = this.tgrid.getColumnByVisibleIndex(activeNode.column).field;
                const cell = this.tgrid.getCellByColumn(activeNode.row, columnName);

                if (cell && cell.column.editable && cell.editMode) {
                    this._keyboardHandler.selectItem(0);
                }
            }
            if ((evt.code === 'End' || evt.code === 'Home') && evt.ctrlKey) {
                this._keyboardHandler.selectItem(3);
                this.cdr.detectChanges();
            }
        }
    }

    public toggleHeaderCombinations(activeNode) {
        if (this._keyboardHandler.gridSection !== GridSection.THEAD) {
            return;
        }
        const currColumn = this.tgrid.columnList
            .find(c => c.visibleIndex === activeNode.column && c.level === activeNode.level);

        const actions = this.extractColumnActions(currColumn);
        this._keyboardHandler.enableActionItems(actions);
    }

    public toggleBodyCombinations(activeNode) {
        const rowRef = this.tgrid.getRowByIndex(activeNode.row);
        if (this._keyboardHandler.gridSection !== GridSection.TBODY || !rowRef) {
            return;
        }
        const cell = this.tgrid.getCellByColumn(activeNode.row,
            this.tgrid.columnList.find((col) => col.visibleIndex === activeNode.column).field);
        this.toggleCellCombinations(cell);
    }

    public toggleCellCombinations(cell?: CellType) {
        if (this._keyboardHandler.gridSection !== GridSection.TBODY) {
            return;
        }

        const actions = this.extractCellActions(cell);
        this._keyboardHandler.enableActionItems(actions);
    }

    public extractColumnActions(col: IgxColumnComponent | IgxColumnGroupComponent) {
        const res = [];
        if (col.sortable) {
            res.push(ItemAction.Sortable);
        }
        if (col.filterable && !col.columnGroup) {
            res.push(ItemAction.Filterable);
        }

        if (col.collapsible) {
            res.push(ItemAction.Collapsible);
        }

        if (col.groupable) {
            res.push(ItemAction.Groupable);
        }

        if (col.selectable) {
            res.push(ItemAction.Selectable);
        }

        return res;
    }

    public extractCellActions(cell: CellType) {
        const res = [];
        if (cell.editable) {
            res.push(ItemAction.Editable);
        }
        if (cell.row.children && cell.row.children.length) {
            res.push(ItemAction.Collapsible);
        }
        return res;
    }
}
```
```html
<div class="sample">
  <div class="grid_wrapper">
    <igx-tree-grid [data]="data" height="450px" width="100%" [moving]="true" [allowFiltering]="true" [filterMode]="'excelStyleFilter'"
      summaryCalculationMode="rootLevelOnly" primaryKey="ID" foreignKey="ParentID" columnSelection="single" [allowAdvancedFiltering]="true"
      (keydown)="gridKeydown($event)" (activeNodeChange)="onActiveNodeChange($event)">
      <igx-paginator></igx-paginator>
      @if (false) {
        <igx-grid-toolbar></igx-grid-toolbar>
      }

      <igx-column field="Name" [hasSummary]="true" [editable]="true" [sortable]="true"></igx-column>
      <igx-column-group header="General Information" >
        <igx-column field="HireDate" [hasSummary]="true" [editable]="true" [sortable]="true"></igx-column>
        <igx-column-group header="Personel Details" [collapsible]="true"
          dataType="string" [expanded]="false" (expandedChange)="expandChange()">
          <igx-column field="ID" [width]="'250px'" [visibleWhenCollapsed]="true" [sortable]="true"></igx-column>
          <igx-column field="Title" [visibleWhenCollapsed]="false"
          [hasSummary]="true" [sortable]="true" [editable]="true"></igx-column>
          <igx-column field="Age" [visibleWhenCollapsed]="false" [sortable]="true" [groupable]="true" [editable]="true"></igx-column>
        </igx-column-group>
      </igx-column-group>
      <igx-column-group header="Address Information">
        <igx-column-group header="Location" [collapsible]="true" [expanded]="false" (expandedChange)="expandChange()">
          <igx-column field="FullAddress" header="Full Address" [width]="'250px'" [visibleWhenCollapsed]="true"
            [dataType]="'string'" [visibleWhenCollapsed]="true" [sortable]="true">
            <ng-template igxCell let-cell="cell">
              <div class="address-container">
                <span><strong>Country:</strong> {{cell.row.data.Country}}</span>
                <br/>
                <span><strong>City:</strong> {{cell.row.data.City}}</span>
                <br/>
                <span><strong>Postal Code:</strong> {{cell.row.data.Address}}</span>
              </div>
            </ng-template>
          </igx-column>
          <igx-column field="Country" [visibleWhenCollapsed]="false" [hasSummary]="true" [sortable]="true" [editable]="true"></igx-column>
          <igx-column field="City" [visibleWhenCollapsed]="false" [hasSummary]="true" [groupable]="true" [editable]="true"></igx-column>
          <igx-column field="Address" [visibleWhenCollapsed]="false"></igx-column>
        </igx-column-group>
        <igx-column-group header="Contact Information">
          <igx-column field="Phone" [editable]="true"></igx-column>
          <igx-column field="Fax" [editable]="true"></igx-column>
          <igx-column field="PostalCode"></igx-column>
        </igx-column-group>
      </igx-column-group>
    </igx-tree-grid>
  </div>
  <div class="list-sample">
    <igx-list>
      @if (keyboardCollection.length > 0) {
        <igx-list-item [isHeader]="true">{{ headerList }}</igx-list-item>
      }
      @for (c of keyboardCollection; track c; let idx = $index) {
        <igx-list-item @load [ngClass]="{ 'active': c.active, 'disabled': !c.active}" [@toggle]="c.completed ? 'selected' : 'deselected'">
          <h4 igxListLineTitle>{{ c.title }}</h4>
          <p igxListLineSubTitle>{{ c.subTitle }}</p>
          <igx-checkbox [disabled]="!c.active" [checked]="c.completed" (change)="onCheckChange($event, idx)"></igx-checkbox>
        </igx-list-item>
      }
      <ng-template igxEmptyList>
        <span class="empty-list">
          <h6>Use the native navigation of the browser until you reach some of the following grid sections below:</h6>
          <ul>
            <li>Header</li>
            <li>Body</li>
            <li>Summary</li>
          </ul>
          <h6>When reached, an <b>action list</b> will be shown.</h6>
        </span>
      </ng-template>
    </igx-list>
  </div>
</div>
```
```scss
@use '../../../variables' as *;

$my-color: color($default-palette, 'success');

$custom-checkbox-theme: checkbox-theme(
    $fill-color: $my-color,
    $border-radius: 10px
);

.list-sample ::ng-deep {
    @include checkbox($custom-checkbox-theme);
}

.sample {
    display: flex;

    .grid_wrapper {
        --ig-size: var(--ig-size-small);
        padding-left: 15px;
        padding-top: 15px;
        width: 75%;
    }


    .list-sample {
        padding-top: 15px;
        width: 20%;

        .disabled {
            opacity: .4;
        }

        .active {
            opacity: 1;
        }

        igx-list {
            .igx-list__item-line-title, .igx-list__item-line-subtitle {
                font-size: 13px;
            }

            height: 450px;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2),
            0 1px 1px 0 rgba(0, 0, 0, 0.14),
            0 2px 1px -1px rgba(0, 0, 0, 0.12);
        }

        .empty-list {
            opacity: 1;
            h6 {
                padding: 15px;
                font-size: 15px;
            }

            ul {
                li {
                    font-size: 13px;
                }
                margin-left: 15px;
                font-weight: 400;
            }
        }
    }
}
```
<div class="divider--half"></div>
}
## Custom keyboard navigation
Overriding the default behavior for a certain key or keys combination is one of the benefits that the **Keyboard Navigation** feature provides. For example: press the <kbd>Enter</kbd> or <kbd>Tab</kbd> key to navigate to the next cell or the cell below. This or any other navigation scenario is easily achieved by the **Keyboard Navigation** API:
| API                                                                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Arguments                                                                                                                     |
| :--------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| [`gridKeydown`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#gridKeydown)           | An event that is emitted when any of key press/combinations described above is performed. Can be canceled. For any other key press/combination, use the default `onkeydown` event.                                                                                                                                                                                                                                                                                                                                                                               | [IGridKeydownEventArgs](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igridkeydowneventargs.html)                                    |
| [`activeNodeChange`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#activeNodeChange) | An event that is emitted when the active node is changed. You can use it to determine the Active focus position (header, tbody etc.), column index, row index or nested level.                                                                                                                                                                                                                                                                                                                                                                                   | [IActiveNodeChangeEventArgs](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/iactivenodechangeeventargs.html)                          |
| [`navigateTo`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#navigateTo)             | Navigates to a position in the grid, based on provided `rowindex` and `visibleColumnIndex`. It can also execute a custom logic over the target element, through a callback function that accepts param of type `{ targetType: GridKeydownTargetType, target: Object }` . Usage: <br />_grid.navigateTo(10, 3, (args) => { args.target.nativeElement.focus(); });_                                                                                                                                                                                                | `rowindex`: number, `visibleColumnIndex`: number, `callback`: (`{ targetType: GridKeydownTargetType, target: Object }`) => {} |
| [`getNextCell`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#getNextCell)           | returns [`ICellPosition`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/icellposition.html) object, which defines the next cell by `rowIndex` and `visibleColumnIndex`. A callback function can be passed as a third parameter of [`getNextCell`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#getnextcell) method. The callback function accepts `IgxColumnComponent` as a param and returns a `boolean` value indication if a given criteria is met: <br />_const nextEditableCell = grid.getNextCell(0, 4, (col) => col.editable);_                     | `currentRowIndex`: number, `currentVisibleColumnIndex`: number, `callback`: (`IgxColumnComponent`) => boolean                 |
| [`getPreviousCell`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#getPreviousCell)   | returns [`ICellPosition`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/icellposition.html) object, which defines the previous cell by `rowIndex` and `visibleColumnIndex`. A callback function can be passed as a third parameter of [`getPreviousCell`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#getPreviousCell) method. The callback function accepts `IgxColumnComponent` as a param and returns a `boolean` value indication if a given criteria is met: <br />_const prevEditableCell = grid.getPreviousCell(0, 4, (col) => col.editable);_ | `currentRowIndex`: number, `currentVisibleColumnIndex`: number, `callback`: (`IgxColumnComponent`) => boolean                 |
Let's try the API to demonstrate how to achieve common scenarios like user input validation and custom navigation. First we need to register an event handler for the [`gridKeydown`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#gridKeydown) event:
```html
<igx-tree-grid #grid1 [data]="data" (gridKeydown)="customKeydown($event)">
</igx-tree-grid>
```
```typescript
public customKeydown(args: IGridKeydownEventArgs) {
    const target: IgxGridCell = args.target as IgxGridCell;
    const evt: KeyboardEvent = args.event as KeyboardEvent;
    const type = args.targetType;

    if (type === 'dataCell' && target.inEditMode && evt.key.toLowerCase() === 'tab') {
        // 1. USER INPUT VALIDATION ON TAB
    }
    if (type === 'dataCell' && evt.key.toLowerCase() === 'enter') {
        // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
    }
}
```
Based on the [IGridKeydownEventArgs](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igridkeydowneventargs.html) values we identified two cases, where to provide our own logic (see above). Now, using the methods from the API, let's perform the desired - if the user is pressing <kbd>Tab</kbd> key over a cell in edit mode, we will perform validation on the input. If the user is pressing <kbd>Enter</kbd> key over a cell, we will move focus to cell in the next row:
```typescript
    // 1. USER INPUT VALIDATION ON TAB
    if (target.column.dataType === 'number' && target.editValue < 18) {
        // alert the user that the input is invalid
        return;
    }
    // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
    const nexRowIndex = target.row.expanded ? target.rowIndex + 2 : target.rowIndex + 1;
    grid.navigateTo(nexRowIndex, target.visibleColumnIndex,
        (obj) => { obj.target.nativeElement.focus(); });
```
> Note: Please refer to the sample code for full implementation details.
Use the demo below to try out the custom scenarios that we just implemented:
- Double click or press <kbd>F2</kbd> key on a cell in the `Age` column, change the value to `16` and press <kbd>tab</kbd> key. Prompt message will be shown.
- Select a cell and press <kbd>Enter</kbd> key a couple of times. Every key press will move the focus to a cell in the next row, under the same column.
```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { CellType, GridSelectionMode, IGridKeydownEventArgs, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { EMPLOYEE_DATA } from './data';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-keyboard-navigation-sample',
    styleUrls: ['./tree-grid-keyboard-navigation-sample.component.scss'],
    templateUrl: './tree-grid-keyboard-navigation-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent]
})
export class TreeGridKBNavigationComponent implements OnInit {
    @ViewChild('grid1', { read: IgxTreeGridComponent, static: true })
    public grid1: IgxTreeGridComponent;
    public localData: any[];
    public selectionMode: GridSelectionMode = 'multiple';
    constructor() { }

    public ngOnInit() {
        this.localData = EMPLOYEE_DATA;
    }

    public customKeydown(args: IGridKeydownEventArgs) {
        const target: CellType = args.target as CellType;
        const evt: KeyboardEvent = args.event as KeyboardEvent;
        const type = args.targetType;

        if (type === 'dataCell' && target.editMode && evt.key.toLowerCase() === 'tab') {
            // Value validation for number column.
            // This covers both 'tab' and 'shift+tab' key interactions.
            args.event.preventDefault();
            args.cancel = true;
            if (target.column.dataType === 'number' && target.editValue < 18) {
                alert('The value should be bigger than 18');
                return;
            }
            const cell = evt.shiftKey ?
                this.grid1.getPreviousCell(target.row.index, target.column.visibleIndex, (col) => col.editable) :
                this.grid1.getNextCell(target.row.index, target.column.visibleIndex, (col) => col.editable);

            this.grid1.navigateTo(cell.rowIndex, cell.visibleColumnIndex,
                (obj) => { obj.target.activate(); });
        } else if (type === 'dataCell' && evt.key.toLowerCase() === 'enter') {
            // Perform column based kb navigation with 'enter' key press
            args.cancel = true;
            this.grid1.navigateTo(target.row.index + 1, target.column.visibleIndex,
                (obj) => { obj.target.activate(); });
        }
    }
}
```
```html
<div class="grid__wrapper">
    <igx-tree-grid [igxPreventDocumentScroll]="true"  #grid1 [data]="localData" childDataKey="Employees" width="100%" height="500px"
        (gridKeydown)="customKeydown($event)" [moving]="true" [autoGenerate]="false" [rowSelection]="selectionMode" [allowFiltering]="true">
        <igx-paginator></igx-paginator>
        <igx-column field="HireDate" dataType="date" [sortable]="true" [editable]="true"
            [resizable]="true"></igx-column>
        <igx-column field="Age" dataType="number" [sortable]="true" [editable]="true"
            [resizable]="true"></igx-column>
        <igx-column field="Name" dataType="string" [sortable]="true" [editable]="true"
            [resizable]="true"></igx-column>
    </igx-tree-grid>
</div>
```
```scss
.grid__wrapper {
    --ig-size: var(--ig-size-small);
    margin: 15px;
}
```
## Known Limitations
| Limitation                                                 | Description                                                                                                                                                      |
| :--------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Navigating inside а grid with scrollable parent container. | If the grid is positioned inside a scrollable parent container and the user navigates to a grid cell that is out of view, parent container will not be scrolled. |
## API References
- [IgxTreeGridComponent API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html)
- [IgxTreeGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
## Additional Resources
<div class="divider--half"></div>
_[Hierarchical Grid Keyboard Navigation](../hierarchicalgrid/keyboard-navigation.md)
_ [Grid Keyboard Navigation](../grid/keyboard-navigation.md)
- [Tree Grid overview](tree-grid.md)
- [Virtualization and Performance](virtualization.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
