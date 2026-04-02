---
_tocName: Conditional Styling
_premium: true
---
---title: Conditional Cell Styling in Angular Hierarchical Grid - Ignite UI for Angular_description: Let users identify different cells quickly. Define a variety of cell styles. Use the conditional cell styling in Angular Data grid to make cells stand out._keywords: conditional styling, ignite ui for angular, infragistics_license: commercial_canonicalLink: grid/conditional-cell-styling---# Angular Hierarchical Grid Conditional StylingIf you need to provide any custom styling in the IgxHierarchicalGrid component, you can do it on either row or cell level.## Hierarchical Grid Conditional Row StylingThe IgxHierarchicalGrid component in Ignite UI for Angular provides two ways to **conditional styling of rows** based on custom rules.- By setting [`rowClasses`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#rowClasses) input on the IgxHierarchicalGrid component;- By setting [`rowStyles`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#rowStyles) input on the IgxHierarchicalGrid component;Further in this topic wi will cover both of them in more details.### Using rowClassesYou can conditionally style the IgxHierarchicalGrid rows by setting the [`rowClasses`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#rowClasses) input and define custom rules.```html<igx-hierarchical-grid  #hierarchicalGrid class="hgrid" [data]="localData" [height]="'580px'" [width]="'100%'" [rowStyles]="rowStyles">
    ...</igx-hierarchical-grid>```The [`rowClasses`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#rowClasses) input accepts an object literal, containing key-value pairs, where the key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.```typescript// sample.component.tspublic rowClasses = {
  activeRow: this.activeRowCondition};public activeRowCondition = (row: RowType) => this.grid?.navigation.activeNode?.row === row.index;``````scss// sample.component.scss::ng-deep {
 .activeRow {
  border: 2px solid #fc81b8;
  border-left: 3px solid #e41c77;
 }}```> [!NOTE]> Use **`::ng-deep`** or **`ViewEncapsulation.None`** to force the custom styles down through the current component and its children.### Demo```typescript
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, RowType } from 'igniteui-angular/grids/core';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
@Component({
    selector: 'app-hgrid-row-classes',
    styleUrls: ['./hgrid-rowClasses.component.scss'],
    templateUrl: 'hgrid-rowClasses.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxIconButtonDirective, IgxIconComponent, IgxRowIslandComponent]
})

export class HGridRowClassesSampleComponent implements OnInit {
    @ViewChild('hierarchicalGrid', { static: true })
    public hierarchicalGrid: IgxHierarchicalGridComponent;
    public localdata;

    constructor() { }

    public ngOnInit(): void {
        this.localdata = SINGERS;
    }

    public removeRow(rowIndex) {
        const row = this.hierarchicalGrid.getRowByIndex(rowIndex);
        row.delete();
    }

    public activeRowCondition = (row: RowType) => this.hierarchicalGrid?.navigation.activeNode?.row === row.index;
    // eslint-disable-next-line @typescript-eslint/member-ordering
    public rowClasses = {
        activeRow: this.activeRowCondition
    };


    public handleChange() {
        requestAnimationFrame(() => {
            this.hierarchicalGrid.pipeTrigger++;
            this.hierarchicalGrid.notifyChanges();
        });
    }
    public handleLeftClick(args) {
        args.event.preventDefault();
        this.hierarchicalGrid.navigation.setActiveNode({ row: args.cell.row.index, column: args.cell.column.visibleIndex });
    }

}
```
```html
<div class="grid__wrapper">
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true"  #hierarchicalGrid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'580px'" [width]="'100%'" (contextMenu)="handleLeftClick($event)" (activeNodeChange)="handleChange()" [rowClasses]="rowClasses">
        <igx-column field="Artist" [editable]="true" [dataType]="'string'"></igx-column>
        <igx-column field="HasGrammyAward" header="Has Grammy Award?" [editable]="true" [dataType]="'boolean'">
        </igx-column>
        <igx-column field="Debut" [editable]="true" dataType="number"></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations" [editable]="true" dataType="number"
            [hasSummary]="true"></igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards" [editable]="true" dataType="number"
            [hasSummary]="true" ></igx-column>
        <igx-column [width]="'100px'">
            <ng-template igxCell let-cell="cell">
                <button igxIconButton="flat" (click)="removeRow(cell.id.rowIndex)">
                    <igx-icon>delete</igx-icon>
                </button>
            </ng-template>
        </igx-column>

        <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false">
            <igx-column field="Album" [editable]="true" [dataType]="'string'"></igx-column>
            <igx-column field="LaunchDate" header="Launch Date" [editable]="true" [dataType]="'date'"></igx-column>
            <igx-column field="BillboardReview" header="Billboard Review" [editable]="true" dataType="number"></igx-column>
            <igx-column field="USBillboard200" header="US Billboard 200" [editable]="true" dataType="number"></igx-column>
            <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false">
                    <igx-column field="Number" header="No." [editable]="true" dataType="number"></igx-column>
                    <igx-column field="Title" [editable]="true" [dataType]="'string'"></igx-column>
                    <igx-column field="Released" [editable]="true" [dataType]="'date'"></igx-column>
                    <igx-column field="Genre" [editable]="true" [dataType]="'string'"></igx-column>
            </igx-row-island>
        </igx-row-island>
    </igx-hierarchical-grid>
    </div>
```
```scss
.addSingerBtn.igx-button--contained{
    margin-bottom: 10px;
    background-color: lightgrey;
    color: black;
    &:hover {
        background-color:  rgba(0, 0, 0, 0.26)
    }
}

.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
}

::ng-deep {
    .activeRow {
        border: 2px solid #fc81b8;
        border-left: 3px solid #e41c77;
    }
    .toggle-section {
        width: 300px;
        height: 100px;
        background-color: white;
    }

}
```<div class="divider--half"></div>### Using rowStylesColumns now expose the `rowStyles` property which allows conditional styling of the data rows. Similar to `rowClasses` it accepts an object literal where the keys are style properties and the values are expressions for evaluation. Also, you can apply regular styling (without any conditions).> The callback signature for both `rowStyles` and `rowClasses` is:```ts(row: RowType) => boolean```Let's define our styles:```typescript// component.tspublic rowStyles = {
    background:(row: RowType) => row.data['HasGrammyAward'] ? '#eeddd3' : '#f0efeb',
    'border-left': (row: RowType) => row.data['HasGrammyAward'] ? '2px solid #dda15e' : null};public childRowStyles = {
    'border-left': (row: RowType) => row.data['BillboardReview'] > 70 ? '3.5px solid #dda15e' : null};``````html<igx-hierarchical-grid  #hierarchicalGrid [data]="localdata" [autoGenerate]="false"
        [height]="'580px'" [width]="'100%'" [rowStyles]="rowStyles">
        <igx-row-island [key]="'Albums'" [autoGenerate]="false" [rowStyles]="childRowStyles">
             ...
        </igx-row-island>  
    ...</igx-hierarchical-grid>```### Demo```typescript
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, RowType } from 'igniteui-angular/grids/core';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
@Component({
    selector: 'app-hgrid-row-row-styles',
    styleUrls: ['./hgrid-rowStyles.component.scss'],
    templateUrl: 'hgrid-rowStyles.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxIconButtonDirective, IgxIconComponent, IgxRowIslandComponent]
})

export class HGridRowStylesSampleComponent implements OnInit {
    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata;
    public  rowStyles = {
        background:(row: RowType) => row.data['HasGrammyAward'] ? '#eeddd3' : '#f0efeb',
        'border-left': (row: RowType) => row.data['HasGrammyAward'] ? '2px solid #dda15e' : null
    };

    public  childRowStyles = {
        'border-left': (row: RowType) => row.data['BillboardReview'] > 70 ? '3.5px solid #dda15e' : null
    };
    constructor() { }

    public ngOnInit(): void {
        this.localdata = SINGERS;
    }

    public removeRow(rowIndex) {
        const row = this.hierarchicalGrid.getRowByIndex(rowIndex);
        row.delete();
    }

}
```
```html
<div class="grid__wrapper">
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true"  #hierarchicalGrid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'580px'" [width]="'100%'" [rowStyles]="rowStyles">
        <igx-column field="Artist" [editable]="true" [dataType]="'string'"></igx-column>
        <igx-column field="HasGrammyAward" header="Has Grammy Award?" [editable]="true" [dataType]="'boolean'">
        </igx-column>
        <igx-column field="Debut" [editable]="true" dataType="number"></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations" [editable]="true" dataType="number"
            [hasSummary]="true"></igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards" [editable]="true" dataType="number"
            [hasSummary]="true" ></igx-column>
        <igx-column [width]="'100px'">
            <ng-template igxCell let-cell="cell">
                <button igxIconButton="flat" (click)="removeRow(cell.id.rowIndex)">
                    <igx-icon>delete</igx-icon>
                </button>
            </ng-template>
        </igx-column>

        <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false" [rowStyles]="childRowStyles">
            <igx-column field="Album" [editable]="true" [dataType]="'string'"></igx-column>
            <igx-column field="LaunchDate" header="Launch Date" [editable]="true" [dataType]="'date'"></igx-column>
            <igx-column field="BillboardReview" header="Billboard Review" [editable]="true" dataType="number"></igx-column>
            <igx-column field="USBillboard200" header="US Billboard 200" [editable]="true" dataType="number"></igx-column>
            <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false">
                    <igx-column field="Number" header="No." [editable]="true" dataType="number"></igx-column>
                    <igx-column field="Title" [editable]="true" [dataType]="'string'"></igx-column>
                    <igx-column field="Released" [editable]="true" [dataType]="'date'"></igx-column>
                    <igx-column field="Genre" [editable]="true" [dataType]="'string'"></igx-column>
            </igx-row-island>
        </igx-row-island>
    </igx-hierarchical-grid>
    </div>
```
```scss
.addSingerBtn.igx-button--contained{
    margin-bottom: 10px;
    background-color: lightgrey;
    color: black;
    &:hover {
        background-color:  rgba(0, 0, 0, 0.26)
    }
}

.grid__wrapper {
    margin: 0 auto;
    padding: 16px;
}

.dialogNewRecord {
    > * {
        margin-bottom: 8px;

        &:last-child {
            margin-bottom: 0;
        }
    }
}

.igx-input-group {
    margin-bottom: 10px;
    padding: 5px;
}
.igx-checkbox {
    margin-top: 5px;
    margin-bottom: 5px;
    padding-top: 8px;
    padding-bottom: 5px;
}

.reorderLevelInput {
    color: black;
    width: 100%;
}
```<div class="divider--half"></div>## Hierarchical Grid Conditional Cell Styling## OverviewThe IgxHierarchicalGrid component in Ignite UI for Angular provides two ways to **conditional styling of cells** based on custom rules.- By setting the [`IgxColumnComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html) input [`cellClasses`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#cellClasses) to an object literal containing key-value pairs. The key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value. The result is a convenient material styling of the cell.```ts// component.ts filepublic beatsPerMinuteClasses = {
    downFont: this.downFontCondition,
    upFont: this.upFontCondition};...private downFontCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] <= 95;}``````scss// component.scss file.upFont {
  color: red;}.downFont {
  color: green;}```### Using cellClassesYou can conditionally style the IgxHierarchicalGrid cells by setting the [`IgxColumnComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html) [`cellClasses`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#cellClasses) input and define custom rules.```html<!-- sample.component.html --><igx-column field="GrammyNominations" header="Grammy Nominations" dataType="number" [cellClasses]="grammyClasses"></igx-column>```The [`cellClasses`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#cellClasses) input accepts an object literal, containing key-value pairs, where the key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value.```typescript// sample.component.tsprivate upGrammyCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] > 5;}private downGrammyCondition = (rowData: any, columnKey: any): boolean => {
    return rowData[columnKey] <= 5;}public grammyClasses = {
    downGrammy: this.downPriceCondition,
    upGrammy: this.upPriceCondition};``````scss// sample.component.scss::ng-deep {
    .upGrammy {
        color: red;
    }

    .downGrammy {
        color: green;
    }}```> [!NOTE]> Use **`::ng-deep`** or **`ViewEncapsulation.None`** to force the custom styles down through the current component and its children.### Demo<!-- TODO --><div class="divider--half"></div>- By using the [`IgxColumnComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html) input [`cellStyles`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#cellStyles) which accepts an object literal where the keys are style properties and the values are expressions for evaluation.```tspublic styles = {
    'background': 'linear-gradient(180deg, #dd4c4c 0%, firebrick 100%)',
    'text-shadow': '1px 1px 2px rgba(25,25,25,.25)',
    'animation': '0.25s ease-in-out forwards alternate popin'};```> The callback signature for both `cellStyles` and `cellClasses` is now changed to:```ts(rowData: any, columnKey: string, cellValue: any, rowIndex: number) => boolean```### Using cellStylesColumns now expose the `cellStyles` property which allows conditional styling of the column cells. Similar to `cellClasses` it accepts an object literal where the keys are style properties and the values are expressions for evaluation. Also, you can apply regular styling with ease (without any conditions).In the [sample above](#demo) we've created:- Two different styles that will be applied based on the column index.- You will also change the `text color` based on even/odd rows.> The callback signature for both `cellStyles` is:```ts(rowData: any, columnKey: string, cellValue: any, rowIndex: number) => boolean```Let's define our styles:```typescript// component.tspublic oddColStyles = {
    background: 'linear-gradient(to right, #b993d6, #8ca6db)',
    color: (rowData, coljey, cellValue, rowIndex) => rowIndex % 2 === 0 ? 'white' : 'gray',
    animation: '0.75s popin'};public evenColStyles = {
    background: 'linear-gradient(to right, #8ca6db, #b993d6)',
    color: (rowData, coljey, cellValue, rowIndex) => rowIndex % 2 === 0 ? 'gray' : 'white',
    animation: '0.75s popin'};```On `ngOnInit` we will add the `cellStyles` configuration for each column of the predefined `columns` collection, which is used to create the IgxHierarchicalGrid columns dynamically.```ts// component.tspublic ngOnInit() {
    this.data = SINGERS;
    this.columns = [
        { field: 'Artist' },
        { field: 'HasGrammyAward' },
        { field: 'Debut' },
        { field: 'GrammyNominations' },
        { field: 'GrammyAwards' }
    ];

    this.applyCSS();}``````tspublic applyCSS() {
    this.columns.forEach((column, index) => {
        column.cellStyles = (index % 2 === 0 ? this.evenColStyles : this.oddColStyles);
    });}public updateCSS(css: string) {
    this.oddColStyles = {...this.oddColStyles, ...JSON.parse(css)};
    this.evenColStyles = {...this.evenColStyles, ...JSON.parse(css)};
    this.applyCSS();}``````html<igx-hierarchical-grid #hierarchicalGrid [data]="localdata"    
    [autoGenerate]="false"
    [height]="'580px'">
    <igx-column *ngFor="let c of columns"
        [field]="c.field"
        [header]="c.header"
        [cellStyles]="c.cellStyles">
    </igx-column></igx-hierarchical-grid>```Define a `popin` animation```scss// component.scss@keyframes popin {
    0% {
        opacity: 0.1;
        transform: scale(.75, .75);
        filter: blur(3px) invert(1);
    }

    50% {
        opacity: .5;
        filter: blur(1px);
    }

    100% {
        transform: scale(1, 1);
        opacity: 1;
        filter: none;
    }}```### Demo<!-- TODO --><div class="divider--half"></div>## Known issues and limitations- If there are cells bind to the same condition (from different columns) and one cell is updated, the other cells won't be updated based on the new value, if the condition is met.A pipe check should be performed in order to apply the changes to the rest of the cells. The example below shows how to do that with a `spread operator(...)` on [`onCellEdit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#onCellEdit) event. This will copy the original object with a new instance, and lead pure pipe to be fired.```tspublic backgroundClasses = {
    myBackground: (rowData: any, columnKey: string) => {
        return rowData.Col2 < 10;
    }};...editDone(evt) {
    this.backgroundClasses = {...this.backgroundClasses};}``````html<igx-hierarchical-grid #grid1 [data]="data" height="500px" width="100%" (onCellEdit)="editDone($event)">
  <igx-column field="Col1" dataType="number" [cellClasses]="backgroundClasses"></igx-column>
  <igx-column field="Col2" dataType="number" [editable]="true" [cellClasses]="backgroundClasses"></igx-column>
  <igx-column field="Col3" header="Col3" dataType="string" [cellClasses]="backgroundClasses"></igx-column></igx-hierarchical-grid>```## API References<div class="divider--half"></div>- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)- [IgxHierarchicalGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html)- [IgxHierarchicalGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#mixin-grid)## Additional Resources<div class="divider--half"></div>- [Hierarchical Grid overview](hierarchical-grid.md)- [Virtualization and Performance](virtualization.md)- [Editing](editing.md)- [Paging](paging.md)- [Filtering](filtering.md)- [Sorting](sorting.md)- [Summaries](summaries.md)- [Column Moving](column-moving.md)- [Column Pinning](column-pinning.md)- [Column Resizing](column-resizing.md)- [Column Hiding](column-hiding.md)- [Selection](selection.md)- [Searching](search.md)- [Toolbar](toolbar.md)- [Multi-column Headers](multi-column-headers.md)- [Size](display-density.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
