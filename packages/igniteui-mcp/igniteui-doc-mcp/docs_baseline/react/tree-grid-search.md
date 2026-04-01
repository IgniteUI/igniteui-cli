---
title: React Tree Grid Search Filter - Ignite UI for React
_description: Perform data manipulation without affecting the underlying data with Tree Grid Batch Editing, using React Tree Grid. See demos & examples!
_keywords: React, Tree Grid, IgrTreeGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid"]
namespace: Infragistics.Controls
_tocName: Search
_premium: true
---

# React Tree Grid Search Filter

The Ignite UI for React Search Filter feature in React Tree Grid enables the process of finding values in the collection of data. We make it easier to set up this functionality and it can be implemented with a search input box, buttons, keyboard navigation and other useful features for an even better user experience. While browsers natively provide content search functionality, most of the time the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) virtualizes its columns and rows that are out of view. In these cases, the native browser search is unable to search data in the virtualized cells, since they are not part of the DOM. We have extended the React Material table-based grid with a **search API** that allows you to search through the **virtualized content** of the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html).

## React Search Example

The following example represents [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) with search input box that allows searching in all columns and rows, as well as specific filtering options for each column.

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
```tsx
import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrTreeGrid, IgrColumn } from "igniteui-react-grids";
import { EmployeesFlatData } from "./EmployeesFlatData";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import {
  IgrChip,
  IgrComponentBoolValueChangedEventArgs,
  IgrComponentValueChangedEventArgs,
  IgrIconButton,
  IgrInput,
  IgrRipple,
  registerIconFromText,
} from "igniteui-react";

const searchIconText =
  "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' /></svg>";
const prevIconText =
  "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z'></path></svg>";
const nextIconText =
  "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'></path></svg>";
const clearIconText =
  "<svg width='24' height='24' viewBox='0 0 24 24' title='Clear'><path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path></svg>";

const data = new EmployeesFlatData();

export default function Sample() {
  const gridRef = useRef<IgrTreeGrid>(null);
  const [caseSensitiveSelected, setCaseSensitiveSelected] = useState<boolean>(false);
  const [exactMatchSelected, setExactMatchSelected] = useState<boolean>(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    registerIconFromText("search", searchIconText, "material");
    registerIconFromText("clear", clearIconText, "material");
    registerIconFromText("prev", prevIconText, "material");
    registerIconFromText("next", nextIconText, "material");
  }, []);

  const handleOnSearchChange = (event: IgrComponentValueChangedEventArgs) => {
    setSearchText(event.detail);
    nextSearch(event.detail, caseSensitiveSelected, exactMatchSelected);
  }

  const clearSearch = () => {
    setSearchText('');
    gridRef.current.clearSearch();
  }

  const searchKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter' || e.key === 'ArrowDown') {
      e.preventDefault();
      nextSearch(searchText, caseSensitiveSelected, exactMatchSelected);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      prevSearch(searchText, caseSensitiveSelected, exactMatchSelected);
    }
  }

  const handleCaseSensitiveChange = (event: IgrComponentBoolValueChangedEventArgs) => {
    setCaseSensitiveSelected(!caseSensitiveSelected);
    nextSearch(searchText, event.detail, exactMatchSelected);
  }

  const handleExactMatchChange = (event: IgrComponentBoolValueChangedEventArgs) => {
    setExactMatchSelected(!exactMatchSelected);
    nextSearch(searchText, caseSensitiveSelected, event.detail);
  }

  const prevSearch = (text: string, caseSensitive: boolean, exactMatch: boolean) => {
    gridRef.current.findPrev(text, caseSensitive, exactMatch);
  }

  const nextSearch = (text: string, caseSensitive: boolean, exactMatch: boolean) => {
    gridRef.current.findNext(text, caseSensitive, exactMatch);
  }

  return (
    <div className="container sample">
      <div className="container vertical">
        <div style={{ marginBottom: "1rem" }} onKeyDown={searchKeyDown}>
          <IgrInput name="searchBox" value={searchText} onInput={handleOnSearchChange}>

            <div slot="prefix">
              {searchText.length === 0 ? (
                <IgrIconButton
                  variant="flat"
                  name="search"
                  collection="material"
                ></IgrIconButton>
              ) : (
                <IgrIconButton
                  variant="flat"
                  name="clear"
                  collection="material"
                  onClick={clearSearch}
                ></IgrIconButton>
              )}
            </div>

            <div slot="suffix">
              <IgrChip selectable={true} onSelect={handleCaseSensitiveChange}>
                <span>Case Sensitive</span>
              </IgrChip>
              <IgrChip selectable={true} onSelect={handleExactMatchChange}>
                <span>Exact Match</span>
              </IgrChip>
            </div>
            <div slot="suffix">
              <IgrIconButton
                variant="flat"
                name="prev"
                collection="material"
                onClick={() => prevSearch(searchText, caseSensitiveSelected, exactMatchSelected)}
              >
                <IgrRipple></IgrRipple>
              </IgrIconButton>
              <IgrIconButton
                variant="flat"
                name="next"
                collection="material"
                onClick={() => nextSearch(searchText, caseSensitiveSelected, exactMatchSelected)}
              >
                <IgrRipple></IgrRipple>
              </IgrIconButton>
            </div>
          </IgrInput>
        </div>
        <IgrTreeGrid ref={gridRef} data={data} autoGenerate={false}
          primaryKey="ID" foreignKey="ParentID" allowFiltering={true} height="100%" width="100%">
          <IgrColumn field="Name" dataType="string" sortable={true}></IgrColumn>
          <IgrColumn field="ID" dataType="number" sortable={true}></IgrColumn>
          <IgrColumn field="Title" dataType="string" sortable={true}></IgrColumn>
          <IgrColumn field="Age" dataType="number" sortable={true}></IgrColumn>
          <IgrColumn field="HireDate" dataType="date" sortable={true}></IgrColumn>
        </IgrTreeGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample />);
```


## React Search Usage

### Tree Grid Setup

Let's start by creating our grid and binding it to our data. We will also add some custom styles for the components we will be using!

<!-- ComponentStart: TreeGrid -->

```tsx
<IgrTreeGrid ref={gridRef} data={data} autoGenerate={false} primaryKey="ID" foreignKey="ParentID" allowFiltering={true} height="100%" width="100%">
    <IgrColumn field="Name" dataType="string" sortable={true}></IgrColumn>
    <IgrColumn field="ID" dataType="number" sortable={true}></IgrColumn>
    <IgrColumn field="Title" dataType="string" sortable={true}></IgrColumn>
    <IgrColumn field="Age" dataType="number" sortable={true}></IgrColumn>
    <IgrColumn field="HireDate" dataType="date" sortable={true}></IgrColumn>
</IgrTreeGrid>
```

<!-- ComponentEnd: TreeGrid -->

Great, and now let's prepare for the search API of our [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html)! We can create a few properties, which can be used for storing the currently searched text and whether the search is case sensitive and/or by an exact match.

```tsx
const gridRef = useRef<IgrTreeGrid>(null);
const [caseSensitiveSelected, setCaseSensitiveSelected] = useState<boolean>(false);
const [exactMatchSelected, setExactMatchSelected] = useState<boolean>(false);
const [searchText, setSearchText] = useState('');
```

<!-- ComponentEnd: TreeGrid -->

### React Search Box Input

<!-- React -->

Now let's create our search input! By binding our `searchText` to the `value` property to our newly created input and subscribe to the `inputOccured` event, we can detect every single `searchText` modification by the user. This will allow us to use the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html)'s `findNext` and `findPrev` methods to highlight all the occurrences of the `searchText` and scroll to the next/previous one (depending on which method we have invoked).

<!-- end: React -->

Both the [`findNext`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#findNext) and the [`findPrev`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#findPrev) methods have three arguments:

- `Text`: **string** (the text we are searching for)
- (optional) `CaseSensitive`: **boolean** (should the search be case sensitive or not, default value is false)
- (optional) `ExactMatch`: **boolean** (should the search be by an exact match or not, default value is false)

When searching by an exact match, the search API will highlight as results only the cell values that match entirely the `SearchText` by taking the case sensitivity into account as well. For example the strings '*software*' and '*Software*' are an exact match with a disregard for the case sensitivity.

The methods from above return a **number** value (the number of times the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) contains the given string).

```tsx
const handleOnSearchChange = (event: IgrComponentValueChangedEventArgs) => {
    setSearchText(event.detail);
    nextSearch(event.detail, caseSensitiveSelected, exactMatchSelected);
}

<IgrInput name="searchBox" value={searchText} onInput={handleOnSearchChange}>
</IgrInput>
```

<!-- ComponentEnd: TreeGrid -->

### Add Search Buttons

In order to freely search and navigate among our search results, let's create a couple of buttons by invoking the [`findNext`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#findNext) and the [`findPrev`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#findPrev) methods inside the buttons' respective click event handlers.

<!-- ComponentEnd: TreeGrid -->

```tsx
const prevSearch = (text: string, caseSensitive: boolean, exactMatch: boolean) => {
    gridRef.current.findPrev(text, caseSensitive, exactMatch);
}

const nextSearch = (text: string, caseSensitive: boolean, exactMatch: boolean) => {
    gridRef.current.findNext(text, caseSensitive, exactMatch);
}

<IgrIconButton variant="flat" name="prev" collection="material" onClick={() => prevSearch(searchText, caseSensitiveSelected, exactMatchSelected)}>
</IgrIconButton>
<IgrIconButton variant="flat" name="next" collection="material" onClick={() => nextSearch(searchText, caseSensitiveSelected, exactMatchSelected)}>
</IgrIconButton>
```

### Add Keyboard Search

We can also allow the users to navigate the results by using the keyboard's arrow keys and the <kbd>ENTER</kbd> key. In order to achieve this, we can handle the **keydown** event of our search input by preventing the default caret movement of the input with the `PreventDefault` method and invoke the [`findNext`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#findNext)/[`findPrev`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#findPrev) methods depending on which key the user has pressed.

<!-- ComponentStart: TreeGrid -->

```tsx
const searchKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextSearch(searchText, caseSensitiveSelected, exactMatchSelected);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        prevSearch(searchText, caseSensitiveSelected, exactMatchSelected);
    }
}

const handleOnSearchChange = (event: IgrComponentValueChangedEventArgs) => {
    setSearchText(event.detail);
    gridRef.current.findNext(event.detail, caseSensitiveSelected, exactMatchSelected);
}

<div onKeyDown={searchKeyDown}>
    <IgrInput name="searchBox" value={searchText} onInput={handleOnSearchChange}></IgrInput>
</div>
```

<!-- ComponentEnd: TreeGrid -->

### Case Sensitive and Exact Match

<!-- ComponentStart: TreeGrid -->

<!-- React -->

Now let's allow the user to choose whether the search should be case sensitive and/or by an exact match. For this purpose we can use the [`IgrChip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrchip.html) component along with a boolean state variable to indicate whether the IgrChip is selected.

<!-- end: React -->

```tsx
const [caseSensitiveSelected, setCaseSensitiveSelected] = useState<boolean>(false);
const [exactMatchSelected, setExactMatchSelected] = useState<boolean>(false);

const handleCaseSensitiveChange = (event: IgrComponentBoolValueChangedEventArgs) => {
    setCaseSensitiveSelected(event.detail);
    nextSearch(searchText, event.detail, exactMatchSelected);
}

const handleExactMatchChange = (event: IgrComponentBoolValueChangedEventArgs) => {
    setExactMatchSelected(event.detail);
    nextSearch(searchText, caseSensitiveSelected, event.detail);
}

<IgrChip selectable={true} onSelect={handleCaseSensitiveChange}>
    <span>Case Sensitive</span>
</IgrChip>
<IgrChip selectable={true} onSelect={handleExactMatchChange}>
    <span>Exact Match</span>
</IgrChip>
```

### Persistence

What if we would like to filter and sort our [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) or even to add and remove records? After such operations, the highlights of our current search automatically update and persist over any text that matches the `SearchText`! Furthermore, the search will work with paging and will persist the highlights through changes of the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html)'s `PerPage` property.

### Adding icons

By using some of our other components, we can create an enriched user interface and improve the overall design of our entire search bar! We can have a nice search or delete icon on the left of the search input, a couple of chips for our search options and some material design icons combined with nice ripple styled buttons for our navigation on the right.

<!-- React -->

Let's begin by creating the search navigation buttons on the right of the input by adding two ripple styled buttons with material icons. The handlers for the click events remain the same - invoking the [`findNext`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#findNext)/[`findPrev`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#findPrev) methods.

<!-- end: React -->

- For displaying a couple of chips that toggle the `CaseSensitive` and the `ExactMatch` properties. We have replaced the checkboxes with two stylish chips. Whenever a chip is clicked, we invoke its respective handler.

```tsx
const prevSearch = (text: string, caseSensitive: boolean, exactMatch: boolean) => {
    gridRef.current.findPrev(text, caseSensitive, exactMatch);
}

const nextSearch = (text: string, caseSensitive: boolean, exactMatch: boolean) => {
    gridRef.current.findNext(text, caseSensitive, exactMatch);
}

<div slot="suffix">
    <IgrIconButton variant="flat" name="prev" collection="material" onClick={() => prevSearch(searchText, caseSensitiveSelected, exactMatchSelected)}>
        <IgrRipple></IgrRipple>
    </IgrIconButton>
    <IgrIconButton variant="flat" name="next" collection="material" onClick={() => nextSearch(searchText, caseSensitiveSelected, exactMatchSelected)}>
        <IgrRipple></IgrRipple>
    </IgrIconButton>
</div>
```

<!-- React -->

Now let's add the search and clear icons to the left of the input:

```tsx
const clearSearch = () => {
    setSearchText('');
    gridRef.current.clearSearch();
}

<div slot="prefix">
    {searchText.length === 0 ? (
        <IgrIconButton variant="flat" name="search"  collection="material">
        </IgrIconButton>
        ) : (
        <IgrIconButton variant="flat" name="clear" collection="material" onClick={clearSearch}>
        </IgrIconButton>
    )}
</div>
```

Finally, this is the end result when we combine everything:

```tsx
useEffect(() => {
    registerIconFromText("search", searchIconText, "material");
    registerIconFromText("clear", clearIconText, "material");
    registerIconFromText("prev", prevIconText, "material");
    registerIconFromText("next", nextIconText, "material");
}, []);

<IgrInput name="searchBox" value={searchText} onInput={handleOnSearchChange}>
    <div slot="prefix">
        {searchText.length === 0 ? (
            <IgrIconButton variant="flat" name="search"  collection="material">
            </IgrIconButton>
            ) : (
            <IgrIconButton variant="flat" name="clear" collection="material" onClick={clearSearch}>
            </IgrIconButton>
        )}
    </div>
    <div slot="suffix">
        <IgrIconButton variant="flat" name="prev" collection="material" onClick={() => prevSearch(searchText, caseSensitiveSelected, exactMatchSelected)}>
            <IgrRipple></IgrRipple>
        </IgrIconButton>
        <IgrIconButton variant="flat" name="next" collection="material" onClick={() => nextSearch(searchText, caseSensitiveSelected, exactMatchSelected)}>
            <IgrRipple></IgrRipple>
        </IgrIconButton>
    </div>
</IgrInput>
```

## Known Limitations

|Limitation|Description|
|--- |--- |
|Searching in cells with a template|The search functionality highlights work only for the default cell templates. If you have a column with custom cell template, the highlights will not work so you should either use alternative approaches, such as a column formatter, or set the [`searchable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#searchable) property on the column to false.|
|Remote Virtualization| The search will not work properly when using remote virtualization|
|Cells with cut off text| When the text in the cell is too large to fit and the text we are looking for is cut off by the ellipsis, we will still scroll to the cell and include it in the match count, but nothing will be highlighted |

## API References

In this article we implemented our own search bar for the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) with some additional functionality when it comes to navigating between the search results. We also used some additional Ignite UI for React components like icons, chips and inputs. The search API is listed below.

[`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) methods:

- [`findNext`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#findNext)
- [`findPrev`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#findPrev)
- [`clearSearch`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#clearSearch)
- [`refreshSearch`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#refreshSearch)

[`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html) properties:

- [`searchable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#searchable)

Additional components with relative APIs that were used:

- [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html)
- [`IgrChip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrchip.html)

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

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
