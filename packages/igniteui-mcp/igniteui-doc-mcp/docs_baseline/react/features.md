---
title: "React Combo Features"
description: "The React Combo binds to local data, filters its options as the user types, groups them by a data field, and can be disabled."
keywords: "Ignite UI for React, UI controls, React widgets, web widgets, UI widgets, React, Native React Components Suite, Native React Controls, Native React Components Library, React Combo Features, React Combo Data Binding, React Combo Filtering, React Combo Grouping"
license: MIT
last_updated: "2026-11-16"
platformType: web-only
mentionedTypes: ["Combo"]
llms:
  description: "The React Combo binds to local data, filters its options as the user types, groups them by a data field, and can be disabled."
_tocName: Features
---
# Combo Component Features

The React Combo binds to local data, filters its options as the user types, groups them by a data field, and can be disabled.

The Combo can also load its options from a remote service one page at a time.

## Live Demo

```typescript
interface City {
  id: string;
  name: string;
  country: string;
}

export const Cities: City[] = [
  { name: "London", id: "UK01", country: "UK" },
  { name: "Manchester", id: "UK02", country: "UK" },
  { name: "Birmingham", id: "UK03", country: "UK" },
  { name: "Glasgow", id: "UK04", country: "UK" },
  { name: "Liverpool", id: "UK05", country: "UK" },
  { name: "New York", id: "US01", country: "USA" },
  { name: "Miami", id: "US02", country: "USA" },
  { name: "Philadelphia", id: "US03", country: "USA" },
  { name: "Chicago", id: "US04", country: "USA" },
  { name: "Springfield", id: "US05", country: "USA" },
  { name: "Los Angeles", id: "US06", country: "USA" },
  { name: "Houston", id: "US07", country: "USA" },
  { name: "Phoenix", id: "US08", country: "USA" },
  { name: "San Diego", id: "US09", country: "USA" },
  { name: "Dallas", id: "US010", country: "USA" },
  { name: "Sofia", id: "BG01", country: "Bulgaria" },
  { name: "Plovdiv", id: "BG02", country: "Bulgaria" },
  { name: "Varna", id: "BG03", country: "Bulgaria" },
  { name: "Burgas", id: "BG04", country: "Bulgaria" },
  { name: "Rome", id: "IT01", country: "Italy" },
  { name: "Milan", id: "IT02", country: "Italy" },
  { name: "Naples", id: "IT03", country: "Italy" },
  { name: "Turin", id: "IT04", country: "Italy" },
  { name: "Palermo", id: "IT05", country: "Italy" },
  { name: "Florence", id: "IT06", country: "Italy" },
];
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.options {
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  gap: 8px;
}
```
```tsx
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { IgrCombo, IgrSwitch } from "igniteui-react";
import "./index.css";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { Cities } from "./ComboData";

export default function ComboFeatures() {
  const [disableFiltering, setDisableFiltering] = useState(false);
  const [caseSensitiveIcon, setCaseSensitiveIcon] = useState(false);
  const [groupingEnabled, setGroupingEnabled] = useState(false);
  const [comboDisabled, setComboDisabled] = useState(false);

  return (
    <div className="sample">
      <IgrCombo
        valueKey="id"
        displayKey="name"
        label="Cities"
        placeholder="Pick a city"
        placeholderSearch="Search for a city"
        data={Cities}
        disableFiltering={disableFiltering}
        caseSensitiveIcon={caseSensitiveIcon}
        groupKey={groupingEnabled ? "country" : undefined}
        disabled={comboDisabled}>
      </IgrCombo>
      <div className="options">
        <IgrSwitch checked={disableFiltering} onChange={e => setDisableFiltering(e.detail.checked)}>
          <span>Disable Filtering</span>
        </IgrSwitch>
        <IgrSwitch checked={caseSensitiveIcon} onChange={e => setCaseSensitiveIcon(e.detail.checked)}>
          <span>Show Case-sensitive Icon</span>
        </IgrSwitch>
        <IgrSwitch checked={groupingEnabled} onChange={e => setGroupingEnabled(e.detail.checked)}>
          <span>Enable Grouping</span>
        </IgrSwitch>
        <IgrSwitch checked={comboDisabled} onChange={e => setComboDisabled(e.detail.checked)}>
          <span>Disable Combo</span>
        </IgrSwitch>
      </div>
    </div>
  );
}

// rendering above function to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComboFeatures />);
```

## Features

### Data Binding

The following snippets bind the React Combo to a local list of US states through its [`data`](mcp:get_api_reference?platform=react&component=IgrCombo&member=data) property, storing the code of each state and showing its name. The keys that the Combo reads from each item are described in [Data Binding](./overview.md#data-binding) in the Combo Overview topic.

```tsx
import { IgrCombo } from "igniteui-react";
import { usStates } from "./ComboData";

// Items such as { id: "CT", name: "Connecticut", region: "New England" }
<IgrCombo data={usStates} valueKey="id" displayKey="name" />
```

### Remote Binding

The React Combo can load its options from a remote service one page at a time. The service searches and pages on the server, and the Combo shows a placeholder for each item that isn't loaded yet. The sample below loads products from a remote service while the user scrolls and searches:



**Note:** 
Remote binding requires a version of `igniteui-react` that depends on `igniteui-webcomponents` 7.5.0 or later.

#### Binding the Combo to a Remote Service

Import `bindComboDataSource()` from `igniteui-webcomponents/extras/combo-data-source`, and pass it the Combo and a source with a `load()` function. The binding calls `load()` for each page with a request that holds `searchText`, `caseSensitive`, `startIndex` and `count`, and with an `AbortSignal`. Return the items of the page and the total count of the matching items:

In React, pass the element that the `ref` of `IgrCombo` holds, and dispose the binding when the component unmounts:

```tsx
import { useEffect, useRef } from "react";
import { IgrCombo } from "igniteui-react";
import { bindComboDataSource } from "igniteui-webcomponents/extras/combo-data-source";

const url = "https://services.odata.org/V4/Northwind/Northwind.svc/Products";

export default function RemoteCombo() {
  const comboRef = useRef<IgrCombo>(null);

  useEffect(() => {
    const binding = bindComboDataSource(comboRef.current!, {
      // Loads one page of the products that match the search text.
      load: async ({ searchText, startIndex, count }, signal) => {
        let query = `?$skip=${startIndex}&$top=${count}&$count=true`;
        if (searchText) {
          // Double the apostrophes for OData, then encode the text for the URL.
          const text = encodeURIComponent(searchText.replace(/'/g, "''"));
          query += `&$filter=contains(ProductName, '${text}')`;
        }

        // The signal lets a newer search abort this request.
        const response = await fetch(`${url}${query}`, { signal });
        const data = await response.json();
        return { items: data.value, totalCount: data["@odata.count"] };
      }
    }, {
      // The service returns up to 20 products per request.
      pageSize: 20
    });

    return () => binding.dispose();
  }, []);

  return <IgrCombo ref={comboRef} label="Products" valueKey="ProductID" displayKey="ProductName" />;
}
```

The binding switches the Combo to remote filtering and makes the requests:

- It loads the first page when the user opens a list that has no items, and again after the user stops typing in the search input.
- It appends the next page when the user scrolls near the end of the loaded items.
- It aborts a request that a newer search makes stale, through the signal that `load()` passes to `fetch()`.
- It sets the `totalItemCount` property of the Combo to the total count, and its `loading` property while a search waits or a page loads.

While the Combo holds fewer items than `totalItemCount`, its list shows a placeholder for each item to load, so the scrollbar shows the full length of the results. While `loading` is set, the Combo shows a spinner in place of its toggle icon. Replace the spinner through the `loading` slot, and style the spinner and the placeholders through the `loading` and `placeholder` CSS parts.

The third argument of `bindComboDataSource()` configures the binding:

| Option | Default | Description |
|---|---|---|
| `pageSize` | `50` | The smallest number of items that a request loads. A source can return fewer, for example up to the page limit of the server, and the Combo then requests the rest. |
| `debounce` | `300` | The pause in the typing, in milliseconds, before a search loads. |
| `loadOnOpen` | `true` | Whether the first page loads when the user opens a list that has no items. |
| `onError` | - | Receives the error of a failed request. The Combo keeps its items. |

`bindComboDataSource()` returns a binding with two methods. `refresh()` loads the first page of the current search again; call it after you change `filteringOptions.caseSensitive` in code. `dispose()` removes the listeners, aborts the requests in flight, and gives the Combo back its filtering mode.

#### Remote Filtering Mode

`bindComboDataSource()` uses only the public API of the Combo. To make the requests yourself, set the `mode` of [`filteringOptions`](mcp:get_api_reference?platform=react&component=IgrCombo&member=filteringOptions) to `remote`:

```tsx
// In an effect, once the Combo has rendered.
comboRef.current!.filteringOptions = { mode: "remote" };
```

In remote mode, the Combo leaves the search to your service:

- The Combo no longer filters its options. Read `detail.searchText` of the `igcSearchInput` event, search on the server, and set [`data`](mcp:get_api_reference?platform=react&component=IgrCombo&member=data) to the first page of the results. The server does the matching, so send `filteringOptions.caseSensitive` with the search.
- When the user scrolls near the end of `data`, the `igcDataRequest` event asks for `detail.count` more items at `detail.startIndex`. Append them to `data`.
- Set `totalItemCount` to the total count of the results, and `loading` while a request runs.

#### Handling Selection

Set [`valueKey`](mcp:get_api_reference?platform=react&component=IgrCombo&member=valueKey) when the Combo loads remote data. Each page creates new objects, and the Combo matches the selected items with them by the value of that key. A new `data` keeps the selection: the selected items stay selected when a search returns results that don't hold them, and show as selected again when a later page or search holds them.

To select values whose items no page has loaded yet, such as the values of a saved filter, add a `resolve()` function to the source of `bindComboDataSource()`. The binding calls it with those values, and selects the items it returns.

The Combo can't tell whether the server deleted a selected item or only hasn't sent its page. When you load live data again, call [`deselect()`](mcp:get_api_reference?platform=react&component=IgrCombo&member=deselect) for the selected items that the server no longer has.

### Filtering

The React Combo filters its list of options as the user types in the search input of the dropdown. Filtering is on by default. Set [`disableFiltering`](mcp:get_api_reference?platform=react&component=IgrCombo&member=disableFiltering) to turn it off, which also hides the search input.

To let users switch the search between case-sensitive and case-insensitive, set [`caseSensitiveIcon`](mcp:get_api_reference?platform=react&component=IgrCombo&member=caseSensitiveIcon). The Combo then shows a case-sensitive icon in its search input. The icon has no effect while filtering is disabled, because the search input is hidden.

```tsx
// Shows the case-sensitive icon in the search input
<IgrCombo caseSensitiveIcon={true} />

// Turns filtering off, which also hides the search input
<IgrCombo disableFiltering={true} />
```

#### Filtering Options

The [`filteringOptions`](mcp:get_api_reference?platform=react&component=IgrCombo&member=filteringOptions) property configures how the React Combo matches the search text:

- `filterKey` - the data field to search in. Defaults to the field set by `displayKey`.
- `caseSensitive` - whether the search is case-sensitive. Defaults to `false`. The case-sensitive icon toggles this value.
- `matchDiacritics` - whether accented letters match only themselves, so that `é` doesn't match `e`. Defaults to `false`.

The following snippet searches the region of each state instead of its name, and makes the search case-sensitive:

```tsx
<IgrCombo filteringOptions={{ filterKey: "region", caseSensitive: true }} />
```

### Search Input Focus

When the dropdown of the React Combo opens, its search input receives focus.

Set [`autofocusList`](mcp:get_api_reference?platform=react&component=IgrCombo&member=autofocusList) to focus the list of options instead. On mobile devices, this keeps the software keyboard from opening with the dropdown.

```tsx
<IgrCombo autofocusList={true} />
```

### Grouping

Set [`groupKey`](mcp:get_api_reference?platform=react&component=IgrCombo&member=groupKey) to a field of the data items to group the options of the React Combo under a header for each value of that field:

```tsx
<IgrCombo groupKey="region" />
```

**Note:** 
The [`groupKey`](mcp:get_api_reference?platform=react&component=IgrCombo&member=groupKey) property takes effect only when the data items are objects.

#### Sorting Direction

The [`groupSorting`](mcp:get_api_reference?platform=react&component=IgrCombo&member=groupSorting) property sets the order of the groups in the React Combo: `asc` (the default) sorts them in ascending order, `desc` in descending order, and `none` keeps them in the order their first items appear in the data. The items inside each group keep their order in the data.

```tsx
<IgrCombo groupSorting="desc" />
```

### Clear Button

The React Combo shows a clear button in its input while at least one option is selected, and clicking the button clears the selection. Set [`disableClear`](mcp:get_api_reference?platform=react&component=IgrCombo&member=disableClear) to hide the button:

```tsx
<IgrCombo disableClear={true} />
```

### Autofocus

Set [`autofocus`](mcp:get_api_reference?platform=react&component=IgrCombo&member=autofocus) to focus the React Combo when the page loads:

In React, use the `autoFocus` prop:

```tsx
<IgrCombo autoFocus={true} />
```

### Scroll Strategy

The [`scrollStrategy`](mcp:get_api_reference?platform=react&component=IgrCombo&member=scrollStrategy) property sets what the dropdown of the React Combo does when a container around the Combo scrolls while the dropdown is open: `hide` (the default) hides the dropdown while the input is out of view, `scroll` keeps the dropdown open and attached to the input, and `close` closes it.

```tsx
<IgrCombo scrollStrategy="close" />
```

## API References

See the complete React Combo API reference:

- [`IgrCombo`](mcp:get_api_reference?platform=react&component=IgrCombo)

## Additional Resources

Use the following React resources to learn more about the Combo:

- [Combo Overview](./overview.md)
- [Combo Templates](./templates.md)
- [Single Selection Combo](./single-selection.md)
- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
