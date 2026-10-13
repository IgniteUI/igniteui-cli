---
title: Angular Grid Keyboard Navigation - Ignite UI for Angular
description: Learn how to use Grid Keyboard Navigation with Ignite UI for Angular. With Keyboard interaction, users can quickly navigate between cells, rows, and columns.
keywords: keyboard navigation, ignite ui for angular, infragistics
license: commercial
llms:
  description: "Keyboard navigation in the IgxGrid provides a rich variety of keyboard interactions for the user."
_tocName: Keyboard navigation
_premium: true
---
# Angular Grid Keyboard Navigation

 Keyboard navigation in the **IgxGrid** provides a rich variety of keyboard interactions for the user. It enhances the accessibility of the **IgxGrid** and allows to navigate through any type of elements inside (cell, row, column header, toolbar, footer, etc.). This functionality is enabled by default, and the developer has the option to override any of the default behaviors in an easy way.

The tabulations of the IgxGrid has been reduced so that the navigation is compliant with W3C accessibility standards and convenient to use.

Currently, the IgxGrid introduces the following tab stops:

- **GroupBy or Toolbar area** (if enabled);
- **IgxGrid header**;
- **IgxGrid body**;
- **Column summaries** (if enabled);
- **IgxGrid paginator** (if enabled);

**Note:** 
Due to this change, navigating between the cells with <kbd>tab</kbd> and <kbd>Shift + Tab</kbd> is no longer supported in the IgxGrid.
Pressing the <kbd>Tab</kbd> key now goes through the tab stops in the following order: **GroupBy** / **Toolbar** -> **Headers** -> **Body** -> **Summaries** -> **Footer / Paginator**.

**Note:** 
Exposing any **focusable** element into the **IgxGrid** body via template may introduce **side effects** in the keyboard navigation, since the default
browser behavior is not prevented. It is the developer's responsibility to prevent or modify it appropriately.

## Header Navigation

A full _keyboard navigation_ support in the **IgxGrid** header is now introduced. Column headers can be easily traversed with the arrow keys. Additionally, there are a number of key combinations that trigger actions on the columns like **filtering**, **sorting**, **grouping** and etc.
When the **IgxGrid** header container is focused, the following key combinations are available:

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

- <kbd>Shift + Alt + Arrow Left</kbd> groups the column, if the column is marked as groupable
- <kbd>Shift + Alt + Arrow Right</kbd> ungroups the column, if the column is marked as groupable
- <kbd>Alt + Arrow Left</kbd> or <kbd>Alt + Arrow Up</kbd> collapses the column group header, if the header is not already collapsed
- <kbd>Alt + Arrow Right</kbd> or <kbd>Alt + Arrow Down</kbd> expands the column group header, if the header is not already expanded

## Body navigation

When the **IgxGrid** body is focused, the following key combinations are available:

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

- <kbd>Alt + Arrow Left</kbd> or <kbd>Alt + Arrow Up</kbd> - over Group Row - collapses the group
- <kbd>Alt + Arrow Right</kbd> or <kbd>Alt + Arrow Down</kbd> - over Group Row - expands the group
- <kbd>Alt + Arrow Left</kbd> or <kbd>Alt + Arrow Up</kbd> - over Master Detail Row - collapses the details view
- <kbd>Alt + Arrow Right</kbd> or <kbd>Alt + Arrow Down</kbd> - over Master Detail Row - expands the details view
- <kbd>Space</kbd> - over Group Row - selects all rows in the group, if <kbd>rowSelection</kbd> property is set to multiple

Practice all of the above mentioned actions in the demo sample below. Focus any navigable grid element and a list with some of the available actions for the element will be shown to guide you through.

## Demo

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

## Custom keyboard navigation

Overriding the default behavior for a certain key or keys combination is one of the benefits that the **Keyboard Navigation** feature provides. For example: press the <kbd>Enter</kbd> or <kbd>Tab</kbd> key to navigate to the next cell or the cell below. This or any other navigation scenario is easily achieved by the **Keyboard Navigation** API:

| API | Description | Arguments |
|---------|-------------|-----------|
| [`gridKeydown`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=gridKeydown) | An event that is emitted when any of key press/combinations described above is performed. Can be canceled. For any other key press/combination, use the default `onkeydown` event. | [`IgxIGridKeydownEventArgs`](mcp:get_api_reference?platform=angular&component=IGridKeydownEventArgs) |
| [`activeNodeChange`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=activeNodeChange) | An event that is emitted when the active node is changed. You can use it to determine the Active focus position (header, tbody etc.), column index, row index or nested level. | [`IgxIActiveNodeChangeEventArgs`](mcp:get_api_reference?platform=angular&component=IActiveNodeChangeEventArgs) |
| [`navigateTo`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=navigateTo) | Navigates to a position in the grid, based on provided `rowindex` and `visibleColumnIndex`. It can also execute a custom logic over the target element, through a callback function that accepts param of type `&#123; targetType: GridKeydownTargetType, target: Object &#125;` . Usage: <br />_grid.navigateTo(10, 3, (args) => &#123; args.target.nativeElement.focus(); &#125;);_ | `rowindex`: number, `visibleColumnIndex`: number, `callback`: (`&#123; targetType: GridKeydownTargetType, target: Object &#125;`) => &#123;&#125; |
| [`getNextCell`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=getNextCell)| returns [`IgxICellPosition`](mcp:get_api_reference?platform=angular&component=ICellPosition) object, which defines the next cell by `rowIndex` and `visibleColumnIndex`. A callback function can be passed as a third parameter of [`getNextCell`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=getnextcell) method. The callback function accepts `IgxColumnComponent` as a param and returns a `boolean` value indication if a given criteria is met: <br />_const nextEditableCell = grid.getNextCell(0, 4, (col) => col.editable);_ | `currentRowIndex`: number, `currentVisibleColumnIndex`: number, `callback`: (`IgxColumnComponent`) => boolean |
| [`getPreviousCell`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=getPreviousCell)| returns [`IgxICellPosition`](mcp:get_api_reference?platform=angular&component=ICellPosition) object, which defines the previous cell by `rowIndex` and `visibleColumnIndex`. A callback function can be passed as a third parameter of [`getPreviousCell`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=getPreviousCell) method. The callback function accepts `IgxColumnComponent` as a param and returns a `boolean` value indication if a given criteria is met: <br />_const prevEditableCell = grid.getPreviousCell(0, 4, (col) => col.editable);_ | `currentRowIndex`: number, `currentVisibleColumnIndex`: number, `callback`: (`IgxColumnComponent`) => boolean |

 

Let's try the API to demonstrate how to achieve common scenarios like user input validation and custom navigation. First we need to register an event handler for the [`gridKeydown`](mcp:get_api_reference?platform=angular&component=IgxGridComponent&member=gridKeydown) event:

```html
<igx-grid #grid1 [data]="data" [primaryKey]="'ProductID'" (gridKeydown)="customKeydown($event)"></igx-grid>
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

Based on the [`IgxIGridKeydownEventArgs`](mcp:get_api_reference?platform=angular&component=IGridKeydownEventArgs) values we identified two cases, where to provide our own logic (see above). Now, using the methods from the API, let's perform the desired - if the user is pressing <kbd>Tab</kbd> key over a cell in edit mode, we will perform validation on the input. If the user is pressing <kbd>Enter</kbd> key over a cell, we will move focus to cell in the next row:

```typescript
    // 1. USER INPUT VALIDATION ON TAB
    if (target.column.dataType === 'number' && target.editValue < 10) {
        // alert the user that the input is invalid
        return;
    }
    // 2. CUSTOM NAVIGATION ON ENTER KEY PRESS
    this.grid1.navigateTo(target.row.index + 1, target.column.visibleIndex, (obj) => {
            obj.target.activate();
        });
```

**Note:** 
Please refer to the sample code for full implementation details.

Use the demo below to try out the custom scenarios that we just implemented:

- Double click or press <kbd>F2</kbd> key on a cell in the **Order** column, change the value to **7** and press <kbd>Tab</kbd> key. Prompt message will be shown.
- Select a cell and press <kbd>Enter</kbd> key a couple of times. Every key press will move the focus to a cell in the next row, under the same column.

### Demo

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { CellType, GridSelectionMode, IGridKeydownEventArgs, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-custom-kb-navigation-sample',
    styleUrls: ['./grid-custom-kb-navigation-sample.component.scss'],
    templateUrl: 'grid-custom-kb-navigation-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent]
})

export class GridCustomKBNavigationComponent implements OnInit {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public selectionMode: GridSelectionMode = 'multiple';
    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;
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
            if (target.column.dataType === 'number' && target.editValue < 10) {
                alert('The value should be bigger than 10');
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
            this.grid1.navigateTo(target.row.index + 1, target.column.visibleIndex, (obj) => {
                obj.target.activate();
            });
        }
    }
}
```
```html
<div class="grid__wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [moving]="true" [primaryKey]="'ProductID'" [autoGenerate]="false"
        width="100%" height="350px" [rowSelection]="selectionMode" (gridKeydown)="customKeydown($event)">
        <igx-paginator></igx-paginator>
        <igx-column field="ProductID" header="Product ID" width="16%" [headerClasses]="'prodId'"
            [editable]="true">
        </igx-column>
        <igx-column field="ReorderLevel" header="Orders" width="16%" [sortable]="true" [filterable]="true" [editable]="true"
            dataType="number">
        </igx-column>
        <igx-column field="ProductName" width="16%" header="ProductName" [sortable]="true" [dataType]="'string'"
            [editable]="true" [resizable]="true">
        </igx-column>
        <igx-column field="UnitsInStock" header="UnitsInStock" width="16%" dataType="number" [editable]="true"
            [sortable]="true">
        </igx-column>
        <igx-column field="OrderDate" width="16%" [dataType]="'date'" [sortable]="true"
            [editable]="true" [resizable]="true">
        </igx-column>
        <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" width="20%"
            [editable]="true" [resizable]="true">
        </igx-column>
    </igx-grid>
</div>
```
```scss
.grid__wrapper {
    --ig-size: var(--ig-size-medium);
    margin: 5px 16px;
}
```

## Known Limitations

|Limitation|Description|
|--- |--- |
| Navigating inside а grid with scrollable parent container. | If the grid is positioned inside a scrollable parent container and the user navigates to a grid cell that is out of view, parent container will not be scrolled.|

## API References
- [`IgxGrid`](mcp:get_api_reference?platform=angular&component=IgxGridComponent)
- `IgxGridComponent Styles`
## Additional Resources

_[Hierarchical Grid Keyboard Navigation](/hierarchicalgrid/keyboard-navigation)

_ [Tree Grid Keyboard Navigation](/treegrid/keyboard-navigation)

- [Grid overview](/grid/grid)
- [Virtualization and Performance](/grid/virtualization)
- [Filtering](/grid/filtering)
- [Sorting](/grid/sorting)
- [Summaries](/grid/summaries)
- [Column Moving](/grid/column-moving)
- [Column Pinning](/grid/column-pinning)
- [Column Resizing](/grid/column-resizing)
- [Selection](/grid/selection)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

