---
title: "React Combo Templates"
description: "The Ignite UI for React Combo Templates replace the default content of the Combo areas: the items, the group headers, the header and the footer of the list, the empty list, the toggle and the clear icons, and the input field."
keywords: "React Combo Templates, Ignite UI for React, combo item template, combo group header template, combo header template, combo footer template, combo empty template, combo toggle icon, combo clear icon, templated combo input"
license: MIT
last_updated: "2026-11-09"
mentionedTypes: ["Combo", "ComboItem", "ComboHeader", "ComboList"]
llms:
  description: "The Ignite UI for React Combo Templates replace the default content of the Combo areas: the items, the group headers, the header and the footer of the list, the empty list, the toggle and the clear icons, and the input field."
_tocName: Templates
---
# Combo Templates

The Ignite UI for React Combo Templates replace the default content of the Combo areas: the items, the group headers, the header and the footer of the list, the empty list, the toggle and the clear icons, and the input field.

The React Combo renders its items and group headers through the [`itemTemplate`](mcp:get_api_reference?platform=react&component=IgrCombo&member=itemTemplate) and [`groupHeaderTemplate`](mcp:get_api_reference?platform=react&component=IgrCombo&member=groupHeaderTemplate) properties, and takes the content of the other areas through its slots. Use a `<span>` for simple text or symbols, and an [Icon](../../layouts/icon.md) for icons. The `header` and `footer` slots also accept the `<header>` and `<footer>` elements.

## Live Demo

The sample shows a Destinations combo with cities grouped by region. Each switch applies one template to the combo, and the Selection list below the combo shows the selected cities.

```typescript
export interface City {
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

.combo-padding {
  padding: 12px 16px;
}
```
```tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  IgrCombo,
  ComboTemplateProps,
  IgrIcon,
  registerIconFromText
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { Cities, City } from "./data";
import "./index.css";

export default function ComboTemplates() {

  const downIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z"/></svg>';
  const clearIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M120-280v-80h560v80H120Zm80-160v-80h560v80H200Zm80-160v-80h560v80H280Z"/></svg>';

  useEffect(() => {
    registerIconFromText("down", downIcon, "material");
    registerIconFromText("clear", clearIcon, "material");
  }, []);

  const renderGroupHeaderTemplate = (args: ComboTemplateProps<City>) => {
    return <span>Country of {args.item.country}</span>;
  };

  const renderItemTemplate = (args: ComboTemplateProps<City>) => {
    const item = args.item;
    return (
      <span>
        <b>{item.name}</b> [{item.id}] - {item.country}
      </span>
    );
  };

  return (
    <div className="sample">
      <IgrCombo
        valueKey="id"
        displayKey="name"
        groupKey="country"
        data={Cities}
        itemTemplate={renderItemTemplate}
        groupHeaderTemplate={renderGroupHeaderTemplate}
      >
        <header slot="header" className="combo-padding">
          <strong>Select a City</strong>
          <div>List of countries and their most popular cities</div>
        </header>
        <footer slot="footer" className="combo-padding">
          <em>
            Tip: Start typing to find your city if you have troubles finding it.
          </em>
        </footer>
        <span slot="toggle-icon">
          <IgrIcon name="down" collection="material"></IgrIcon>
        </span>
        <span slot="clear-icon">
          <IgrIcon name="clear" collection="material"></IgrIcon>
        </span>
      </IgrCombo>
    </div>
  );
}

// rendering above function to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComboTemplates />);
```

## Types

The React Combo has a template for each area that it renders. The following sections show the property or the slot that takes each template.

The snippets bind the Combo to destinations that have an `id`, a `name`, a `country`, a `countryCode`, a `region`, and a UTC `offset`, with `id` as the `valueKey`, `name` as the `displayKey`, and `region` as the `groupKey`.

### Item Template

The item template renders the content of each option in the list. By default, an option shows its `displayKey` value, and the checkbox of the option stays in front of the template content.

The item and the group header templates render inside the shadow DOM of the Combo, where the styles of the page don't reach. Style their containers through the `item` and `group-header` CSS parts, and lay out their content with inline styles. The Combo lays out each root element of a template as a block, so wrap the content of a template in a single element.

Pass a function that receives the item and returns its content to the [`itemTemplate`](mcp:get_api_reference?platform=react&component=IgrCombo&member=itemTemplate) property:

```tsx
import { IgrCombo, ComboTemplateProps } from 'igniteui-react';

const renderItem = ({ item }: ComboTemplateProps<Destination>) => (
    <span>
        <img src={`https://dl.infragistics.com/x/img/flags/${item.countryCode}.png`} alt="" style={{ width: '1.25rem' }} />
        {item.name} — {item.country} · {item.id} · {item.offset}
    </span>
);

<IgrCombo data={destinations} valueKey="id" displayKey="name" groupKey="region" itemTemplate={renderItem} />
```

### Header Item Template

The header item template renders the header of each group when the Combo has a `groupKey`. By default, a group header shows the group value. The template receives a header record, not a data item: its `groupKey` field holds the group value, so a count of the options in the group comes from the data of the Combo, as the `citiesIn` method of the snippets does.

Pass the function to the [`groupHeaderTemplate`](mcp:get_api_reference?platform=react&component=IgrCombo&member=groupHeaderTemplate) property:

```tsx
const renderGroupHeader = ({ item }: ComboTemplateProps<Destination>) => (
    <span style={{ display: 'flex', gap: '0.5rem', width: '100%' }}>
        <strong>{item.region}</strong>
        <span style={{ marginInlineStart: 'auto' }}>{citiesIn(item.region)} cities</span>
    </span>
);

<IgrCombo data={destinations} valueKey="id" displayKey="name" groupKey="region" groupHeaderTemplate={renderGroupHeader} />
```

### Header Template

The header template renders content between the search input and the list of options, such as a title of the list or an action that applies to it. The Combo renders no header by default.

Pass the content to the `header` slot. The snippet adds a button that selects all options, through the [`select`](mcp:get_api_reference?platform=react&component=IgrCombo&member=select) method called without an argument:

```tsx
const comboRef = useRef<IgrCombo>(null);

<IgrCombo ref={comboRef} data={destinations} valueKey="id" displayKey="name" groupKey="region">
    <header slot="header" className="list-header">
        <span>Destinations by region</span>
        <IgrButton variant="flat" onClick={() => comboRef.current?.select()}>Select all</IgrButton>
    </header>
</IgrCombo>
```

### Footer Template

The footer template renders content below the list of options, such as a summary of the selection or an action that applies to it. The Combo renders no footer by default.

Pass the content to the `footer` slot. The snippet keeps the selected values in the state, and clears the selection through the [`deselect`](mcp:get_api_reference?platform=react&component=IgrCombo&member=deselect) method called without an argument:

```tsx
const [selected, setSelected] = useState<string[]>([]);

<IgrCombo ref={comboRef} data={destinations} valueKey="id" displayKey="name" groupKey="region"
    onChange={(e) => setSelected(e.detail.newValue as string[])}>
    <footer slot="footer" className="list-footer">
        <span>{selected.length} selected</span>
        <IgrButton variant="flat" onClick={() => comboRef.current?.deselect()}>Clear</IgrButton>
    </footer>
</IgrCombo>
```

### Empty Template

The empty template renders in place of the list when the search text matches no option, or when the Combo has no data. By default, the Combo shows a message that the list is empty.

Pass the content to the `empty` slot:

```tsx
<IgrCombo data={destinations} valueKey="id" displayKey="name" groupKey="region">
    <span slot="empty" className="empty-list">No city matches your search. Try another spelling.</span>
</IgrCombo>
```

### Toggle Icon Template

The toggle icon template replaces the icon of the toggle button in the input field, which opens and closes the dropdown.

Pass the icon to the `toggle-icon` slot. The slot content shows both when the dropdown is closed and when it is open. Register the icon first, as the [Icon](../../layouts/icon.md) topic shows:

```tsx
import { IgrCombo, IgrIcon, registerIconFromText } from 'igniteui-react';

registerIconFromText('flight', flightIcon, 'material');

<IgrCombo data={destinations} valueKey="id" displayKey="name">
    <IgrIcon slot="toggle-icon" name="flight" collection="material" />
</IgrCombo>
```

### Clear Icon Template

The clear icon template replaces the icon of the clear button in the input field. The Combo shows the clear button only when it has a selection, and hides it when `disableClear` is set.

Pass the icon to the `clear-icon` slot:

```tsx
<IgrCombo data={destinations} valueKey="id" displayKey="name">
    <IgrIcon slot="clear-icon" name="close" collection="material" />
</IgrCombo>
```

### Templated Input

The input field of the Combo takes a label, content before and after its text, and a helper text below it, the way the [Input](../input.md) does.

Set the `label` property, pass the content before and after the text to the `prefix` and `suffix` slots, and the helper text to the `helper-text` slot. The `suffix` slot renders after the clear icon and before the toggle icon:

```tsx
<IgrCombo data={destinations} valueKey="id" displayKey="name" label="Destinations" placeholder="Pick one or more cities">
    <IgrIcon slot="prefix" name="place" collection="material" />
    <IgrBadge slot="suffix">{selected.length}</IgrBadge>
    <span slot="helper-text">{selected.length} of {destinations.length} destinations selected</span>
</IgrCombo>
```

## API References

The React Combo API reference lists the complete API surface for the target platform.

- [`IgrCombo`](mcp:get_api_reference?platform=react&component=IgrCombo)

## Additional Resources

The following resources provide more React Combo guidance and project support:

- [Combo](./overview.md)
- [Combo Features](./features.md)
- [Single Selection Combo](./single-selection.md)

- [Combo - Design System Component](https://www.infragistics.com/products/indigo-design/help/components/combo)
- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
