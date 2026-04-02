---
title: Web Components Tree Grid Search Filter - Ignite UI for Web Components
_description: Perform data manipulation without affecting the underlying data with Tree Grid Batch Editing, using Web Components Tree Grid. See demos & examples!
_keywords: Web Components, Tree Grid, IgcTreeGrid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid"]
namespace: Infragistics.Controls
_tocName: Search
_premium: true
---

# Web Components Tree Grid Search Filter

The Ignite UI for Web Components Search Filter feature in Web Components Tree Grid enables the process of finding values in the collection of data. We make it easier to set up this functionality and it can be implemented with a search input box, buttons, keyboard navigation and other useful features for an even better user experience. While browsers natively provide content search functionality, most of the time the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) virtualizes its columns and rows that are out of view. In these cases, the native browser search is unable to search data in the virtualized cells, since they are not part of the DOM. We have extended the Web Components Material table-based grid with a **search API** that allows you to search through the **virtualized content** of the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html).

## Web Components Search Example

The following example represents [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) with search input box that allows searching in all columns and rows, as well as specific filtering options for each column.

```typescript
export class EmployeesFlatDataItem {
  public constructor(init: Partial<EmployeesFlatDataItem>) {
      Object.assign(this, init);
  }
  
  public Age: number;
  public HireDate: string;
  public ID: number;
  public Name: string;
  public Phone: string;
  public OnPTO: boolean;
  public ParentID: number;
  public Title: string;

}
export class EmployeesFlatData extends Array<EmployeesFlatDataItem> {
  public constructor(items: Array<EmployeesFlatDataItem> | number = -1) {
      if (Array.isArray(items)) {
          super(...items);
      } else {
          const newItems = [
              new EmployeesFlatDataItem(
              {
                  Age: 55,
                  HireDate: `2008-03-20`,
                  ID: 1,
                  Name: `Johnathan Winchester`,
                  Phone: `0251-031259`,
                  OnPTO: false,
                  ParentID: -1,
                  Title: `Development Manager`
              }),
              new EmployeesFlatDataItem(
              {
                  Age: 42,
                  HireDate: `2014-01-22`,
                  ID: 4,
                  Name: `Ana Sanders`,
                  Phone: `(21) 555-0091`,
                  OnPTO: true,
                  ParentID: -1,
                  Title: `CEO`
              }),
              new EmployeesFlatDataItem(
              {
                  Age: 49,
                  HireDate: `2014-01-22`,
                  ID: 18,
                  Name: `Victoria Lincoln`,
                  Phone: `(071) 23 67 22 20`,
                  OnPTO: true,
                  ParentID: -1,
                  Title: `Accounting Manager`
              }),
              // ... 15 more items
          ];
          super(...(newItems.slice(0, items)));
      }
  }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Web Components Search Usage

### Tree Grid Setup

Let's start by creating our grid and binding it to our data. We will also add some custom styles for the components we will be using!

<!-- ComponentStart: TreeGrid -->

```html
<igc-tree-grid id="treeGrid" auto-generate="false" primary-key="ID" foreign-key="ParentID" allow-filtering="true" height="100%" width="100%">
    <igc-column field="Name" data-type="string" sortable="true"></igc-column>
    <igc-column field="ID" data-type="number" sortable="true"></igc-column>
    <igc-column field="Title" data-type="string" sortable="true"></igc-column>
    <igc-column field="Age" data-type="number" sortable="true"></igc-column>
    <igc-column field="HireDate" data-type="date" sortable="true"></igc-column>
</igc-tree-grid>
```

```ts
private treeGrid: IgcTreeGridComponent;

constructor() {
    this.treeGrid = document.getElementById('treeGrid') as IgcTreeGridComponent;
    this.treeGrid.data = new EmployeesFlatData();
}
```

<!-- ComponentEnd: TreeGrid -->

Great, and now let's prepare for the search API of our [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html)! We can create a few properties, which can be used for storing the currently searched text and whether the search is case sensitive and/or by an exact match.

<!-- ComponentStart: TreeGrid -->

```ts
private treeGrid: IgcTreeGridComponent;

private searchBox: IgcInputComponent;

private icon: IgcIconComponent;
private nextIconButton: IgcIconButtonComponent;
private prevIconButton: IgcIconButtonComponent;

private caseSensitiveChip: IgcChipComponent;
private exactMatchChip: IgcChipComponent;
```

<!-- ComponentEnd: TreeGrid -->

### Web Components Search Box Input

Now let's create our search input!  By getting the input element we can get its current value. This will allow us to use the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html)'s `FindNext` and `FindPrev` methods to highlight all the occurrences of the `SearchText` and scroll to the next/previous one (depending on which method we have invoked).

Both the `FindNext` and the `FindPrev` methods have three arguments:

- `Text`: **string** (the text we are searching for)
- (optional) `CaseSensitive`: **boolean** (should the search be case sensitive or not, default value is false)
- (optional) `ExactMatch`: **boolean** (should the search be by an exact match or not, default value is false)

When searching by an exact match, the search API will highlight as results only the cell values that match entirely the `SearchText` by taking the case sensitivity into account as well. For example the strings '_software_' and '_Software_' are an exact match with a disregard for the case sensitivity.

The methods from above return a **number** value (the number of times the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) contains the given string).

<!-- ComponentStart: TreeGrid -->

```html
<igc-input id="searchBox" name="searchBox">
</igc-input>
```

```ts
constructor() {
    this.searchBox = document.getElementById('searchBox') as IgcInputComponent;
    this.caseSensitiveChip = document.getElementById('caseSensitiveChip') as IgcChipComponent;
    this.exactMatchChip = document.getElementById('exactMatchChip') as IgcChipComponent;
}

public nextSearch() {
    this.treeGrid.findNext(this.searchBox.value, this.caseSensitiveChip.selected, this.exactMatchChip.selected);
}
```

<!-- ComponentEnd: TreeGrid -->

### Add Search Buttons

In order to freely search and navigate among our search results, let's create a couple of buttons by invoking the `FindNext` and the `FindPrev` methods inside the buttons' respective click event handlers.

<!-- ComponentStart: TreeGrid -->

```html
<igc-icon-button id="prevIconBtn" variant="flat" name="prev" collection="material" ></igc-icon-button>
<igc-icon-button id="nextIconBtn" variant="flat" name="next" collection="material"></igc-icon-button>
```

```ts
constructor() {
    this.nextIconButton = document.getElementById('nextIconBtn') as IgcIconButtonComponent;
    this.prevIconButton = document.getElementById('prevIconBtn') as IgcIconButtonComponent;
    this.nextIconButton.addEventListener("click", this.nextSearch);
    this.prevIconButton.addEventListener("click", this.prevSearch);
}

public prevSearch() {
    this.treeGrid.findPrev(this.searchBox.value, this.caseSensitiveChip.selected, this.exactMatchChip.selected);
}

public nextSearch() {
    this.treeGrid.findNext(this.searchBox.value, this.caseSensitiveChip.selected, this.exactMatchChip.selected);
}
```

### Add Keyboard Search

We can also allow the users to navigate the results by using the keyboard's arrow keys and the <kbd>ENTER</kbd> key. In order to achieve this, we can handle the **keydown** event of our search input by preventing the default caret movement of the input with the `PreventDefault` method and invoke the `FindNext`/`FindPrev` methods depending on which key the user has pressed.

<!-- ComponentStart: TreeGrid -->

```html
<igc-input id="searchBox" name="searchBox">
</igc-input>
```

```ts
constructor() {
    this.searchBox = document.getElementById('searchBox') as IgcInputComponent;

    this.searchBox.addEventListener("keydown", (evt) => { this.onSearchKeydown(evt); });
    this.searchBox.addEventListener("igcInput", (evt) => {
        this.treeGrid.findNext(evt.detail, this.caseSensitiveChip.selected, this.exactMatchChip.selected);
    });
}

public onSearchKeydown(evt: KeyboardEvent) {
    if (evt.key === 'Enter' || evt.key === 'ArrowDown') {
        evt.preventDefault();
        this.treeGrid.findNext(this.searchBox.value, this.caseSensitiveChip.selected, this.exactMatchChip.selected);
    } else if (evt.key === 'ArrowUp') {
        evt.preventDefault();
        this.treeGrid.findPrev(this.searchBox.value, this.caseSensitiveChip.selected, this.exactMatchChip.selected);
    }
}
```

<!-- ComponentEnd: TreeGrid -->

### Case Sensitive and Exact Match

<!-- ComponentStart: TreeGrid -->

Now let's allow the user to choose whether the search should be case sensitive and/or by an exact match. For this purpose we can use simple selectable `Chips` and bind to the `igcSelect` event to determine when the user interacts with them.

```html
<igc-chip selectable="true" id="caseSensitiveChip">Case Sensitive</igc-chip>
<igc-chip selectable="true" id="exactMatchChip">Exact Match</igc-chip>
```

```ts
constructor() {
    this.caseSensitiveChip = document.getElementById('caseSensitiveChip') as IgcChipComponent;
    this.exactMatchChip = document.getElementById('exactMatchChip') as IgcChipComponent;

    this.caseSensitiveChip.addEventListener("igcSelect", (evt) => {
        this.treeGrid.findNext(this.searchBox.value, evt.detail, this.exactMatchChip.selected);
    });
    this.exactMatchChip.addEventListener("igcSelect", (evt) => {
        this.treeGrid.findNext(this.searchBox.value, this.caseSensitiveChip.selected, evt.detail);
    });
}
```

### Persistence

What if we would like to filter and sort our [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) or even to add and remove records? After such operations, the highlights of our current search automatically update and persist over any text that matches the `SearchText`! Furthermore, the search will work with paging and will persist the highlights through changes of the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html)'s `PerPage` property.

### Adding icons

By using some of our other components, we can create an enriched user interface and improve the overall design of our entire search bar! We can have a nice search or delete icon on the left of the search input, a couple of chips for our search options and some material design icons combined with nice ripple styled buttons for our navigation on the right.

```typescript
import { defineComponents, IgcInputComponent, IgcChipComponent, IgcIconComponent, IgcIconButtonComponent, registerIconFromText } from "igniteui-webcomponents";

defineComponents(IgcInputComponent, IgcChipComponent, IgcIconComponent, IgcIconButtonComponent);
```

Finally, let's update our template with the new components!

<!-- ComponentStart: TreeGrid -->

We will wrap all of our components inside an [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html). On the left we will toggle between a search and a delete/clear icon (depending on whether the search input is empty or not). In the center, we will position the input itself. In addition, whenever the delete icon is clicked, we will update our `SearchText` and invoke the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html)'s `ClearSearch` method to clear the highlights.

```html
<igc-input id="searchBox" name="searchBox">
    <igc-icon id="icon" slot="prefix" name="search" collection="material"></igc-icon>
    <div slot="suffix">
        <igc-chip selectable="true" id="caseSensitiveChip">Case Sensitive</igc-chip>
        <igc-chip selectable="true" id="exactMatchChip">Exact Match</igc-chip>
    </div>
    <div slot="suffix">
        <igc-icon-button id="prevIconBtn" variant="flat" name="prev" collection="material" ></igc-icon-button>
        <igc-icon-button id="nextIconBtn" variant="flat" name="next" collection="material"></igc-icon-button>
    </div>
</igc-input>
```

```typescript
constructor() {
    const prevIconText = "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z'></path></svg>";
    const nextIconText = "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'></path></svg>";
    const searchIconText = "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' /></svg>";
    const clearIconText = "<svg width='24' height='24' viewBox='0 0 24 24' title='Clear'><path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path></svg>";

    registerIconFromText('prev', prevIconText, 'material');
    registerIconFromText('next', nextIconText, 'material');
    registerIconFromText('search', searchIconText, 'material');
    registerIconFromText('clear', clearIconText, 'material');

    this.icon = document.getElementById('icon') as IgcIconComponent;
    this.searchBox = document.getElementById('searchBox') as IgcInputComponent;

    this.searchBox.addEventListener('igcInput', (evt) => {
        this.icon.name = evt.detail ? 'clear' : 'search';
    });
    this.icon.addEventListener('click', this.clearSearch);
}

public clearSearch() {
    this.searchBox.value = '';
    this.icon.name = 'search';
    this.treeGrid.clearSearch();
}
```

On the right in our input group, let's create three separate containers with the following purposes:

- For displaying a couple of chips that toggle the `CaseSensitive` and the `ExactMatch` properties. We have replaced the checkboxes with two stylish chips. Whenever a chip is clicked, we invoke its respective handler.

```html
<div slot="suffix">
    <igc-chip selectable="true" id="caseSensitiveChip">Case Sensitive</igc-chip>
    <igc-chip selectable="true" id="exactMatchChip">Exact Match</igc-chip>
</div>
```

<!-- ComponentStart: TreeGrid -->

```ts
constructor() {
    this.caseSensitiveChip = document.getElementById('caseSensitiveChip') as IgcChipComponent;
    this.exactMatchChip = document.getElementById('exactMatchChip') as IgcChipComponent;

    this.caseSensitiveChip.addEventListener('igcSelect', (evt) => {
        this.treeGrid.findNext(this.searchBox.value, evt.detail, this.exactMatchChip.selected);
    });
    this.exactMatchChip.addEventListener('igcSelect', (evt) => {
        this.treeGrid.findNext(this.searchBox.value, this.caseSensitiveChip.selected, evt.detail);
    });
}
```

- For the search navigation buttons, we have added two ripple styled buttons with material icons. The handlers for the click events remain the same - invoking the `FindNext`/`FindPrev` methods.

```html
<div slot="suffix">
    <igc-icon-button id="prevIconBtn" variant="flat" name="prev" collection="material" ></igc-icon-button>
    <igc-icon-button id="nextIconBtn" variant="flat" name="next" collection="material"></igc-icon-button>
</div>
```

```typescript
constructor() {
    const nextIconButton = this.nextIconButton = document.getElementById('nextIconBtn') as IgcIconButtonComponent;
    const prevIconButton = this.prevIconButton = document.getElementById('prevIconBtn') as IgcIconButtonComponent;
    nextIconButton.addEventListener("click", this.nextSearch);
    prevIconButton.addEventListener("click", this.prevSearch);
}
```

<!-- ComponentStart: TreeGrid -->

```ts
public prevSearch() {
    this.treeGrid.findPrev(this.searchBox.value, this.caseSensitiveChip.selected, this.exactMatchChip.selected);
}

public nextSearch() {
    this.treeGrid.findNext(this.searchBox.value, this.caseSensitiveChip.selected, this.exactMatchChip.selected);
}
```

## Known Limitations

|Limitation|Description|
|--- |--- |
|Searching in cells with a template|The search functionality highlights work only for the default cell templates. If you have a column with custom cell template, the highlights will not work so you should either use alternative approaches, such as a column formatter, or set the [`searchable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#searchable) property on the column to false.|
|Remote Virtualization| The search will not work properly when using remote virtualization|
|Cells with cut off text| When the text in the cell is too large to fit and the text we are looking for is cut off by the ellipsis, we will still scroll to the cell and include it in the match count, but nothing will be highlighted |

## API References

In this article we implemented our own search bar for the [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) with some additional functionality when it comes to navigating between the search results. We also used some additional Ignite UI for Web Components components like icons, chips and inputs. The search API is listed below.

[`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) methods:

- `FindNext`
- `FindPrev`
- `ClearSearch`
- `RefreshSearch`

[`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html) properties:

- [`searchable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#searchable)

Additional components with relative APIs that were used:

- [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html)
- [`IgcChipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchipcomponent.html)

## Additional Resources

- [Virtualization and Performance](virtualization.md)
- [Filtering](filtering.md)
- [Paging](paging.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
