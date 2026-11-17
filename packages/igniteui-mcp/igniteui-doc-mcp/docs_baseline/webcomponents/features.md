---
title: "Web Components Combo Features"
description: "The Web Components Combo binds to local data, filters its options as the user types, groups them by a data field, and can be disabled."
keywords: "Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components Combo Features, Web Components Combo Data Binding, Web Components Combo Filtering, Web Components Combo Grouping"
license: MIT
last_updated: "2026-11-16"
platformType: web-only
mentionedTypes: ["Combo"]
llms:
  description: "The Web Components Combo binds to local data, filters its options as the user types, groups them by a data field, and can be disabled."
_tocName: Features
---
# Combo Component Features

The Web Components Combo binds to local data, filters its options as the user types, groups them by a data field, and can be disabled.

The Combo can also load its options from a remote service one page at a time.

## Live Demo

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

## Features

### Data Binding

The following snippets bind the Web Components Combo to a local list of US states through its [`data`](mcp:get_api_reference?platform=webcomponents&component=IgcComboComponent&member=data) property, storing the code of each state and showing its name. The keys that the Combo reads from each item are described in [Data Binding](./overview.md#data-binding) in the Combo Overview topic.

```html
<igc-combo id="combo" value-key="id" display-key="name"></igc-combo>
```

```ts
import { IgcComboComponent } from 'igniteui-webcomponents';
import { UsState, usStates } from './ComboData';

// Items such as { id: 'CT', name: 'Connecticut', region: 'New England' }
const combo = document.getElementById('combo') as IgcComboComponent<UsState>;
combo.data = usStates;
```

### Remote Binding

The Web Components Combo can load its options from a remote service one page at a time. The service searches and pages on the server, and the Combo shows a placeholder for each item that isn't loaded yet. The sample below loads products from a remote service while the user scrolls and searches:



**Note:** 
Remote binding requires `igniteui-webcomponents` 7.5.0 or later.

#### Binding the Combo to a Remote Service

Import `bindComboDataSource()` from `igniteui-webcomponents/extras/combo-data-source`, and pass it the Combo and a source with a `load()` function. The binding calls `load()` for each page with a request that holds `searchText`, `caseSensitive`, `startIndex` and `count`, and with an `AbortSignal`. Return the items of the page and the total count of the matching items:

```html
<igc-combo id="combo" label="Products" value-key="ProductID" display-key="ProductName"></igc-combo>
```

```ts
import { defineComponents, IgcComboComponent } from 'igniteui-webcomponents';
import { bindComboDataSource } from 'igniteui-webcomponents/extras/combo-data-source';

defineComponents(IgcComboComponent);

interface Product {
    ProductID: number;
    ProductName: string;
}

const url = 'https://services.odata.org/V4/Northwind/Northwind.svc/Products';
const combo = document.getElementById('combo') as IgcComboComponent<Product>;

const binding = bindComboDataSource(combo, {
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
        return { items: data.value, totalCount: data['@odata.count'] };
    }
}, {
    // The service returns up to 20 products per request.
    pageSize: 20
});
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

`bindComboDataSource()` uses only the public API of the Combo. To make the requests yourself, set the `mode` of [`filteringOptions`](mcp:get_api_reference?platform=webcomponents&component=IgcComboComponent&member=filteringOptions) to `remote`:

```ts
combo.filteringOptions = { mode: 'remote' };
```

In remote mode, the Combo leaves the search to your service:

- The Combo no longer filters its options. Read `detail.searchText` of the `igcSearchInput` event, search on the server, and set [`data`](mcp:get_api_reference?platform=webcomponents&component=IgcComboComponent&member=data) to the first page of the results. The server does the matching, so send `filteringOptions.caseSensitive` with the search.
- When the user scrolls near the end of `data`, the `igcDataRequest` event asks for `detail.count` more items at `detail.startIndex`. Append them to `data`.
- Set `totalItemCount` to the total count of the results, and `loading` while a request runs.

#### Handling Selection

Set [`valueKey`](mcp:get_api_reference?platform=webcomponents&component=IgcComboComponent&member=valueKey) when the Combo loads remote data. Each page creates new objects, and the Combo matches the selected items with them by the value of that key. A new `data` keeps the selection: the selected items stay selected when a search returns results that don't hold them, and show as selected again when a later page or search holds them.

To select values whose items no page has loaded yet, such as the values of a saved filter, add a `resolve()` function to the source of `bindComboDataSource()`. The binding calls it with those values, and selects the items it returns.

The Combo can't tell whether the server deleted a selected item or only hasn't sent its page. When you load live data again, call [`deselect()`](mcp:get_api_reference?platform=webcomponents&component=IgcComboComponent&member=deselect) for the selected items that the server no longer has.

### Filtering

The Web Components Combo filters its list of options as the user types in the search input of the dropdown. Filtering is on by default. Set [`disableFiltering`](mcp:get_api_reference?platform=webcomponents&component=IgcComboComponent&member=disableFiltering) to turn it off, which also hides the search input.

To let users switch the search between case-sensitive and case-insensitive, set [`caseSensitiveIcon`](mcp:get_api_reference?platform=webcomponents&component=IgcComboComponent&member=caseSensitiveIcon). The Combo then shows a case-sensitive icon in its search input. The icon has no effect while filtering is disabled, because the search input is hidden.

```html
<!-- Shows the case-sensitive icon in the search input -->
<igc-combo case-sensitive-icon></igc-combo>

<!-- Turns filtering off, which also hides the search input -->
<igc-combo disable-filtering></igc-combo>
```

#### Filtering Options

The [`filteringOptions`](mcp:get_api_reference?platform=webcomponents&component=IgcComboComponent&member=filteringOptions) property configures how the Web Components Combo matches the search text:

- `filterKey` - the data field to search in. Defaults to the field set by `displayKey`.
- `caseSensitive` - whether the search is case-sensitive. Defaults to `false`. The case-sensitive icon toggles this value.
- `matchDiacritics` - whether accented letters match only themselves, so that `é` doesn't match `e`. Defaults to `false`.

The following snippet searches the region of each state instead of its name, and makes the search case-sensitive:

```ts
combo.filteringOptions = {
    filterKey: 'region',
    caseSensitive: true
};
```

### Search Input Focus

When the dropdown of the Web Components Combo opens, its search input receives focus.

Set [`autofocusList`](mcp:get_api_reference?platform=webcomponents&component=IgcComboComponent&member=autofocusList) to focus the list of options instead. On mobile devices, this keeps the software keyboard from opening with the dropdown.

```html
<igc-combo autofocus-list></igc-combo>
```

### Grouping

Set [`groupKey`](mcp:get_api_reference?platform=webcomponents&component=IgcComboComponent&member=groupKey) to a field of the data items to group the options of the Web Components Combo under a header for each value of that field:

```html
<igc-combo group-key="region"></igc-combo>
```

**Note:** 
The [`groupKey`](mcp:get_api_reference?platform=webcomponents&component=IgcComboComponent&member=groupKey) property takes effect only when the data items are objects.

#### Sorting Direction

The [`groupSorting`](mcp:get_api_reference?platform=webcomponents&component=IgcComboComponent&member=groupSorting) property sets the order of the groups in the Web Components Combo: `asc` (the default) sorts them in ascending order, `desc` in descending order, and `none` keeps them in the order their first items appear in the data. The items inside each group keep their order in the data.

```html
<igc-combo group-sorting="desc"></igc-combo>
```

### Clear Button

The Web Components Combo shows a clear button in its input while at least one option is selected, and clicking the button clears the selection. Set [`disableClear`](mcp:get_api_reference?platform=webcomponents&component=IgcComboComponent&member=disableClear) to hide the button:

```html
<igc-combo disable-clear></igc-combo>
```

### Autofocus

Set [`autofocus`](mcp:get_api_reference?platform=webcomponents&component=IgcComboComponent&member=autofocus) to focus the Web Components Combo when the page loads:

```html
<igc-combo autofocus></igc-combo>
```

### Scroll Strategy

The [`scrollStrategy`](mcp:get_api_reference?platform=webcomponents&component=IgcComboComponent&member=scrollStrategy) property sets what the dropdown of the Web Components Combo does when a container around the Combo scrolls while the dropdown is open: `hide` (the default) hides the dropdown while the input is out of view, `scroll` keeps the dropdown open and attached to the input, and `close` closes it.

```html
<igc-combo scroll-strategy="close"></igc-combo>
```

## API References

See the complete Web Components Combo API reference:

- [`IgcCombo`](mcp:get_api_reference?platform=webcomponents&component=IgcComboComponent)

## Additional Resources

Use the following Web Components resources to learn more about the Combo:

- [Combo Overview](./overview.md)
- [Combo Templates](./templates.md)
- [Single Selection Combo](./single-selection.md)
- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
