---
title: React Grid Search Filter - Ignite UI for React
_description: Perform data manipulation without affecting the underlying data with Grid Batch Editing, using React Grid. See demos & examples!
_keywords: React, Grid, IgrGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid"]
namespace: Infragistics.Controls
_tocName: Search
_premium: true
---

# React Grid Search Filter

The Ignite UI for React Search Filter feature in React Grid enables the process of finding values in the collection of data. We make it easier to set up this functionality and it can be implemented with a search input box, buttons, keyboard navigation and other useful features for an even better user experience. While browsers natively provide content search functionality, most of the time the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) virtualizes its columns and rows that are out of view. In these cases, the native browser search is unable to search data in the virtualized cells, since they are not part of the DOM. We have extended the React Material table-based grid with a **search API** that allows you to search through the **virtualized content** of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html).

## React Search Example

The following example represents [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) with search input box that allows searching in all columns and rows, as well as specific filtering options for each column.

```typescript
export class MarketRecord {
    public constructor(init: Partial<MarketRecord>) {
      Object.assign(this, init);
    }
  
    public IndustryGroup: string;
    public IndustrySector: string;
    public SectorType: string;
    public KRD: number;
    public MarketNotion: number;
    public Date: string;
  }
  
  export class MarketData extends Array<MarketRecord>
  {
    public constructor() {
      super();
  
  
      this.push(new MarketRecord(
        {
          Date: "new",
          IndustryGroup: "Airlines",
          IndustrySector: "Consumer",
          KRD: 6E-05,
          MarketNotion: 47338486.0,
          SectorType: "PUBLIC"
        }));
      this.push(new MarketRecord({
        Date: "new",
        IndustryGroup: "Insurance",
        IndustrySector: "Financial",
        KRD: 1.46433,
        MarketNotion: 42605156.0,
        SectorType: "PUBLIC"
      }));
      this.push(new MarketRecord({
        Date: "new",
        IndustryGroup: "Insurance",
        IndustrySector: "Financial",
        KRD: 0.0,
        MarketNotion: 41030865.0,
        SectorType: "PUBLIC"
      }));
      // ... 39 more items
    }
  }
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.gridSize {
    --ig-size: var(--ig-size-medium);
}
```
```tsx
import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrGrid, IgrColumn } from "igniteui-react-grids";
import { MarketData } from "./MarketData";
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

const data = new MarketData();

export default function Sample() {
  const gridRef = useRef<IgrGrid>(null);
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
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSearch(searchText, caseSensitiveSelected, exactMatchSelected);
    }
  }

  const handleCaseSensitiveChange = (event: IgrComponentBoolValueChangedEventArgs) => {
    setCaseSensitiveSelected(event.detail);
    nextSearch(searchText, event.detail, exactMatchSelected);
  }

  const handleExactMatchChange = (event: IgrComponentBoolValueChangedEventArgs) => {
    setExactMatchSelected(event.detail);
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
        <IgrGrid className="gridSize" ref={gridRef} autoGenerate={false} allowFiltering={true} data={data} height="100%" width="100%">
          <IgrColumn field="IndustrySector" dataType="string" sortable={true}></IgrColumn>
          <IgrColumn field="IndustryGroup" dataType="string" sortable={true}></IgrColumn>
          <IgrColumn field="SectorType" dataType="string" sortable={true}></IgrColumn>
          <IgrColumn field="KRD" dataType="number" sortable={true}></IgrColumn>
          <IgrColumn field="MarketNotion" dataType="number" sortable={true}></IgrColumn>
        </IgrGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample />);
```


## React Search Usage

### Grid Setup

Let's start by creating our grid and binding it to our data. We will also add some custom styles for the components we will be using!

<!-- ComponentStart: Grid -->

```css
.gridSize {
    --ig-size: var(--ig-size-small);
}
```

```tsx
<IgrGrid ref={gridRef} className="gridSize" autoGenerate={false} allowFiltering={true} data={data}>
    <IgrColumn field="IndustrySector" dataType="string" sortable={true}></IgrColumn>
    <IgrColumn field="IndustryGroup" dataType="string" sortable={true}></IgrColumn>
    <IgrColumn field="SectorType" dataType="string" sortable={true}></IgrColumn>
    <IgrColumn field="KRD" dataType="number" sortable={true}></IgrColumn>
    <IgrColumn field="MarketNotion" dataType="number" sortable={true}></IgrColumn>
</IgrGrid>
```

<!-- ComponentEnd: Grid -->

Great, and now let's prepare for the search API of our [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)! We can create a few properties, which can be used for storing the currently searched text and whether the search is case sensitive and/or by an exact match.

```tsx
const gridRef = useRef<IgrGrid>(null);
const [caseSensitiveSelected, setCaseSensitiveSelected] = useState<boolean>(false);
const [exactMatchSelected, setExactMatchSelected] = useState<boolean>(false);
const [searchText, setSearchText] = useState('');
```

<!-- ComponentEnd: Grid -->

### React Search Box Input

<!-- React -->

Now let's create our search input! By binding our `searchText` to the `value` property to our newly created input and subscribe to the `inputOccured` event, we can detect every single `searchText` modification by the user. This will allow us to use the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)'s `findNext` and `findPrev` methods to highlight all the occurrences of the `searchText` and scroll to the next/previous one (depending on which method we have invoked).

<!-- end: React -->

Both the [`findNext`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#findNext) and the [`findPrev`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#findPrev) methods have three arguments:

- `Text`: **string** (the text we are searching for)
- (optional) `CaseSensitive`: **boolean** (should the search be case sensitive or not, default value is false)
- (optional) `ExactMatch`: **boolean** (should the search be by an exact match or not, default value is false)

When searching by an exact match, the search API will highlight as results only the cell values that match entirely the `SearchText` by taking the case sensitivity into account as well. For example the strings '*software*' and '*Software*' are an exact match with a disregard for the case sensitivity.

The methods from above return a **number** value (the number of times the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) contains the given string).

```tsx
const handleOnSearchChange = (event: IgrComponentValueChangedEventArgs) => {
    setSearchText(event.detail);
    nextSearch(event.detail, caseSensitiveSelected, exactMatchSelected);
}

<IgrInput name="searchBox" value={searchText} onInput={handleOnSearchChange}>
</IgrInput>
```

<!-- ComponentEnd: Grid -->

### Add Search Buttons

In order to freely search and navigate among our search results, let's create a couple of buttons by invoking the [`findNext`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#findNext) and the [`findPrev`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#findPrev) methods inside the buttons' respective click event handlers.

<!-- ComponentEnd: Grid -->

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

<!-- ComponentStart: Grid -->

```tsx
const searchKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        nextSearch(searchText, caseSensitiveSelected, exactMatchSelected);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSearch(searchText, caseSensitiveSelected, exactMatchSelected);
    }
}

 <div onKeyDown={searchKeyDown}>
    <IgrInput name="searchBox" value={searchText} onInput={handleOnSearchChange}></IgrInput>
</div>
```

<!-- ComponentEnd: Grid -->

### Case Sensitive and Exact Match

<!-- ComponentStart: Grid -->

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

What if we would like to filter and sort our [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) or even to add and remove records? After such operations, the highlights of our current search automatically update and persist over any text that matches the `SearchText`! Furthermore, the search will work with paging and will persist the highlights through changes of the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html)'s `PerPage` property.

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

In this article we implemented our own search bar for the [`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) with some additional functionality when it comes to navigating between the search results. We also used some additional Ignite UI for React components like icons, chips and inputs. The search API is listed below.

[`IgrGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgrid.html) methods:

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
