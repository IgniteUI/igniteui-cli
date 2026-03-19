---
_tocName: Searching
_premium: true
---
---title: Angular Tree Grid Search Filter - Ignite UI for Angular_description: Perform fast grid search with Ignite UI for Angular Tree grid. It allows instant content search in the virtualized data of the Grid, while delivering better UX._keywords: Content search, ignite ui for angular, infragistics_license: commercial_canonicalLink: grid/search---# Angular Tree Grid Search FilterAngular Tree Grid search enables the process of finding values in the collection of data. We make it easier to setup this functionality and it can be implemented with search input box, buttons, keyboard navigation and other useful features for an even better user experience. While browsers natively provide content search functionality, most of the time the Tree Grid virtualizes its columns and rows that are out of view. In these cases, the native grid search is unable to search data in the virtualized cells, since they are not part of the DOM. We have extended the Ignite UI for Angular table-based grid with a **search API** that allows you to search through the **virtualized content** of the Tree Grid.## Angular Search ExampleThe following example represents Tree Grid with search input box that allows searching in all columns and rows, as well as specific filtering options for each column.```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxInputDirective, IgxInputGroupComponent, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxChipComponent, IgxChipsAreaComponent } from 'igniteui-angular/chips';
import { IgxIconButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { generateEmployeeFlatData } from '../data/employees-flat';

import { FormsModule } from '@angular/forms';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-search-sample',
    styleUrls: ['./tree-grid-search-sample.component.scss'],
    templateUrl: './tree-grid-search-sample.component.html',
    imports: [IgxInputGroupComponent, IgxPrefixDirective, IgxIconComponent, FormsModule, IgxInputDirective, IgxSuffixDirective, IgxChipsAreaComponent, IgxChipComponent, IgxIconButtonDirective, IgxRippleDirective, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class TreeGridSearchSampleComponent implements OnInit {

    @ViewChild('treeGrid1', { static: true }) public treeGrid: IgxTreeGridComponent;
    public data: any[];
    public searchText = '';
    public caseSensitive = false;
    public exactMatch = false;

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
    }

    public clearSearch() {
        this.searchText = '';
        this.treeGrid.clearSearch();
    }

    public searchKeyDown(ev) {
        if (ev.key === 'Enter' || ev.key === 'ArrowDown' || ev.key === 'ArrowRight') {
            ev.preventDefault();
            this.treeGrid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
        } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
            ev.preventDefault();
            this.treeGrid.findPrev(this.searchText, this.caseSensitive, this.exactMatch);
        }
    }

    public updateSearch() {
        this.caseSensitive = !this.caseSensitive;
        this.treeGrid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
    }

    public updateExactSearch() {
        this.exactMatch = !this.exactMatch;
        this.treeGrid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
    }
}
```
```html
<div class="grid__wrapper">
  <igx-input-group type="search" class="offset">
    <igx-prefix>
      @if (searchText.length === 0) {
        <igx-icon>search</igx-icon>
      }
      @if (searchText.length > 0) {
        <igx-icon (click)="clearSearch()">clear</igx-icon>
      }
    </igx-prefix>

    <input #search1 id="search1" igxInput placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="treeGrid.findNext(searchText, caseSensitive, exactMatch)"
      (keydown)="searchKeyDown($event)" />

      @if (searchText.length > 0) {
        <igx-suffix>
          @if (treeGrid.lastSearchInfo) {
            <div class="resultsText">
              @if (treeGrid.lastSearchInfo.matchInfoCache.length > 0) {
                <span>
                  {{ treeGrid.lastSearchInfo.activeMatchIndex + 1 }} of {{ treeGrid.lastSearchInfo.matchInfoCache.length }}
                  results
                </span>
              }
              @if (treeGrid.lastSearchInfo.matchInfoCache.length === 0) {
                <span>
                  No results
                </span>
              }
            </div>
          }
          <div class="chips">
            <igx-chips-area>
              <igx-chip (click)="updateSearch()" [color]="caseSensitive? 'lightgrey' : 'rgba(0, 0, 0, .04)'">
                <span title="Match case">Aa</span>
              </igx-chip>
              <igx-chip (click)="updateExactSearch()" [color]="exactMatch? 'lightgrey' : 'rgba(0, 0, 0, .04)'">
                <u title="Exact match">Ab</u>
              </igx-chip>
            </igx-chips-area>
          </div>
          <div class="searchButtons">
            <button igxIconButton="flat" igxRipple [igxRippleCentered]="true" (click)="treeGrid.findPrev(searchText, caseSensitive, exactMatch)">
              <igx-icon family="material">navigate_before</igx-icon>
            </button>
            <button igxIconButton="flat" igxRipple [igxRippleCentered]="true" (click)="treeGrid.findNext(searchText, caseSensitive, exactMatch)">
              <igx-icon family="material">navigate_next</igx-icon>
            </button>
          </div>
        </igx-suffix>
      }
    </igx-input-group>

    <igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid1 [data]="data" [autoGenerate]="false" primaryKey="ID" foreignKey="ParentID" height="480px" width="100%" [allowFiltering]="true">
      <igx-column [field]="'Name'" dataType="string" [sortable]="true"></igx-column>
      <igx-column [field]="'ID'" dataType="number" [sortable]="true"></igx-column>
      <igx-column [field]="'Title'" dataType="string" [sortable]="true"></igx-column>
      <igx-column [field]="'Age'" dataType="number" [sortable]="true"></igx-column>
      <igx-column [field]="'HireDate'" dataType="date" [sortable]="true"></igx-column>
    </igx-tree-grid>
  </div>
```
```scss
.grid__wrapper {
    margin: 15px;
}

.offset {
    margin-bottom: 15px;
}

.resultsText {
    font-size: 0.875rem;
}

.chips {
    margin-left: 5px;
}

.searchButtons {    
    margin-left: 5px;
}
```<div class="divider--half"></div>## Angular Search Usage### Grid setupLet's start by creating our grid and binding it to our data. We will also add some custom styles for the components we will be using!```html<!--searchgrid.component.html--><igx-tree-grid #treeGrid1 [data]="data" [autoGenerate]="false" primaryKey="ID" foreignKey="ParentID" [allowFiltering]="true">
    <igx-column [field]="'Name'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'ID'" dataType="number" [sortable]="true"></igx-column>
    <igx-column [field]="'Title'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Age'" dataType="number" [sortable]="true"></igx-column>
    <igx-column [field]="'HireDate'" dataType="date" [sortable]="true"></igx-column></igx-tree-grid>```@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {```css/* searchgrid.component.css */.grid__wrapper {
    margin: 15px;}.offset {
    margin-bottom: 15px;}.resultsText {
    font-size: 0.875rem;}.chips {
    margin-left: 5px;}.searchButtons {
    margin-left: 5px;}```}Great, and now let's prepare for the search API of our Tree Grid! We can create a few properties, which can be used for storing the currently searched text and whether the search is case sensitive and/or by an exact match.```typescript// searchgrid.component.tspublic searchText: string = '';public caseSensitive: boolean = false;public exactMatch: boolean = false;```### Angular search box inputNow let's create our search input! By binding our **searchText** as ngModel to our newly created input and subscribe to the ngModelChange event, we can detect every single **searchText** modification by the user. This will allow us to use the Tree Grid's [`findNext`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#findNext) and [`findPrev`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#findPrev) methods to highlight all the occurrences of the **searchText** and scroll to the next/previous one (depending on which method we have invoked).Both the [`findNext`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#findNext) and the [`findPrev`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#findPrev) methods have three arguments:- `text`: **string** (the text we are searching for)- (optional) `caseSensitive`: **boolean** (should the search be case sensitive or not, default value is false)- (optional) `exactMatch`: **boolean** (should the search be by an exact match or not, default value is false)When searching by an exact match, the search API will highlight as results only the cell values that match entirely the **searchText** by taking the case sensitivity into account as well. For example the strings '_software_' and '_Software_' are an exact match with a disregard for the case sensitivity.The methods from above return a **number** value (the number of times the Tree Grid contains the given string).```html<!--searchgrid.component.html--><input #search1 id="search1" placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="treeGrid.findNext(searchText, caseSensitive, exactMatch)" />```### Display results countLet's also display the position of the current occurrence, along with the total results count! We can do this by using the grid's `lastSearchInfo` property. This property is automatically updated when using the **find** methods.- The `treeGrid.lastSearchInfo.matchInfoCache.length` value will give us the total results count.- The `treeGrid.lastSearchInfo.activeMatchIndex` value will give us the index position of the current occurrence (match).```html<!--searchgrid.component.html--><div class="resultsText" *ngIf="treeGrid.lastSearchInfo">
    <span *ngIf="treeGrid.lastSearchInfo.matchInfoCache.length > 0">
        {{ treeGrid.lastSearchInfo.activeMatchIndex + 1 }} of {{ treeGrid.lastSearchInfo.matchInfoCache.length }} results
    </span>
    <span *ngIf="treeGrid.lastSearchInfo.matchInfoCache.length == 0">
        No results
    </span></div>```### Add search buttonsIn order to freely search and navigate among our search results, let's create a couple of buttons by invoking the [`findNext`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#findNext) and the [`findPrev`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#findPrev) methods inside the buttons' respective click event handlers.```html<!--searchgrid.component.html--><div class="searchButtons">
    <input type="button" value="Previous" (click)="treeGrid.findPrev(searchText, caseSensitive, exactMatch)" />
    <input type="button" value="Next" (click)="treeGrid.findNext(searchText, caseSensitive, exactMatch)" /></div>```### Add keyboard searchWe can also allow the users to navigate the results by using the keyboard's arrow keys and the Enter key. In order to achieve this, we can handle the **keydown** event of our search input by preventing the default caret movement of the input with the preventDefault() method and invoke the [`findNext`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#findNext)/[`findPrev`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#findPrev) methods depending on which key the user has pressed.```html<!--searchgrid.component.html--><input #search1 id="search1" placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="treeGrid.findNext(searchText, caseSensitive, exactMatch)"
       (keydown)="searchKeyDown($event)" />``````typescript// searchgrid.component.tspublic searchKeyDown(ev) {
    if (ev.key === 'Enter' || ev.key === 'ArrowDown' || ev.key === 'ArrowRight') {
        ev.preventDefault();
        this.treeGrid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
    } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
        ev.preventDefault();
        this.treeGrid.findPrev(this.searchText, this.caseSensitive, this.exactMatch);
    }}```### Case sensitive and Exact matchNow let's allow the user to choose whether the search should be case sensitive and/or by an exact match. For this purpose we can use simple checkbox inputs by binding our **caseSensitive** and **exactMatch** properties to the inputs' **checked** properties respectively and handle their **change** events by toggling our properties and invoking the [`findNext`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#findNext) method.```html<!--searchgrid.component.html--><span>Case sensitive</span><input type="checkbox" [checked]="caseSensitive" (change)="updateSearch()"><span>Exact match</span><input type="checkbox" [checked]="exactMatch" (change)="updateExactSearch()">``````typescript// searchgrid.component.tspublic updateSearch() {
    this.caseSensitive = !this.caseSensitive;
    this.treeGrid.findNext(this.searchText, this.caseSensitive, this.exactMatch);}public updateExactSearch() {
    this.exactMatch = !this.exactMatch;
    this.treeGrid.findNext(this.searchText, this.caseSensitive, this.exactMatch);}```### PersistenceWhat if we would like to filter and sort our Tree Grid or even to add and remove records? After such operations, the highlights of our current search automatically update and persist over any text that matches the **searchText**! Furthermore, the search will work with paging and will persist the highlights through changes of the Tree Grid's [`perPage`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPaginatorComponent.html#perPage) property.### Adding iconsBy using some of our other components, we can create an enriched user interface and improve the overall design of our entire search bar! We can have a nice search or delete icon on the left of the search input, a couple of chips for our search options and some material design icons combined with nice ripple styled buttons for our navigation on the right. We can wrap these components inside an input group for a more refined design.To do this, let's go and grab the [**IgxInputGroup**](../input-group.md), [**IgxIcon**](../icon.md),  [**IgxRipple**](../ripple.md), [**IgxButton**](../button.md) and the [**IgxChip**](../chip.md) modules.```typescript// app.module.ts...import {
    IgxTreeGridModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxRippleModule,
    IgxButtonModule,
    IgxChipsModule} from 'igniteui-angular';// import { //    IgxInputGroupModule,//    IgxIconModule,//    IgxRippleModule,//    IgxButtonModule,//    IgxChipsModule// } from '@infragistics/igniteui-angular'; for licensed package@NgModule({
    ...
    imports: [..., IgxInputGroupModule, IgxIconModule, IgxRippleModule, IgxButtonModule, IgxChipsModule],})export class AppModule {}```Finally, let's update our template with the new components!We will wrap all of our components inside an [**IgxInputGroup**](../input-group.md). On the left we will toggle between a search and a delete/clear icon (depending on whether the search input is empty or not). In the center, we will position the input itself. In addition, whenever the delete icon is clicked, we will update our **searchText** and invoke the Tree Grid's [`clearSearch`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#clearSearch) method to clear the highlights.```html<!--searchgrid.component.html--><igx-input-group type="search" class="offset">
    <igx-prefix>
        <igx-icon *ngIf="searchText.length == 0">search</igx-icon>
        <igx-icon *ngIf="searchText.length > 0" (click)="clearSearch()">clear</igx-icon>
    </igx-prefix>

    <input #search1 id="search1" igxInput placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="treeGrid.findNext(searchText, caseSensitive, exactMatch)"
        (keydown)="searchKeyDown($event)" />

    <igx-suffix *ngIf="searchText.length > 0">
        ...
    </igx-suffix></igx-input-group>``````typescript// searchgrid.component.tspublic clearSearch() {
    this.searchText = '';
    this.treeGrid.clearSearch();}```On the right in our input group, let's create three separate containers with the following purposes:- For displaying the search results.```html<!--searchgrid.component.html--><igx-suffix *ngIf="searchText.length > 0">
    <div class="resultsText" *ngIf="treeGrid.lastSearchInfo">
        <span *ngIf="treeGrid.lastSearchInfo.matchInfoCache.length > 0">
            {{ treeGrid.lastSearchInfo.activeMatchIndex + 1 }} of {{ treeGrid.lastSearchInfo.matchInfoCache.length }} results
        </span>
        <span *ngIf="treeGrid.lastSearchInfo.matchInfoCache.length == 0">
            No results
        </span>
    </div></igx-suffix>```- For displaying a couple of chips that toggle the **caseSensitive** and the **exactMatch** properties. We have replaced the checkboxes with two stylish chips that change color based on these properties. Whenever a chip is clicked, we invoke its respective handler - **updateSearch** or **updateExactSearch** depending on which chip has been clicked.```html<!--searchgrid.component.html-->

    ...
    <div class="chips">
        <igx-chips-area>
            <igx-chip (click)="updateSearch()" [color]="caseSensitive? 'lightgrey' : 'rgba(0, 0, 0, .04)'">
                <span>Case Sensitive</span>
            </igx-chip>
            <igx-chip (click)="updateExactSearch()" [color]="exactMatch? 'lightgrey' : 'rgba(0, 0, 0, .04)'">
                <span>Exact Match</span>
            </igx-chip>
        </igx-chips-area>
    </div>
    ...```- For the search navigation buttons, we have transformed our inputs into ripple styled buttons with material icons. The handlers for the click events remain the same - invoking the [`findNext`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#findNext)/[`findPrev`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#findPrev) methods.```html<!--searchgrid.component.html--><igx-suffix>
    <div class="searchButtons">
        <button igxIconButton="flat" igxRipple igxRippleCentered="true" (click)="treeGrid.findPrev(searchText, caseSensitive, exactMatch)">
            <igx-icon fontSet="material">navigate_before</igx-icon>
        </button>
        <button igxIconButton="flat" igxRipple igxRippleCentered="true" (click)="treeGrid.findNext(searchText, caseSensitive, exactMatch)">
            <igx-icon fontSet="material">navigate_next</igx-icon>
        </button>
    </div></igx-suffix>```## Known Limitations|Limitation|Description||--- |--- ||Searching in cells with a template|The search functionality highlights work only for the default cell templates. If you have a column with custom cell template, the highlights will not work so you should either use alternative approaches, such as a column formatter, or set the [`searchable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#searchable) property on the column to false.||Remote Virtualization| The search will not work properly when using remote virtualization||Cells with cut off text| When the text in the cell is too large to fit and the text we are looking for is cut off by the ellipsis, we will still scroll to the cell and include it in the match count, but nothing will be highlighted |## API ReferencesIn this article we implemented our own search bar for the Tree Grid with some additional functionality when it comes to navigating between the search results. We also used some additional Ignite UI for Angular components like icons, chips and inputs. The search API is listed below.[`IgxTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html) methods:- [findNext](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#findNext)- [findPrev](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#findPrev)- [clearSearch](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#clearSearch)- [refreshSearch](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#refreshSearch)[`IgxGridCell`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html) methods:[`IgxColumnComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html) properties:- [searchable](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#searchable)[ISearchInfo](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/isearchinfo.html)Additional components and/or directives with relative APIs that were used:- [IgxInputGroupComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputgroupcomponent.html)- [IgxIconComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxiconcomponent.html)- [IgxRippleDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxrippledirective.html)- [IgxButtonDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbuttondirective.html)- [IgxChipComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipcomponent.html)Styles:- [IgxTreeGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)- [IgxInputGroupComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-input-group-theme)- [IgxIconComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-icon-theme)- [IgxRippleDirective Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-ripple-theme)- [IgxButtonDirective Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-button-theme)- [IgxChipComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-chip-theme)## Additional Resources<div class="divider--half"></div>- [Tree Grid overview](tree-grid.md)- [Virtualization and Performance](virtualization.md)- [Filtering](filtering.md)- [Paging](paging.md)- [Sorting](sorting.md)- [Summaries](summaries.md)- [Column Moving](column-moving.md)- [Column Pinning](column-pinning.md)- [Column Resizing](column-resizing.md)- [Selection](selection.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
